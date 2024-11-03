<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(68,77%,76%)] to-[#e7ed41] bg-cover bg-center">
{@render children()}
</div>
