// src/config/ieee-design-system.ts
/**
 * IEEE Design System
 *
 * Centralized configuration for IEEE brand colors, typography, and design tokens.
 * Based on official IEEE Brand Guidelines (Pantone 3015 C)
 *
 * @see https://brand.ieee.org
 */

// ============================================================================
// COLOR SYSTEM
// ============================================================================

/**
 * IEEE Primary Brand Colors
 * Official IEEE Blue (PMS 3015 C) and its variants
 */
export const ieeeColors = {
  // Primary Blues
  primary: {
    DEFAULT: "#00629B", // Official IEEE Blue (PMS 3015 C)
    50: "#E6F2F8", // Lightest tint
    100: "#CCE5F1",
    200: "#99CBE3",
    300: "#66B1D5",
    400: "#3397C7",
    500: "#00629B", // Base
    600: "#004E7C",
    700: "#003B5D",
    800: "#00273E",
    900: "#001420",
    950: "#000A10", // Darkest shade
  },

  // Secondary Colors (from IEEE palette)
  secondary: {
    teal: "#00B5AD", // IEEE Teal accent
    orange: "#FF6F00", // Warning/alert color
  },

  // Semantic Colors
  semantic: {
    success: "#10B981", // Green for success states
    warning: "#F59E0B", // Amber for warnings
    error: "#EF4444", // Red for errors
    info: "#3B82F6", // Blue for information
  },

  // Neutral Grays
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
    950: "#030712",
  },

  // Special Colors
  white: "#FFFFFF",
  black: "#000000",
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

/**
 * IEEE Typography Standards
 * IEEE uses Helvetica/Arial font stack
 */
export const ieeeTypography = {
  fonts: {
    sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: '"Courier New", Courier, monospace',
  },

  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
    "8xl": "6rem", // 96px
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
} as const;

// ============================================================================
// SPACING SYSTEM
// ============================================================================

/**
 * Consistent spacing scale based on 4px baseline grid
 */
export const ieeeSpacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const ieeeBorderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const ieeeShadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  ieee: "0 10px 25px rgba(0, 98, 155, 0.15)", // Custom IEEE blue shadow
} as const;

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

/**
 * Pre-defined component styles for consistency
 */
export const ieeeComponents = {
  button: {
    primary: {
      bg: ieeeColors.primary.DEFAULT,
      bgHover: ieeeColors.primary[700],
      text: ieeeColors.white,
      border: ieeeColors.primary.DEFAULT,
      shadow: ieeeShadows.sm,
    },
    secondary: {
      bg: ieeeColors.white,
      bgHover: ieeeColors.primary[50],
      text: ieeeColors.primary.DEFAULT,
      border: ieeeColors.primary.DEFAULT,
      shadow: ieeeShadows.sm,
    },
    ghost: {
      bg: "transparent",
      bgHover: ieeeColors.primary[50],
      text: ieeeColors.primary.DEFAULT,
      border: "transparent",
      shadow: "none",
    },
  },

  card: {
    default: {
      bg: ieeeColors.white,
      border: ieeeColors.neutral[300],
      shadow: ieeeShadows.DEFAULT,
      radius: ieeeBorderRadius.lg,
    },
    hover: {
      shadow: ieeeShadows.ieee,
      translateY: "-2px",
    },
  },

  input: {
    default: {
      border: ieeeColors.neutral[400],
      borderFocus: ieeeColors.primary.DEFAULT,
      bg: ieeeColors.white,
      text: ieeeColors.neutral[900],
      placeholder: ieeeColors.neutral[500],
    },
  },
} as const;

// ============================================================================
// ANIMATION & TRANSITIONS
// ============================================================================

export const ieeeAnimations = {
  transition: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },

  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    linear: "linear",
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const ieeeBreakpoints = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get color with opacity
 * @example getColorWithOpacity(ieeeColors.primary.DEFAULT, 0.5) // rgba(0, 98, 155, 0.5)
 */
export function getColorWithOpacity(color: string, opacity: number): string {
  // Convert hex to RGB
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get CSS variable name for color
 * @example getCssVar('primary') // var(--ieee-primary)
 */
export function getCssVar(name: string): string {
  return `var(--ieee-${name})`;
}

/**
 * Generate gradient background
 * @example getGradient('primary', 'primary.700') // linear-gradient(...)
 */
export function getGradient(
  from: string,
  to: string,
  direction: string = "to-br"
): string {
  return `linear-gradient(${direction}, ${from}, ${to})`;
}

// ============================================================================
// CSS CUSTOM PROPERTIES EXPORT
// ============================================================================

/**
 * Generate CSS custom properties for use in global styles
 */
export function generateCssVariables(): Record<string, string> {
  return {
    // Primary colors
    "--ieee-primary": ieeeColors.primary.DEFAULT,
    "--ieee-primary-dark": ieeeColors.primary[700],
    "--ieee-primary-light": ieeeColors.primary[50],

    // Secondary colors
    "--ieee-teal": ieeeColors.secondary.teal,
    "--ieee-orange": ieeeColors.secondary.orange,

    // Semantic colors
    "--ieee-success": ieeeColors.semantic.success,
    "--ieee-warning": ieeeColors.semantic.warning,
    "--ieee-error": ieeeColors.semantic.error,
    "--ieee-info": ieeeColors.semantic.info,

    // Neutrals
    "--ieee-gray-50": ieeeColors.neutral[50],
    "--ieee-gray-100": ieeeColors.neutral[100],
    "--ieee-gray-200": ieeeColors.neutral[200],
    "--ieee-gray-300": ieeeColors.neutral[300],
    "--ieee-gray-400": ieeeColors.neutral[400],
    "--ieee-gray-500": ieeeColors.neutral[500],
    "--ieee-gray-600": ieeeColors.neutral[600],
    "--ieee-gray-700": ieeeColors.neutral[700],
    "--ieee-gray-800": ieeeColors.neutral[800],
    "--ieee-gray-900": ieeeColors.neutral[900],

    // Typography
    "--ieee-font-sans": ieeeTypography.fonts.sans,
    "--ieee-font-mono": ieeeTypography.fonts.mono,
  };
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type IEEEColor = keyof typeof ieeeColors;
export type IEEEPrimaryColor = keyof typeof ieeeColors.primary;
export type IEEENeutralColor = keyof typeof ieeeColors.neutral;
export type IEEESemanticColor = keyof typeof ieeeColors.semantic;

const ieeeDesignSystem = {
  colors: ieeeColors,
  typography: ieeeTypography,
  spacing: ieeeSpacing,
  borderRadius: ieeeBorderRadius,
  shadows: ieeeShadows,
  components: ieeeComponents,
  animations: ieeeAnimations,
  breakpoints: ieeeBreakpoints,
  utils: {
    getColorWithOpacity,
    getCssVar,
    getGradient,
    generateCssVariables,
  },
};

export default ieeeDesignSystem;
