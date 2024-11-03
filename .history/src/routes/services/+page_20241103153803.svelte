<script>
	import { fade } from 'svelte/transition';
	import Popover from '../../components/Popover.svelte';
</script>

<div
	class="grid h-[100vh] w-full place-items-center items-center justify-center"
	transition:fade={{ duration: 600 }}
>
	<Popover />
	<h1 class="text-3xl font-bold text-white">Hello services!</h1>
</div>
