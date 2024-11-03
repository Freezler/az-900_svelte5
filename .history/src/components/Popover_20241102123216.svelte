<script lang="ts">
	import { fly }
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

	<div
		class="fixed h-[400px] w-full bottom-0 left-0 bg-white text-center mt-auto transition-all"
		popover="auto"
		id="nav-menu"
		style="opacity: 1"
	>

			<ul
				class="place-items-center flex h-full w-full flex-col items-center justify-center gap-4"
			>
				<li>HOME</li>
				<li>ABOUT ME</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>

	</div>
