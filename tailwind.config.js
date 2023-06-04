/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",  "./src/**/*.{html,js}"],
  theme: {
    extend: { 
      fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    colors: {
      pink: {
        '300': '#f0abfc',
        '400': '#e879f9',
        '500': '#d946ef',
        '600': '#c026d3',
        '700': '#a21caf',
        '800': '#86198f',
        '900': '#701a75',
      },
      purple: {
        '300': '#d8b4fe',
        '400': '#c084fc',
        '500': '#a855f7',
        '600': '#9333ea',
        '700': '#7e22ce',
        '800': '#6b21a8',
        '900': '#581c87',
      },
      indigo: {
        '300': '#c4b5fd',
        '400': '#a78bfa',
        '500': '#8b5cf6',
        '600': '#7c3aed',
        '700': '#6d28d9',
        '800': '#5b21b6',
        '900': '#4c1d95',
      },
      blue: {
        '300': '#a5b4fc',
        '400': '#818cf8',
        '500': '#6366f1',
        '600': '#4f46e5',
        '700': '#4338ca',
        '800': '#3730a3',
        '900': '#312e81',
      },
      azure: {
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
      },
      teal: {
        '300': '#76e4ec',
        '400': '#39d0dd',
        '500': '#14b4c6',
        '600': '#0892a2',
        '700': '#097684',
        '800': '#0b5e6b',
        '900': '#0d4f5a',
      },
      submarine: {
        '300': '#6ee7b7',
        '400': '#34d399',
        '500': '#10b981',
        '600': '#059669',
        '700': '#047857',
        '800': '#065f46',
        '900': '#064e3b',
      },
      emerald: {
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
      },
      coral: {
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
      },
    },
    screens: {
      'xs': '420px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    },
    backgroundImage: {
      'banner-uno': 'url("../assets/img/banner1.jpg")',
    },
    boxShadow: {
      'nav': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      'nav-collapse': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      'category-item': '0px 49px 20px rgba(0, 0, 0, 0.01), 0px 28px 17px rgba(0, 0, 0, 0.05), 0px 12px 12px rgba(0, 0, 0, 0.09), 0px 3px 7px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)',
      'input-focus': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    gridTemplateColumns: {
      'footer': '2fr 1fr 1fr 1fr'
    }
  },
  },
  plugins: [],
}

