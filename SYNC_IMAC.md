# 🔄 GUIDE DE SYNCHRONISATION iMAC

## 📅 Date : 2 février 2026
## 💻 Depuis : MacBook Air → vers iMac

---

## ⚠️ IMPORTANT

Tu as fait beaucoup de modifications aujourd'hui sur ton **MacBook Air**. Ton **iMac** a une ancienne version du projet. Voici comment synchroniser.

---

## 🎯 OPTION 1 : RÉCUPÉRER DEPUIS GITHUB (Recommandé)

### Sur ton iMac demain :

```bash
# 1. Ouvre le Terminal sur ton iMac

# 2. Va dans le dossier du projet
cd /Users/philippeguillaume/feelprod-local

# 3. Sauvegarde l'ancienne version (au cas où)
cd ..
mv feelprod-local feelprod-local-OLD-backup-02fev2026

# 4. Clone la version à jour depuis GitHub
git clone https://github.com/feelprod-code/feelprod-philippeguillaume1968.git feelprod-local

# 5. Entre dans le dossier
cd feelprod-local

# 6. Installe les dépendances
npm install

# 7. Lance le serveur
npm run dev
```

**✅ Avantage :** Tu auras exactement la même version que sur ton MacBook Air

---

## 🎯 OPTION 2 : METTRE À JOUR LE DOSSIER EXISTANT

### Si tu veux garder ton dossier actuel sur iMac :

```bash
# 1. Ouvre le Terminal sur ton iMac

# 2. Va dans le dossier du projet
cd /Users/philippeguillaume/feelprod-local

# 3. Sauvegarde tes modifications locales (si tu en as)
git stash

# 4. Récupère les dernières modifications depuis GitHub
git pull origin main

# 5. Réinstalle les dépendances (au cas où)
npm install

# 6. Lance le serveur
npm run dev
```

**⚠️ Attention :** Si tu as des modifications non committées sur l'iMac, elles seront mises de côté avec `git stash`

---

## 📋 MODIFICATIONS FAITES AUJOURD'HUI (2 février 2026)

### 🎬 Liens YouTube mis à jour (21 vignettes)

**Section ÉVASION (6 vignettes) :**
1. RELLE → `exnbHE-BgYw`
2. BARRIO LATINO SALSA → `AGUxUQ5bwXk`
3. L ARTIST EVENT → `STp41rTjP-Q`
4. ALEX → `WELgM9kD69A`
5. SALSA 4 → `sZX2ws_vSQI`
6. LAURE → `LjPaIVq8weg`
18. ELYSEE 63 → `N_f-Oepxyco`
20. AGUILA → `p9kzlJa5rA4`
23. BARRIO → `pEw1uxjsYvI`

**Section ADRÉNALINE (5 vignettes) :**
7. BAGART PLAN → `dp8Tt0_H7is`
8. BARRIO CARNAVAL → `5XSxn3IJvG8`
9. KARMA → `GsFDEIkVxAo`
10. MORSANG → `3nkt9iLfyfc`
11. BVAW → `iCkE_gYsLXo`
16. LEDJANE → `B6o4AcsAPSc`
17. CANNES SALSA → `P4E2A1CswL4`

**Section SOUVENIRS (3 vignettes) :**
12. ANNI ALLEMAGNE → `025yJW0B3GQ`
13. MARIAGE → `ucJyA0cVRdg`
14. THEO SURF → `v6BcNiiB9DA`
15. SOUVENIR 17 (Restauré) → `Pfj2jnbRwfw`
19. U9 → `aZBeiycEwl8`

### 🎨 Autres modifications :

- ✅ Vignettes MUSIQUES réduites (variant `square-small` : 160×160 mobile, 200×200 desktop)
- ✅ Section SOUVENIRS nettoyée (suppression de 3 vignettes : VENEJAN, VILLERS, Souvenirs)
- ✅ Nouveau variant `square-small` ajouté dans `InfiniteCarousel.tsx`

### 📁 Fichiers modifiés :

- `src/app/page.tsx` - Liens YouTube + suppression vignettes
- `src/components/InfiniteCarousel.tsx` - Nouveau variant `square-small`

---

## 🚀 SITE DÉPLOYÉ

**URL de production :**
https://feelprod-official-3wau-gtwy998d8-feelprods-projects.vercel.app

**Dashboard Vercel :**
https://vercel.com/feelprods-projects/feelprod-official-3wau

---

## 🔍 VÉRIFICATION APRÈS SYNC

Une fois synchronisé sur ton iMac, vérifie que :

1. ✅ Le serveur démarre sans erreur (`npm run dev`)
2. ✅ Les 14 vignettes vidéos ont les bons liens YouTube
3. ✅ La section MUSIQUES a des vignettes plus petites
4. ✅ La section SOUVENIRS n'a que 5 vignettes (ANNI ALLEMAGNE, MARIAGE, THEO SURF, SOUVENIR 17, U9)
5. ✅ La section ADRÉNALINE a 7 vignettes (ajout LEDJANE et CANNES SALSA)

---

## 💡 CONSEILS

### Si tu as des modifications sur l'iMac que tu veux garder :

```bash
# Avant de pull, sauvegarde-les
git stash save "Modifications iMac avant sync MacBook Air"

# Après le pull, tu peux les récupérer
git stash list  # Voir la liste
git stash pop   # Récupérer les modifications
```

### 🆕 NOUVEAU CONTENU (ÉVASION) :
- Ajout vignette "ELYSEE 63"
- Ajout vignette "AGUILA"
- Ajout vignette "BARRIO" (23)
- Images : `21-ELYSEE 63.png`, `20-Aguila.jpg`, `23-BARRIO.png`
- Liens : `N_f-Oepxyco`, `p9kzlJa5rA4`, `pEw1uxjsYvI`

### Si tu veux repartir de zéro sur l'iMac :

```bash
# Supprime tout et reclone
cd /Users/philippeguillaume
rm -rf feelprod-local
git clone https://github.com/feelprod-code/feelprod-philippeguillaume1968.git feelprod-local
cd feelprod-local
npm install
npm run dev
```

---

## 📞 EN CAS DE PROBLÈME

Si tu as des conflits ou des erreurs :

1. **Prends une capture d'écran de l'erreur**
2. **Note le message exact**
3. **Demande-moi de t'aider** en me donnant ces infos

---

**Dernière synchronisation :** 2 février 2026 à 00h10 (MacBook Air)  
**Commit GitHub :** `ajout-barrio-23` - "feat: ajout vignette BARRIO 23"
