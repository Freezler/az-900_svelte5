<script lang="ts">
	import Cards from '../components/Cards.svelte';
	import CloudOverview from '../components/CloudOverview.svelte';
	import Header from '../components/Header.svelte';
	import Login from '../components/Login.svelte';
	import Popover from '../components/Menu.svelte';

  import Toggle from '../components/Toggle.svelte';
</script>

<Popover />
<header>
	<Header name="AZ -" number="900" topic={'Azure Fundamentals'}></Header>
</header>
<main>
	<section>
		<CloudOverview />
		<Cards />
	</section>
	<footer><Login /></footer>
	<aside><Toggle /></aside>
</main>
