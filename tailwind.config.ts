import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'director-primary': '#00A8E8', // A sharp, cool blue - could also be a deep red or gold
        'director-dark': '#121212',    // Even darker than TRASHBAG's
        'director-light': '#e0e0e0',
        'brand-accent': '#FF0055', // A nod to TRASHBAG
      },
      fontFamily: {
        // Consider a slightly more "auteur" font if you have one
        // sans: ['"Your Director Font"', 'sans-serif'],
        // mono: ['"Codeface"', 'monospace'], // For any 'techy' director vibes
      },
      animation: {
        'glitch': 'glitch 1s linear infinite', // Keep the glitch, it's on brand
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
        'slideInUp': 'slideInUp 0.5s ease-out forwards',
      },
      keyframes: {
        glitch: { /* ... (same as before or tweak) ... */ },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
} satisfies Config;
