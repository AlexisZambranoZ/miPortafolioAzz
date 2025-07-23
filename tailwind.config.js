/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
    ...defaultConfig,
    darkMode: 'class',
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        ...defaultConfig.theme,
        extend: {
            ...defaultConfig.theme.extend,
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            colors: {
                ...defaultConfig.theme.extend.colors,
                primary: {
                    ...defaultConfig.theme.extend.colors.primary,
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
                secondary: {
                    ...defaultConfig.theme.extend.colors.secondary,
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#d946ef",
                    600: "#c026d3",
                    700: "#a21caf",
                    800: "#86198f",
                    900: "#701a75",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    ...defaultConfig.theme.extend.colors.accent,
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                    50: "#ecfdf5",
                    100: "#d1fae5",
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                ...defaultConfig.theme.extend.animation,
                "fade-in-up": "fadeInUp 0.6s ease-out",
                "bounce-slow": "bounce 2s infinite",
            },
            keyframes: {
                ...defaultConfig.theme.extend.keyframes,
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
