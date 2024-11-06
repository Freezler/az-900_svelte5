<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	let { children } = $props();
</script>

<div class="bg-gray-950 bg-cover bg-center bg-no-repeat " transition:fade={{ duration: 600 }}>{@render children()}</div>
