<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		const menu = document.getElementById("menu");
		if (isMenuOpen && menu) {
			const firstLink = menu.querySelector("a");
			if (firstLink) {
				firstLink.focus(); // Focus on the first link when the menu opens
			}
		}
	});

	function clickOutside(node: bu) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		}
	}
</script>

<button
	on:click={toggle}
	tabindex="0"
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	aria-expanded={isMenuOpen}
	aria-controls="menu"
>
	Menu
</button>

{#if isMenuOpen}
	<div
		class="fixed bottom-0 left-0 mt-auto h-[332px] w-full bg-white text-center"
		id="menu"
		role="menu"
		in:fly={{ duration: 400, delay: 200, y: 300 }}
		out:fly={{ duration: 400, delay: 200, y: 300 }}
	>
		<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
			<li role="none">
				<!-- Adding role="none" to remove list role for non-semantic structure -->
				<a href="/" class="hover:underline" tabindex="0" role="menuitem">HOME</a>
			</li>
			<li role="none">
				<a href="/about" class="hover:underline" tabindex="0" role="menuitem">ABOUT ME</a>
			</li>
			<li role="none">
				<a href="/projects" class="hover:underline" tabindex="0" role="menuitem">PROJECTS</a>
			</li>
			<li role="none">
				<a href="/contact" class="hover:underline" tabindex="0" role="menuitem">CONTACT</a>
			</li>
		</ul>
	</div>
{/if}
