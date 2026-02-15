/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#F5F3FF',
                surface: '#E9E4FF',
                primary: '#7C3AED',
                secondary: '#FCD34D',
                accent: '#F472B6',
                purple: {
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                },
                yellow: {
                    400: '#FCD34D',
                    500: '#FBBF24',
                },
                dim: '#4B5563',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                handwritten: ['Caveat', 'cursive'],
            },
        },
    },
    plugins: [],
}
