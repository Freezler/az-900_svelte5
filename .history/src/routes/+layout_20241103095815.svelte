<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(259,51%,10%)] to-[h] bg-cover bg-center">
{@render children()}
</div>
