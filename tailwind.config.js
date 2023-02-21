/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                lexend: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateColumns: {
                task: "1em repeat(3, auto) 1em",
                form: "minmax(25%, 30%) auto",
                calendar: "1fr 7fr",
            },
            gridTemplateRows: {
                form: "repeat(3, minmax(0, 2em))",
                stickers: "16em",
                calendar: "2fr",
                week: "repeat(24, 1fr)",
            },
            gridAutoRows: {
                stickers: "16em",
                calendar: "1fr",
            },
            minHeight: {
                stickers: "16em",
            },
        },
    },
    plugins: [],
};
