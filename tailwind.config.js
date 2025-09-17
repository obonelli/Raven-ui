/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#f4f7ff", 100: "#e9effe", 200: "#cdd9fd", 300: "#a8bbfb",
                    400: "#7a93f7", 500: "#566ff2", 600: "#4156cc", 700: "#3443a3",
                    800: "#2b3783", 900: "#242e6b"
                },
            },
            boxShadow: { card: "0 8px 24px rgba(0,0,0,0.12)" },
            borderRadius: { xl: "0.9rem" },
        },
    },
    plugins: [],
}
