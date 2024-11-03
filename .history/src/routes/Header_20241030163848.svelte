<script lang="ts">
  import { slide } from 'svelte/transition';
</script>

<div transition:slide={{ duration: 300 }}  class="grid place-items-center items-center justify-center h-96 bg-violet-400">
	<h1>Hello from header</h1>
</div>
