---
name: Responsive Mastery & Spacing Standards
description: Guide complet des standards d'espacement FeelProd, incluant les règles Layout, Mobile, et Debugging.
---

# Responsive Mastery & Spacing Standards

## 1. RÈGLE D'OR N°1 : ISOLATION DES STYLES (MOBILE FIRST)
Chaque modification CSS doit être strictement cloisonnée. Une modification pour le Desktop ne doit **JAMAIS** impacter le Mobile, et vice-versa.

### Méthode
Utiliser systématiquement les Media Queries pour **écraser** ou **définir** des valeurs spécifiques, sans laisser de valeurs par défaut "flottantes".

*   **Mobile (<768px)** : `@media (max-width: 768px) { ... }`
*   **Tablette (769px - 1366px)** : `@media (min-width: 769px) and (max-width: 1366px) { ... }`
*   **Desktop (>1366px)** : `@media (min-width: 1367px) { ... }`

---

## 2. RÈGLE DES 90% (SÉCURITÉ MOBILE ABSOLUE)
Sur mobile, ne fiez jamais aux paddings du parent pour le texte. Forcez le conteneur de texte à :
`w-[90%] mx-auto`

Cela garantit mathématiquement 5% de marge à gauche et à droite.

#### 🚨 9.1 L'EXCEPTION GRILLE (CRITIQUE)
Si l'élément est enfant direct d'un `display: grid`, `mx-auto` **NE SUFFIT PAS**.
**Pattern OBLIGATOIRE en Grid :**
✅ `w-[90%] mx-auto justify-self-center lg:justify-self-start`

### Pattern ROBUSTE (Flex) :
```tsx
<div className="flex flex-col items-center ...">
    <div className="w-[90%] md:w-full max-w-2xl ...">
        {/* Contenu */}
    </div>
</div>
```

---

## 3. RÈGLE D'OR N°2 : LE "VERROUILLAGE DES CONTENEURS"
Pour éviter les décalages invisibles ("marge fantôme") qui s'accumulent :
1.  **Neutraliser les parents** : Les conteneurs globaux doivent avoir une marge extérieure forcée à 0.
    *   *Exemple :* `.section-header { margin-bottom: 0px !important; }`
2.  **Déléguer l'espacement au contenu**.

---

## 4. TABLEAU DES STANDARDS D'ESPACEMENT (V2.0 - "NO OVERLAP")
| Élément | Mobile (<768px) | Tablette (769-1366px) | Desktop (>1366px) |
| :--- | :--- | :--- | :--- |
| **Marge sous Titre** | `20px` (Fixe) | `0vh` | `0vh` |
| **Marge sous Texte** | **`20px`** | `5vh` | `4vh` |
| **Espace sous Vignettes** | **`0px`** | **`0vh`** | **`0vh`** |
| **Padding Bottom Section** | **`0px`** | **`0px`** | **`0px`** |
| **Margin Top Section** | **`0px`** | **`0vh`** | **`0vh`** |

---

## 5. ARCHITECTURE CSS A 3 NIVEAUX (Le "Grand Tableau de Bord")
Centraliser les règles CSS de layout dans `globals.css` divisé par Media Query.

---

## 6. PROTOCOLE DE DÉBUGGAGE (Quand ça ne s'aligne pas)
1.  **Inspecter le Parent** : Chercher `margin` ou `padding` cachés.
2.  **Vérifier les Overrides**.

---

## 7. STRATÉGIE "PAGE MIROIR" (DIAGNOSTIC AVANT REPLICATION)
**RÈGLE D'OR N°3 :** Avant toute refonte, créer une **Page Miroir de Diagnostic** (ex: `/test-spacing`).
1.  **Dupliquer** la page cible.
2.  **Appliquer le "Kit Debug"** (Outline bleu, vert, rouge).
3.  **Valider** visuellement.

---

## 8. STANDARD MÉTROLOGIQUE VISUEL (COLORS & LAYERS)
*   🩷 **ROSE (Pink) = FOND / MEDIA (Background)**
*   🟩 **VERT (Green) = CONTENU (Overlay)**
*   **Étiquettes de Valeurs** : `↕ MARGIN: 20px ↕`

---

## 9. EXEMPLE COMPLET GRID (Anti-Collage)
Pattern à utiliser pour toute section "Texte + Image" :
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2">
   <div className="w-[90%] mx-auto justify-self-center lg:justify-self-start">
       {/* Texte */}
   </div>
</div>
```

---

## 10. ADVANCED DEBUGGING: THE MIXING CONSOLE METHOD (VISUAL DEBUG V2)

When standard inspection fails (invisible padding, margin collapse, phantom whitespace), deploy the **Mixing Console Strategy**.

### The Concept
Create an exact visual replica of the production page, but overlay non-intrusive colored layers to name and visualize every spacing variable.

### Protocol
1.  **Duplicate Prod**: Create `src/app/test-[page]-debug/page.tsx` copying exact code from production.
2.  **Apply Pastel Identifiers**: 
    - Assign distinct background colors to *every* section to see boundaries clearly.
    - Code: `bg-blue-100`, `bg-purple-100`, `bg-orange-100`, `bg-pink-100`.
3.  **Inject the Overlay CSS**:
    - Use `pointer-events: none` and `position: absolute` for debug layers so they don't affect layout physics.
    - Visualize PADDING with Green blocks (`top: 0` inside section).
    - Visualize SPACERS with Magenta blocks.
    - Add Labels (e.g., "SECTION B (py-24)").
4.  **Feedback Loop**:
    - Ask user to identify the colored block causing the issue.
    - Map the color back to the Tailwind class (e.g., "The Blue area is too tall" -> Reduce `py-32` to `py-12`).

### CSS Template for Mixing Console
```css
.debug-overlay { pointer-events: none; z-index: 9999; }
.dbg-box { outline: 2px dashed rgba(0,0,255,0.3); position: relative; }
.dbg-box::after {
    content: attr(data-label);
    position: absolute;
    top: 0; right: 0;
    background: blue; color: white;
    font-size: 10px; padding: 1px 4px;
    opacity: 0.7;
}
.dbg-spacer { outline: 2px solid magenta; position: relative; }
```
