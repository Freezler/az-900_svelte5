/*************  ✨ Codeium Command 🌟  *************/
<style>
	nav {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
<script>
	import { fly } from 'svelte/transition';
	let showMenu = false;
</script>

<nav>
<nav class="relative">
	<button on:click={() => showMenu = !showMenu} class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			{#if showMenu}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			{/if}
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	{#if showMenu}
		<ul
			class="absolute top-10 right-0 w-40 bg-white border rounded-lg shadow-lg"
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
</nav>
	{#if showMenu}
		<button on:click={() => showMenu = false} class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	{/if}

/******  dd45868c-fb7f-4d77-8c20-782c4472040a  *******/