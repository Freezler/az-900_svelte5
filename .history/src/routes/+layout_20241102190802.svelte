<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gr bg-cover bg-center">
{@render children()}
</div>
