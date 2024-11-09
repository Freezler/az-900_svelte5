<script lang="ts">
	import '../app.css';
	import showMenu  from '../components/Menu.svelte';
	let { children } = $props();

</script>

<div class="bg-gradient-to-br from-sky-900 to-blue-600 bg-cover bg-center bg-no-repeat ">{@render children()}</div>
