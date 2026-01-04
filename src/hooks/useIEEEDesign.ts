// src/hooks/useIEEEDesign.ts
/**
 * React hooks and utilities for IEEE Design System
 */

import { useMemo } from "react";
import ieeeDesign, {
  ieeeColors,
  ieeeComponents,
} from "@/config/ieee-design-system";

// ============================================================================
// DESIGN SYSTEM HOOK
// ============================================================================

/**
 * Main hook to access IEEE design system
 * @example
 * const { colors, getButton } = useIEEEDesign();
 */
export function useIEEEDesign() {
  return useMemo(
    () => ({
      colors: ieeeColors,
      typography: ieeeDesign.typography,
      spacing: ieeeDesign.spacing,
      shadows: ieeeDesign.shadows,
      borderRadius: ieeeDesign.borderRadius,
      animations: ieeeDesign.animations,
      breakpoints: ieeeDesign.breakpoints,

      // Component getters
      getButton: (variant: "primary" | "secondary" | "ghost") =>
        ieeeComponents.button[variant],
      getCard: () => ieeeComponents.card,
      getInput: () => ieeeComponents.input,

      // Utility functions
      utils: ieeeDesign.utils,
    }),
    []
  );
}

// ============================================================================
// COLOR UTILITIES HOOK
// ============================================================================

/**
 * Hook for working with IEEE colors
 * @example
 * const { primary, withOpacity } = useIEEEColors();
 */
export function useIEEEColors() {
  return useMemo(
    () => ({
      primary: ieeeColors.primary,
      secondary: ieeeColors.secondary,
      semantic: ieeeColors.semantic,
      neutral: ieeeColors.neutral,

      // Helper to get color with opacity
      withOpacity: (color: string, opacity: number) =>
        ieeeDesign.utils.getColorWithOpacity(color, opacity),

      // Helper to get CSS variable
      cssVar: (name: string) => ieeeDesign.utils.getCssVar(name),

      // Helper to create gradient
      gradient: (from: string, to: string, direction?: string) =>
        ieeeDesign.utils.getGradient(from, to, direction),
    }),
    []
  );
}

// ============================================================================
// RESPONSIVE DESIGN HOOK
// ============================================================================

/**
 * Hook for responsive breakpoint utilities
 * @example
 * const { isMobile, isTablet, isDesktop } = useIEEEBreakpoints();
 */
export function useIEEEBreakpoints() {
  const isServer = typeof window === "undefined";
  const width = isServer ? 1024 : window.innerWidth;

  return useMemo(() => {
    if (isServer) {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        currentBreakpoint: "desktop" as const,
      };
    }

    return {
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
      currentBreakpoint: (width < 768
        ? "mobile"
        : width < 1024
          ? "tablet"
          : "desktop") as "mobile" | "tablet" | "desktop",
    };
  }, [width, isServer]);
}

// ============================================================================
// COMPONENT CLASS BUILDERS
// ============================================================================

/**
 * Build IEEE button classes
 */
export function getIEEEButtonClasses(
  variant: "primary" | "secondary" | "ghost" = "primary",
  size: "sm" | "md" | "lg" = "md",
  fullWidth: boolean = false
): string {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-ieee-blue text-white hover:bg-ieee-blue-700 focus:ring-ieee-blue-500 border-2 border-ieee-blue hover:border-ieee-blue-700",
    secondary:
      "bg-white text-ieee-blue border-2 border-ieee-blue hover:bg-ieee-blue-50 focus:ring-ieee-blue-500",
    ghost:
      "bg-transparent text-ieee-blue hover:bg-ieee-blue-50 focus:ring-ieee-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`.trim();
}

/**
 * Build IEEE card classes
 */
export function getIEEECardClasses(
  variant: "default" | "elevated" | "bordered" = "default",
  hover: boolean = true
): string {
  const baseClasses = "bg-white rounded-lg transition-all";

  const variantClasses = {
    default: "shadow-sm border border-gray-200",
    elevated: "shadow-md",
    bordered: "border-2 border-gray-300",
  };

  const hoverClasses = hover ? "hover:shadow-ieee-sm hover:-translate-y-1" : "";

  return `${baseClasses} ${variantClasses[variant]} ${hoverClasses}`.trim();
}

/**
 * Build IEEE input classes
 */
export function getIEEEInputClasses(
  error: boolean = false,
  disabled: boolean = false
): string {
  const baseClasses =
    "w-full px-4 py-3 rounded-md border-2 transition-all focus:outline-none focus:ring-2 focus:ring-ieee-blue-100";

  const stateClasses = error
    ? "border-error focus:border-error"
    : "border-gray-400 focus:border-ieee-blue";

  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-60"
    : "bg-white";

  return `${baseClasses} ${stateClasses} ${disabledClasses}`.trim();
}

/**
 * Build IEEE badge classes
 */
export function getIEEEBadgeClasses(
  variant: "primary" | "success" | "warning" | "error" | "info" = "primary",
  size: "sm" | "md" | "lg" = "md"
): string {
  const baseClasses = "inline-flex items-center font-semibold rounded-full";

  const variantClasses = {
    primary: "bg-ieee-blue-100 text-ieee-blue",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`.trim();
}

/**
 * Build IEEE heading classes
 */
export function getIEEEHeadingClasses(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  className?: string
): string {
  const baseClasses = "font-bold text-gray-900";

  const levelClasses = {
    1: "text-5xl lg:text-6xl leading-tight",
    2: "text-4xl lg:text-5xl leading-tight",
    3: "text-3xl lg:text-4xl leading-snug",
    4: "text-2xl lg:text-3xl leading-snug",
    5: "text-xl lg:text-2xl leading-normal",
    6: "text-lg lg:text-xl leading-normal",
  };

  return `${baseClasses} ${levelClasses[level]} ${className || ""}`.trim();
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Get animation classes based on type
 */
export function getIEEEAnimationClasses(
  type: "fade-in" | "slide-in-right" | "slide-in-left" | "scale-in" | "bounce"
): string {
  const animationClass = `animate-${type}`;

  return animationClass;
}

/**
 * Build transition classes
 */
export function getIEEETransitionClasses(
  properties: string[] = ["all"],
  duration: "fast" | "base" | "slow" | "slower" = "base",
  easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" = "ease-out"
): string {
  const durationMap = {
    fast: "duration-150",
    base: "duration-200",
    slow: "duration-300",
    slower: "duration-500",
  };

  const easingMap = {
    ease: "ease",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out",
  };

  const transitionProps = properties.join(", ");

  return `transition-[${transitionProps}] ${durationMap[duration]} ${easingMap[easing]}`;
}

// ============================================================================
// LAYOUT UTILITIES
// ============================================================================

/**
 * Build IEEE container classes
 */
export function getIEEEContainerClasses(
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
): string {
  const baseClasses = "mx-auto px-4 sm:px-6 lg:px-8";

  const widthClasses = maxWidth
    ? {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        "2xl": "max-w-screen-2xl",
        full: "max-w-full",
      }[maxWidth]
    : "max-w-7xl";

  return `${baseClasses} ${widthClasses}`.trim();
}

/**
 * Build IEEE section classes
 */
export function getIEEESectionClasses(
  padding: "sm" | "md" | "lg" | "xl" = "md",
  background?: "white" | "gray" | "blue"
): string {
  const paddingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
  };

  const backgroundClasses = background
    ? {
        white: "bg-white",
        gray: "bg-gray-50",
        blue: "bg-ieee-blue-50",
      }[background]
    : "";

  return `${paddingClasses[padding]} ${backgroundClasses}`.trim();
}

// ============================================================================
// EXPORT ALL
// ============================================================================

const ieeeDesignHooks = {
  useIEEEDesign,
  useIEEEColors,
  useIEEEBreakpoints,
  getIEEEButtonClasses,
  getIEEECardClasses,
  getIEEEInputClasses,
  getIEEEBadgeClasses,
  getIEEEHeadingClasses,
  getIEEEAnimationClasses,
  getIEEETransitionClasses,
  getIEEEContainerClasses,
  getIEEESectionClasses,
};

export default ieeeDesignHooks;
