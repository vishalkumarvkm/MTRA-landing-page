---
name: Clinical Excellence
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414752'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#727783'
  outline-variant: '#c1c6d4'
  surface-tint: '#005eb5'
  primary: '#004e99'
  on-primary: '#ffffff'
  primary-container: '#0a66c2'
  on-primary-container: '#dbe6ff'
  inverse-primary: '#a8c8ff'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#4c4f51'
  on-tertiary: '#ffffff'
  tertiary-container: '#646769'
  on-tertiary-container: '#e4e6e8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#00468a'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is anchored in the principles of institutional prestige, reliability, and modern clinical care. The target audience includes patients seeking top-tier medical expertise and healthcare professionals requiring a high-functioning, ergonomic interface. 

The style is **Corporate Modern** with a focus on high-end clinical aesthetics. It prioritizes clarity and whitespace to reduce cognitive load, utilizing a "white-space-first" philosophy common in world-class medical institutions. The emotional response should be one of immediate calm, confidence, and trust. Visual weight is distributed through structured layouts, intentional typography, and a "soft-touch" approach to UI elements—avoiding harsh lines in favor of approachable, rounded forms and gentle depth.

## Colors

This design system utilizes a palette that balances authority with vitality. 

- **Primary Blue (#0A66C2):** Used for primary actions, branding, and navigation headers to instill a sense of institutional stability.
- **Secondary Teal (#14B8A6):** Applied to accents, health-related icons, and secondary call-to-actions to represent healing and modern technology.
- **Surface & Backgrounds:** The interface remains predominantly white (#FFFFFF) to ensure a "sterile" and clean feel. Light Gray (#F8FAFC) is used for section grouping and subtle background differentiation.
- **Typography:** Dark Text (#1E293B) provides high legibility and contrast against white backgrounds, ensuring accessibility for all users.

## Typography

The design system exclusively uses **Inter** for its exceptional legibility and systematic weight distribution. 

- **Hierarchy:** Display and Headline levels use tighter letter spacing and semi-bold weights to command attention without being aggressive. 
- **Readability:** Body text is optimized with a generous line height (1.5x) to facilitate the reading of complex medical information. 
- **Labels:** Small labels and metadata use a slightly increased letter spacing and medium weight to maintain clarity at smaller scales.
- **Mobile Scaling:** Headlines transition to smaller, more compact sizes on mobile devices to prevent excessive line-breaking while maintaining visual impact.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for desktop views to maintain a high-end, editorial feel, transitioning to a **Fluid Grid** for tablet and mobile.

- **Desktop (1280px+):** 12-column grid, 24px gutters, and 80px side margins. 
- **Tablet (768px - 1279px):** 8-column grid, 20px gutters, 32px side margins.
- **Mobile (Up to 767px):** 4-column grid, 16px gutters, 16px side margins.

The spacing rhythm is based on an 8px baseline. Use `lg` and `xl` spacing for section vertical padding to emphasize the premium, airy quality of the brand. Components should favor internal padding of `md` (24px) to ensure touch targets are generous and content has room to breathe.

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and tonal layering. 

- **Surface Strategy:** The primary background is white. Secondary content containers use the Light Gray (#F8FAFC) to create subtle separation without the need for borders.
- **Shadow Profile:** Shadows are extremely diffused with low opacity (4-8%). Use a subtle blue-tinted shadow (`rgba(10, 102, 194, 0.05)`) to maintain color harmony with the primary blue. 
- **Interaction Depth:** Interactive elements like cards should use a "lift" effect on hover, increasing the shadow spread and slightly shifting the element upwards by 2-4px. 
- **Overlay Surfaces:** Modals and dropdowns utilize a higher elevation with a 16px blur radius to suggest they are floating closer to the user in the 3D space.

## Shapes

The design system uses a **Rounded** shape language to appear approachable and human-centric, avoiding the clinical coldness of sharp corners.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Content sections and large feature cards use `rounded-lg` (1rem / 16px) to emphasize the soft, modern aesthetic.
- **Specialty Shapes:** Search bars and specific status chips may use `rounded-xl` (1.5rem / 24px) to differentiate them as distinct utility or status indicators.
- **Icons:** Should follow a "Soft" corner logic (2px internal radius) to match the container language.

## Components

- **Buttons:** Primary buttons use the Primary Blue with white text and 24px horizontal padding. Secondary buttons use a Teal outline or subtle teal background. All buttons have a subtle 1px border.
- **Input Fields:** Use Light Gray (#F8FAFC) backgrounds with a 1px border that shifts to Primary Blue on focus. Labels sit clearly above the input in `label-md` style.
- **Cards:** White background with a 1px Light Gray border and the "Ambient Shadow" defined in Elevation. Corner radius is set to 16px.
- **Chips/Badges:** Used for patient status or department categorization. They feature a desaturated version of the secondary teal or primary blue with dark text to ensure readability without overpowering the page.
- **Lists:** Clean, borderless list items with 16px vertical padding, separated by a 1px Light Gray divider. Icons in lists should be centered in a circular 40px container.
- **Progress Indicators:** Soft, rounded bars using Secondary Teal to indicate health metrics or completion states.
- **Doctor/Provider Profiles:** Specialized cards featuring high-quality photography with circular masks and clear typography hierarchy for credentials.