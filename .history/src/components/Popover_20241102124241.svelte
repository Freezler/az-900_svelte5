<script lang="ts">
	import { fade } from 'svelte/transition';
	let status: string;

	function toggle() {
		status = status === 'Fade_IN' ? 'Fade_OUT' : 'Fade_IN';
	}
</script>

<button
	on:click={toggle}
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	popovertarget="nav-menu"
>
	Menu
</button>
{#}
<div
	class="fixed bottom-0 left-0 mt-auto h-[400px] w-full bg-white text-center"
	popover="auto"
	id="nav-menu"
	style="opacity: 1"
	in:fade={{ duration: 200, delay: 200 }}
	out:fade={{ duration: 200, delay: 200 }}
>
	<ul class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4">
		<li>HOME</li>
		<li>ABOUT ME</li>
		<li>PROJECTS</li>
		<li>CONTACT</li>
	</ul>
</div>
