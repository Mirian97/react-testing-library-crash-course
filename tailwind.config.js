/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				app: ["Poppins", "Arial"]
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			backgroundImage: {
				"pink-circles": "url('/images/pink-circles.png')"
			},
			boxShadow: {
				glass: "0 8px 32px 0 rgba(31,38,135,0.37 )"
			},
			colors: {
				primary: {
					200: "#ffbd9a",
					300: "#ffa56f",
					400: "#ff914a",
					500: "#ff8124"
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
}
