<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');

	function toggle() {
		status = status === 'Fade_IN' ? 'Fade_OUT' : 'Fade_IN';
	}
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
		class=" duration-200 animate-fade-in delay-500 card-wrapper  h-[500px] w-[382px] rounded bg-white text-center"
		popover="auto"
		id="nav-menu"
    style={` ${status === 'Fade_IN' ? 'all' : 'none'}; display: ${status === 'Fade_IN' ? 'block' : 'none'}`}
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
    class=" animate-fade-out duration-200   card-wrapper h-[500px] w-[382px] rounded bg-white text-center"
    popover="auto"
    id="nav-menu"
    style={`display: ${status === 'Fade_OUT' ? 'block' : 'none'}`}
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
 <style>
  .card-content {
    transition: allow;
  }
 </style>