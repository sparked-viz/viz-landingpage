/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#030014',
                surface: '#0f172a',
                primary: '#7000df',
                secondary: '#00f0ff',
                accent: '#ff0055',
                dim: '#94a3b8',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
