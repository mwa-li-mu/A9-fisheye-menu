# 10 Usability Heuristics Object Menu

## Overview

An interactive web-based menu implementing Jakob Nielsen's 10 Usability Heuristics for User Interface Design. This project features an object menu where each heuristic can be hovered over or clicked to reveal detailed information, with smooth animations and intuitive interactions.

## Features

- **10 Interactive Menu Items**: Each representing one of Nielsen's usability heuristics
- **Hover-to-Enlarge**: Mouse over any heuristic to temporarily enlarge it and view details
- **Click-to-Select**: Click any heuristic to keep it enlarged persistently
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Clear State Management**: Visual feedback for hover vs. click states

## Heuristics Included

1. **UH#1**: Visibility of system status
2. **UH#2**: Match between system and the real world
3. **UH#3**: User control and freedom
4. **UH#4**: Consistency and standards
5. **UH#5**: Error prevention
6. **UH#6**: Recognition rather than recall
7. **UH#7**: Flexibility and efficiency of use
8. **UH#8**: Aesthetic and minimalist design
9. **UH#9**: Help users recognize, diagnose, and recover from errors
10. **UH#10**: Help and documentation

## Technical Implementation

### Key Technologies
- **HTML5**: Semantic structure
- **CSS3**: Flexbox, gradients, transitions, and animations
- **Vanilla JavaScript**: No external dependencies

## How to Use

1. **Hover Interaction**: Move your mouse over any heuristic to temporarily enlarge it and see its detailed description
2. **Click Interaction**: Click any heuristic to keep it enlarged. The detailed description remains visible
3. **Deselect Options**:
   - Click the same heuristic again to return it to normal size
   - Click anywhere outside the menu to deselect all items
   - Hover over a different heuristic (clicked item returns to normal, new item highlights)

## Code Structure

```html
index.html
<head>
    Meta tags for responsiveness
    CSS styles with:
       Base styling and layout
       Menu container and item styling
       Hover and active state rules
       Responsive media queries 
<body>
    Container with title and subtitle
    Menu container with 10 heuristic items
    Instructions section
    JavaScript implementation:
        Mouse position tracking
        Hover state management
        Click interaction handling
            Event delegation and cleanup
```

## Credits

Based on Jakob Nielsen's "10 Usability Heuristics for User Interface Design" (1994).

---
