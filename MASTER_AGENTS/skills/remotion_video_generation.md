# SKILL: REMOTION VIDEO GENERATION

## 1. VISION & PHILOSOPHIE

Remotion transforme React en moteur de génération vidéo. Créez des vidéos programmatiques à partir de vos galeries photos, avec des transitions fluides et un contrôle total sur le timing.

**Use cases pour FeelProd :**
- Transformer une galerie photo en diaporama vidéo exportable
- Créer des teasers automatiques de projets
- Générer des vidéos sociales (Instagram, TikTok) à partir de vos assets
- Animations complexes impossibles en CSS/Framer Motion

---

## 2. INSTALLATION & CONFIGURATION

### 2.1. INSTALLATION

```bash
# Commande à exécuter manuellement (problème cache npm résolu)
sudo rm -rf ~/.npm/_cacache
npm install --legacy-peer-deps remotion @remotion/cli @remotion/player
```

### 2.2. AJOUTER LES SCRIPTS NPM

Modifiez `package.json` :

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "remotion:studio": "remotion studio",
    "remotion:render": "remotion render",
    "remotion:preview": "remotion preview"
  }
}
```

### 2.3. STRUCTURE DU PROJET

```
/remotion
  /compositions
    PhotoSlideshow.tsx
    GalleryTransition.tsx
  /assets
    (lien symbolique vers /public)
  Root.tsx
  remotion.config.ts
```

---

## 3. CONFIGURATION REMOTION POUR NEXT.JS

### 3.1. `remotion.config.ts`

```typescript
import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency(2); // Ajuster selon votre CPU

export default {
  // Point d'entrée Remotion
  entry: './remotion/Root.tsx',
  
  // Format de sortie
  codec: 'h264',
  
  // Qualité (1-100)
  quality: 90,
  
  // FPS
  fps: 30,
  
  // Dimensions par défaut (Instagram Square)
  width: 1080,
  height: 1080,
};
```

### 3.2. `remotion/Root.tsx`

```tsx
import { Composition } from 'remotion';
import { PhotoSlideshow } from './compositions/PhotoSlideshow';
import { GalleryTransition } from './compositions/GalleryTransition';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="PhotoSlideshow"
        component={PhotoSlideshow}
        durationInFrames={300} // 10 secondes à 30fps
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          photos: [],
        }}
      />
      
      <Composition
        id="GalleryTransition"
        component={GalleryTransition}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          images: [],
          transitionDuration: 20,
        }}
      />
    </>
  );
};
```

---

## 4. PATTERNS DE COMPOSITION

### 4.1. DIAPORAMA PHOTO SIMPLE

```tsx
// remotion/compositions/PhotoSlideshow.tsx
import { useCurrentFrame, useVideoConfig, Img, spring } from 'remotion';

interface Photo {
  url: string;
  alt: string;
}

interface Props {
  photos: Photo[];
}

export const PhotoSlideshow: React.FC<Props> = ({ photos }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const durationPerPhoto = 60; // 2 secondes par photo
  const currentPhotoIndex = Math.floor(frame / durationPerPhoto);
  const currentPhoto = photos[currentPhotoIndex % photos.length];
  
  // Animation de fade
  const fadeProgress = (frame % durationPerPhoto) / durationPerPhoto;
  const opacity = fadeProgress < 0.1 
    ? fadeProgress * 10 
    : fadeProgress > 0.9 
    ? (1 - fadeProgress) * 10 
    : 1;
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Img
        src={currentPhoto.url}
        alt={currentPhoto.alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity
        }}
      />
    </div>
  );
};
```

### 4.2. TRANSITION KEN BURNS (ZOOM + PAN)

```tsx
import { useCurrentFrame, interpolate, Img } from 'remotion';

export const KenBurnsPhoto: React.FC<{ photo: Photo }> = ({ photo }) => {
  const frame = useCurrentFrame();
  
  const scale = interpolate(
    frame,
    [0, 120], // 4 secondes
    [1, 1.2],  // Zoom de 100% à 120%
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  
  const translateX = interpolate(
    frame,
    [0, 120],
    [0, -10], // Déplacement horizontal
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <Img
        src={photo.url}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale}) translateX(${translateX}%)`,
        }}
      />
    </div>
  );
};
```

### 4.3. GALERIE AVEC TEXTE OVERLAY

```tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';

interface PhotoWithCaption {
  url: string;
  caption: string;
  location: string;
}

export const CaptionedSlideshow: React.FC<{ photos: PhotoWithCaption[] }> = ({ photos }) => {
  const frame = useCurrentFrame();
  const durationPerPhoto = 90; // 3 secondes
  const currentIndex = Math.floor(frame / durationPerPhoto);
  const photo = photos[currentIndex % photos.length];
  
  const localFrame = frame % durationPerPhoto;
  
  // Animation du texte (arrive de bas en haut)
  const textY = interpolate(
    localFrame,
    [0, 20, 70, 90],
    [100, 0, 0, -100],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  const textOpacity = interpolate(
    localFrame,
    [0, 20, 70, 90],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  return (
    <AbsoluteFill>
      <Img src={photo.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      
      <AbsoluteFill style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 60,
      }}>
        <div style={{
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
        }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: 48, 
            fontWeight: 'bold',
            margin: 0,
            marginBottom: 10
          }}>
            {photo.caption}
          </h2>
          <p style={{ 
            color: '#ddd', 
            fontSize: 24,
            margin: 0
          }}>
            {photo.location}
          </p>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
```

---

## 5. ANIMATIONS AVANCÉES

### 5.1. TRANSITION WIPE (BALAYAGE)

```tsx
import { useCurrentFrame, interpolate } from 'remotion';

export const WipeTransition: React.FC<{ 
  photoA: string; 
  photoB: string;
  transitionStart: number;
  transitionDuration: number;
}> = ({ photoA, photoB, transitionStart, transitionDuration }) => {
  const frame = useCurrentFrame();
  
  const wipeProgress = interpolate(
    frame,
    [transitionStart, transitionStart + transitionDuration],
    [0, 100],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Img src={photoA} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        clipPath: `inset(0 ${100 - wipeProgress}% 0 0)`,
      }}>
        <Img src={photoB} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};
```

### 5.2. EFFET POLAROID STACK

```tsx
import { useCurrentFrame, interpolate, spring, useVideoConfig } from 'remotion';

export const PolaroidStack: React.FC<{ photos: Photo[] }> = ({ photos }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0'
    }}>
      {photos.map((photo, index) => {
        const delay = index * 10;
        const rotation = (index - 1) * 5 - 5; // -5°, 0°, 5°
        
        const scale = spring({
          frame: frame - delay,
          fps,
          config: { damping: 12 }
        });
        
        const opacity = interpolate(
          frame - delay,
          [0, 15],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );
        
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 400,
              padding: 20,
              paddingBottom: 60,
              backgroundColor: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transform: `rotate(${rotation}deg) scale(${scale})`,
              opacity,
            }}
          >
            <Img 
              src={photo.url} 
              style={{ 
                width: '100%', 
                height: 400, 
                objectFit: 'cover' 
              }} 
            />
          </div>
        );
      })}
    </div>
  );
};
```

---

## 6. INTÉGRATION AVEC NEXT.JS

### 6.1. PLAYER REMOTION DANS UNE PAGE

```tsx
// src/app/preview-video/page.tsx
'use client';
import { Player } from '@remotion/player';
import { PhotoSlideshow } from '@/remotion/compositions/PhotoSlideshow';

export default function PreviewPage() {
  const photos = [
    { url: '/photos/photo1.jpg', alt: 'Photo 1' },
    { url: '/photos/photo2.jpg', alt: 'Photo 2' },
    { url: '/photos/photo3.jpg', alt: 'Photo 3' },
  ];
  
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">Prévisualisation Vidéo</h1>
      
      <Player
        component={PhotoSlideshow}
        inputProps={{ photos }}
        durationInFrames={300}
        fps={30}
        compositionWidth={1080}
        compositionHeight={1080}
        style={{ width: '100%', maxWidth: 600 }}
        controls
      />
    </div>
  );
}
```

### 6.2. GÉNÉRATION VIDÉO VIA API ROUTE

```typescript
// src/app/api/render-video/route.ts
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';

export async function POST(request: Request) {
  const { photos } = await request.json();
  
  // Bundle le projet Remotion
  const bundled = await bundle(path.resolve('./remotion/Root.tsx'));
  
  // Sélectionne la composition
  const composition = await selectComposition({
    serveUrl: bundled,
    id: 'PhotoSlideshow',
    inputProps: { photos },
  });
  
  // Rend la vidéo
  const outputPath = path.join(process.cwd(), 'public', 'generated', `video-${Date.now()}.mp4`);
  
  await renderMedia({
    composition,
    serveUrl: bundled,
    codec: 'h264',
    outputLocation: outputPath,
    inputProps: { photos },
  });
  
  return Response.json({ 
    success: true, 
    videoUrl: `/generated/${path.basename(outputPath)}`
  });
}
```

---

## 7. COMMANDES UTILES

```bash
# Lancer le studio Remotion (interface visuelle)
npm run remotion:studio

# Rendre une composition en vidéo
npx remotion render PhotoSlideshow output.mp4

# Rendre avec props custom
npx remotion render PhotoSlideshow output.mp4 --props='{"photos": [...]}'

# Rendre en GIF
npx remotion render PhotoSlideshow output.gif --codec=gif

# Rendre une seule frame (thumbnail)
npx remotion still PhotoSlideshow thumbnail.png --frame=60
```

---

## 8. OPTIMISATIONS PERFORMANCE

### 8.1. PRÉCHARGEMENT DES IMAGES

```tsx
import { prefetch } from 'remotion';
import { useEffect } from 'react';

export const OptimizedSlideshow = ({ photos }) => {
  useEffect(() => {
    // Précharge toutes les images
    photos.forEach(photo => {
      prefetch(photo.url);
    });
  }, [photos]);
  
  // ... reste du composant
};
```

### 8.2. CONCURRENCY (RENDU PARALLÈLE)

```typescript
// remotion.config.ts
Config.setConcurrency(4); // Plus rapide mais plus gourmand en CPU
```

### 8.3. QUALITÉ ADAPTATIVE

```typescript
// Pour les previews (rapide, basse qualité)
Config.setQuality(50);

// Pour le rendu final (lent, haute qualité)
Config.setQuality(90);
```

---

## 9. CHECKLIST AVANT RENDU

- [ ] Durée totale cohérente (nombre de photos × durée par photo)
- [ ] Résolution adaptée à la plateforme cible
- [ ] FPS adapté (30 fps = standard, 60 fps = haute qualité)
- [ ] Codec compatible (h264 = universel, h265 = meilleure compression)
- [ ] Images en haute résolution disponibles
- [ ] Transitions fluides (pas de sauts)
- [ ] Audio ajouté si nécessaire
- [ ] Taille de fichier optimisée

---

## 10. RESSOURCES

- Documentation officielle : https://www.remotion.dev/docs
- Exemples : https://www.remotion.dev/showcase
- Templates : https://github.com/remotion-dev/template-gallery

---

**Duncan peut maintenant créer des vidéos programmatiques à partir de galeries photos avec Remotion ! 🎬✨**
