<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');

	function toggle() {
  status = status === 'Fade_IN' ? 'Fade_OUT' : 'Fade_IN';
  consol

	}
</script>

<div>
	<button
    onclick={toggle}
		class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
		popovertarget="nav-menu">Menu</button
	>
	<div
		class="{status === 'Fade_IN'
			? 'animate-fade-out'
			: 'animate-fade-in'}  absolute right-0 top-0 size-56 h-[500px] w-[382px] rounded border-2 border-blue-600 bg-white text-center"
		popover="auto"
		id="nav-menu"
	>
		<ul class="mt-16 grid place-items-center items-center justify-center gap-8">
			<li>HOME</li>
			<li>ABOUT ME</li>
			<li>PROJECTS</li>
			<li>CONTACT</li>
		</ul>
	</div>
</div>
