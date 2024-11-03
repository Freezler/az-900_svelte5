<script lang="ts">
  import Toggle from './Toggle.svelte';

	import Header from './Header.svelte';
	import Popover from '../components/Popover.svelte';
	import Cards from '../components/Cards.svelte';
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


	<Header {name} />
	<Popover />
	<Cards />
	<Toggle />
