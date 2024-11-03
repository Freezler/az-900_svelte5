<script lang="ts">
  import Header from './Header.svelte';
  let name = $state('Svelte 5');
  let status: 'OPEN' | 'CLOSED' = $state('OPEN');

  function toggle() {
    status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
  }
</script>

<Header {name} />

<input bind:value={name} />

<p>The store is now {status}</p>
<button class- type="button" onclick={toggle}>toggle status</button>