<script lang="ts">

  let status: 'OPEN' | 'CLOSED' = 'OPEN';

  function toggle() {
    status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
  }

</script>

<div>
	<button on:click={toggle} class="absolute right-0 top-0   rounded border px-4 py-2 font-bold text-white hover:bg-blue-700 " popovertarget="nav-menu">Menu</button>
	<div class="{status === 'OPEN' ? 'animate-fade-in' : 'hidden'}  absolute right-0 top-0 bg-white text-center size-56 rounded border-2 border-blue-600 w-[382px] h-[500px]" popover="auto" id="nav-menu">
		<ul class="grid place-items-center items-center justify-center gap-8 mt-16">
			<li>HOME</li>
			<li>ABOUT ME</li>
			<li>PROJECTS</li>
			<li>CONTACT</li>
		</ul>
	</div>
</div>
