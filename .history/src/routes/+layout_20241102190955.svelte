<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-['hs'] to-gray-300 bg-cover bg-center">
{@render children()}
</div>
