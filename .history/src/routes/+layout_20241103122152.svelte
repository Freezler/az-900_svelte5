<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[gradient-to-br from-[hsl(207,89%,85%)] to-[hsl(221,70%,26%)]] bg-cover bg-center">
{@render children()}
</div>
