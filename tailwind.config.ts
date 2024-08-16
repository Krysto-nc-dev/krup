import { withUt } from 'uploadthing/tw';
import colors from 'tailwindcss/colors';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}', // Tremor module
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'], // Applying Fira Sans for body text
        heading: ['Noto Sans Masaram Gondi', 'sans-serif'], // Applying Noto Sans Masaram Gondi for headings
      },
      colors: {
        tremor: {
          brand: {
            faint: '#E3F2FD',
            muted: '#BBDEFB',
            subtle: '#64B5F6',
            DEFAULT: '#42A5F5',
            emphasis: '#1E88E5',
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: '#edfdf9',  // Background from your charte graphique
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: '#021611',  // Text color from your charte graphique
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        'dark-tremor': {
          brand: {
            faint: '#C5CAE9',
            muted: '#7986CB',
            subtle: '#5C6BC0',
            DEFAULT: '#3F51B5',
            emphasis: '#303F9F',
            inverted: '#E8EAF6',
          },
          background: {
            muted: '#394E5D',  // Even lighter background color for dark mode
            subtle: '#4A657D', // Slightly lighter than previous
            DEFAULT: '#5B728A',  // Lightened further for dark mode background
            emphasis: '#6C8298', // Lightened emphasis background
          },
          border: {
            DEFAULT: '#7A8B99',  // Lighter border color for dark mode
          },
          ring: {
            DEFAULT: '#8A9DAF',  // Lighter ring color for dark mode
          },
          content: {
            subtle: '#D5DBDB',
            DEFAULT: '#ECF0F1',
            emphasis: '#F8F9F9',
            strong: '#FDFEFE',
            inverted: '#17202A',
          },
        },
        primary: {
          DEFAULT: '#4bb39a', // Primary color from your charte graphique
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#2196f3', // Secondary color from your charte graphique
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ef5ce7', // Accent color from your charte graphique
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: colors.red[600],
          foreground: colors.white,
        },
        muted: {
          DEFAULT: colors.gray[400],
          foreground: colors.gray[600],
        },
        popover: {
          DEFAULT: '#edfdf9',  // Background color from your charte graphique
          foreground: '#021611',  // Text color from your charte graphique
        },
        card: {
          DEFAULT: '#edfdf9',  // Background color from your charte graphique
          foreground: '#021611',  // Text color from your charte graphique
        },
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
  },
  safelist: [
    {
      pattern: /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern: /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern: /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern: /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern: /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern: /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require('tailwindcss-animate')],
});
