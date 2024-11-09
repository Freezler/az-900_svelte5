<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	let $staeshowMenu: boolean = false;


</script>

	<!-- Your existing code -->

<img
	src="/public/images/Design 2.png"
	alt="Ran form Logo"
	class="fixed left-[16px] top-[16px] w-[64px] rounded-full"
/>
<button
	onclick={() => (showMenu = !showMenu)}
	class="fixed right-[20px] top-[20px] flex  h-[58px] w-[58px] items-center justify-center rounded-full bg-blue-600/20 backdrop-blur text-white border-2 border-blue-900"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-8 w-8"
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
		class="items-center justify-center fixed bottom-0 right-0 z-100 grid h-[50vh] w-[100vw] border-t border-blue-900 place-content-center bg-blue-600/20 backdrop-blur text-white uppercase text-center text-xl"
		transition:fly={{ y: 100, duration: 420, easing: cubicInOut }}
	>
		<li class="px-2 py-4 w-[80vw] underline underline-offset-4 transition-colors ease-linear duration-400 hover:bg-blue-600/20 rounded-t-lg  bg-blue-200/30">
			<a href="/">Home</a>
		</li>
		<li class=" px-2 py-4 transition-colors hover:underline underline-offset-4  ease-linear duration-400 hover:bg-blue-600/20  bg-blue-200/30">
			<a href="/concepts">Concepts</a>
		</li>
		<li class=" px-2 py-4 transition-colors hover:underline underline-offset-4 ease-linear duration-400 hover:bg-blue-600/20  bg-blue-200/30">
			<a href="/security">Security</a>
		</li>
		<li class="px-2 py-4 transition-colors  hover:underline underline-offset-4 ease-linear duration-400 hover:bg-blue-600/20 rounded-b-lg  bg-blue-200/30">
			<a href="/services">Services</a>
		</li>
	</ul>
{/if}
