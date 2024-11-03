<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(68,77%,76%)] to-[#d5e33b] bg-cover bg-center">
{@render children()}
</div>
