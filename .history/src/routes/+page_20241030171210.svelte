<script>
  import Header from './Header.svelte';
  let name = $state('Svelte 5');
  let status: 'OPEN' | 'CLOSED' = $state('OPEN');
</script>

<Header {name} />

<input bind:value={name} />