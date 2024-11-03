<script lang="ts">
	let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');

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
		class=" card-wrapper h-[500px] w-[382px] animate-fade-in rounded bg-white text-center delay-500 duration-200"
		popover="auto"
		id="nav-menu"
		style={`display: ${status === 'Fade_IN' ? 'block' : 'none'}`}
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
		class=" card-wrapper h-[500px] w-[382px] animate-fade-out rounded bg-white text-center duration-200"
		popover="auto"
		id="nav-menu"
		style={`display: ${status === 'Fade_OUT' ? 'none' : 'flex'}`}
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
  @apply .settings-popover {
  &:popover-open {
    /*   0. OPEN STATE   */
    /*  state when popover is open, BOTH:
        what we're transitioning *in* to
        and transitioning *out* from */
    transform: translateY(0);
    opacity: 1;

    /*   1. BEFORE-OPEN STATE   */
    /*  initial state for what we're animating *in* from,
        in this case: goes from lower (y + 20px) to center  */
    @starting-style {
      transform: translateY(20px);
      opacity: 0;
    }
  }

  /*   2. AFTER-OPEN-IS-CLOSED STATE   */
  /*  initial state for what we're animating *out* to ,
      in this case: goes from center to (y - 50px) higher */
  transform: translateY(-50px);
  opacity: 0;

  /*  enumarate transitioning properties, including display */
  transition: transform 0.5s, opacity 0.5s, display 0.5s allow-discrete;
}

/* etc. */

.settings-popover {
  background: ghostwhite;
  position: fixed;
  margin: auto;
  border: 1px solid skyblue;
  padding: 2rem;
  line-height: 2;
  width: 350px;
  box-shadow: 0 0 25px dimgray;
}

</style>
