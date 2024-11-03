export const plugins = {
	tailwindcss: {
		content: [
			'./src/**/*.{html,js,svelte,ts}',
		],
		config: './tailwind.config.js'
	},
	autoprefixer: {},
};