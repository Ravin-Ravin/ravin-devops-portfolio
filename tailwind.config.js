/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#070b14',
        panel: '#0d1422',
        line: '#1e2a3d',
        electric: '#38bdf8',
        violet: '#818cf8',
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, .12)',
      },
    },
  },
  plugins: [],
}