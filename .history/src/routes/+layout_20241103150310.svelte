<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { fade, fly } from 'svelte/transition';
</script>


	<div class="bg-gray-900 bg-no-repeat bg-cover bg-center" in:fly={{ duration: 300 }} out:fly={{ duration: 300 }}>
		{@render children()}
	</div>
