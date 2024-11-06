<script>
  let isMenuOpen = false;

  function toggle() {
    console.log('Toggle function called');
    isMenuOpen = !isMenuOpen;
    console.log('isMenuOpen is now:', isMenuOpen);
  }

  $: console.log('isMenuOpen reactive statement:', isMenuOpen);
</script>

<button
  on:click={toggle}
  type="button"
  class="z-100 fixed right-0 top-0 m-[22px] size-[72px] rounded-full border-4 border-yellow-400 text-yellow-300 backdrop-brightness-[.50] transition-all hover:bg-[hsl(210,55%,8%,0.4)] flex items-center justify-center"
>
  {#if !isMenuOpen}
    Open
  {:else}
    Close
  {/if}
</button>

{#if isMenuOpen}
  <div>Menu is open</div>
{:else}
  <div>Menu is closed</div>
{/if}