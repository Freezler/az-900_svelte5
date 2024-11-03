<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const menu = document.getElementById('menu');
		const button = document.getElementById('menu-button');
		if (
			menu &&
			!menu.contains(event.target as Node) &&
			button &&
			!button.contains(event.target as Node)
		) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});

	onDestroy(() => {
		document.removeEventListener('click', handleClickOutside);
	});
</script>

<button
	id="menu-button"
	on:click={toggle}
	tabindex="0"
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	aria-expanded={isMenuOpen}
	aria-controls="menu"
>
	Menu
</button>

{#if isMenuOpen}
	<dialog
		open
		class="fixed bottom-0 left-0 mt-auto h-[332px] w-full bg-white text-center"
		id="menu"
		role="dialog"
	>
		<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
			<li>
				<a href="/" class="hover:underline" tabindex="0">HOME</a>
			</li>
			<li>
				<a href="/about" class="hover:underline" tabindex="0">ABOUT ME</a>
			</li>
			<li>
				<a href="/projects" class="hover:underline" tabindex="0">PROJECTS</a>
			</li>
			<li>
				<a href="/contact" class="hover:underline" tabindex="0">CONTACT</a>
			</li>
		</ul>
		<button on:click={toggle} class="mt-4">Close</button>
	</dialog>
{/if}
