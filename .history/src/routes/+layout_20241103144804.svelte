<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gray-900bg-no-repeat bg-cover bg-center">
{@render children()}
</div>
