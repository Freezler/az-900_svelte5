<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="bg-[gradient(var(--tw-gradient-stops))] bg-cover bg-center">
{@render children()}
</div>
