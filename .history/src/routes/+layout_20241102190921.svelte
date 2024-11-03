<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsla(0,0%,100%,.5] to-gray-300 bg-cover bg-center">
{@render children()}
</div>
