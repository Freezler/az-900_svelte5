<script lang="ts">
  function handleClick(e) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    handleClick(e);
    return;
  }

  // With a View Transition:
  document.startViewTransition(() => handleClick(e));

}
</script>

<div>
	<button on:click|preventDefault={handleClick} class="absolute right-0 top-0 w-[182px] rounded border px-4 py-2 font-bold text-white hover:bg-blue-700 " popovertarget="nav-menu">Menu</button>
	<div class="size-56 rounded-xl border-2 border-blue-600" popover="auto" id="nav-menu">
		<ul class="flex flex-col gap-4 p-4 place-items-center">
			<li>HOME</li>
			<li>ABOUT ME</li>
			<li>PROJECTS</li>
			<li>CONTACT</li>
		</ul>
	</div>
</div>
