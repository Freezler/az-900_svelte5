<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');

	function toggle() {
    if (status === 'Fade_IN') {
      status = 'Fade_OUT';
      setTimeout(() => {
        status = 'Fade_IN';
      }, 500); // add a 500ms delay before resetting status to 'Fade_IN'
    } else {
      status = 'Fade_IN';
    }
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
		class="delay-500 duration-100 animate-fade-out  card-wrapper  h-[500px] w-[382px] rounded bg-white text-center"
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
    class=" animate-fade-in duration-100  delay-500 card-wrapper h-[500px] w-[382px] rounded bg-white text-center"
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
