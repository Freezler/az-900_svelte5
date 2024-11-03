<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[gradient(url(./pic.avif))] bg-cover bg-center">
{@render children()}
</div>
