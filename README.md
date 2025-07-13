# Tales of the Seven Seas Tutorial Site

This repository contains a comprehensive static tutorial website for **Tales of the Seven Seas**—an exploration-worldbuilding nation roleplay game where you build fictional cultures on an alternate-geography map, starting from the Bronze Age.

---

## Features

- **Comprehensive multi-page structure** covering all game aspects:
  - **Home** (`index.html`) - Welcome and quick reference
  - **Spawning Your Nation** (`spawning.html`) - Character creation and lifestyle selection
  - **Basic Mechanics** (`basic-mechanics.html`) - Core gameplay systems
  - **Nation Types** (`nation-types.html`) - Player, Mod, and NPC nations
  - **Migration** (`migration.html`) - Emergency relocation mechanics
  - **Map & Visibility** (`map.html`) - Navigation and exploration
  - **Terrain Types** (`terrain.html`) - Environmental effects and modifiers
  - **Exploration Campaigns** (`exploration.html`) - Discovery and adventure
  - **Worldbuilding & Currency** (`worldbuilding.html`) - Lore creation and coin system
  - **Land & Resources** (`land-resources.html`) - Territory expansion and resource management
  - **Culture & Technology** (`culture-technology.html`) - Civilization development
  - **War System** (`war.html`) - Strategic combat and conquest
  - **Treaties & Diplomacy** (`treaties.html`) - Diplomatic relationships

- **Professional design features**:
  - **Responsive design** optimized for desktop and mobile
  - **Custom CSS grid layouts** for organized content presentation
  - **GSAP animations** with page-specific effects and smooth transitions
  - **Accessibility features** including proper ARIA labels and semantic markup
  - **Professional color scheme** with CSS custom properties
  - **Interactive hover effects** and smooth navigation transitions

- **Content organization**:
  - **Card-based layouts** for easy scanning of information
  - **Quick reference sections** for immediate access to key data
  - **Comprehensive rule explanations** with examples and formatting
  - **Cross-linked navigation** between related topics
  - **Visual hierarchy** with proper heading structure

---

## Folder Structure

```
/ (repo root)
├─ index.html                     # Main landing page
├─ spawning.html                  # Nation creation guide
├─ basic-mechanics.html           # Core gameplay mechanics
├─ nation-types.html              # Player categories explained
├─ migration.html                 # Emergency relocation system
├─ map.html                       # Navigation and visibility rules
├─ terrain.html                   # Environmental effects
├─ exploration.html               # Discovery campaigns
├─ worldbuilding.html             # Lore and currency system
├─ land-resources.html            # Territory and resource management
├─ culture-technology.html        # Civilization advancement
├─ war.html                       # Combat system and warfare
├─ treaties.html                  # Diplomacy and agreements
├─ README.md                      # This file
├─ _config.yml                    # Jekyll configuration (GitHub Pages)
├─ assets/
│  ├─ css/
│  │  └─ style.css               # Main stylesheet with responsive design
│  ├─ js/
│  │  └─ main.js                 # GSAP animations and interactions
│  └─ images/                    # Visual assets
│     ├─ map.png                 # Region map
│     ├─ sample spawn.png        # Spawning example
│     ├─ terrain types.png       # Terrain reference
│     ├─ visibility.png          # Visibility mechanics
│     └─ exploration.png         # Exploration diagram
└─ pages/                        # Legacy page structure (preserved)
   └─ nation-types.html          # Alternative nation types page
```

---

## Technical Details

### CSS Architecture
- **CSS Custom Properties** for consistent theming and easy maintenance
- **CSS Grid and Flexbox** for responsive layouts
- **Card-based design system** for consistent content presentation
- **Professional color palette** with gradients and hover effects
- **Mobile-first responsive design** with breakpoints at 768px

### JavaScript Features
- **GSAP 3.12.2** loaded from CDN for performance
- **Page-specific animations** tailored to content type
- **Smooth navigation transitions** with hover effects
- **Progressive enhancement** - site works without JavaScript

### Accessibility
- **Semantic HTML5** markup throughout
- **ARIA labels** on navigation elements
- **Proper heading hierarchy** for screen readers
- **High contrast ratios** for text readability
- **Keyboard navigation** support

---

## Game Overview

**Tales of the Seven Seas** is a nation roleplay game featuring:

- **Three Lifestyles**: Farmer (agriculture), Gatherer (hunting/foraging), Herder (nomadic)
- **Alternate Earth Map**: Real-world regions correspond to fictional locations
- **Bronze Age Setting**: Technology starts primitive and advances through research
- **Exploration System**: Discover new lands with roleplay-driven campaigns
- **Comprehensive Combat**: Strategic war system with multiple unit types
- **Cultural Development**: Custom culture abilities and technology trees
- **Economic System**: Coin-based economy driven by worldbuilding content
- **Diplomatic Framework**: Treaties and alliances with mechanical enforcement

---

## Hosting

This site is designed for **GitHub Pages** hosting with Jekyll support. The `_config.yml` file enables GitHub Pages processing while maintaining compatibility with static hosting.

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve with any static web server (Python's `http.server`, Live Server extension, etc.)

### GitHub Pages Deployment
1. Push to `main` branch
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://username.github.io/repository-name`

---

## Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile browsers** with responsive design
- **Graceful degradation** for older browsers without full CSS Grid support
- **Progressive enhancement** with JavaScript animations

---

## Contributing

This tutorial site serves as comprehensive documentation for the **Tales of the Seven Seas** game. Updates should maintain:

- **Consistent styling** across all pages
- **Mobile responsiveness** for all new content
- **Accessible markup** with proper semantic structure
- **Cross-browser compatibility** testing
- **Content accuracy** with game mechanics

---

## License

Content specific to **Tales of the Seven Seas** game mechanics and rules. Website code and structure available for educational purposes.
