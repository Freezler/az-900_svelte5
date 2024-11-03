<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)] bg-[--bg-color] bg-cover bg-center">
{@render children()}
</div>
