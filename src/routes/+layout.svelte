<script lang="ts">
	import '../app.css';
  import Popover from '../components/Menu.svelte';
	const { children } = $props();
</script>

<div class="grid h-full gap-2 bg-[--bg-color] bg-cover bg-center bg-no-repeat">
  <Popover />
	{@render children()}
</div>
