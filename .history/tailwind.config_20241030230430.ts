import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 0.7s ease-in-out',
				'fade-out': 'fadeOut 0.7s ease-in-out'
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: "1" }
				},
				fadeOut: {
					'0%': { opacity: "1" },
					'100%': { opacity: "0" }
				}
			}

		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
