<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import * from '@svelte-transitions';
</script>
<div class="bg-gray-900 bg-no-repeat bg-cover bg-center">
{@render children()}
</div>
