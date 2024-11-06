<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	let showMenu: boolean = false;
	import { fly } from 'svelte/transition';
</script>

<button
	on:click={() => (showMenu = !showMenu)}
	class="fixed right-[8px] top-[8px] flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-7 w-7"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		{#if showMenu}
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		{:else}
			<path
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
		class="fixed bottom-0 right-0 w-full h-[30vh] grid place-items-center
		border bg-white shadow-lg "
		transition:fly={{ y: 50 }}
	>
	<li class=" px-8  hover:bg-gray-100 transition-all">
			<a href="/">About</a>
		</li>
		<li class=" px-8  hover:bg-gray-100 transition-all">
			<a href="/concepts">About</a>
		</li>
		<li class=" px-4 hover:bg-gray-100 transition-all">
			<a href="/security">Contact</a>
		</li>
		<li class="px-4 hover:bg-gray-100 transition-all">
			<a href="/services">Login</a>
		</li>
	</ul>
{/if}
