<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(55,33%,50%)] to-[hsl(50,87%,54%)] bg-cover bg-center">
{@render children()}
</div>
