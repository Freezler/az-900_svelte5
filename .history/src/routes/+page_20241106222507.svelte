<script lang="ts">
	import Toggle from '../components/Toggle.svelte';
	import { fade } from 'svelte/transition';
	import Header from '../components/Header.svelte';
	import Popover from '../components/Menu.svelte';
	import Cards from '../components/Cards.svelte';
	import Login from '../components/Login.svelte';
	let name = $state('Randy');

</script>

<header>
	<Header />
	<Popover />
</header>
<main>
	<section><Cards /></section>
</main>
<aside><Toggle /></aside>
<footer><Login /></footer>
