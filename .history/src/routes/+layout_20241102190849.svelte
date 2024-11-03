<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to- from-stone-950 to-gray-300 bg-cover bg-center">
{@render children()}
</div>
