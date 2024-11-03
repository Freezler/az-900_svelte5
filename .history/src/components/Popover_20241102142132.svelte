<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}

	// Close menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const menuElement = document.getElementById('nav-menu');
		const buttonElement = document.getElementById('menu-button');

		if (menuElement && buttonElement && !menuElement.contains(event.target as Node) && !buttonElement.contains(event.target as Node)) {
			isMenuOpen = false;
		}
	}

	// Add and remove event listener based on menu open state
	$effect(() => {
		if (isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<!-- Button to toggle the popover -->
<button
	on:click={toggle}
	tabindex="1"
	id="menu-button"
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	aria-haspopup="true"
>
	Menu
</button>

<!-- Popover menu with fly transition -->
{#if isMenuOpen}
	<div
		id="nav-menu"
		class="fixed bottom-0 left-0 mt-auto h-[332px] w-full bg-white text-center"
		in:fly={{ duration: 300, y: 20 }}
		out:fly={{ duration: 300, y: -20 }}
	>
		<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
			<a href="/" class="hover:underline" tabindex="1">HOME</a>
			<a href="/about" class="hover:underline" tabindex="1">ABOUT ME</a>
			<a href="/projects" class="hover:underline" tabindex="1">PROJECTS</a>
			<a href="/contact" class="hover:underline" tabindex="1">CONTACT</a>
		</ul>
	</div>
{/if}
