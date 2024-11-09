<script lang="ts">
	import Toggle from '../components/Toggle.svelte';
	import Header from '../components/Header.svelte';
	import Popover from '../components/Menu.svelte';
	import Cards from '../components/Cards.svelte';
	import Login from '../components/Login.svelte';

</script>

<header>
	<Popover />
	<Header />
</header>
<main>
	<section><Cards /></section>
	<aside><Toggle /></aside>
</main>
<footer><Login /></footer>
