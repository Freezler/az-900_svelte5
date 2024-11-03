<script lang="ts">
	import Header from './Header.svelte';
	let name = $state('Svelte 5');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');

	// function toggle() {
	// 	status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	// }

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Header {name} />

<input bind:value={name} />
<div class="grid place-items-center gap-6">
	<p class="text-2xl">The store is now {status}</p>
	<button
		class=" w-[182px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 active:scale-[.98]"
		type="button"
/*		on:click={toggle} 
		{onclick}>toggle status</button
	>
</div>
