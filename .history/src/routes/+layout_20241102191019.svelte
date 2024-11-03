<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(211,85%,68%)] to-gray-300 bg-cover bg-center">
{@render children()}
</div>
