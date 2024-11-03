<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[url('./pic.avif')] bg-cover bg-center">
{@render children()}
