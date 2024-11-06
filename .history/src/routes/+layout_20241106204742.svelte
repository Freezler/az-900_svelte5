<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-gray-950 bg-cover bg-center bg-no-repeat tr">{@render children()}</div>
