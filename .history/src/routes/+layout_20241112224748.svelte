<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="grid h-full gap-2 bg-gradient-to-br from-[#0d0c28fc] via-[#1b0135f9] to-[#10021e] bg-cover bg-center bg-no-repeat"
>
	{@render children()}
</div>
