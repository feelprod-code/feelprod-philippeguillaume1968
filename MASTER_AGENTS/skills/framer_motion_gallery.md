# SKILL: FRAMER MOTION GALLERY MASTERY

## 1. VISION & PHILOSOPHIE

Les galeries photos modernes doivent être **vivantes, fluides et émotionnelles**. Framer Motion permet de créer des animations qui racontent une histoire et captent l'attention sans compromettre les performances.

**Principes clés :**
- **Subtilité** : Les animations doivent enrichir, pas distraire
- **Performance** : Privilégier les transformations GPU (transform, opacity)
- **Accessibilité** : Respecter `prefers-reduced-motion`
- **Cohérence responsive** : Respecter la philosophie FeelProd de spacing rigoureux

---

## 2. PATTERNS D'ANIMATION DE GALERIE

### 2.1. PHOTO GRID AVEC REVEAL PROGRESSIF (STAGGER)

**Use case :** Révéler une grille de photos une par une avec un effet cascade

```tsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre chaque enfant
      delayChildren: 0.2    // Délai avant le premier enfant
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] // Courbe custom (easeOutQuad)
    }
  }
};

export default function AnimatedPhotoGrid({ photos }) {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05, 
            zIndex: 10,
            transition: { duration: 0.2 } 
          }}
          className="relative aspect-square overflow-hidden rounded-lg"
        >
          <img 
            src={photo.url} 
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Points clés :**
- `staggerChildren` : crée l'effet cascade
- `whileInView` : démarre l'animation au scroll
- `viewport={{ once: true }}` : animation une seule fois (performance)

---

### 2.2. PARALLAX HORIZONTAL GALLERY

**Use case :** Galerie qui défile avec effet parallax au scroll

```tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxGallery({ images }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Démarre avant l'entrée, finit après la sortie
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className="overflow-hidden py-20">
      <motion.div 
        style={{ x }}
        className="flex gap-6"
      >
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={img.url} 
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
```

**Points clés :**
- `useScroll` : suit la progression du scroll
- `useTransform` : convertit le scroll en déplacement horizontal
- `offset` : contrôle quand l'animation démarre/finit

---

### 2.3. LIGHTBOX ANIMÉE

**Use case :** Agrandir une photo avec transition fluide

```tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function LightboxGallery({ photos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            layoutId={photo.id} // Active le layout animation
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer rounded-lg overflow-hidden"
            whileHover={{ opacity: 0.8 }}
          >
            <img src={photo.thumbnail} alt={photo.alt} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              layoutId={selectedPhoto.id}
              src={selectedPhoto.full}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

**Points clés :**
- `layoutId` : crée une transition fluide entre les deux états
- `AnimatePresence` : gère les animations de sortie
- `exit` : définit l'animation de fermeture

---

### 2.4. INFINITE SCROLL AVEC FADE-IN

**Use case :** Chargement progressif avec apparition douce

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function PhotoItem({ photo, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: (index % 6) * 0.1, // Stagger par lot de 6
        ease: "easeOut"
      }}
      className="aspect-square rounded-xl overflow-hidden"
    >
      <img 
        src={photo.url} 
        alt={photo.alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export default function InfiniteScrollGallery({ photos }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <PhotoItem key={photo.id} photo={photo} index={index} />
      ))}
    </div>
  );
}
```

---

## 3. OPTIMISATIONS PERFORMANCE

### 3.1. RESPECTER PREFERS-REDUCED-MOTION

```tsx
import { useReducedMotion } from 'framer-motion';

export default function ResponsiveAnimatedGrid({ photos }) {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } // Pas d'animation
    : { 
        hidden: { opacity: 0 }, 
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
      };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      {/* Contenu */}
    </motion.div>
  );
}
```

### 3.2. UTILISER WILL-CHANGE AVEC PARCIMONIE

```tsx
<motion.div
  whileHover={{ scale: 1.1 }}
  style={{ willChange: 'transform' }} // Active l'accélération GPU
  onHoverStart={() => {/* Précharger image full-res */}}
>
```

**⚠️ Attention :** N'utilisez `will-change` que sur les éléments qui vont réellement être animés.

### 3.3. LAZY LOADING DES IMAGES

```tsx
<motion.img
  loading="lazy"
  decoding="async"
  src={photo.url}
  alt={photo.alt}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
/>
```

---

## 4. INTÉGRATION AVEC LE SYSTÈME RESPONSIVE FEELPROD

### 4.1. RESPECTER LES STANDARDS D'ESPACEMENT

Toujours wrapper vos galeries dans les conteneurs standard :

```tsx
<section className="section-gallery-container">
  <div className="section-header">
    <h2>Galerie Photos</h2>
  </div>
  
  {/* ⚠️ IMPORTANT : Respecter le système de marges */}
  <div className="explanation-gallery" style={{ marginBottom: '20px' }}>
    <p>Description de la galerie</p>
  </div>

  <AnimatedPhotoGrid photos={photos} />
  
  {/* Pas de padding-bottom sur la section (Règle NO OVERLAP) */}
</section>
```

### 4.2. BREAKPOINTS HARMONISÉS

```tsx
const breakpoints = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1366px)',
  desktop: '(min-width: 1367px)'
};

// Utilisation avec framer-motion
const variants = {
  mobile: { scale: 1 },
  desktop: { scale: 1.05 }
};
```

---

## 5. BIBLIOTHÈQUE DE VARIANTES RÉUTILISABLES

Créez un fichier `lib/animations.ts` :

```typescript
// lib/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
```

**Utilisation :**

```tsx
import { fadeInUp, staggerContainer } from '@/lib/animations';

<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  <motion.h2 variants={fadeInUp}>Titre</motion.h2>
  <motion.p variants={fadeInUp}>Texte</motion.p>
</motion.div>
```

---

## 6. CHECKLIST AVANT DÉPLOIEMENT

- [ ] Animations testées sur mobile, tablette, desktop
- [ ] `prefers-reduced-motion` respecté
- [ ] Images en lazy loading
- [ ] Aucun layout shift (CLS) généré par les animations
- [ ] Performance : pas de drop de FPS (utiliser Chrome DevTools Performance)
- [ ] Respect des espacements FeelProd (pas de chevauchement)
- [ ] Fallback si JavaScript désactivé (progressive enhancement)

---

## 7. RESSOURCES & EXEMPLES

### Courbes d'accélération (easing)
- `ease: "easeOut"` → Décélération naturelle (recommandé entrées)
- `ease: "easeInOut"` → Fluide (recommandé hover)
- `ease: [0.25, 0.46, 0.45, 0.94]` → Custom (easeOutQuad)

### Documentation officielle
- https://www.framer.com/motion/
- https://www.framer.com/motion/gestures/
- https://www.framer.com/motion/scroll-animations/

---

**Duncan est maintenant capable de créer des galeries photos animées premium avec Framer Motion tout en respectant le système responsive FeelProd ! 🎨✨**
