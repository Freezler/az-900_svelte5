<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');
	let popoverVisible = false;

	function toggle() {
		if (!popoverVisible) {
			status = 'Fade_IN';
			popoverVisible = true;
		} else {
			status = 'Fade_OUT';
			popoverVisible = false;
		}
	}

	document.addEventListener('click', (event) => {
		if (
			!event.target &&
			(event.target as Element).closest('#nav-menu') &&
			(event.target as Element).closest('#nav-menu')
		) {
			status = 'Fade_OUT';
			popoverVisible = false;
		}
	});
</script>

<button
	onclick={toggle}
	class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
	popovertarget="nav-menu"
>
	Menu
</button>
{#if status === 'Fade_IN'}
	<div
		class="card-wrapper h-[500px] w-[382px] animate-fade-out rounded bg-white text-center delay-500 duration-100"
		popover="auto"
		id="nav-menu"
	>
		<div class="card-content">
			<ul class=" h-fullgap-4">
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
		class=" card-wrapper h-[500px] w-[382px] animate-fade-in rounded bg-white text-center delay-500 duration-100"
		popover="auto"
		id="nav-menu"
	>
		<div class="card-content">
			<ul class=" h-fullgap-4">
				<li>HOME</li>
				<li>ABOUT ME</li>
				<li>PROJECTS</li>
				<li>CONTACT</li>
			</ul>
		</div>
	</div>
{/if}
