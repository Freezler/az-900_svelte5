<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class=" absolutebg-[linear-gradient(var(--bg-gradient))] bg-no-repeat bg-cover bg-center">
{@render children()}
</div>
