<script lang="ts">
  import ComputingArticle from '../components/ComputingArticle.svelte';

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
<main>
	
	<section><Cards /></section>
	<aside><Toggle /></aside>
	<footer><Login /></footer>
</main>
