<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[--bg-gradient] bg-red-6 bg-cover bg-center">
{@render children()}
</div>
