<script lang="ts">
	import '../app.css';
	import showMenu  from '../components/Menu.svelte';
	let { children } = $props();

</script>

<div class="bg-gradient-to-br from-[#0d0d0d] via-[#2d2c03a2] to-[#0b0b0b] bg-cover bg-center bg-no-repeat ">{@render children()}</div>
