<script>
  import Header from './Header.svelte';

  let name = $state('Svelte 5');
</script>

<Header {name} />

