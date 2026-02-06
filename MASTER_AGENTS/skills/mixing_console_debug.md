---
name: The Mixing Console Method (Visual Debugging)
description: Protocol and CSS templates for creating high-fidelity visual debugging pages that reveal invisible spacing issues (padding, margins, containers) using pastel overlays and hatching.
---

# THE MIXING CONSOLE METHOD (VISUAL DEBUGGING)

When standard browser inspection is too abstract or confusing for the user, deploy the **Mixing Console Method**.

## 1. THE OBJECTIVE
To transform invisible CSS rules (padding, margin, containers) into **tangible, named, colored blocks** that the user can point to and say: "Remove this Green Block."

## 2. THE 3 PILLARS OF TRUTH
1.  **Pastel Identification**: Every section gets a unique pastel background (`bg-blue-100`, `bg-purple-100`, `bg-orange-100`). This proves *where* a section starts and ends.
2.  **Hatched Spacing**: Padding is not empty space; it is matter. Visualize it with **semi-transparent green hatching** overlay. This allows the underlying section color to show through, proving ownership.
3.  **Thick Borders**: Sections are bounded by **4px solid borders**. No ambiguity about boundaries.

## 3. IMPLEMENTATION PROTOCOL

### Step 1: Duplicate & Isolate
Create `src/app/test-[page]-debug/page.tsx`. Copy the *exact* production code. Do not simplify text or images.

### Step 2: Inject the CSS Engine
Copy/Paste this standardized CSS block into the debug page:

```javascript
const debugStyles = `
  /* 1. NON-INTRUSIVE OVERLAYS */
  .debug-overlay { pointer-events: none; z-index: 9999; }
  
  /* 2. SECTION BOUNDARIES (THE TRUTH) */
  .dbg-box {
      border: 4px solid blue !important; /* Thick Borders */
      position: relative;
  }
  .dbg-box::after {
      content: attr(data-label);
      position: absolute; top: 0; right: 0;
      background: blue; color: white;
      font-size: 10px; padding: 2px 6px; z-index: 100;
  }

  /* 3. PADDING VISUALIZATION (THE HAT) */
  .dbg-space-visu {
      position: absolute; left: 0; width: 100%;
      /* Semi-transparent Green Hatching to reveal underlying background */
      background: repeating-linear-gradient(
        45deg,
        rgba(0, 128, 0, 0.15),
        rgba(0, 128, 0, 0.15) 10px,
        transparent 10px,
        transparent 20px
      );
      border-top: 1px dotted green; border-bottom: 1px dotted green;
      display: flex; align-items: center; justify-content: center;
      color: darkgreen; font-weight: bold; font-size: 10px;
      pointer-events: none; z-index: 50;
  }
  
  /* 4. SPACERS (THE SEPARATORS) */
  .dbg-spacer {
      outline: 2px solid magenta; position: relative;
      background: rgba(255, 0, 255, 0.05);
  }
  .dbg-spacer::before {
      content: attr(data-id);
      position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
      background: magenta; color: white; font-size: 10px; padding: 2px 6px;
  }
`;
```

### Step 3: Apply the Layers
Wrap content in the React component:

1.  **Add Backgrounds**: `className="bg-blue-100 ... dbg-box" data-label="SECTION A"`
2.  **Add Padding Visualizers**:
    ```jsx
    {/* Inside Section, at top/bottom */}
    <div className="dbg-space-visu top-0 h-24 md:h-32">⬇️ PADDING TOP (py-32)</div>
    <div className="dbg-space-visu bottom-0 h-24 md:h-32">⬆️ PADDING BOTTOM (py-32)</div>
    ```

## 4. THE INTERACTION LOOP
Once deployed:
1.  **Ask**: "Look at the Green Hatching. Do you want to keep it or kill it?"
2.  **Act**: If user says "Kill Green", change `py-32` to `pt-32 pb-0` (or `py-0`).

This method eliminates "I don't understand the white space" feedback loops.
