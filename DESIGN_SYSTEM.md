# 🎛️ FeelProd - Guide de Pilotage des Espaces

Ce document résume comment régler précisément le design de votre site depuis le fichier `/src/app/globals.css`.

## 📏 Rappel des 3 Mondes
Le fichier est divisé en 3 zones totalement indépendantes. Modifier l'une n'affectera JAMAIS les autres :
1. **💻 DESKTOP** : Lignes 545+ (Écrans > 1366px)
2. **🛋️ TABLETTE** : Lignes 584+ (iPads, tablettes de 769px à 1366px)
3. **📱 MOBILE** : Lignes 624+ (Smartphones < 768px)

---

## 🏗️ Anatomie d'une Section
Chaque section (PROMO, IMMERSION, SOUVENIRS, PODCASTS, MUSIQUES) dispose de 4 leviers de réglage :

### 1. Titre → Sous-titre
*   **Code** : `.title-[nom] { margin-bottom: ... }`
*   **Usage** : Rapproche ou éloigne le "petit texte" juste sous le grand titre.

### 2. Sous-titre → Texte (Encadré blanc)
*   **Code** : `.subtitle-[nom] { margin-bottom: ... }`
*   **Usage** : Ajuste l'espace avant le bloc d'explication.

### 3. Texte → Vignettes (Vidéos)
*   **Code** : `.explanation-[nom] { margin-bottom: ... }`
*   **Usage** : Rapproche le bloc d'explication des vidéos. 
*   *Note : C'est souvent ici que vous voudrez réduire l'espace pour un look plus compact.*

### 4. Vignettes → Section Suivante
*   **Code** : `.espace-sous-[nom] { height: ... }`
*   **Usage** : Crée un vide (ou pas) avant de passer à la section en-dessous.

---

## 💡 Astuces de Pilotage
- **Pour faire descendre tout un bloc sur le fond vidéo** : Utilisez `.service-section { padding-top: ... }` au début de chaque zone (Desktop/Tablette/Mobile).
- **Unités recommandées** : 
    - `vh` (ex: 5vh) : Proportionnel à la hauteur de l'écran (idéal pour Tablette/Desktop).
    - `px` (ex: 20px) : Fixe (idéal pour le Mobile).
- **Le chevauchement (Overlap)** : Pour que la section Podcast "monte" sur la section Souvenirs, on utilise `margin-top: -5vh` par exemple. Plus le chiffre est négatif, plus ça monte.

---

Tout est désormais en place pour que votre ouverture de projet sur MacBook soit fluide et limpide. Bonne création ! 🚀
