<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let status: 'Fade_IN' | 'Fade_OUT' = $state('Fade_IN');
  let popoverVisible = false;

  function toggle() {
    popoverVisible = !popoverVisible;
    status = popoverVisible ? 'Fade_IN' : 'Fade_OUT';
  }

  function handleClick(event: MouseEvent) {
    const popover = document.getElementById('nav-menu');
    if (popover && !popover.contains(event.target as Node)) {
      popoverVisible = false;
      setTimeout(() => {
        status = 'Fade_OUT';
      }, 1000); // wait for 500ms for the animation to finish
    }
  }

  onMount(() => {
    global.addEventListener('click', handleClick);
  });

  onDestroy(() => {
    glremoveEventListener('click', handleClick);
  });
</script>
<svelte:window />

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
    class="absolute right-0 top-0 size-56 h-[500px] w-[382px] rounded border-2 border-blue-600 bg-white text-center"
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
