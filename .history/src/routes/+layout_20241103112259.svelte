<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(54,24%,59%)] to-[hsl(50,87%,54%)] bg-cover bg-center">
{@render children()}
</div>
