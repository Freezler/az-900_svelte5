<script lang="ts">
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
/*************  ✨ Codeium Command 🌟  *************/
{#if status === 'Fade_IN'}
{#if status === 'Fade_IN' || status === 'Fade_OUT'}
	<div
		class="fixed h-full w-full top-0 left-0 bg-white text-center duration-200"
		class={` h-[500px] w-[100vw] ${status === 'Fade_IN' ? 'Fade_OUT' : 'Fade_IN'} rounded bg-white text-center duration-200`}
		popover="auto"
		id="nav-menu"
		style="opacity: 1"
		style={`opacity: ${status === 'Fade_OUT' ? 0 : 1}`}
	>
		<div class="card-content grid h-full w-full place-items-center">
			<ul
				class="place-items-center flex h-full w-full flex-col items-center justify-center gap-4"
				class="place-items-center flex h-full w-full flex-col items-center justify-center gap-4 bg-red-300 text-center"
			>
				<li>HOME</li>
				<li>ABOUT ME</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>
		</div>
	</div>
{/if}
/******  f68234d7-cbe5-4be6-935e-2069f5bbeedc  *******/
