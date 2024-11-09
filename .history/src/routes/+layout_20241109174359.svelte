<script lang="ts">
	import '../app.css';
	import showMenu  from '../components/Menu.svelte';
	let { children } = $props();

</script>

<div class="bg-gradient-to-br from-[#020200] to-blue-900 bg-cover bg-center bg-no-repeat ">{@render children()}</div>
