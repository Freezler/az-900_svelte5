<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { Icon } from '@iconify/svelte';

	onMount(() => {
		document.addEventListener('click', (event) => {
			const target = event.target as HTMLElement;
			if (!target.closest('button')) {
				isMenuOpen = false;
			}
		});
	});
	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<img
	src="/public/images/Design 2.png"
	class="z-100 fixed left-0 top-0 m-4 w-20 transition-all hover:opacity-15 md:w-24"
	alt="otter logo"
/>

<button
	on:click={toggle}
	tabindex="0"
	class=" z-100 fixed right-0 top-0 m-[22px] size-[74px] rounded-full border-4 border-yellow-400 text-sm text-yellow-300 backdrop-brightness-[.50] transition-all hover:bg-[hsl(210,55%,8%,0.4)] md:size-[85px]"
	aria-expanded={isMenuOpen}
	aria-controls="menu"
	aria-label="open menu"
>
	{#if isMenuOpen}
		<Icon icon="mdi:close" class="text-3xl" />
	{/if}
	{#if !isMenuOpen}
		open menu
	{/if}
</button>

{#if isMenuOpen}
	<div
		class="z-100 fixed bottom-0 left-0 mt-auto h-[42vh] w-full border-t-2 border-[--text-color] bg-blue-500/20 text-center shadow-md backdrop-blur-md backdrop-brightness-[.30]"
		id="menu"
		role="menu"
		in:fly={{ duration: 400, delay: 200, y: 300 }}
		out:fly={{ duration: 400, delay: 200, y: 300 }}
	>
		<ul
			class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4 text-3xl text-[--text-color]"
		>
			<li role="none">
				<a href="/" class="hover:underline" tabindex="0" role="menuitem">HOME</a>
			</li>
			<li role="none">
				<a href="/concepts" class="hover:underline" tabindex="0" role="menuitem">CLOUD CONCEPTS</a>
			</li>
			<li role="none">
				<a href="/services" class="hover:underline" tabindex="0" role="menuitem"
					>AZURE CORE SERVICES</a
				>
			</li>
			<li role="none">
				<a href="/security" class="hover:underline" tabindex="0" role="menuitem"
					>SECURITY & COMPLIANCE</a
				>
			</li>
		</ul>
	</div>
{/if}
