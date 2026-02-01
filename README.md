# 🎬 FeelProd - Creative Showcase

Portfolio vidéo immersif construit avec Next.js 16, Tailwind CSS et Framer Motion.

## 🚀 Stack Technique

- **Framework** : Next.js 16.1.4 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion 12.29.0
- **Backend** : Supabase (PostgreSQL + Storage)
- **TypeScript** : Strict mode
- **Déploiement** : Vercel

## 📦 Installation Locale

```bash
# Cloner le repo
git clone https://github.com/[votre-username]/feelprod-local.git
cd feelprod-local

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local avec vos clés Supabase

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 🗄️ Configuration Supabase

### 1. Créer un projet Supabase

1. Aller sur [supabase.com/dashboard](https://supabase.com/dashboard)
2. Créer un nouveau projet (région : Europe West)
3. Récupérer les credentials dans Settings > API

### 2. Exécuter le schema SQL

Copier le contenu de `_ANTIGRAVITY/02_Specs/TECH_SPECS.md` (section SQL) dans le SQL Editor de Supabase.

### 3. Variables d'environnement

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🚢 Déploiement Vercel

### Via GitHub (Recommandé)

1. Push le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Importer le repository GitHub
4. Configurer les variables d'environnement :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy !

### Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📁 Structure du Projet

```
feelprod-local/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Home
│   │   ├── work/page.tsx      # Portfolio
│   │   └── contact/page.tsx   # Contact
│   ├── components/            # Composants réutilisables
│   │   ├── Reveal.tsx         # Animation scroll
│   │   ├── InfiniteCarousel.tsx
│   │   ├── VideoModal.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── ProjectCard.tsx
│   └── lib/
│       └── supabase.ts        # Client Supabase
├── public/
│   └── assets/
│       ├── videos/            # Vidéos background
│       └── images/            # Images projets
├── _ANTIGRAVITY/              # Documentation
│   ├── 01_Discovery/PRD.md
│   └── 02_Specs/TECH_SPECS.md
└── package.json
```

## 🎨 Design System

- **ADN Visuel** : Minimaliste, blanc pur, Apple-inspired
- **Typographies** : 
  - Luckiest Guy (titres comic)
  - Chewy (sous-titres)
  - Inter (corps de texte)
- **Animations** : Physics-based avec spring damping
- **Responsive** : Mobile-first (breakpoints : 768px, 1024px)

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur développement (localhost:3000)
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # ESLint
```

## 🔒 Sécurité

- `.env.local` est dans `.gitignore` (ne jamais commit les clés)
- Supabase RLS (Row Level Security) activé
- Clés publiques uniquement côté client (NEXT_PUBLIC_*)

## 📄 License

Propriétaire - FeelProd © 2026

## 🤝 Contact

Pour toute question : [votre-email@example.com]

---

**Built with ❤️ using the BMAD Framework & Rogoff Protocol**
