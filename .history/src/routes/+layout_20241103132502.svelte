<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[linear-gradient(var(--bg-gradient))] bg-no-repeat bg-cover bg-center">
{@render children()}
</div>
