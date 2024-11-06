<script lang="ts">
	let showMenu = false;
	import { fly, crossfade, type CrossfadeParams } from 'svelte/transition';

	// Create a crossfade transition for the icon
	const [send, receive] = crossfade({
		duration: 600
	});

	const receiveTransition  = (node: any, params: CrossfadeParams & { key: any; }) => receive(node, { ...params, key: params.key });
</script>

<button on:click={() => showMenu = !showMenu} class="flex absolute top-1 right-1 visible items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" in:receive={receiveTransition} out:send>
		{#if showMenu}
			<path
				key="close"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		{:else}
			<path
				key="open"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		{/if}
	</svg>
</button>

{#if showMenu}
	<ul
		class="absolute bottom-0 right-0 w-full bg-white border rounded-lg shadow-lg"
		transition:fly={{ y: 50 }}
	>
		<li class="px-4 py-2 border-b hover:bg-gray-100">
			<a href="/about">About</a>
		</li>
		<li class="px-4 py-2 border-b hover:bg-gray-100">
			<a href="/contact">Contact</a>
		</li>
		<li class="px-4 py-2 hover:bg-gray-100">
			<a href="/login">Login</a>
		</li>
	</ul>
{/if}

