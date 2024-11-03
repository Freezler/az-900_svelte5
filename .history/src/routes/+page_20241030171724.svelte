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

<p >The store is now {status}</p>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onclick={toggle}>toggle status</button>