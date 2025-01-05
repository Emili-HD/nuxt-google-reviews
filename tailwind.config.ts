/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            // Añadir configuración personal
        }
    },

    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ]
}


