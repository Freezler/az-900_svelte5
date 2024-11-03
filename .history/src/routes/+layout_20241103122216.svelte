<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[var(--bg-g§)] bg-cover bg-center">
{@render children()}
</div>
