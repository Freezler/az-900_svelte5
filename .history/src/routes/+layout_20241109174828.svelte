<script lang="ts">
	import '../app.css';
	import showMenu  from '../components/Menu.svelte';
	let { children } = $props();

</script>

<div class="bg-gradient-to-br from-[#0d0c28fc] via-[#10011ef9] to-[#0b0b0b] bg-cover bg-center bg-no-repeat ">{@render children()}</div>
