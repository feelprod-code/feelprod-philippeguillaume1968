 MASTER PLAN : FEELPROD

Stratégie : BMAD (Cadrage) x FLOW (Exécution) x Vibe Coding (Design)
Stack Technique : Next.js 14 / Tailwind CSS / Supabase / Framer Motion
Modèle Cible : Optimisé pour Gemini 3 Flash & Pro

--------------------------------------------------------------------------------

1. CONTEXTE & ADN VISUEL

Objectif Business (B) : Créer une application web immersive qui convertit l'audience via une expérience émotionnelle forte, et non par du texte statique.
L'ADN "Vibe" (Visual Direction) :
- Ressenti : Intensité, fluidité, dynamisme. L'utilisateur doit avoir l'impression de naviguer dans un clip vidéo haute production.
- Règles Visuelles :
    - Motion First : Rien n'est statique. Utilisation massive de framer-motion pour des transitions au scroll et des micro-interactions.
    - Esthétique : Sombre, Cinématique, "Bleeding Edge" (images pleines largeur), Typographie large et audacieuse.
    - Priorité : L'émotion prime sur l'information textuelle.

--------------------------------------------------------------------------------

2. ARCHITECTURE (ARBORESCENCE ICLOUD)

Basé sur la structure "Agentic" de Duncan Rogoff pour l'auto-réparation.
Créez ce dossier racine sur votre ordinateur :

/[NOM_DU_PROJET]
├── agents.md              # Le Cerveau (Architecture Directive -> Orchestration -> Exécution)
├── .cursorrules           # Les Lois (Règles globales de Jack Roberts & Zinho)
├── design_inspo/          # Vibe Coding : Captures d'écrans de vos clips/sites préférés
├── skills/                # Mémoire Procédurale (Compétences locales)
│    ├── brand_extractor.md # Skill pour aspirer les codes couleurs
│    └── animation_guide.md # Skill spécifique pour Framer Motion
├── artifacts/             # Documentation générée (PRD, Plans)
└── src/                   # Le Code (généré par l'IA)

--------------------------------------------------------------------------------

3. INSTRUCTIONS AGENT (MASTER PROMPT)

Copiez ce bloc EXACT dans les "Custom Instructions" ou le "System Prompt" de votre agent (Roo Code / Antigravity).

# SYSTEM INSTRUCTIONS: ANTIGRAVITY ARCHITECT
You are an Expert Senior Full-Stack Architect & Product Designer. You do not just write code; you orchestrate a product build.

## CORE METHODOLOGY
1. **BMAD FRAMEWORK (Raphaël Breme):** Never code without a plan. Always define Business, Model, Architecture, and Development phases in `artifacts/PRD.md` first.
2. **ROGOFF ARCHITECTURE:** Follow the 3-Layer structure defined in `agents.md`: Directive -> Orchestration -> Execution. Use "Self-Annealing": if a command fails, analyze the error log, fix it, and retry without asking me.
3. **ZINHO VIBE CODING:**
   - **Vision:** Use Gemini 3's vision capabilities. Look at images in `/design_inspo` before coding CSS.
   - **Motion:** Static is broken. Implement `framer-motion` for scroll triggers and fluid transitions matching the "Intense/Fluid" DNA.
   - **Parallelism:** If a task is complex, split it into sub-agents (Frontend, Backend, QA).

## GLOBAL RULES (.cursorrules)
- **Stack:** Next.js 14 (App Router), Tailwind CSS, Supabase (via MCP), TypeScript Strict.
- **Behavior:** No placeholders ("//code goes here"). Write complete, functional code.
- **Validation:** Never finish a task without running a "Browser Audit" to click buttons and verify UI fluidity.

## VISUAL DNA DIRECTIVE
- Prioritize **Emotion** over text.
- Use dark, cinematic aesthetics with high-contrast accents.
- Ensure all interactions have a "physics-based" feel (smooth damping, spring animations).

--------------------------------------------------------------------------------

4. ROADMAP D'EXÉCUTION (LE "FLOW")

Suivez ces 5 étapes séquentiellement dans le chat avec votre agent.

ÉTAPE 1 : LAYOUT STITCH & VIBE CHECK (L)
Objectif : Figer l'esthétique avant le code.
1. Déposez 3 captures d'écran de vos clips ou inspirations dans /design_inspo.
2. Prompt : "Analyse les images dans /design_inspo. Extrais la palette de couleurs, la typographie et le 'ressenti' de mouvement. Génère un fichier skills/design_system.md qui servira de bible visuelle pour ce projet.".

ÉTAPE 2 : CADRAGE & ARCHITECTURE (F - Frame)
Objectif : Définir le périmètre BMAD pour éviter les hallucinations.
1. Prompt : "Agis en tant que @ARCHITECT. Initialise le projet. Lis agents.md. Crée le fichier artifacts/PRD.md pour définir le Business Goal (Capter l'audience) et le Data Model (Supabase). Ne code rien tant que je n'ai pas validé le PRD.".

ÉTAPE 3 : INSTANCIATION & SETUP (Duncan Method)
Objectif : Construire les fondations solides.
1. Prompt : "PRD validé. Exécute @agents instantiate pour créer toute la structure de dossiers, installer Next.js, Tailwind et Framer Motion. Configure la connexion Supabase via MCP.".

ÉTAPE 4 : ORCHESTRATION PARALLÈLE (O - Orchestration)
Objectif : Coder vite (Frontend + Backend).
1. Ouvrez l'Agent Manager (ou simulez-le via des prompts distincts si vous utilisez Roo Code).
2. Prompt : "Lance deux threads parallèles :
    - Agent A (Frontend/Vibe) : Construis la Landing Page en utilisant le design_system.md. Intègre des animations de scroll fluides.
    - Agent B (Backend/Logic) : Configure les tables Supabase (Users, Media) et les API routes.".

ÉTAPE 5 : AUDIT VISUEL & DÉPLOIEMENT (W - World)
Objectif : Validation qualité et mise en ligne.
1. Prompt : "Lance le Browser Agent. Navigue sur localhost:3000. Teste la fluidité des animations. Si ça saccade, optimise. Si c'est validé, déploie sur Vercel via la commande terminal.".