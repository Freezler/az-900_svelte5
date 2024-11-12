<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div
	class="grid h-full gap-2 bg-e] bg-cover bg-center bg-no-repeat"
>
	{@render children()}
</div>
