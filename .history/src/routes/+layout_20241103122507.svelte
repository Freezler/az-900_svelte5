<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[--] bg-cover bg-center">
{@render children()}
</div>
