/**
 * IEEE CS Design System Utilities
 * Consolidated utility functions for dynamic styling and class generation
 */

// COLOR UTILITIES

/**
 * Get color with opacity
 * @example getColorWithOpacity("#FFA300", 0.5) // rgba(255, 163, 0, 0.5)
 */
export function getColorWithOpacity(color: string, opacity: number): string {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get CSS variable name
 * @example getCssVar("orange-primary") // var(--cs-orange-primary)
 */
export function getCssVar(name: string): string {
  return `var(--cs-${name})`;
}

/**
 * Generate gradient background
 * @example getGradient("#FFA300", "#00B5E2") // linear-gradient(to right, #FFA300, #00B5E2)
 */
export function getGradient(
  from: string,
  to: string,
  direction: string = "to right"
): string {
  return `linear-gradient(${direction}, ${from}, ${to})`;
}

// CLASS BUILDER UTILITIES

/**
 * Combine multiple class strings safely
 * @example cn("px-4", condition && "bg-orange", undefined) // "px-4 bg-orange"
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Build IEEE CS button classes
 * @example getButtonClasses("primary", "md") // Returns tailwind/css classes
 */
export function getButtonClasses(
  variant: "primary" | "secondary" | "outline" | "ghost" = "primary",
  size: "sm" | "md" | "lg" = "md",
  fullWidth: boolean = false
): string {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold font-montserrat transition-all rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-[#FFA300] text-black border-2 border-[#FFA300] hover:bg-[#E87722] hover:border-[#E87722] hover:shadow-[0_4px_12px_rgba(255,163,0,0.3)] focus-visible:ring-[#FFA300]/40",
    secondary:
      "bg-[#00629B] text-white border-2 border-[#00629B] hover:bg-[#002855] hover:border-[#002855] hover:shadow-[0_4px_12px_rgba(0,98,155,0.3)] focus-visible:ring-[#00629B]/40",
    outline:
      "bg-white text-[#FFA300] border-2 border-[#FFA300] hover:bg-[#FFA300]/10 hover:border-[#E87722] hover:text-[#E87722] focus-visible:ring-[#FFA300]/40",
    ghost:
      "bg-transparent text-[#FFA300] border-2 border-transparent hover:bg-[#FFA300]/10 focus-visible:ring-[#FFA300]/40",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-7 py-3.5 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[48px]",
  };

  const widthClass = fullWidth ? "w-full" : "";
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`.trim();
}

/**
 * Build IEEE CS card classes
 */
export function getCardClasses(
  variant: "default" | "elevated" | "bordered" = "default",
  hover: boolean = true
): string {
  const baseClasses = "bg-white rounded-lg transition-all duration-300";
  const variantClasses = {
    default: "shadow-[0_2px_4px_rgba(0,0,0,0.08)] border border-gray-200",
    elevated: "shadow-md",
    bordered: "border-2 border-gray-300",
  };
  const hoverClasses = hover
    ? "hover:shadow-[0_8px_20px_rgba(255,163,0,0.15)] hover:-translate-y-0.5 hover:border-[#FFA300]/30"
    : "";
  return `${baseClasses} ${variantClasses[variant]} ${hoverClasses}`.trim();
}

/**
 * Build IEEE CS input classes
 */
export function getInputClasses(
  error: boolean = false,
  disabled: boolean = false
): string {
  const baseClasses =
    "w-full px-4 py-3.5 rounded-md border-2 transition-all font-opensans text-[#1a1a1a] focus:outline-none min-h-[44px]";
  const stateClasses = error
    ? "border-[#BA0C2F] focus:border-[#BA0C2F] focus:shadow-[0_0_0_3px_rgba(186,12,47,0.1)]"
    : "border-gray-300 hover:border-gray-400 focus:border-[#FFA300] focus:shadow-[0_0_0_3px_rgba(255,163,0,0.1)]";
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-60 text-gray-400"
    : "bg-white";
  const placeholderClasses = "placeholder:text-gray-500";
  return `${baseClasses} ${stateClasses} ${disabledClasses} ${placeholderClasses}`.trim();
}

/**
 * Build IEEE CS select/dropdown classes
 */
export function getSelectClasses(
  error: boolean = false,
  disabled: boolean = false
): string {
  const baseClasses =
    "w-full px-4 py-3.5 pr-10 rounded-md border-2 transition-all font-opensans text-[#1a1a1a] focus:outline-none min-h-[44px] appearance-none cursor-pointer";
  const stateClasses = error
    ? "border-[#BA0C2F] focus:border-[#BA0C2F] focus:shadow-[0_0_0_3px_rgba(186,12,47,0.1)]"
    : "border-gray-300 hover:border-gray-400 focus:border-[#FFA300] focus:shadow-[0_0_0_3px_rgba(255,163,0,0.1)]";
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-60"
    : "bg-white";
  return `${baseClasses} ${stateClasses} ${disabledClasses}`.trim();
}

/**
 * Build IEEE CS badge classes
 */
export function getBadgeClasses(
  variant:
    | "orange"
    | "blue"
    | "cyan"
    | "success"
    | "warning"
    | "error" = "orange",
  size: "sm" | "md" | "lg" = "md"
): string {
  const baseClasses =
    "inline-flex items-center font-semibold font-montserrat rounded-full";
  const variantClasses = {
    orange: "bg-[#FFA300]/10 text-[#C45A00] border border-[#FFA300]",
    blue: "bg-[#00629B]/10 text-[#002855] border border-[#00629B]",
    cyan: "bg-[#00B5E2]/10 text-[#006B8F] border border-[#00B5E2]",
    success: "bg-[#78BE20]/10 text-[#3D5F13] border border-[#78BE20]",
    warning: "bg-[#FFD100]/10 text-[#7A6300] border border-[#FFD100]",
    error: "bg-[#BA0C2F]/10 text-[#6E0916] border border-[#BA0C2F]",
  };
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`.trim();
}

/**
 * Build IEEE CS alert classes
 */
export function getAlertClasses(
  variant: "info" | "success" | "warning" | "error" = "info"
): string {
  const baseClasses = "p-4 rounded-lg border-l-4 font-opensans mb-4";
  const variantClasses = {
    info: "bg-[#00B5E2]/10 border-[#00B5E2] text-[#004D66]",
    success: "bg-[#78BE20]/10 border-[#78BE20] text-[#3D5F13]",
    warning: "bg-[#FFD100]/10 border-[#FFD100] text-[#7A6300]",
    error: "bg-[#BA0C2F]/10 border-[#BA0C2F] text-[#6E0916]",
  };
  return `${baseClasses} ${variantClasses[variant]}`.trim();
}

/**
 * Build IEEE CS heading classes
 */
export function getHeadingClasses(
  level: 1 | 2 | 3 | 4 | 5 | 6,
  className?: string
): string {
  const baseClasses = "font-montserrat font-semibold text-[#1a1a1a]";
  const levelClasses = {
    1: "text-5xl font-bold leading-tight",
    2: "text-4xl leading-tight",
    3: "text-3xl leading-snug",
    4: "text-2xl leading-snug",
    5: "text-xl leading-normal",
    6: "text-base leading-normal",
  };
  return `${baseClasses} ${levelClasses[level]} ${className || ""}`.trim();
}

/**
 * Build IEEE CS label classes
 */
export function getLabelClasses(required: boolean = false): string {
  const baseClasses =
    "block font-semibold font-montserrat text-sm mb-2 text-[#1a1a1a]";
  const requiredClass = required
    ? "after:content-['_*'] after:text-[#BA0C2F]"
    : "";
  return `${baseClasses} ${requiredClass}`.trim();
}

// LAYOUT UTILITIES

/**
 * Build IEEE CS container classes
 */
export function getContainerClasses(
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
 * Build IEEE CS section classes
 */
export function getSectionClasses(
  padding: "sm" | "md" | "lg" | "xl" = "md",
  background?: "white" | "gray" | "orange-light" | "blue-light"
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
        "orange-light": "bg-[#FFA300]/5",
        "blue-light": "bg-[#00629B]/5",
      }[background]
    : "";
  return `${paddingClasses[padding]} ${backgroundClasses}`.trim();
}

/**
 * Build IEEE CS grid classes
 */
export function getGridClasses(
  columns: 1 | 2 | 3 | 4 | 6 = 3,
  gap: "sm" | "md" | "lg" | "xl" = "md"
): string {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };
  return `grid ${columnClasses[columns]} ${gapClasses[gap]}`;
}

/**
 * Build IEEE CS divider classes
 */
export function getDividerClasses(
  orientation: "horizontal" | "vertical" = "horizontal",
  variant: "solid" | "gradient" = "gradient"
): string {
  const baseClasses = "border-none";
  const orientationClasses =
    orientation === "horizontal" ? "h-0.5 w-full my-8" : "w-0.5 h-full mx-8";
  const variantClasses =
    variant === "gradient"
      ? orientation === "horizontal"
        ? "bg-gradient-to-r from-[#FFA300] to-[#00B5E2]"
        : "bg-gradient-to-b from-[#FFA300] to-[#00B5E2]"
      : "bg-gray-300";
  return `${baseClasses} ${orientationClasses} ${variantClasses}`.trim();
}

// ANIMATION UTILITIES

/**
 * Get animation classes based on type
 */
export function getAnimationClasses(
  type: "fade-in" | "slide-in-right" | "slide-in-left" | "slide-up" | "scale-in"
): string {
  const animationClasses = {
    "fade-in": "animate-fade-in",
    "slide-in-right": "animate-slide-in-right",
    "slide-in-left": "animate-slide-in-left",
    "slide-up": "animate-slide-up",
    "scale-in": "animate-scale-in",
  };
  return animationClasses[type];
}

/**
 * Build transition classes
 */
export function getTransitionClasses(
  properties: string[] = ["all"],
  duration: "fast" | "base" | "slow" | "slower" = "base",
  easing: "ease" | "ease-in" | "ease-out" | "ease-in-out" = "ease-in-out"
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
  const transitionProps = properties.join(",");
  return `transition-[${transitionProps}] ${durationMap[duration]} ${easingMap[easing]}`;
}

// ACCESSIBILITY UTILITIES

/**
 * Check if color meets WCAG contrast requirements
 */
export function meetsWCAGContrast(
  foreground: string,
  background: string
): boolean {
  const approvedCombinations = [
    ["#1a1a1a", "#ffffff"],
    ["#ffffff", "#00629B"],
    ["#000000", "#FFA300"],
  ];
  return approvedCombinations.some(
    ([fg, bg]) =>
      (foreground === fg && background === bg) ||
      (foreground === bg && background === fg)
  );
}

// EXPORT ALL
const designUtils = {
  getColorWithOpacity,
  getCssVar,
  getGradient,
  cn,
  getButtonClasses,
  getCardClasses,
  getInputClasses,
  getSelectClasses,
  getBadgeClasses,
  getAlertClasses,
  getHeadingClasses,
  getLabelClasses,
  getContainerClasses,
  getSectionClasses,
  getGridClasses,
  getDividerClasses,
  getAnimationClasses,
  getTransitionClasses,
  meetsWCAGContrast,
};

export default designUtils;
