<script>
  import { fade } from 'svelte/transition';
  import Popover from '/Popover.svelte';
</script>

<div class="grid h-[100vh] w-full place-items-center items-center justify-center"
in:fade={{ duration: 600 }}>
  <Popover />
  <h1 class="text-3xl font-bold text-white">Hello concepts!</h1>
</div>