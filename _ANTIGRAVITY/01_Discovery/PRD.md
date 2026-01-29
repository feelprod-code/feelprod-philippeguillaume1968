# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD)
## FeelProd - Premium Creative Showcase

**Version:** 1.0  
**Date:** 29 janvier 2026  
**Status:** Discovery Phase  
**Author:** Master Agent (Antigravity)

---

## 1. BUSINESS CONTEXT

### 1.1 Vision & Objectif

**Mission Statement**  
FeelProd est un showcase créatif haut de gamme destiné à capturer et présenter des émotions visuelles à travers le mouvement et la vidéo.

**Objectif Business Principal**  
Transformer une Home existante performante en une expérience web complète et immersive qui convertit les visiteurs via l'émotion visuelle, tout en ajoutant :
- Une page **Portfolio** (Work) dynamique et gérée via CMS
- Une page **Contact** fonctionnelle avec formulaire

**Niveau de Maturité Actuel**  
- ✅ **Home** : Base solide avec identité visuelle établie
- 🔲 **Work** : À construire (priorité MVP)
- 🔲 **Contact** : À construire

---

### 1.2 Audience Cible

**Profil Principal**  
- Clients potentiels cherchant un créateur vidéo/photographe
- Agences créatives recherchant des collaborateurs
- Marques premium sensibles à l'esthétique haut de gamme

**Comportements Clés**  
- Navigateurs mobiles et desktop (expérience responsive critique)
- Attention limitée : décision en <30 secondes
- Sensibilité à la qualité visuelle et fluidité d'interaction

---

### 1.3 DNA Visuel & Émotionnel

> [!IMPORTANT]
> **Identité Visuelle Établie** : L'ADN actuel de la Home fait autorité et doit être respecté pour toutes les nouvelles pages.

#### **Esthétique Fondamentale**
- **Arrière-plan** : BLANC pur (#ffffff) - Pas de mode sombre
- **Style** : Minimaliste, haut de gamme, "Art Gallery" / Apple-inspired
- **Contraste** : Texte sombre (#1d1d1f) sur fond blanc pour clarté maximale

#### **Typographie Distinctive**
- **H1/Titres** : `Luckiest Guy` (playful, comic-style avec rotation -2°)
- **Sous-titres** : `Chewy` (doux et rond, avec dégradé orange vibrant)
- **Corps** : `Inter` (propre et moderne, Apple-like)
- **Accent** : `Montserrat` (navigation, éléments UI)

#### **Principes de Motion**
- **Parallax** : Vidéos en arrière-plan avec effet de profondeur au scroll
- **Masques** : Dégradés subtils (fade-to-white) pour intégration fluide
- **Micro-interactions** : Hover effects avec spring physics (Framer Motion)
- **Révélations** : Composant `Reveal` pour animations d'apparition au scroll

#### **Composants Visuels Signature**
- **Vidéos** : Backgrounds pleins (hero, sections) avec zoom et parallax
- **Carousels** : `InfiniteCarousel` horizontal avec drag, masque latéral
- **Typography Comic** : Titres colorés avec text-shadow noir épais
- **Modal Vidéo** : Lecteur YouTube/local immersif plein écran

---

### 1.4 KPIs de Succès

**Métriques Quantitatives (Post-Launch)**
- Temps sur page moyen > 2 min
- Taux de rebond < 40%
- Taux de soumission formulaire Contact > 8%

**Métriques Qualitatives (Pré-Launch)**
- ✅ Cohérence visuelle entre Home, Work, Contact
- ✅ Fluidité animations (60fps constant)
- ✅ Temps de chargement initial < 3s

---

## 2. TECHNICAL STACK & CONSTRAINTS

### 2.1 Technologies Actuelles

**Framework & Language**
- **Next.js** : `16.1.4` (App Router)
- **React** : `19.2.3`
- **TypeScript** : `^5` (Strict mode recommandé)

**Styling & Animation**
- **Tailwind CSS** : `^4` (CSS-based config, pas de `.config.ts`)
- **Framer Motion** : `^12.29.0` (animations, parallax, gestures)

**Backend & Data (À Intégrer)**
- **Supabase** : Via MCP pour CMS projets + formulaires
- **Auth** : Optionnel (admin CMS uniquement si besoin)

**Build & Deployment**
- **Dev Server** : `npm run dev` (localhost:3000)
- **Production** : Vercel (recommandé pour Next.js)

---

### 2.2 Design System Requirements

> [!NOTE]
> Le design system est déjà mature dans `globals.css`. Nouvelles pages doivent RÉUTILISER les classes existantes.

**Variables CSS Établies**
```css
/* Couleurs */
--bg-color: #ffffff
--text-color: #1d1d1f  
--accent-blue: #2997ff

/* Thèmes Section */
--tv-bg: #000
--music-bg: #fa233b
--arcade-bg: #fca00b

/* Fonts (injectées par Next.js) */
--font-main: var(--font-inter)
--font-comic: var(--font-luckiest-guy)
--font-sub: var(--font-montserrat)
```

**Classes Réutilisables**
- `.hero-section` : Section plein écran avec vidéo background
- `.service-section` : Section avec vidéo haute + contenu bas
- `.service-logo` : Titres comic avec text-shadow
- `.service-tagline` : Sous-titres avec Chewy font
- `.horizontal-scroll-container` : Wrapper pour carousels
- `.card` : Item de carousel (300x170px)

**Composants Existants**
- **`<Reveal>`** : Animation d'apparition au scroll (delay configurable)
- **`<InfiniteCarousel>`** : Carousel infini avec drag & ouverture modal
- **`<VideoModal>`** : Modal YouTube/local avec fermeture smooth
- **`<SectionWithParallax>`** : Wrapper section avec parallax vidéo

---

### 2.3 Performance Targets

**Optimisations Obligatoires**
- Vidéos : Format MP4, compression optimale, `autoPlay muted loop playsInline`
- Images : Next.js `<Image>` avec lazy loading
- Animations : Hardware-accelerated (transform, opacity uniquement)
- Fonts : Preload via Next.js font system (déjà en place)

**Responsive Breakpoints**
- Mobile : `< 768px`
- Tablet : `769px - 1024px`
- Desktop : `> 1024px`

---

## 3. ARCHITECTURE & DATA MODEL

### 3.1 Folder Structure (Actuel)

```
/feelprod-local/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global
│   │   ├── page.tsx            # ✅ Home (déjà fait)
│   │   ├── globals.css         # ✅ Design system complet
│   │   ├── about/              # Empty (optionnel)
│   │   └── contact/            # 🔲 À créer (MVP)
│   │       └── page.tsx
│   └── components/
│       ├── Reveal.tsx          # ✅ Scroll reveal
│       ├── InfiniteCarousel.tsx # ✅ Carousel
│       ├── VideoModal.tsx      # ✅ Modal vidéo
│       └── ParallaxSection.tsx # ✅ Section helper
├── public/
│   └── assets/
│       ├── videos/             # MP4 backgrounds
│       └── images/             # JPG thumbnails
├── _ANTIGRAVITY/               # Documentation
│   ├── 01_Discovery/
│   │   └── PRD.md             # Ce document
│   ├── 02_Specs/
│   └── 03_Review/
└── package.json
```

**Pages Work à Créer**
```
src/app/work/page.tsx           # 🔲 Portfolio dynamique
```

---

### 3.2 Supabase Schema (Proposé)

> [!WARNING]
> **Database Model - Validation Requise**  
> Ce schéma est une proposition basée sur les besoins MVP. À valider avant implémentation.

#### **Table: `projects`**
Stocke les projets du portfolio (vidéos/photos)

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| `id` | uuid | PK, auto | Identifiant unique |
| `created_at` | timestamp | default now() | Date de création |
| `title` | text | NOT NULL | Titre du projet (ex: "Souvenirs") |
| `tagline` | text | nullable | Sous-titre (ex: "Des moments...") |
| `category` | text | NOT NULL | Catégorie (souvenirs/adrenaline/evasion) |
| `thumbnail_url` | text | NOT NULL | URL image (Supabase Storage) |
| `video_id` | text | nullable | ID YouTube ou path local |
| `video_type` | text | default 'youtube' | youtube / local |
| `order` | integer | default 0 | Ordre d'affichage |
| `is_published` | boolean | default true | Visibilité publique |
| `color_accent` | text | nullable | Couleur thème (#FF9F1C) |

**Indexes**
- `category` (pour filtres)
- `order, created_at` (pour tri)

**RLS Policies**
- Public : `SELECT` si `is_published = true`
- Admin : Toutes opérations (via dashboard Supabase)

---

#### **Table: `contact_submissions`**
Stocke les soumissions du formulaire Contact

| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| `id` | uuid | PK, auto | Identifiant unique |
| `created_at` | timestamp | default now() | Date soumission |
| `name` | text | NOT NULL | Nom complet |
| `email` | text | NOT NULL | Email contact |
| `phone` | text | nullable | Téléphone (optionnel) |
| `message` | text | NOT NULL | Contenu message |
| `project_type` | text | nullable | Type projet demandé |
| `status` | text | default 'new' | new/read/replied |

**Indexes**
- `created_at DESC` (liste récents)

**RLS Policies**
- Public : `INSERT` uniquement
- Admin : `SELECT, UPDATE` (via dashboard)

---

### 3.3 API Routes (Recommandées)

**Option A : Direct Supabase Client**  
Utiliser `@supabase/supabase-js` directement côté client (simple, MVP)

```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

**Option B : Next.js API Routes** (Sécurisé, Recommandé)  
Créer des endpoints pour protéger les clés

```
/src/app/api/
├── projects/
│   └── route.ts        # GET /api/projects
└── contact/
    └── route.ts        # POST /api/contact
```

> [!TIP]
> **Recommandation** : Commencer avec Option A pour MVP, migrer vers Option B si ajout d'authentification admin.

---

### 3.4 Component Hierarchy

**Page Work (À Créer)**
```
<WorkPage>
  ├── <motion.nav>              # Réutiliser nav de Home
  ├── <section.hero-section>    # Hero vidéo "Work"
  │   ├── <Reveal>
  │   │   └── <h1>Portfolio</h1>
  │   └── <video background>
  ├── <CategorySection>         # Répété x3 (Souvenirs, Adrénaline, Évasion)
  │   ├── <Reveal>
  │   │   └── <h2>Catégorie</h2>
  │   └── <ProjectGrid>         # Grille de projets (fetch Supabase)
  │       └── <ProjectCard>[]   # Carte projet (thumbnail + modal)
  └── <VideoModal>              # Modal partagée
```

**Page Contact (À Créer)**
```
<ContactPage>
  ├── <motion.nav>              # Nav partagée
  ├── <section.hero-section>    # Hero minimaliste
  │   └── <Reveal>
  │       └── <h1>Contact</h1>
  ├── <ContactForm>             # Formulaire Supabase
  │   ├── Input (Name, Email, Phone)
  │   ├── Textarea (Message)
  │   ├── Select (Project Type)
  │   └── <motion.button>
  └── <footer>                  # Footer partagé
```

---

## 4. USER EXPERIENCE (UX)

### 4.1 User Journey

**Parcours Principal**
1. **Arrivée** : Home (vidéo hero immersive)
2. **Découverte** : Scroll carousels (Souvenirs/Adrénaline/Évasion)
3. **Approfondissement** : Clic "Work" (voir tous les projets)
4. **Action** : Formulaire Contact

**Micro-Interactions Clés**
- Hover card carousel → Scale 1.02 + shadow
- Clic thumbnail → Modal vidéo full-screen
- Scroll page → Parallax vidéos
- Submit form → Animation loading + success state

---

### 4.2 Animation Principles

> [!NOTE]
> Utiliser systématiquement Framer Motion pour cohérence avec Home existante.

**Types d'Animations**

1. **Entrées (Reveal)**
   - Trigger : Intersection Observer
   - Effet : Opacity 0→1, Y 50→0
   - Durée : 0.6s
   - Easing : `circOut`

2. **Parallax**
   - Scrollbar progress : `useScroll`
   - Transform : Vidéos Y -15%→15%
   - Ratio : Section-specific (target ref)

3. **Hover**
   - Scale : 1.0 → 1.02-1.1
   - Duration : 0.2s
   - Physics : Spring (damping: 15)

4. **Navigation**
   - Menu mobile : Slide right 0.4s `cubic-bezier(0.77,0,0.175,1)`
   - Page transitions : Fade + Y translate

**Performance Rules**
- ✅ Utiliser `transform` et `opacity` (GPU-accelerated)
- ❌ Éviter `width`, `height`, `top`, `left` (reflow)
- ✅ `will-change: transform` pour éléments animés en continu

---

### 4.3 Responsive Behavior

**Mobile (< 768px)**
- Navigation : Hamburger menu uniquement
- Vidéos hero : 40vh height, crop intelligent
- Carousels : Horizontal scroll avec drag
- Fonts : H1 55px, Service Logo 50px
- Touch : Tap project card → Modal (pas hover)

**Tablet (769-1024px)**
- Navigation : Hamburger conservé
- Fonts : H1 60px, Service Logo 65px
- Grid Work : 2 colonnes

**Desktop (> 1024px)**
- Navigation : Header fixe avec liens (optionnel)
- Vidéos hero : 80vh height
- Grid Work : 3 colonnes
- Masques latéraux carousel : Visible

---

## 5. DEVELOPMENT ROADMAP

### 5.1 Phase 1: Vibe Check (Déjà Fait ✅)

**Statut** : Complet  
**Livrables**
- ✅ Design System établi (`globals.css`)
- ✅ Composants réutilisables (`Reveal`, `InfiniteCarousel`, `VideoModal`)
- ✅ Home fonctionnelle avec identité visuelle

---

### 5.2 Phase 2: Foundation (Setup Supabase)

**Objectif** : Intégrer Supabase pour CMS

**Tasks**
1. **Installation**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Configuration Environment**
   ```env
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
   ```

3. **Database Setup**
   - Créer projet Supabase
   - Exécuter SQL schema (tables `projects`, `contact_submissions`)
   - Configurer RLS policies
   - Upload images test dans Storage

4. **Client Library**
   - Créer `src/lib/supabase.ts`
   - Tester connexion avec fetch simple

**Validation**
- [ ] Fetch test sur table `projects` retourne données
- [ ] Insert test sur `contact_submissions` fonctionne

---

### 5.3 Phase 3: Core Features (Work Page MVP)

**Objectif** : Page Portfolio dynamique

**Tasks**

1. **Page Structure** (`src/app/work/page.tsx`)
   - Copier structure de `page.tsx` (nav, footer)
   - Hero section "Portfolio" avec vidéo background
   - 3 sections catégories (Souvenirs/Adrénaline/Évasion)

2. **Data Fetching**
   ```typescript
   // Fetch projects par catégorie
   const { data } = await supabase
     .from('projects')
     .select('*')
     .eq('category', 'souvenirs')
     .eq('is_published', true)
     .order('order', { ascending: true })
   ```

3. **Composant `ProjectGrid`**
   - Grille responsive (1/2/3 colonnes)
   - Utiliser `.card` existante du design system
   - Intégrer `VideoModal` pour ouverture

4. **Animations**
   - `<Reveal>` pour titres sections
   - Parallax videos (réutiliser `SectionWithParallax`)
   - Hover cards avec Framer Motion

**Options Techniques à Valider**

> [!IMPORTANT]
> **Décisions Requises** : Choix à valider avant implémentation

**Option 1 : Mise en Page Grid**
- **A. Masonry Layout** (Pinterest-style, hauteurs variables)
  - Pro : Visuellement riche
  - Con : Complexe responsive, pas de lib natif
- **B. Grille Uniforme** (cards mêmes dimensions)
  - Pro : Simple, cohérent avec carousels Home
  - Con : Moins dynamique
- **Recommandation** : **B** pour MVP (cohérence design system)

**Option 2 : Chargement Données**
- **A. Server Component** (fetch côté serveur, pas de JS client)
  - Pro : SEO optimal, temps initial rapide
  - Con : Pas de filtres dynamiques client
- **B. Client Component** (fetch avec `useState`/`useEffect`)
  - Pro : Interactivité (filtres, recherche future)
  - Con : Temps chargement initial visible
- **Recommandation** : **A** pour MVP, migrer vers B si besoin filtres

**Option 3 : Infinite Scroll**
- **A. Pagination** (X projets par page, bouton "Load More")
- **B. Scroll Infini** (auto-load au scroll)
- **C. Tout Afficher** (si < 50 projets totaux)
- **Recommandation** : **C** pour MVP (simplicité)

**Validation**
- [ ] Page `/work` affiche projets Supabase
- [ ] Clic thumbnail → Modal vidéo fonctionne
- [ ] Responsive 3 breakpoints OK
- [ ] Animations fluides 60fps

---

### 5.4 Phase 4: Contact & Polish

**Objectif** : Page Contact + améliorations Home

**Tasks**

1. **Page Contact** (`src/app/contact/page.tsx`)
   - Hero minimaliste (sans vidéo ou vidéo subtile)
   - Formulaire centré avec validation
   - States : idle / loading / success / error

2. **Formulaire**
   ```typescript
   // Champs
   - name: string (required)
   - email: string (required, validation regex)
   - phone: string (optional, format tel)
   - project_type: select (Souvenirs/Adrénaline/Évasion/Autre)
   - message: textarea (required, min 20 chars)
   ```

3. **Submit Handler**
   ```typescript
   const handleSubmit = async (e) => {
     // Validation client
     // POST /api/contact ou direct Supabase
     // Animation success (confetti? simple checkmark?)
   }
   ```

4. **Success State**
   - Message confirmation
   - Animation Framer Motion (scale + opacity)
   - Auto-clear form après 3s

**Options Techniques**

**Option 1 : Validation**
- **A. React Hook Form** (lib dédiée, robuste)
- **B. Validation manuelle** (léger, contrôle total)
- **Recommandation** : **B** pour MVP (formulaire simple)

**Option 2 : Success Animation**
- **A. Confetti** (lib `react-confetti`, joyeux)
- **B. Checkmark Simple** (SVG animé, minimaliste)
- **C. Text Fade** (message texte uniquement)
- **Recommandation** : **B** (cohérent avec ADN minimaliste)

**Améliorations Home (Si Temps)**
- [ ] Préload vidéo hero (éviter flash blanc)
- [ ] Lazy load vidéos sections (performance mobile)
- [ ] Add transition page avec Framer Motion `AnimatePresence`

**Validation**
- [ ] Formulaire submit → Supabase insert
- [ ] Validation erreurs affichées
- [ ] Success state animation
- [ ] Form responsive mobile

---

### 5.5 Phase 5: Browser Audit & Deployment

**Objectif** : QA complète et mise en ligne

**Tasks**

1. **Browser Testing**
   - Chrome/Safari/Firefox (latest)
   - iOS Safari + Chrome (mobile critique)
   - Tester toutes micro-interactions
   - Vérifier console errors

2. **Performance Audit**
   - Lighthouse score > 90 (Performance)
   - Core Web Vitals : LCP < 2.5s, FID < 100ms, CLS < 0.1
   - Compression vidéos si score faible

3. **Accessibilité**
   - Alt texts images
   - ARIA labels boutons
   - Focus states keyboard navigation
   - Contrast ratio texte/background (déjà OK blanc/noir)

4. **Deployment Vercel**
   ```bash
   npm run build         # Test production build
   vercel --prod         # Deploy
   ```

5. **Environment Variables**
   - Configurer Supabase keys dans Vercel dashboard
   - Tester formulaire Contact en prod

**Validation Finale**
- [ ] Toutes pages accessibles et rapides
- [ ] Animations fluides sur tous devices
- [ ] Formulaire Contact fonctionne en prod
- [ ] Aucune erreur console
- [ ] Score Lighthouse > 90

---

## 6. VALIDATION CRITERIA

### 6.1 Technical Checklist

**Code Quality**
- [ ] TypeScript strict mode, aucune erreur `tsc`
- [ ] ESLint passing (Next.js config)
- [ ] Composants réutilisent design system existant
- [ ] Aucun code dupliqué (DRY principle)

**Performance**
- [ ] Production build < 500KB initial JS
- [ ] Vidéos optimisées (< 5MB each)
- [ ] Fonts preloaded
- [ ] Images avec `next/image` lazy loading

**Data**
- [ ] Supabase RLS policies testées
- [ ] Aucune clé secrète côté client
- [ ] Gestion erreurs fetch (try/catch, fallback UI)

---

### 6.2 Visual Quality Audit

**Cohérence Design**
- [ ] Work & Contact suivent exactement le style Home
- [ ] Typographies respectées (Luckiest Guy, Chewy, Inter)
- [ ] Espacements cohérents (padding, margins)
- [ ] Couleurs uniquement celles du design system

**Animations**
- [ ] 60fps constant (check DevTools Performance)
- [ ] Aucun "jank" visible au scroll
- [ ] Transitions douces (pas de cuts brutaux)
- [ ] Physics naturelles (spring bounce, pas linear)

**Responsive**
- [ ] Mobile : Nav hamburger, carousels drag, fonts adaptées
- [ ] Tablet : Layout intermédiaire fonctionnel
- [ ] Desktop : Pleine largeur sans overflow

---

### 6.3 Browser Testing Protocol

**Devices à Tester**

1. **iPhone (Safari iOS)**
   - Video autoplay fonctionne (`playsInline` crucial)
   - Carousel drag fluide
   - Formulaire Contact clavier mobile

2. **Android (Chrome)**
   - Mêmes checks que iOS

3. **Desktop (Chrome/Safari/Firefox)**
   - Hover states
   - Parallax fluide
   - Modal vidéo responsive

**Test Scenarios**
1. Arriver sur Home → Scroll complet → Clic carousel → Modal
2. Naviguer Work → Scroll catégories → Clic projet → Modal
3. Formulaire Contact → Remplir → Submit → Success state
4. Navigation mobile → Hamburger → Links → Fermeture

**Critères de Validation**
- ✅ Aucun bug bloquant
- ✅ Toutes animations smooth
- ✅ Aucune donnée manquante
- ✅ Temps de réponse < 2s toutes actions

---

## 7. NEXT STEPS & DECISION POINTS

> [!WARNING]
> **Validation Utilisateur Requise**  
> Les points suivants nécessitent votre approbation explicite avant passage en phase EXECUTION.

### 7.1 Décisions Immédiates

1. **Supabase Schema**  
   ✅ Valider les tables `projects` et `contact_submissions` (Section 3.2)

2. **Work Page Layout**  
   ✅ Choisir entre Masonry (A) ou Grille Uniforme (B) - Recommandation : **B**

3. **Data Fetching**  
   ✅ Server Components (A) ou Client Components (B) - Recommandation : **A**

4. **Contact Success Animation**  
   ✅ Confetti (A), Checkmark (B), ou Text (C) - Recommandation : **B**

---

### 7.2 Améliorations Futures (Post-MVP)

**Nice-to-Have (Non-Bloquant)**
- Admin dashboard Supabase pour gérer projets (CRUD)
- Filtres dynamiques page Work (par catégorie, recherche)
- Page About (si contenu disponible)
- Analytics (Google Analytics / Plausible)
- Newsletter signup (footer)

**Optimisations Avancées**
- Service Worker pour cache vidéos
- Optimistic UI (formulaire Contact)
- A/B testing variantes CTA

---

## 8. APPENDIX

### 8.1 References Existantes

**Fichiers Clés Analysés**
- [page.tsx](file:///Users/guillaumephilippe/feelprod-local/src/app/page.tsx) - Home complète
- [globals.css](file:///Users/guillaumephilippe/feelprod-local/src/app/globals.css) - Design system
- [InfiniteCarousel.tsx](file:///Users/guillaumephilippe/feelprod-local/src/components/InfiniteCarousel.tsx) - Composant carousel
- [package.json](file:///Users/guillaumephilippe/feelprod-local/package.json) - Stack technique

**Documentation Externe**
- [Next.js 16 App Router](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

---

### 8.2 Glossary

- **BMAD** : Business, Model, Architecture, Development (framework Raphaël Breme)
- **CMS** : Content Management System (Supabase pour gérer projets)
- **RLS** : Row Level Security (sécurité Supabase)
- **LCP** : Largest Contentful Paint (métrique performance)
- **Spring Physics** : Animations avec effet ressort naturel

---

**Document Status** : 🟡 En attente de validation utilisateur  
**Next Action** : Réponse aux 4 décisions (Section 7.1) → Passage en phase EXECUTION

