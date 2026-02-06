# 📦 INSTALLATION REMOTION - iMac

## Problème rencontré
Le cache npm contenait des fichiers root qui bloquaient l'installation.

## ✅ Solution validée

Exécutez cette commande **une seule fois** dans le terminal :

```bash
sudo rm -rf ~/.npm/_cacache && npm install --legacy-peer-deps remotion@latest @remotion/cli@latest @remotion/player@latest
```

Cette commande :
1. Nettoie le cache npm corrompu (avec sudo)
2. Installe Remotion avec `--legacy-peer-deps` (contourne les conflits React 19)

## Vérification de l'installation

```bash
cd /Users/guillaumephilippe/feelprod-local
npm list remotion @remotion/cli @remotion/player
```

## Scripts à ajouter dans package.json

Une fois installé, ajoutez ces scripts :

```json
{
  "scripts": {
    "remotion:studio": "remotion studio",
    "remotion:render": "remotion render",
    "remotion:preview": "remotion preview"
  }
}
```

## Test de l'installation

```bash
npx remotion --version
```

Si cette commande affiche la version, Remotion est correctement installé ! 🎉

---

**Date**: 2026-02-06  
**Machine**: iMac Guillaume  
**Statut**: En attente d'installation manuelle
