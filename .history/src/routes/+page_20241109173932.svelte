<script lang="ts">
	import Toggle from '../components/Toggle.svelte';
	import Header from '../components/Header.svelte';
	import Popover from '../components/Menu.svelte';
	import Cards from '../components/Cards.svelte';
	import Login from '../components/Login.svelte';
</script>

<header class="">
	<Popover />
	<Header />
</header>
<main class="bg-gradient-to-tr from-stone-950 via-stone-800 to-sky-900">
	<section><Cards /></section>
	<aside><Toggle /></aside>
	<footer><Login /></footer>
</main>
