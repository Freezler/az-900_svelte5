<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(55,82%,65%)] to-[hsl(50,95%,80%)] bg-cover bg-center">
{@render children()}
</div>
