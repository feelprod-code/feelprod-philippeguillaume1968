# 🗺️ Plan de Conception : Nouvelle Page À Propos Narrative

Objectif : Créer une expérience immersive et narrative, inspirée du dynamisme de l'accueil "Comic/Pop" mais adaptée à la lecture longue et à l'émotion.

## 1. Identité Visuelle & Ambiance
*   **Fond** : Blanc pur (`#FFFFFF`) pour maximiser la lisibilité du récit et faire ressortir les photos.
*   **Typographie** :
    *   *Titres Chapitres* : `Luckiest Guy` (La font "Comic" du site) - Couleur Orange/Noir.
    *   *Sous-titres* : `Chewy` - Pour les accroches émotionnelles.
    *   *Corps de texte* : `Montserrat` ou `Inter` - Taille 18px-20px, interlignage aéré (leading-relaxed) pour le confort de lecture.
*   **Palette** : Reprise des codes FeelProd (Orange Vibrant, Noir Profond) par touches subtiles (soulignements, puces, ombres).

## 2. Structure Narrative (Le "Flow")

La page se déroule comme une histoire en 4 temps :

### Bloque A : Le Prélude (Hero Section)
*   **Visuel** : `ap_steadyphil.JPG` (Opérateur avec steadicam - Image emblématique).
    *   Une image "Hero" Pleine page ou très large qui subit un léger zoom arrière (Scale down) au chargement.
*   **Titre** : "Au delà de l'image" ou "L'Art du Mouvement". Superposé en très gros, style 'Bangers', avec un effet de parallaxe (le titre descend plus vite que l'image au scroll).

### Bloc B : L'Origine (Layout Asymétrique Alterné)
C'est ici qu'on place le texte long.
*   **Gauche** : Colonne Texte Récit.
    *   Titre : "Tout a commencé par..."
    *   Texte : Paragraphes aérés.
*   **Droite** : `ap_pont alex.jpg` (Image flottante en N&B ou couleur selon préférence).
    *   *Animation* : **Parallaxe Verticale**. L'image se déplace doucement vers le haut/bas au scroll pour créer de la profondeur par rapport au texte.
    *   *Style Cadre* : Bordures blanches épaisses + Ombre portée (Rappel du style "Carte postale" ou "Photo papier").

### Bloc C : La Fusion (Layout Inversé)
*   **Gauche** : `ap_barrio stab.jpg` + `ap_pont.jpeg` (Montage superposé).
    *   *Animation* : Les deux images se superposent et bougent à des vitesses différentes (Effet 2.5D).
*   **Droite** : Texte Philosophie.
    *   Titre : "Corps & Caméra".

### Bloc D : La Galerie Cinétique (Immersion Totale)
Une pause dans le texte pour laisser parler l'image.
*   **Concept** : Une bande horizontale d'images (3 ou 4) qui défile latéralement (Marquee) en fonction de la vitesse de scroll de l'utilisateur.
    *   Si on scroll vite vers le bas, les images filent vers la gauche.
    *   Si on remonte, elles vont vers la droite.
*   **Images utilisées** :
    1. `ap_barriohaut.jpg`
    2. `ap_barriophil.jpg`
    3. `ap_stabbvaw.JPG`
    4. `ap_steadyphil 1.JPG`

## 3. Stratégie d'Animation (Framer Motion)
Nous utiliserons 3 techniques clés :

1.  **Scroll-Linked Motion (Parallaxe)**
    *   Utiliser `useScroll` et `useTransform`.
    *   Sur les images latérales : `y: useTransform(scrollYProgress, [0, 1], [0, -100])` pour qu'elles "flottent".

2.  **Text Reveal (Narratif)**
    *   Les longs textes n'apparaissent pas d'un coup.
    *   Utilisation de `variants` pour faire apparaître les paragraphes un par un avec un léger décalage (`staggerChildren`).

3.  ** Image Masking (Apparition)**
    *   Au lieu d'un simple fade-in, les images peuvent apparaître via un "masque" qui se retire (effet rideau) ou un "Scale Up" depuis 0.9.

## 4. Respect des Règles Design System (CRITIQUE)
Pour éviter toute collision sur mobile et garantir une cohérence avec le reste du site :

### A. Containers & Marges Latérales
*   **Toutes les sections Texte/Image** : Encapsulées dans `<section className="container mx-auto px-4 sm:px-6 lg:px-8">`.
*   **Hero Section** : Peut être `full bleed` (pleine page) mais le contenu interne (Titre) respecte le container.

### B. Positionnement des Images (Parallaxe)
*   **RÈGLE ABSOLUE** : Pour les images superposées ou décalées :
    *   Utiliser `marginTop` / `marginBottom` au lieu de `transform: translateY()` pour les éléments qui affectent la hauteur de section.
    *   `transform` uniquement pour les animations cosmétiques (petits mouvements au survol, rotations subtiles).
*   **Exemple** :
    ```tsx
    <motion.img 
        style={{ marginTop: useTransform(scrollY, [0, 500], [0, -50]) }} // OK: Margin fluide
        // ❌ PAS: transform: `translateY(${useTransform...})` si cela dicte la hauteur
    />
    ```

### C. Spacers de Sécurité
*   Entre chaque bloc (Texte ↔ Image), ajouter un `<div className="h-12 md:h-24"></div>` pour garantir un "safe zone" vertical.
*   Sur mobile, les images qui passent en colonne unique doivent avoir un `gap-8` minimum avec le texte précédent.

### D. Variables CSS Réutilisables
*   Si besoin de marges fluides (comme le Hero), définir des variables dans `globals.css` :
    ```css
    --about-img-offset: clamp(20px, 5vw, 80px);
    ```
*   Les réutiliser via `style={{ marginTop: 'var(--about-img-offset)' }}`.

## 5. Prochaines Étapes
1.  ✅ Validation de ce plan par vous (avec skill responsive intégré).
2.  Implémentation de la structure HTML/Tailwind stricte (`container`, `grid`, `gap`).
3.  Intégration des composants Framer Motion (`<motion.div>`) en respectant les règles de positionnement.
4.  Test Mobile/Desktop pour vérifier les marges et l'absence de collision.

---
**Ce plan respecte-t-il désormais vos attentes en termes de structure, d'animation ET de rigueur technique ?**
