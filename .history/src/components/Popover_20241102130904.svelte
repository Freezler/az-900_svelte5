<script lang="ts">
	import { fly } from 'svelte/transition';
	let isMenuOpen = false;

	function toggle() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<button
	on:click={toggle}
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
>
	Menu
</button>

{#if isMenuOpen}
	<div
		class="fixed bottom-0 left-0 mt-auto h-[320px] w-full bg-white text-center"
		id="nav-menu"
		in:fly={{ duration: 600, delay: 200 , y: 100 }}
		out:fly={{ duration: 600, delay: 200 }}
	>
		<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
			<li>HOME</li>
			<li>ABOUT ME</li>
			<li>PROJECTS</li>
			<li>CONTACT</li>
		</ul>
	</div>
{/if}
