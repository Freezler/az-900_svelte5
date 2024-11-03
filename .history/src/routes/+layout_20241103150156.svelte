<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { fade } from 'svelte/transition';
</script>

{#key $page.pathname}
	<div class="bg-gray-900 bg-no-repeat bg-cover bg-center" in:fade={{ duration: 300 }} out:fade={{ duration: 300 }}>
		{@render children()}
	</div>
