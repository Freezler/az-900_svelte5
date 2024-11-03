import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: true,
	},

	theme: {
		extend: {
			animation: {
				'fade-in': 'fadeIn 0.7s ease-in-out ',
				'fade-out': 'fadeOut 0.7s ease-in-out ',
				'border-spin': 'borderSpin 2s linear ease-in-out infinite'
			},

			keyframes: {
				fadeIn: {
					'0%': { opacity: "0" },
					'100%': { opacity: "1" }
				},
				fadeOut: {
					'0%': { opacity: "1" },
					'100%': { opacity: "0" }
				},
				borderSpin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
			}

		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
