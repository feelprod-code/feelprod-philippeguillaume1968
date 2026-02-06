# SKILL: RESPONSIVE & SPACINGS MASTERY (FEELPROD SYSTEM)

## 1. VISION & PHILOSOPHIE
L'harmonie visuelle d'un site repose sur la **rigueur mathématique des espacements**. Deux sections qui ont la même fonction (ex: Immersion et Souvenirs) doivent avoir **exactement** les mêmes marges au pixel près, quel que soit l'appareil.

Cette rigueur s'obtient non pas en corrigeant au cas par cas, mais en définissant des **Standards de Section Universels**.

---

## 2. RÈGLE D'OR N°1 : LE "FLUX SAINT" (INTERDICTION DE CHEVAUCHEMENT)
**STRICT :** Les sections doivent s'enchainer naturellement.
1.  **AUCUNE MARGE NÉGATIVE (`margin-top: -XX`)** entre les sections principales (Podcasts, Musiques, etc.). Le chevauchement est interdit pour garantir la solidité du layout.
2.  **COLLAGE PARFAIT** : L'espace entre deux sections doit être de **0px** structurellement. Si un espace visuel est nécessaire, il doit être géré par un `padding` interne positif et contrôlé, jamais par du "vide" non maitrisé.
3.  **SUPPRESSION DU VIDE** : Les `padding-bottom` des sections et les `height` des divs d'espacement (`.espace-sous-xxx`) doivent être réduits à **0** (ou au strict minimum vital) pour éviter les "trous blancs" indésirables.

---

## 3. RÈGLE D'OR N°2 : LE "VERROUILLAGE DES CONTENEURS"
Pour éviter les décalages invisibles ("marge fantôme") qui s'accumulent :

1.  **Neutraliser les parents** : Les conteneurs globaux (`.section-header`, `.container`) doivent avoir une marge extérieure forcée (souvent `0` ou une valeur fixe standard) pour ne jamais interférer avec le design interne.
    *   *Exemple :* `.section-header { margin-bottom: 0px !important; }`
2.  **Déléguer l'espacement au contenu** : C'est l'élément visible (le texte, la div explicative) qui doit porter la marge ("Je veux 20px sous moi"), et non le conteneur parent ("Je veux 20px de padding interne").

---

## 4. TABLEAU DES STANDARDS D'ESPACEMENT (V2.0 - "NO OVERLAP")
Voici les valeurs *Golden Standard* validées pour le projet FeelProd.

| Élément | Mobile (<768px) | Tablette (769-1366px) | Desktop (>1366px) |
| :--- | :--- | :--- | :--- |
| **Marge sous Titre (Header)** | `20px` (Fixe) | `0vh` (Neutralisé) | `0vh` (Neutralisé) |
| **Marge sous Texte Explicatif** | **`20px`** (Harmonisé partout) | `5vh` | `4vh` |
| **Espace sous Vignettes/Carrousel** | **`0px`** (Collage parfait) | **`0vh`** | **`0vh`** |
| **Padding Bottom Section** | **`0px`** (Collage parfait) | **`0px`** | **`0px`** |
| **Margin Top Section** | **`0px`** (Pas de chevauchement) | **`0vh`** | **`0vh`** |

> **Note :** Le but est d'avoir des blocs qui se touchent. L'espace visuel ne doit venir que du contenu lui-même.

---

## 5. ARCHITECTURE CSS A 3 NIVEAUX (Le "Grand Tableau de Bord")
Ne jamais éparpiller les règles CSS de layout. Tout doit être centralisé dans le fichier `globals.css` sous forme de **Tableau de Bord** clair, divisé par Media Query.

### Structure type :

```css
/* =========================================
   TABLEAU DE BORD ESPACEMENTS
   ========================================= */

/* 1. DESKTOP (>1366px) */
@media (min-width: 1367px) {
  /* Reset Global */
  .section-header { margin-bottom: 0vh !important; }
  
  /* Sections : Tout à 0 pour le collage */
  .section-A, .section-B { margin-top: 0vh; padding-bottom: 0vh; }
  .spacer-A { height: 0vh; }

  /* Contenu interne */
  .explanation-A { margin-bottom: 4vh; }
}

/* 2. TABLETTE (769px - 1366px) */
@media (min-width: 769px) and (max-width: 1366px) {
  /* Idem Desktop, ajusté vh */
  .explanation-A { margin-bottom: 5vh !important; }
  .spacer-A { height: 0vh !important; }
}

/* 3. MOBILE (<768px) */
@media (max-width: 768px) {
  /* Exception Mobile : on garde un petit header margin */
  .section-header { margin-bottom: 20px !important; }

  /* TOUT LE MONDE PAREIL */
  .explanation-promo,
  .explanation-immersion,
  .explanation-souvenirs,
  .explanation-podcasts,
  .explanation-musiques {
    margin-bottom: 20px !important; /* Harmonisation stricte */
  }

  /* SUPPRESSION VIDE */
  .espace-sous-promo, .espace-sous-podcasts { height: 0px !important; }
  .section-podcast-container, .section-musiques-container { 
      margin-top: 0px !important; /* NO OVERLAP */
      padding-bottom: 0px !important;
  }
}
```

---

## 6. PROTOCOLE DE DÉBUGGAGE (Quand ça ne s'aligne pas)
Si deux sections semblent différentes alors que le CSS semble bon :

1.  **Inspecter le Parent** : Le coupable est souvent une `margin` ou un `padding` caché sur le conteneur (`div`, `header`, `section`) qui s'ajoute à celui de l'enfant.
2.  **Vérifier les "Media Query Overrides"** : Une règle mobile spécifique (ex: `.souvenirs-only`) peut écraser la règle générale. Toujours chercher avec `Ctrl+F` le nom de la classe pour voir toutes ses occurrences.

---

## 7. STRATÉGIE "PAGE MIROIR" (DIAGNOSTIC AVANT REPLICATION)
**RÈGLE D'OR N°3 :** Avant toute refonte ou réplication de design complexe, créer systématiquement une **Page Miroir de Diagnostic** (ex: `/test-spacing`).

### Objectif :
Visualiser la structure invisible (limites, marges, conteneurs) sans pollution visuelle.

### Protocole :
1.  **Dupliquer** la page ou section cible vers une URL cachée (ex: `/test-debug-home`).
2.  **Appliquer le "Kit Debug"** :
    *   Fond Gris (`bg-neutral-400`) pour révéler le blanc.
    *   Bordures de couleur (`outline`) pour chaque niveau hiérarchique :
        *   🟦 BLEU : Section / Conteneur principal
        *   🟩 VERT : Header / Titres
        *   🟧 ORANGE : Contenu riche (Carrousel, Grille)
        *   🟥 ROUGE : Espaces vides et Marges (`height` des spacers)
    *   Labels explicites ("Section", "Header", "Spacing Bottom").
3.  **Valider** visuellement avec le client AVANT de toucher au CSS global.

### Bibliothèque des Pages Diagnostiques (Maintenir à jour) :
*   `http://localhost:3000/test-spacing` : **Référence Absolue des Espacements Accueil**. Cette page doit toujours refléter les mesures actuelles du site. Si le CSS change, vérifier cette page pour s'assurer qu'elle ne casse pas.

---

## 8. STANDARD MÉTROLOGIQUE VISUEL (COLORS & LAYERS)
Pour toute future page de debug, appliquer strictement ce système "Métrologie & Layering" pour comprendre la superposition (Z-Index) et les dimensions exactes.

### 8.1. LAYERING (Superposition Maitrisée)
Il est crucial de distinguer visuellement le FOND (qui passe derrière) du CONTENU (qui passe devant).
*   🩷 **ROSE (Pink) = FOND / MEDIA (Background)** :
    *   Délimite le conteneur `absolute` de la vidéo ou de l'image.
    *   **Utilité :** Permet de voir instantanément si le média est "coupé" trop tôt (ex: `height: 40vh`) et laisse un espace blanc indésirable en bas de section.
*   🟩 **VERT (Green) = CONTENU (Overlay)** :
    *   Délimite le contenu riche (Titres, Textes) posé *par-dessus* le fond.
    *   **Confirmation :** Si le cadre Vert chevauche le cadre Rose, c'est NORMAL et SOUHAITÉ (effet de superposition).

### 8.2. MÉTROLOGIE (Mesure des Vides)
Ne jamais laisser un espace vide sans explication.
*   **Étiquettes de Valeurs** : Placer des étiquettes visuelles entre les blocs indiquant la valeur CSS théorique (ex: `↕ MARGIN: 20px ↕`).
*   **Visualisation des Marges** : Hachurer en ROUGE ou GRIS les zones de marges "invisibles" pour prouver que l'espace n'est pas un bug, mais une marge volontaire.

### 8.3. IMPLÉMENTATION SYSTÉMATIQUE
À chaque nouveau projet ou nouvelle section complexe :
1.  Créer `/test-layout-[nom_projet]`.
2.  Appliquer ce code couleur (Bleu/Vert/Rose/Rouge/Jaune).
3.  Valider que les conteneurs Roses (fonds) remplissent bien les conteneurs Bleus (sections).
4.  Valider que les calques Verts (contenu) sont bien positionnés par-dessus.

---

## 9. La Règle des 90% (Sécurité Mobile Absolue)
Sur mobile, ne fiez jamais aux paddings du parent pour le texte.
Forcez le conteneur de texte à :
`w-[90%] mx-auto`

Cela garantit mathématiquement 5% de marge à gauche et à droite, quoi qu'il arrive.

#### 🚨 9.1 L'EXCEPTION GRILLE (CRITIQUE) 🚨
Si l'élément est enfant direct d'un `display: grid`, `mx-auto` **NE SUFFIT PAS**. Vous devez forcer l'alignement de cellule.
**Pattern PROHIBÉ en Grid qui cause le "Collé à gauche" :**
❌ `w-[90%] mx-auto` (Insuffisant en Grid)

**Pattern OBLIGATOIRE en Grid :**
✅ `w-[90%] mx-auto justify-self-center lg:justify-self-start`

*Note : Sur desktop, n'oubliez pas de remettre `justify-self-start` ou `center` selon le design voulu.*

### LA SOLUTION ROBUSTE :
Pour garantir des marges latérales parfaites sur mobile sans tâtonner :
1.  **Parent** : Utiliser Flexbox pour centrer.
    *   `flex flex-col items-center`
2.  **Enfant (Conteneur de Texte/Form)** :
    *   **Mobile** : Force `w-[90%]` (Ce qui garantit mathématiquement 5% de marge de chaque côté).
    *   **Desktop** : Rétablir `md:w-full md:max-w-2xl` (ou autre max-width).

**Code Pattern à privilégier :**
```tsx
<div className="flex flex-col items-center ..."> <!-- Parent Centré -->
    <div className="w-[90%] md:w-full max-w-2xl ..."> <!-- Enfant : 90% Mobile -->
        {/* Contenu */}
    </div>
</div>
```
Cette méthode est infaillible pour éviter le collage aux bords sur les petits écrans.
