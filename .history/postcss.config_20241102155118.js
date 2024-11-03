module.exports = {
	plugins: {
		tailwindcss: {
			content: [
				'./src/**/*.{html,js,svelte,ts}',
			],
		},
		autoprefixer: {},
	},
};