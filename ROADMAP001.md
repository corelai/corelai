# Corelai Prime — Development Roadmap

This document outlines the planned development phases for Corelai Prime and its Divisions.

---

## Vision

Corelai Prime is the central access hub of the Corelai Megacorporation universe.  
All public domains (corelai.com, corelai.tech, corelai.io, corelai.dev) will perform a 301 redirect to `prime.corelai.tech`.

Prime provides the welcome, abstract, lore introduction and entry points to Corelai's main Divisions.

---

## Phases

### Phase 1 — Prime Foundation

- Setup of `prime.corelai.tech`
- Static content in English (localization with `react-i18next` planned for future)
- Core design system:
    - Fonts
    - Colors
    - Tokens
    - Typography
    - Layout
- Welcome page
- Abstract section
- Links to Divisions

---

### Phase 2 — Division Bootstrapping (Hello World)

Goal: Have all main Divisions online and connected, even with minimal content.

| Division | Domain | Tech | Color | Initial Status |
|----------|--------|------|-------|----------------|
| EDEN     | eden.corelai.tech   | Vue.js   | Green  | Hello World |
| PYRA     | pyra.corelai.tech   | Angular  | Red    | Hello World |
| NEBULA   | nebula.corelai.tech | Next.js  | Blue   | Hello World |
| AXIS     | axis.corelai.tech   | Blazor   | Orange | Hello World |

---

### Phase 3 — Prime Expansion

- Implement navigation patterns between Divisions
- Create reusable layout components
- Start lore-driven content for each Division entry point
- Refine Prime UI/UX
- Introduce dark/light theming if applicable

---

### Phase 4 — Division Growth

Start enriching each Division with real content and functionalities:

- EDEN → Terraforming / Growth section
- PYRA → Industrial / Energy section
- NEBULA → Research / Technology section
- AXIS → Trade / Market section

---

### Phase 5 — EXOSKULL Development (Last Division)

Domain: `exoskull.corelai.tech`  
Theme: Security / Cyberwarfare / Operations

Concept:
- Tech-mixed stack
- Terminal UI components
- Raw dashboard style
- Monitoring / Logging / DevSecOps patterns
- Possible use of Rust, Go, WASM

EXOSKULL is intentionally the last and most complex division to be developed.

---

## Notes

- All names, colors, and technologies have been approved and defined.
- Localization is planned but postponed until Phase 3.
- Focus now is on infrastructure visibility and distributed structure.

---

Glory to the Build.  
Strength to the Lore.  
Control to Corelai.
