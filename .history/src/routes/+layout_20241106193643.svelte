<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-gray-900 bg-cover bg-center bg-no-repeat">{@render children()}</div>
