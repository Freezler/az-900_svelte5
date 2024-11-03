<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[linear-gradient(var(--bg-color), var(--bg-gradient))] b bg-cover bg-center">
{@render children()}
</div>
