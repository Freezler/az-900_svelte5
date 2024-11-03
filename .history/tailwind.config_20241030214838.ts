import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animate: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'fade-out': 'fadeOut 0.5s ease-in-out'
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: "0" },
					'100%': { opacity: "0" }
				},
				fadeOut: {
					'0%': { opacity: "1" },
					'100%': { opacity: ""}
				}
			}

		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
