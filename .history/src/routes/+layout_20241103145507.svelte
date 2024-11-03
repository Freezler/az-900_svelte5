<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gray-900 bg-no-repeat bg-cover bg-center">
{transit@render children()}
</div>
