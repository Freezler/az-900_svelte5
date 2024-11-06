<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	let showMenu: boolean = $state(false);
	import { fly } from 'svelte/transition';

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent | TouchEvent) => {
			if (!node.contains(event.target as Node) && showMenu) {
				showMenu = false;
			}
		};
		document.addEventListener('click', handleClick, true);
		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
	clickOutside(H);
</script>

<button
	onclick={() => (showMenu = !showMenu)}
	class="z-150 fixed right-[8px] top-[8px] flex h-12 w-12 items-center justify-center rounded-full bg-gray-200"
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
		class="items-center justify-center fixed bottom-0 right-0 z-0 grid h-[50vh] w-full place-content-center bg-white"
		transition:fly={{ y: 100, duration: 420, easing: cubicInOut }}
	>
		<li class="px-24 py-4 transition-colors ease-linear duration-300 hover:bg-[--bg-color]   bg-gray-100">
			<a href="/">Home</a>
		</li>
		<li class=" px-24 py-4 transition-all hover:bg-gray-100">
			<a href="/concepts">About</a>
		</li>
		<li class=" px-24 py-4 transition-all hover:bg-gray-100">
			<a href="/security">Contact</a>
		</li>
		<li class="px-24 py-4 transition-all hover:bg-gray-100">
			<a href="/services">Login</a>
		</li>
	</ul>
{/if}
