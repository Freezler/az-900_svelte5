<script lang="ts">
	import { fly } from 'svelte/transition';
	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<button
	on:click={toggle}
	tabindex="1"
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
>
	Menu
</button>

{#if isMenuOpen}
	<div
		class="fixed bottom-0 left-0 mt-auto h-[332px] w-full bg-white text-center"
		id=""
		in:fly={{ duration: 600, delay: 200 , y: 300 }}
		out:fly={{ duration: 600, delay: 200, y: 300 }}
	>
		<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
			<li href="/" class="hover:underline" tabindex="1">HOME</li>
			<li href="/about" class="hover:underline" tabindex="1">ABOUT ME</li>
			<li href="/projects" class="hover:underline" tabindex="1">PROJECTS</li>
			<li  href="/contact" class="hover:underline" tabindex="1">CONTACT</li>
		</ul>
	</div>
{/if}
