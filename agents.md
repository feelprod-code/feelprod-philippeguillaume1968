# AGENTIC ARCHITECTURE (ROGOFF PROTOCOL)

## 1. DIRECTIVE LAYER (THE "BRAIN")
**Role:** Strategy & Governance
- **Responsibilities:**
  - Define the User Vision & Business Goals.
  - Maintain the `.clinerules` and `artifacts/PRD.md`.
  - Ensure all work aligns with the "Visual DNA" (Intense, Cinematic).
- **Source of Truth:** `artifacts/PRD.md`

## 2. ORCHESTRATION LAYER (THE "MANAGER")
**Role:** Planning & Delegation
- **Responsibilities:**
  - Break down PRD requirements into specific implementation tasks.
  - Manage the "Implementation Plan" (e.g., in `artifacts/plan.md`).
  - Coordinate sub-agents (virtual roles) for specialized tasks (Frontend, Backend, QA).
- **Process:**
  - Never start coding without an updated Plan.
  - Split complex features into atomic steps.

## 3. EXECUTION LAYER (THE "BUILDER")
**Role:** Implementation & Verification
- **Responsibilities:**
  - Write actual code (Frontend/Backend).
  - Execute terminal commands.
  - **Self-Annealing:** If a command fails, fix it immediately without user prompt.
  - **Verification:** Always run a browser audit or test script before marking a task done.
