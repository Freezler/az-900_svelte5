<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { isColonToken } from 'typescript';

	onMount(() => {
		document.addEventListener('click', (event) => {
			const target = event.target as HTMLElement;
			if (!target.closest('button')) {
				isMenuOpen = false;
			}

		})
	})
	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}
</script>
<img src="./Design 2.png" class="w-16 fixed top-0 left-0" alt="otter logo">


<button
	on:click={toggle}
	tabindex="0"
	class="fixed right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	aria-expanded={isMenuOpen}
	aria-controls="menu"
	aria-label="open menu"
>

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
