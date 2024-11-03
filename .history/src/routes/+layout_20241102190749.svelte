<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient[to_b(rgba(0, 0, 0, 0.5)_rgba(0, 0, 0, 0.5))_to_t(90deg_rgba(0, 0, 0, 0.5)_rgba(0, 0, 0, 0.5))] bg-cover bg-center">
{@render children()}
</div>
