/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans]
            },
            gridTemplateColumns: {
                task: "1em repeat(3, auto) 1em" 
            }
        },
    },
    plugins: [],
}
