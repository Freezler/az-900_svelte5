<script lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '';
  import { CheckIcon, CheckCircleIcon, XCircleIcon } from '@rgossiaux/svelte-heroicons/solid';

</script>

<Popover class="relative">
  <PopoverButton class="focus:outline-none">
    <CheckCircleIcon class="h-6 w-6" />
  </PopoverButton>
  <PopoverPanel
    class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  >
    <div class="space-y-4">
      <div class="flex items-center">
        <CheckIcon class="h-6 w-6 text-green-500" />
        <span class="ml-4 text-sm font-medium text-gray-900">You can now publish your first post!</span>
      </div>
    </div>
  </PopoverPanel>
</Popover>