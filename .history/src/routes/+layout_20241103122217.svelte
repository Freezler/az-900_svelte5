<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[var(--bg-gradient)] bg-cover bg-center">
{@render children()}
</div>
