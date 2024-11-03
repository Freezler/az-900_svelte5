<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-gradient-to-tr from-[hsl(55,26%,29%)] to-[hsl(43,18%,46%)] bg-cover bg-center">
{@render children()}
</div>
