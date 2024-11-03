<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-red-500 bg-cover bg-center">
{@render children()}
</div>
