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
<div class="grid"></div>
<p class="text-center text-2xl">The store is now {status}</p>
<button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded active:scale-[.98]" type="button" onclick={toggle}>toggle status</button>