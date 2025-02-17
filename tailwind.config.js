/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: '#1fb6ff',
                red: '#dc2626',
                yellow: '#facc15',
                grey: '#374151',
                'deep-blue': '#0f172a',
                'dark-grey': '#4b5563',
                'opaque-black': 'rgba(0, 0, 0, 0.7)',
            },
            backgroundImage: (theme) => ({
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-rainblue': 'linear-gradient(to right, #00f260, #0575E6)',
            }),
            fontFamily: {
                'playfair': ['Playfair Display', 'serif'],
                'open': ['Open Sans', 'sans-serif'],
            },
            content: {
               brush : "url('./assets/brush.png')",
               person1 : "url('./assets/person1.png')",
               person2 : "url('./assets/person2.png')",
               person3 : "url('./assets/person3.png')",
               person4 : "url('./assets/person4.png')",
               person5 : "url('./assets/person5.png')",
               person6 : "url('./assets/person6.png')",
            }
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1060px',
        },
    },
    plugins: [],
}