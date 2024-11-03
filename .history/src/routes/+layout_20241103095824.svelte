<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(259,51%,10%)] to-[hsl(258,61%,35%)] bg-cover bg-center">
{@render children()}
</div>
