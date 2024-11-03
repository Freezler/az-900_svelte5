<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-r from-stone-950 to-gray-800 bg-cover bg-center">
{@render children()}
</div>
