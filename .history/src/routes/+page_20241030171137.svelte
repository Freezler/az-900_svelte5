<script>
  import Header from './Header.svelte';
  let status: 'OPEN' | 'CLOSED' = $state('Svelte 5');
  let name = $state('Svelte 5');
</script>

<Header {name} />

<input bind:value={name} />