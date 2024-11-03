<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<div transition:fade|local={params} class="grid place-items-center items-center justify-center h-96 bg-violet-400">
	<h1>Hello from header</h1>
</div>
