<script lang="ts">
	import Header from './Header.svelte';
	import Popover from '../components/Popover.svelte';
	let name = $state('Randy');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');
	let full_name = $derived(name + ' ' + 'de vries');

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}

	// function onclick() {
	// 	status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	// }
</script>

<Header {name} />

<Popover />

<div class="grid place-items-center gap-6 border-2 box-border">
	<p class="text-2xl text-white {status === 'OPEN' ? 'text-green-500' : 'text-red-500'}">The store is now {status}</p>
	<!-- <button on:click={toggle}>toggle status</button> -->
	<button
		class=" w-[182px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 active:scale-[.98]"
		type="button"
		onclick={toggle}>Toggle status</button
	>
</div>


