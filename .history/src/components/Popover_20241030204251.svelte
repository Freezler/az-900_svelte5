<script lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
  import { CheckIcon, CheckCircleIcon, XCircleIcon } from '@rgossiaux/svelte-heroicons/solid';

</script>

<Popover class="relative">
  <PopoverButton class="focus:outline-none">
    <CheckCircleIcon class="h-6 w-6" />
  </PopoverButton>
  <PopoverPanel
    class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
</Popover>