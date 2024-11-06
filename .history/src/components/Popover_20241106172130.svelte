<script>
	import { fade } from 'svelte/transition';
	let isMenuOpen = false;

	function toggle() {
		console.log('Toggle function called');
		isMenuOpen = !isMenuOpen;
		console.log('isMenuOpen is now:', isMenuOpen);
	}

	$: console.log('isMenuOpen reactive statement:', isMenuOpen);
</script>

<button
	on:click={toggle}
	type="button"
	class="z-100 fixed right-0 top-0 m-[22px] flex size-[72px] items-center justify-center rounded-full border-4 border-yellow-400 text-yellow-300 backdrop-brightness-[.50] transition-all hover:bg-[hsl(210,55%,8%,0.4)]"
	aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
>
	{#if !isMenuOpen}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2.8rem"
			height="2.8rem"
			viewBox="0 0 12 24"
			{...$$props}
			on:click|stopPropagation={toggle}
			on:touchend={toggle}
			aria-hidden="true"
		>
			<path
				fill="currentColor"
				d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
				on:click|stopPropagation={toggle}
				on:touchend={toggle}
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2.8rem"
			height="2.8rem"
			viewBox="0 0 14 24"
			{...$$props}
			on:click|stopPropagation={toggle}
			on:touchend={toggle}
		>
			<path
				fill="currentColor"
				d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
				on:click|stopPropagation={toggle}
				on:touchend={toggle}
			/>
		</svg>
	{/if}

	{#if isMenuOpen}
		<div
			class="z-100 fixed bottom-0 left-0 mt-auto h-[42vh] w-full border-t-2 border-[--text-color] bg-blue-500/20 text-center shadow-md backdrop-blur-md backdrop-brightness-[.30]"
			id="menu"
			role="menu"
			in:fly={{ duration: 400, delay: 200, y: 200 }}
			out:fly={{ duration: 400, y: 200 }}
		>
			div
		</div>
	{/if}
</button>
