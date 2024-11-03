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
{#if status === 'Fade_IN'}
	<div
  class={`card-wrapper h-[500px] w-[382px] ${status === 'Fade_OUT' ? 'fade-out' : 'fade-in'} rounded bg-white text-center duration-200`}
  popover="auto"
  id="nav-menu"
  style={`opacity: ${status === 'Fade_OUT' ? 0 : 1}`}
>
		<div class="card-content grid h-full w-full place-items-center">
			<ul
				class="place-items-cente flex h-full w-full flex-col items-center justify-center gap-4 bg-red-300 text-center"
			>
				<li>HOME</li>
				<li>ABOUT ME</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>
		</div>
	</div>
{/if}

{#if status === 'Fade_OUT'}
	<div
		class={`card-wrapper h-[500px] w-[382px] ${status === 'Fade_OUT' ? 'fade-out' : 'fade-in'} rounded bg-white text-center duration-200`}
		popover="auto"
		id="nav-menu"
		style={`opacity: ${status === 'Fade_OUT' ? 0 : 1}`}
	>
		<div class="card-content">
			<ul class=" h-full gap-4">
				<li>HOME</li>
				<li>ABOUT ME</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>
		</div>
	</div>
{/if}
