<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(42,82%,65%)] to-[#e4eb22] bg-cover bg-center">
{@render children()}
</div>
