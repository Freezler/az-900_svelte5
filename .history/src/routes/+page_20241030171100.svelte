<script>
  import Header from './Header.svelte';
  let stau
  let name = $state('Svelte 5');
</script>

<Header {name} />

<input bind:value={name} />