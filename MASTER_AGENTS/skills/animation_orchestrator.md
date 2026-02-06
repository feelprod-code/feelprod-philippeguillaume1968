# SKILL: ANIMATION ORCHESTRATOR (FRAMER MOTION × REMOTION)

## 1. VISION & PHILOSOPHIE

L'Orchestrateur est le **cerveau décisionnel** de Duncan pour les animations. Il détermine automatiquement quelle technologie utiliser (Framer Motion vs Remotion) en fonction du contexte, tout en respectant rigoureusement le système responsive FeelProd.

**Principe clé :** Une animation doit toujours servir l'émotion et la performance, jamais l'ego technique.

---

## 2. ARBRE DE DÉCISION : FRAMER MOTION VS REMOTION

```
┌─────────────────────────────────────┐
│ L'utilisateur demande une animation │
└──────────────┬──────────────────────┘
               │
               ▼
      ┌────────────────────┐
      │ Animation en temps │ 
      │ réel dans le site? │
      └────┬──────────┬────┘
           │          │
         OUI        NON
           │          │
           ▼          ▼
   ┌──────────┐  ┌─────────────┐
   │  FRAMER  │  │  Export en  │
   │  MOTION  │  │   fichier?  │
   └──────────┘  └──────┬──────┘
                        │
                      OUI
                        │
                        ▼
                  ┌──────────┐
                  │ REMOTION │
                  └──────────┘
```

### 2.1. QUAND UTILISER FRAMER MOTION

✅ **Utilisez Framer Motion si :**
- L'animation est interactive (hover, click, scroll)
- L'animation s'affiche directement sur le site
- La performance en temps réel est critique
- L'animation doit s'adapter dynamiquement aux données
- Le rendu doit être réactif (responsive)

**Exemples :**
- Galerie photo avec hover effects
- Reveal au scroll
- Navigation animée
- Transitions de page
- Lightbox
- Parallax

### 2.2. QUAND UTILISER REMOTION

✅ **Utilisez Remotion si :**
- Vous devez exporter une vidéo/GIF
- L'animation est complexe et calculée à l'avance
- Le timing est fixe (diaporama)
- Vous avez besoin d'un fichier vidéo pour les réseaux sociaux
- L'animation est trop lourde pour tourner en temps réel

**Exemples :**
- Diaporama exportable
- Teaser vidéo de projet
- Animation de présentation client
- Story Instagram générée automatiquement
- Vidéo de galerie pour YouTube

---

## 3. PATTERNS D'ORCHESTRATION

### 3.1. GALERIE HYBRIDE (FRAMER + PREVIEW REMOTION)

```tsx
'use client';
import { motion } from 'framer-motion';
import { Player } from '@remotion/player';
import { PhotoSlideshow } from '@/remotion/compositions/PhotoSlideshow';
import { useState } from 'react';

export default function HybridGallery({ photos }) {
  const [showVideoPreview, setShowVideoPreview] = useState(false);

  return (
    <div className="relative">
      {/* Galerie interactive avec Framer Motion */}
      <motion.div 
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            className="aspect-square rounded-lg overflow-hidden"
          >
            <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Bouton pour générer une prévisualisation vidéo */}
      <button
        onClick={() => setShowVideoPreview(!showVideoPreview)}
        className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg"
      >
        {showVideoPreview ? 'Masquer' : 'Prévisualiser en vidéo'}
      </button>

      {/* Player Remotion (conditionnel) */}
      {showVideoPreview && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
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
        </motion.div>
      )}
    </div>
  );
}
```

### 3.2. ORCHESTRATEUR DE TRANSITIONS

```tsx
// lib/animationOrchestrator.ts
import { Variants } from 'framer-motion';

type AnimationType = 'gallery' | 'reveal' | 'parallax' | 'lightbox' | 'video';

export class AnimationOrchestrator {
  
  /**
   * Détermine automatiquement le type d'animation approprié
   */
  static recommendAnimation(context: {
    isInteractive: boolean;
    needsExport: boolean;
    itemCount: number;
    complexity: 'low' | 'medium' | 'high';
  }): AnimationType {
    
    if (context.needsExport) {
      return 'video'; // Remotion
    }
    
    if (context.isInteractive && context.itemCount < 20) {
      return 'gallery'; // Framer Motion Grid
    }
    
    if (context.complexity === 'high') {
      return 'parallax'; // Framer Motion avancé
    }
    
    return 'reveal'; // Framer Motion simple
  }
  
  /**
   * Retourne les variantes Framer Motion adaptées
   */
  static getFramerVariants(type: AnimationType): Variants {
    const variants: Record<string, Variants> = {
      gallery: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      },
      reveal: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      },
      parallax: {
        // Géré via useScroll
      },
      lightbox: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      }
    };
    
    return variants[type] || variants.reveal;
  }
  
  /**
   * Retourne la configuration Remotion adaptée
   */
  static getRemotionConfig(type: 'slideshow' | 'transition' | 'social') {
    const configs = {
      slideshow: {
        fps: 30,
        durationInFrames: 300,
        width: 1920,
        height: 1080
      },
      transition: {
        fps: 60,
        durationInFrames: 90,
        width: 1920,
        height: 1080
      },
      social: {
        fps: 30,
        durationInFrames: 450, // 15 secondes (format IG/TikTok)
        width: 1080,
        height: 1920
      }
    };
    
    return configs[type];
  }
}
```

**Utilisation :**

```tsx
import { AnimationOrchestrator } from '@/lib/animationOrchestrator';

// Duncan analyse le contexte
const recommendation = AnimationOrchestrator.recommendAnimation({
  isInteractive: true,
  needsExport: false,
  itemCount: 12,
  complexity: 'medium'
});

// Résultat : 'gallery' → Utiliser Framer Motion

const variants = AnimationOrchestrator.getFramerVariants(recommendation);
```

---

## 4. RESPECT DU SYSTÈME RESPONSIVE FEELPROD

### 4.1. WRAPPER UNIVERSEL POUR ANIMATIONS

Toutes les animations doivent être encapsulées dans ce système de conteneurs :

```tsx
// components/AnimatedSection.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  sectionId: string; // Ex: 'gallery', 'podcasts', 'musiques'
  hasExplanation?: boolean;
}

export default function AnimatedSection({ 
  children, 
  sectionId,
  hasExplanation = false 
}: AnimatedSectionProps) {
  return (
    <section 
      className={`section-${sectionId}-container`}
      style={{ 
        marginTop: 0,      // NO OVERLAP (Règle d'Or N°1)
        paddingBottom: 0    // COLLAGE PARFAIT
      }}
    >
      {/* Header avec titre */}
      <div className="section-header" style={{ marginBottom: 0 }}>
        {/* Titre généré dynamiquement */}
      </div>
      
      {/* Texte explicatif (si présent) */}
      {hasExplanation && (
        <div 
          className={`explanation-${sectionId}`}
          style={{ 
            marginBottom: 'var(--spacing-explanation)' // Variable CSS
          }}
        >
          {/* Texte */}
        </div>
      )}
      
      {/* Contenu animé (Framer Motion ou Remotion Player) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
      
      {/* PAS de padding-bottom ici */}
    </section>
  );
}
```

### 4.2. VARIABLES CSS CENTRALISÉES

Ajoutez dans `globals.css` :

```css
/* ========================================= 
   ANIMATION ORCHESTRATOR - VARIABLES
   ========================================= */

:root {
  /* Espacements (respectent le système FeelProd) */
  --spacing-explanation: 20px;
  --spacing-between-sections: 0px; /* NO OVERLAP */
  
  /* Durées d'animation */
  --duration-fast: 0.3s;
  --duration-normal: 0.6s;
  --duration-slow: 1s;
  
  /* Easing */
  --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Tablette */
@media (min-width: 769px) and (max-width: 1366px) {
  :root {
    --spacing-explanation: 5vh;
  }
}

/* Desktop */
@media (min-width: 1367px) {
  :root {
    --spacing-explanation: 4vh;
  }
}

/* Respecter prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0.01s;
    --duration-normal: 0.01s;
    --duration-slow: 0.01s;
  }
}
```

### 4.3. HOOK PERSONNALISÉ POUR RESPONSIVE

```tsx
// hooks/useResponsiveAnimation.ts
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Variants } from 'framer-motion';

export function useResponsiveAnimation() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1366px)');
  const isDesktop = useMediaQuery('(min-width: 1367px)');
  
  /**
   * Adapte l'animation selon le device
   */
  const getResponsiveVariants = (baseVariants: Variants): Variants => {
    if (isMobile) {
      // Mobile : animations plus discrètes
      return {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
      };
    }
    
    // Tablette/Desktop : animations complètes
    return baseVariants;
  };
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    getResponsiveVariants
  };
}
```

**Utilisation :**

```tsx
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

export default function MyGallery() {
  const { getResponsiveVariants } = useResponsiveAnimation();
  
  const variants = getResponsiveVariants({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  });
  
  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {/* Contenu */}
    </motion.div>
  );
}
```

---

## 5. CHECKLIST DE L'ORCHESTRATEUR

Avant de créer une animation, Duncan doit vérifier :

### ✅ Décision technologique
- [ ] L'animation est-elle interactive ? → **Framer Motion**
- [ ] L'animation doit-elle être exportée en vidéo ? → **Remotion**
- [ ] L'animation est complexe mais en temps réel ? → **Framer Motion avancé**

### ✅ Respect du système FeelProd
- [ ] Wrapper dans `AnimatedSection` ou respecter les standards d'espacement
- [ ] Pas de `margin-top` négatif (NO OVERLAP)
- [ ] Pas de `padding-bottom` sur les sections
- [ ] Variables CSS utilisées pour les espacements

### ✅ Performance
- [ ] `prefers-reduced-motion` respecté
- [ ] Animations GPU (transform, opacity) privilégiées
- [ ] Images en lazy loading
- [ ] `viewport={{ once: true }}` pour les animations au scroll

### ✅ Accessibilité
- [ ] Animations désactivables
- [ ] Contraste suffisant pour les textes animés
- [ ] Focus visible après les animations

---

## 6. EXEMPLE COMPLET : GALERIE ORCHESTRÉE

```tsx
// app/galerie-orchestree/page.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@remotion/player';
import AnimatedSection from '@/components/AnimatedSection';
import { AnimationOrchestrator } from '@/lib/animationOrchestrator';
import { useResponsiveAnimation } from '@/hooks/useResponsiveAnimation';

export default function GalerieOrchestree() {
  const [mode, setMode] = useState<'interactive' | 'video'>('interactive');
  const { getResponsiveVariants } = useResponsiveAnimation();
  
  const photos = [
    { id: 1, url: '/photos/1.jpg', alt: 'Photo 1' },
    { id: 2, url: '/photos/2.jpg', alt: 'Photo 2' },
    { id: 3, url: '/photos/3.jpg', alt: 'Photo 3' },
  ];
  
  // Duncan décide automatiquement
  const recommendation = AnimationOrchestrator.recommendAnimation({
    isInteractive: mode === 'interactive',
    needsExport: mode === 'video',
    itemCount: photos.length,
    complexity: 'medium'
  });
  
  const variants = getResponsiveVariants(
    AnimationOrchestrator.getFramerVariants('gallery')
  );
  
  return (
    <AnimatedSection sectionId="galerie" hasExplanation>
      <div className="mb-8 flex gap-4">
        <button 
          onClick={() => setMode('interactive')}
          className={`px-4 py-2 rounded ${mode === 'interactive' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
        >
          Mode Interactif
        </button>
        <button 
          onClick={() => setMode('video')}
          className={`px-4 py-2 rounded ${mode === 'video' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
        >
          Mode Vidéo
        </button>
      </div>
      
      {mode === 'interactive' ? (
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {/* Player Remotion ici */}
          <p className="text-center text-gray-600">
            💡 Install Remotion pour activer le mode vidéo : 
            <code className="bg-gray-100 px-2 py-1 rounded ml-2">
              sudo rm -rf ~/.npm/_cacache && npm install --legacy-peer-deps remotion @remotion/cli @remotion/player
            </code>
          </p>
        </div>
      )}
    </AnimatedSection>
  );
}
```

---

## 7. RÉSUMÉ : RÈGLES D'OR DE L'ORCHESTRATEUR

1. **Décision automatique** : Framer Motion pour interactif, Remotion pour export
2. **Respect du système FeelProd** : NO OVERLAP, variables CSS, espacements standards
3. **Performance prioritaire** : GPU, lazy loading, prefers-reduced-motion
4. **Responsive natif** : Adaptations mobile/tablette/desktop systématiques
5. **Accessibilité** : Animations désactivables, focus visible

---

**Duncan est maintenant un chef d'orchestre des animations, capable de décider intelligemment entre Framer Motion et Remotion tout en respectant rigoureusement le système responsive FeelProd ! 🎼✨**
