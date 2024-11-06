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
		class="absolute bottom-0 right-0 w-full
		border bg-white shadow-lg "
		transition:fly={{ y: 50 }}
	>
		<li class="border-b px-4 py-2 hover:bg-gray-100 transition-all">
			<a href="/about">About</a>
		</li>
		<li class="border-b px-4 py-2 hover:bg-gray-100 transition-all">
			<a href="/contact">Contact</a>
		</li>
		<li class="px-4 py-2 hover:bg-gray-100 transition-all">
			<a href="/login">Login</a>
		</li>
	</ul>
{/if}
