import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts, a}'],


	theme: {
		extend: {
			animation: {



			},

			keyframes: {

			}

		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
