<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(210,55%,8%,1)'] to-gray-300 bg-cover bg-center">
{@render children()}
</div>
