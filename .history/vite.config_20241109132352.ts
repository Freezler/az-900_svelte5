import { sveltekit } from '@sveltejs/kit/vite';
import enhancedImages from 'vite-plugin-enhanced-images';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	]
})