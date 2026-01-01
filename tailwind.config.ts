// tailwind.config.ts
import type { Config } from "tailwindcss";
import {
  ieeeColors,
  ieeeTypography,
  ieeeSpacing,
  ieeeBorderRadius,
  ieeeShadows,
  ieeeBreakpoints,
  ieeeAnimations,
} from "./src/config/ieee-design-system";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ===== COLORS =====
      colors: {
        // IEEE Primary Brand Colors
        "ieee-blue": ieeeColors.primary,
        "ieee-teal": ieeeColors.secondary.teal,
        "ieee-orange": ieeeColors.secondary.orange,
        
        // Semantic Colors
        success: ieeeColors.semantic.success,
        warning: ieeeColors.semantic.warning,
        error: ieeeColors.semantic.error,
        info: ieeeColors.semantic.info,
        
        // Neutral Grays
        gray: ieeeColors.neutral,
        
        // Special
        white: ieeeColors.white,
        black: ieeeColors.black,

        // Backwards compatibility (keep existing color names)
        "ieee-blue-dark": ieeeColors.primary[700],
        "ieee-blue-light": ieeeColors.primary[50],
        "ieee-green": ieeeColors.semantic.success,
        "ieee-red": ieeeColors.semantic.error,
      },

      // ===== TYPOGRAPHY =====
      fontFamily: {
        sans: ieeeTypography.fonts.sans.split(", "),
        mono: ieeeTypography.fonts.mono.split(", "),
      },
      fontSize: ieeeTypography.fontSize,
      fontWeight: ieeeTypography.fontWeight,
      lineHeight: ieeeTypography.lineHeight,

      // ===== SPACING =====
      spacing: ieeeSpacing,

      // ===== BORDER RADIUS =====
      borderRadius: ieeeBorderRadius,

      // ===== SHADOWS =====
      boxShadow: {
        ...ieeeShadows,
        // Custom IEEE shadows
        'ieee-sm': ieeeShadows.ieee,
        'ieee-md': '0 15px 30px rgba(0, 98, 155, 0.2)',
        'ieee-lg': '0 20px 40px rgba(0, 98, 155, 0.25)',
      },

      // ===== BREAKPOINTS =====
      screens: ieeeBreakpoints,

      // ===== ANIMATIONS =====
      transitionDuration: ieeeAnimations.transition,
      transitionTimingFunction: ieeeAnimations.easing,

      // ===== CUSTOM ANIMATIONS =====
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },

      // ===== GRADIENTS =====
      backgroundImage: {
        'ieee-gradient': 'linear-gradient(135deg, #00629B 0%, #004B76 100%)',
        'ieee-gradient-radial': 'radial-gradient(circle, #00629B 0%, #004B76 100%)',
        'ieee-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      // ===== CONTAINER =====
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },

      // ===== ASPECT RATIO =====
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        '4/3': '4 / 3',
        '21/9': '21 / 9',
      },

      // ===== Z-INDEX =====
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
      },
    },
  },
  plugins: [
    // Custom plugin for IEEE-specific utilities
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        // IEEE Card Styles
        '.ieee-card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.DEFAULT'),
          transition: 'all 0.3s ease',
          border: `1px solid ${theme('colors.gray.300')}`,
          '&:hover': {
            boxShadow: theme('boxShadow.ieee-sm'),
            transform: 'translateY(-2px)',
          },
        },
        
        // IEEE Button Primary
        '.btn-ieee-primary': {
          backgroundColor: theme('colors.ieee-blue.DEFAULT'),
          color: theme('colors.white'),
          padding: '0.75rem 1.5rem',
          borderRadius: theme('borderRadius.DEFAULT'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.2s ease',
          border: `2px solid ${theme('colors.ieee-blue.DEFAULT')}`,
          '&:hover': {
            backgroundColor: theme('colors.ieee-blue.700'),
            borderColor: theme('colors.ieee-blue.700'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.ieee-sm'),
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        
        // IEEE Button Secondary
        '.btn-ieee-secondary': {
          backgroundColor: theme('colors.white'),
          color: theme('colors.ieee-blue.DEFAULT'),
          padding: '0.75rem 1.5rem',
          borderRadius: theme('borderRadius.DEFAULT'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.2s ease',
          border: `2px solid ${theme('colors.ieee-blue.DEFAULT')}`,
          '&:hover': {
            backgroundColor: theme('colors.ieee-blue.50'),
          },
        },
        
        // IEEE Input
        '.ieee-input': {
          width: '100%',
          padding: '0.75rem 1rem',
          border: `2px solid ${theme('colors.gray.400')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          fontSize: theme('fontSize.base'),
          transition: 'all 0.2s ease',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.ieee-blue.DEFAULT'),
            boxShadow: `0 0 0 3px ${theme('colors.ieee-blue.50')}`,
          },
        },
        
        // IEEE Input Error State
        '.ieee-input-error': {
          borderColor: theme('colors.error'),
        },
        
        // IEEE Label
        '.ieee-label': {
          display: 'block',
          fontWeight: theme('fontWeight.semibold'),
          marginBottom: '0.5rem',
          color: theme('colors.gray.800'),
        },
        
        // IEEE Error Text
        '.ieee-error-text': {
          color: theme('colors.error'),
          fontSize: theme('fontSize.sm'),
          marginTop: '0.25rem',
        },
        
        // IEEE Section
        '.ieee-section': {
          paddingTop: theme('spacing.16'),
          paddingBottom: theme('spacing.16'),
        },
        
        // IEEE Container
        '.ieee-container': {
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
        },
        
        // IEEE Gradient Overlay
        '.ieee-gradient-overlay': {
          background: 'linear-gradient(135deg, #00629B 0%, #004B76 100%)',
        },
        
        // IEEE Heading Styles
        '.ieee-heading-xl': {
          fontSize: theme('fontSize.5xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          color: theme('colors.gray.900'),
        },
        '.ieee-heading-lg': {
          fontSize: theme('fontSize.4xl'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
          color: theme('colors.gray.900'),
        },
        '.ieee-heading-md': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          color: theme('colors.gray.900'),
        },
        '.ieee-heading-sm': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          color: theme('colors.gray.900'),
        },
      };
      
      addUtilities(newUtilities);
    },
  ],
};

export default config;