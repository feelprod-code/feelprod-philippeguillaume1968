# 🚀 GUIDE DE DÉPLOIEMENT VERCEL

## ✅ Pré-requis

- [x] Build production réussi (`npm run build` ✅)
- [x] Code committé sur Git
- [ ] Repository GitHub créé
- [ ] Compte Vercel (gratuit)
- [ ] Projet Supabase configuré (optionnel pour MVP)

---

## 📋 ÉTAPE 1 : Préparer GitHub

### 1.1 Créer le repository GitHub

```bash
# Si pas encore fait, créer un repo sur github.com
# Puis lier le repo local :

git remote add origin https://github.com/[votre-username]/feelprod.git

# Ou si déjà existant, vérifier :
git remote -v
```

### 1.2 Commit et Push

```bash
# Commit les changements
git commit -m "🚀 Prêt pour déploiement Vercel - Build OK"

# Push vers GitHub
git push -u origin main
```

---

## 📋 ÉTAPE 2 : Déployer sur Vercel

### Option A : Via Interface Web (Recommandé)

1. **Aller sur [vercel.com](https://vercel.com)**
   - Se connecter avec GitHub

2. **Importer le projet**
   - Cliquer "Add New..." → "Project"
   - Sélectionner le repository `feelprod-local`
   - Cliquer "Import"

3. **Configuration du projet**
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `./` (laisser par défaut)
   - **Build Command** : `npm run build` (auto)
   - **Output Directory** : `.next` (auto)

4. **Variables d'environnement** (IMPORTANT)
   
   Cliquer sur "Environment Variables" et ajouter :
   
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
   
   **⚠️ NOTES :**
   - Si Supabase n'est pas encore configuré, **laisser vide** → le site utilisera les données MOCK
   - Tu pourras ajouter ces variables plus tard dans Settings > Environment Variables

5. **Deploy**
   - Cliquer "Deploy"
   - Attendre 2-3 minutes
   - ✅ Site en ligne !

### Option B : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (première fois)
vercel

# Suivre les prompts :
# - Set up and deploy? Yes
# - Which scope? [Votre compte]
# - Link to existing project? No
# - Project name? feelprod
# - Directory? ./
# - Override settings? No

# Deploy en production
vercel --prod
```

---

## 📋 ÉTAPE 3 : Configuration Post-Déploiement

### 3.1 Vérifier le déploiement

1. Ouvrir l'URL Vercel (ex: `https://feelprod.vercel.app`)
2. Tester les pages :
   - ✅ Home (`/`)
   - ✅ Work (`/work`) → Doit afficher les projets MOCK
   - ✅ Contact (`/contact`)
3. Vérifier la console navigateur (F12) → Aucune erreur critique

### 3.2 Configurer le domaine personnalisé (Optionnel)

1. Vercel Dashboard → Settings → Domains
2. Ajouter votre domaine (ex: `feelprod.com`)
3. Suivre les instructions DNS

### 3.3 Ajouter Supabase (Quand prêt)

1. Créer projet Supabase sur [supabase.com](https://supabase.com)
2. Exécuter le SQL schema (voir `_ANTIGRAVITY/02_Specs/TECH_SPECS.md`)
3. Récupérer les clés dans Settings > API
4. Vercel Dashboard → Settings → Environment Variables
5. Ajouter :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Redéployer : Deployments → ... → Redeploy

---

## 🔧 TROUBLESHOOTING

### Erreur : "Build failed"

```bash
# Tester le build localement
npm run build

# Si erreurs TypeScript, vérifier :
npx tsc --noEmit
```

### Erreur : "Module not found"

```bash
# Vérifier que toutes les dépendances sont dans package.json
npm install

# Commit package-lock.json
git add package-lock.json
git commit -m "fix: update dependencies"
git push
```

### Vidéos ne se chargent pas

- Vérifier que les fichiers MP4 sont bien dans `/public/assets/videos/`
- Vérifier la taille des vidéos (< 50MB recommandé)
- Compresser si nécessaire avec Handbrake ou FFmpeg

### Images manquantes

- Vérifier les chemins dans le code (ex: `/assets/images/1-RELLE.png`)
- S'assurer que les images sont committées dans Git
- Vérifier `.gitignore` ne bloque pas `/public/`

---

## 📊 MONITORING

### Analytics Vercel (Gratuit)

- Vercel Dashboard → Analytics
- Voir les visites, performances, erreurs

### Lighthouse Score

```bash
# Tester en local
npm run build
npm run start

# Ouvrir Chrome DevTools → Lighthouse
# Lancer audit (Mobile + Desktop)
```

**Targets :**
- Performance : > 85
- Accessibility : > 95
- Best Practices : > 90
- SEO : > 95

---

## 🎯 CHECKLIST FINALE

Avant de partager le site :

- [ ] Build production OK (`npm run build`)
- [ ] Code pushé sur GitHub
- [ ] Déployé sur Vercel
- [ ] Toutes les pages accessibles
- [ ] Vidéos se chargent correctement
- [ ] Animations fluides (60fps)
- [ ] Responsive mobile testé
- [ ] Formulaire Contact fonctionne (si Supabase configuré)
- [ ] Aucune erreur console
- [ ] Lighthouse score > 85

---

## 🚀 COMMANDES RAPIDES

```bash
# Workflow complet
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push

# Vercel redéploie automatiquement à chaque push sur main !
```

---

## 📞 SUPPORT

- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs** : [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase Docs** : [supabase.com/docs](https://supabase.com/docs)

---

**Status** : 🟢 Prêt pour déploiement  
**Dernière mise à jour** : 1er février 2026
