<script lang="ts">
	import '../app.css';
	import showMenu  from '../components/Menu.svelte';
	let { children } = $props();

</script>

<div class="bg-gradient-to-br from-[#020202] to[#0b0b0b] bg-cover bg-center bg-no-repeat ">{@render children()}</div>
