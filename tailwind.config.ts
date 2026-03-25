import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'rgb(var(--brand-bg-rgb) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface-rgb) / <alpha-value>)',
          'surface-hover': 'rgb(var(--brand-surface-hover-rgb) / <alpha-value>)',
          'surface-code': 'rgb(var(--brand-surface-code-rgb) / <alpha-value>)',
          border: 'rgb(var(--brand-border-rgb) / 0.18)',
          'border-subtle': 'rgb(var(--brand-border-subtle-rgb) / 0.10)',
          text: 'rgb(var(--brand-text-rgb) / <alpha-value>)',
          'text-muted': 'rgb(var(--brand-text-muted-rgb) / <alpha-value>)',
          'text-dim': 'rgb(var(--brand-text-dim-rgb) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent-rgb) / <alpha-value>)',
          'accent-light': 'rgb(var(--brand-accent-light-rgb) / <alpha-value>)',
          'accent-dark': 'rgb(var(--brand-accent-dark-rgb) / <alpha-value>)',
          'accent-glow': 'rgb(var(--brand-accent-rgb) / 0.08)',
          'accent-glow-bright': 'rgb(var(--brand-accent-rgb) / 0.15)',
          success: 'rgb(16 185 129 / <alpha-value>)',
          danger: 'rgb(239 68 68 / <alpha-value>)',
          warning: 'rgb(245 158 11 / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '16px',
      },
      boxShadow: {
        glow: '0 0 40px rgb(var(--brand-accent-rgb) / 0.12)',
      },
      fontSize: {
        'code-sm': '0.82rem',
      },
      lineHeight: {
        code: '1.8',
      },
    },
  },
  plugins: [],
} satisfies Config;
