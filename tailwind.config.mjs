/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: '8px',
			center: true,
		},
		extend: {
			colors: {
				primary: '#1e1e1e',
				secondary: '#ff5800',
				secondaryLight: '#e7e7d8'
			}
		},
	},
	plugins: [],
}
