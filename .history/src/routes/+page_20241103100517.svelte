<script lang="ts">
  import Toggle from '../components/Toggle.svelte';

	import Header from '../components/Header.svelte';
	import Popover from '../components/Popover.svelte';
	import Cards from '../components/Cards.svelte';
	import Login from '../components/Login.svelte';
	let name = $state('Randy');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');
	let full_name = $derived(name + ' ' + 'de vries');

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<header>
	<Header  />
</header>
<main></main>
	<Popover />
	<Cards />
	<Toggle />
	<Login />
