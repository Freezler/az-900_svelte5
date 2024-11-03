<script>
  import Header from './Header.svelte';
  let status: 'OPEN' | 'CLOSED' = $state('OPEN');
  let name = $state('Svelte 5');
</script>

<Header {name} />

<input bind:value={name} />

<p>The store is now {status}</p>