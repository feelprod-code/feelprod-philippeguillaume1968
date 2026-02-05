# SKILL: STITCH MCP INTEGRATION

## 1. VISION
Ce skill permet à Antigravity d'interagir directement avec l'environnement Stitch de Google via le protocole MCP (Model Context Protocol).

## 2. CAPACITÉS
Grâce au serveur MCP Stitch configuré, l'agent peut désormais :
- Accéder aux designs et assets stockés dans le cloud Stitch.
- Lire les spécifications de projet directement depuis la source.
- Synchroniser les définitions visuelles.

## 3. CONFIGURATION
- **Fichier de Config** : `_ANTIGRAVITY/stitch_mcp_config.json`
- **Clé API** : Stockée sécurisée dans `.env.local` (Variable `STITCH_API_KEY`)
- **Serveur** : `https://stitch.googleapis.com/mcp`

## 4. UTILISATION
Pour activer ce skill dans une session, demandez à l'agent de "Charger le contexte Stitch" ou d'utiliser les outils MCP spécifiques.
