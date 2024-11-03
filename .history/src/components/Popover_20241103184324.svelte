<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let isMenuOpen = false;

  function toggle(event: MouseEvent) {
    if (event.target instanceof Element && event.target.closest('button')) {
      isMenuOpen = !isMenuOpen;
      dispatch('toggleMenu', isMenuOpen);
    }
  }

  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && event.target instanceof Element && !event.target.closest('button') && !event.target.closest('#menu')) {
        isMenuOpen = false;
        dispatch('toggleMenu', isMenuOpen);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div on:click={handleInteraction} on:touchend={handleInteraction}>
  <button
    tabindex="0"
    class="z-100 fixed right-0 top-0 m-[22px] size-[72px] rounded-full border-4 border-yellow-400 text-yellow-300 transition-all hover:bg-[hsl(210,55%,8%,0.4)] backdrop-brightness-[.50]"
    aria-expanded={isMenuOpen}
    aria-controls="menu"
    aria-label="open menu"
  >
    {#if !isMenuOpen}
      <svg xmlns="http://www.w3.org/2000/svg" width="2.8rem" height="2.8rem" viewBox="0 0 12 24" {...$$props}><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" class="pointer-events-none"/></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="2.8rem" height="2.8rem" viewBox="0 0 14 24" {...$$props}><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
    {/if}
  </button>
</div>

{#if isMenuOpen}
  <div
    class="z-100 fixed bottom-0 left-0 mt-auto h-[42vh] w-full bg-blue-500/20 text-center border-t-2 border-[--text-color] shadow-md backdrop-blur-md backdrop-brightness-[.30]"
    id="menu"
    role="menu"
    in:fly={{ duration: 400, delay: 200, y: 300 }}
    out:fly={{ duration: 400, delay: 200, y: 300 }}
  >

<div on:click={toggle} aria-owns="menu">
  <button
    tabindex="0"
    class="z-100 fixed right-0 top-0 m-[24px] size-[72px] rounded-full border-4 border-yellow-400 text-yellow-300 transition-all hover:bg-[hsl(210,55%,8%,0.4)]"
    aria-expanded={isMenuOpen}
    aria-controls="menu"
    aria-label="open menu"
		aria-roledescription="menu"
  >
    {#if !isMenuOpen}
      <svg xmlns="http://www.w3.org/2000/svg" width="2.8rem" height="2.8rem" viewBox="0 0 12 24" {...$$props}><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" class="pointer-events-none"/></svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="2.8rem" height="2.8rem" viewBox="0 0 14 24" {...$$props}><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/></svg>
    {/if}
  </button>
</div>

{#if isMenuOpen}
  <div
    class="z-100 fixed bottom-0 left-0 mt-auto h-[42vh] w-full bg-blue-500/20 text-center border-t-2 border-[--text-color] shadow-md backdrop-blur-md backdrop-brightness-[.30]"
    id="menu"
    role="menu"
    in:fly={{ duration: 400, delay: 200, y: 300 }}
    out:fly={{ duration: 400, delay: 200, y: 300 }}
  >
		<ul
			class="flex h-full w-full flex-col place-items-center items-center justify-center gap-4 text-[--text-color] text-3xl"
		>
			<li role="none">
				<a href="/" class="hover:underline" tabindex="0" role="menuitem">HOME</a>
			</li>
			<li role="none">
				<a href="/concepts" class="hover:underline" tabindex="0" role="menuitem">CLOUD CONCEPTS</a>
			</li>
			<li role="none">
			<a href="/services" class="hover:underline" tabindex="0" role="menuitem">AZURE CORE SERVICES</a>
			</li>
			<li role="none">
				<a href="/security" class="hover:underline" tabindex="0" role="menuitem">SECURITY & COMPLIANCE</a>
			</li>
		</ul>
	</div>
{/if}
