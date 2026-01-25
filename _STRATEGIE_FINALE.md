{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red36\green36\blue36;\red255\green255\blue255;\red30\green31\blue33;
\red183\green187\blue184;}
{\*\expandedcolortbl;;\cssrgb\c18824\c18824\c18824;\cssrgb\c100000\c100000\c100000;\cssrgb\c15686\c16471\c17255;
\cssrgb\c76863\c78039\c77255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs44 \cf2 \cb3 \expnd0\expndtw0\kerning0
\uc0\u55357 \u56960  MASTER PLAN : [NOM DE TON SITE]\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf2 \cb3 Strat\'e9gie : BMAD (Cadrage) x FLOW (Ex\'e9cution) x Vibe Coding (Design) Stack Technique : Next.js 14 / Tailwind CSS / Supabase / Framer Motion Mod\'e8le Cible : Optimis\'e9 pour Gemini 3 Flash & Pro\
--------------------------------------------------------------------------------\
\pard\pardeftab720\partightenfactor0

\fs32 \cf2 1. CONTEXTE & ADN VISUEL\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf2 \cb3 Objectif Business (B) : Cr\'e9er une application web immersive qui convertit l'audience via une exp\'e9rience \'e9motionnelle forte, et non par du texte statique. L'ADN "Vibe" (Visual Direction) :\cb1 \
\cb3 \'95 Ressenti : Intensit\'e9, fluidit\'e9, dynamisme. L'utilisateur doit avoir l'impression de naviguer dans un clip vid\'e9o haute production.\cb1 \
\cb3 \'95 R\'e8gles Visuelles :\cb1 \
\cb3 \'a0\'a0\'a0\'a0\uc0\u9702  Motion First : Rien n'est statique. Utilisation massive de 
\f1 \cf4 \cb5 framer-motion
\f0 \cf2 \cb3  pour des transitions au scroll et des micro-interactions.\cb1 \
\cb3 \'a0\'a0\'a0\'a0\uc0\u9702  Esth\'e9tique : Sombre, Cin\'e9matique, "Bleeding Edge" (images pleines largeur), Typographie large et audacieuse.\cb1 \
\cb3 \'a0\'a0\'a0\'a0\uc0\u9702  Priorit\'e9 : L'\'e9motion prime sur l'information textuelle.\
--------------------------------------------------------------------------------\
\pard\pardeftab720\partightenfactor0

\fs32 \cf2 2. ARCHITECTURE (ARBORESCENCE ICLOUD)\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf2 \cb3 Bas\'e9 sur la structure "Agentic" de Duncan Rogoff pour l'auto-r\'e9paration.\cb1 \
\cb3 Cr\'e9ez ce dossier racine sur votre ordinateur :\cb1 \
\pard\pardeftab720\partightenfactor0

\f1 \cf2 \cb3 /[NOM_DU_PROJET]\
\uc0\u9500 \u9472 \u9472  agents.md              # Le Cerveau (Architecture Directive -> Orchestration -> Ex\'e9cution)\
\uc0\u9500 \u9472 \u9472  .cursorrules           # Les Lois (R\'e8gles globales de Jack Roberts & Zinho)\
\uc0\u9500 \u9472 \u9472  design_inspo/          # Vibe Coding : Captures d'\'e9crans de vos clips/sites pr\'e9f\'e9r\'e9s\
\uc0\u9500 \u9472 \u9472  skills/                # M\'e9moire Proc\'e9durale (Comp\'e9tences locales)\
\uc0\u9474    \u9500 \u9472 \u9472  brand_extractor.md # Skill pour aspirer les codes couleurs [5]\
\uc0\u9474    \u9492 \u9472 \u9472  animation_guide.md # Skill sp\'e9cifique pour Framer Motion\
\uc0\u9500 \u9472 \u9472  artifacts/             # Documentation g\'e9n\'e9r\'e9e (PRD, Plans)\
\uc0\u9492 \u9472 \u9472  src/                   # Le Code (g\'e9n\'e9r\'e9 par l'IA)\
\pard\pardeftab720\partightenfactor0

\f0 \cf2 \
--------------------------------------------------------------------------------\
\pard\pardeftab720\partightenfactor0

\fs32 \cf2 3. INSTRUCTIONS AGENT (MASTER PROMPT)\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf2 \cb3 Copiez ce bloc EXACT dans les "Custom Instructions" ou le "System Prompt" de votre agent (Roo Code / Antigravity).\cb1 \
\pard\pardeftab720\partightenfactor0

\f1 \cf2 \cb3 # SYSTEM INSTRUCTIONS: ANTIGRAVITY ARCHITECT\
You are an Expert Senior Full-Stack Architect & Product Designer. You do not just write code; you orchestrate a product build.\
\
## CORE METHODOLOGY\
1. **BMAD FRAMEWORK (Rapha\'ebl Breme):** Never code without a plan. Always define Business, Model, Architecture, and Development phases in `artifacts/PRD.md` first [6, 7].\
2. **ROGOFF ARCHITECTURE:** Follow the 3-Layer structure defined in `agents.md`: Directive -> Orchestration -> Execution. Use "Self-Annealing": if a command fails, analyze the error log, fix it, and retry without asking me [4].\
3. **ZINHO VIBE CODING:**\
   - **Vision:** Use Gemini 3's vision capabilities. Look at images in `/design_inspo` before coding CSS.\
   - **Motion:** Static is broken. Implement `framer-motion` for scroll triggers and fluid transitions matching the "Intense/Fluid" DNA [1].\
   - **Parallelism:** If a task is complex, split it into sub-agents (Frontend, Backend, QA) [8].\
\
## GLOBAL RULES (.cursorrules)\
- **Stack:** Next.js 14 (App Router), Tailwind CSS, Supabase (via MCP), TypeScript Strict.\
- **Behavior:** No placeholders ("//code goes here"). Write complete, functional code.\
- **Validation:** Never finish a task without running a "Browser Audit" to click buttons and verify UI fluidity [9].\
\
## VISUAL DNA DIRECTIVE\
- Prioritize **Emotion** over text.\
- Use dark, cinematic aesthetics with high-contrast accents.\
- Ensure all interactions have a "physics-based" feel (smooth damping, spring animations).\
\pard\pardeftab720\partightenfactor0

\f0 \cf2 \
--------------------------------------------------------------------------------\
\pard\pardeftab720\partightenfactor0

\fs32 \cf2 4. ROADMAP D'EX\'c9CUTION (LE "FLOW")\cb1 \
\pard\pardeftab720\partightenfactor0

\fs28 \cf2 \cb3 Suivez ces 5 \'e9tapes s\'e9quentiellement dans le chat avec votre agent.\cb1 \
\cb3 \'c9TAPE 1 : LAYOUT STITCH & VIBE CHECK (L)\cb1 \
\cb3 Objectif : Figer l'esth\'e9tique avant le code.\cb1 \
\cb3 1. D\'e9posez 3 captures d'\'e9cran de vos clips ou inspirations dans 
\f1 \cf4 \cb5 /design_inspo
\f0 \cf2 \cb3 .\cb1 \
\cb3 2. Prompt : "Analyse les images dans 
\f1 \cf4 \cb5 /design_inspo
\f0 \cf2 \cb3 . Extrais la palette de couleurs, la typographie et le 'ressenti' de mouvement. G\'e9n\'e8re un fichier 
\f1 \cf4 \cb5 skills/design_system.md
\f0 \cf2 \cb3  qui servira de bible visuelle pour ce projet.".\cb1 \
\cb3 \'c9TAPE 2 : CADRAGE & ARCHITECTURE (F - Frame)\cb1 \
\cb3 Objectif : D\'e9finir le p\'e9rim\'e8tre BMAD pour \'e9viter les hallucinations.\cb1 \
\cb3 1. Prompt : "Agis en tant que @ARCHITECT. Initialise le projet. Lis 
\f1 \cf4 \cb5 agents.md
\f0 \cf2 \cb3 . Cr\'e9e le fichier 
\f1 \cf4 \cb5 artifacts/PRD.md
\f0 \cf2 \cb3  pour d\'e9finir le Business Goal (Capter l'audience) et le Data Model (Supabase). Ne code rien tant que je n'ai pas valid\'e9 le PRD.".\cb1 \
\cb3 \'c9TAPE 3 : INSTANCIATION & SETUP (Duncan Method)\cb1 \
\cb3 Objectif : Construire les fondations solides.\cb1 \
\cb3 1. Prompt : "PRD valid\'e9. Ex\'e9cute 
\f1 \cf4 \cb5 @agents instantiate
\f0 \cf2 \cb3  pour cr\'e9er toute la structure de dossiers, installer Next.js, Tailwind et Framer Motion. Configure la connexion Supabase via MCP.".\cb1 \
\cb3 \'c9TAPE 4 : ORCHESTRATION PARALL\'c8LE (O - Orchestration)\cb1 \
\cb3 Objectif : Coder vite (Frontend + Backend).\cb1 \
\cb3 1. Ouvrez l'Agent Manager (ou simulez-le via des prompts distincts si vous utilisez Roo Code).\cb1 \
\cb3 2. Prompt : "Lance deux threads parall\'e8les :\cb1 \
\cb3 \'a0\'a0\'a0\'a0\uc0\u9702  Agent A (Frontend/Vibe) : Construis la Landing Page en utilisant le 
\f1 \cf4 \cb5 design_system.md
\f0 \cf2 \cb3 . Int\'e8gre des animations de scroll fluides.\cb1 \
\cb3 \'a0\'a0\'a0\'a0\uc0\u9702  Agent B (Backend/Logic) : Configure les tables Supabase (Users, Media) et les API routes.".\cb1 \
\cb3 \'c9TAPE 5 : AUDIT VISUEL & D\'c9PLOIEMENT (W - World)\cb1 \
\cb3 Objectif : Validation qualit\'e9 et mise en ligne.\cb1 \
\cb3 1. Prompt : "Lance le Browser Agent. Navigue sur 
\f1 \cf4 \cb5 localhost:3000
\f0 \cf2 \cb3 . Teste la fluidit\'e9 des animations. Si \'e7a saccade, optimise. Si c'est valid\'e9, d\'e9ploie sur Vercel via la commande terminal.".}