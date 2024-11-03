<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(260,59%,71%)] to-[hsla(258,38%,70%,1)] bg-cover bg-center">
{@render children()}
</div>
