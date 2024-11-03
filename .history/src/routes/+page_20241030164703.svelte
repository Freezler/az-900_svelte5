<script>
  import Header from './Header.svelte';
  let { title } = $props();
</script>

<Header prop={title} />