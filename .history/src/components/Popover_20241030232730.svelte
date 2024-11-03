<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');

	function toggle() {
  status = status === 'Fade_IN' ? 'Fade_OUT' : 'Fade_IN';
}

</script>

<div>
  <button
    onclick={toggle}
    class="absolute right-0 top-0 rounded border px-4 py-2 font-bold text-white hover:bg-blue-700"
    popovertarget="nav-menu"
  >
    Menu
  </button>

  <div
    class:fade-in={status === 'Fade_IN'}
    class:fade-out={status === 'Fade_OUT'}
    class=" absolute right-0 top-0 size-56 h-[500px] w-[382px] rounded border-2 border-blue-600 bg-white text-center"
    popover="auto"
    id="nav-menu"
  >
		<ul class="card-wrapper mt-16 grid place-items-center items-center justify-center gap-8">
      <div class="flex flex-col gap-4 card">
			<li>HOME</li>
			<li>ABOUT ME</li>
			<li>PROJECTS</li>
			<li>CONTACT</li>
      </div>
		</ul>
	</div>
</div>
