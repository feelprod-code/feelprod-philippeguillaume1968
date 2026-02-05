# SKILL: STITCH & DEPLOY (PROCESSUS D'ASSEMBLAGE)

## 1. DÉFINITION
"Stitch" est l'étape critique d'assemblage final entre le Design (Vibe) et la Technique (Code) avant la mise en production. C'est un **Check-up Visuel & Technique** qui garantit que l'expérience utilisateur est conforme aux standards FeelProd.

## 2. PRÉ-REQUIS : LE "FLUX SAINT" (Vérification Statique)
Avant tout déploiement, vérifier la conformité stricte avec les règles définies dans `responsive_mastery.md` :

- [ ] **Check 1 : Zéro Chevauchement (No Overlap)**
  - Vérifier qu'aucune `margin-top` négative n'est utilisée pour "boucher un trou" (sauf exception artistique validée comme la section Musiques).
  - Les sections doivent s'empiler naturellement.

- [ ] **Check 2 : Collage Parfait**
  - Vérifier que `padding-bottom` des sections est à `0` (ou maitrisé).
  - Vérifier que les `spacer` (divs vides) sont supprimés ou réduits au minimum.

- [ ] **Check 3 : Solidité Mobile**
  - Vérifier que les conteneurs textes ont `width: 90%` ou équivalent sur mobile pour éviter de coller aux bords.

## 3. PROTOCOLE DE VÉRIFICATION VISUELLE (Browser Agent)
*Actions à faire exécuter par l'Agent Browser sur http://localhost:3000 avant le push.*

1.  **Le "Scroll Test"** :
    - Descendre toute la page.
    - Y a-t-il des "flashs blancs" entre les sections ? (Interdit).
    - Le défilement est-il fluide (60fps) ?

2.  **Le "Vibe Check"** :
    - Survoler les éléments interactifs (Titres, Blocs Description).
    - Les animations (Glassmorphism, Scale) se déclenchent-elles sans délai ?

3.  **Le "Resize Stress Test"** :
    - Passer de Desktop à Mobile.
    - Est-ce que le layout casse ? (Texte superposé, images déformées).

## 4. SÉQUENCE DE DÉPLOIEMENT (Git Stitch)
Une fois le "Flux Saint" validé visuellement :

1.  **Build de Sécurité** (Vérification technique) :
    ```bash
    npm run build
    ```

2.  **Stitch Commit** (Marquage de l'assemblage) :
    ```bash
    git add .
    git commit -m "stitch: [DESCRIPTION] (Flux Saint ✅)"
    ```

3.  **Deploy & Mirror** (Mise en ligne et Sauvegarde) :
    ```bash
    git push origin main        # Déclenche Vercel Production
    git push personal-fork main # Synchronise le Fork personnel
    ```

## 5. EN CAS DE "DÉCOUTURE" (Problèmes)
Si le Flux Saint est brisé ou le build échoue :
1.  **STOP IMMÉDIAT**. Interdiction de déployer.
2.  Relire `responsive_mastery.md`.
3.  Corriger le CSS dans `globals.css` (Tableau de Bord).
4.  Recommencer la vérification Stitch.
