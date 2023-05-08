/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
    daisyui: {
        logs: false,
        themes: [
            {
                mytheme: {
                    "primary": "#bd63d8",
                    "secondary": "#29299e",
                    "accent": "#8eea79",
                    "neutral": "#1A2328",
                    "base-100": "#F6F7F8",
                    "info": "#89C9EB",
                    "success": "#1DE276",
                    "warning": "#F8B5A3",
                    "error": "#F56687",
                } 
            },
        ],
    },
	plugins: [require("daisyui")],
};
