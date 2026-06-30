# Project Memory (brain.md)

This file acts as persistent memory for AI agents working on the MERC Health project. Read these rules before making architectural or UI changes.

## UI & Styling Constraints

1. **No Global Image Size Resets**: 
   - NEVER add global CSS rules like `img { max-width: 100%; height: auto; }` to `index.css`.
   - Tailwind v4 handles responsive images natively. Adding raw CSS resets will override specific Tailwind utility classes (like `h-8` or `h-16`), causing extreme layout crashes where images scale unpredictably.

2. **Navbar Logo Sizing**: 
   - The logo in `src/components/Navbar.tsx` MUST use explicit Tailwind height constraints (e.g., `h-12 sm:h-16 w-auto`).
   - Do not attempt to manage its size globally or via external CSS.

3. **Hero Section / Header Overlap**: 
   - The Navbar is a `fixed` element with a translucent backdrop blur. 
   - When modifying or creating full-screen hero sections (like `ParallaxHero.tsx`), ensure the section has a specific top margin (e.g., `mt-[88px] sm:mt-[112px]`) corresponding to the Navbar's height.
   - Do not let important visual content (like faces or text) sit at absolute `top-0` without padding/margin, as it will be hidden behind the header.

4. **Image Cropping**: 
   - For background images featuring people, always favor `object-top` (or custom positions like `object-[center_15%]`) over `object-center` to ensure heads/faces are not cropped off on ultra-wide or mobile screens.
