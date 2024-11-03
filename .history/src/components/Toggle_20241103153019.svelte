<script lang="ts">

	let name = $state('Randy');
	let status: 'OPEN' | 'CLOSED' = $state('OPEN');
	let full_name = $derived(name + ' ' + 'de vries');

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}

	function onclick() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<div class="max-w-[400px] mx-auto grid place-items-center items-center justify-center gap-6 border-2 p-4">
		<p class="text-2xl font-serif text-white ">
			set theme <span class="font-sans {status === 'OPEN' ? 'text-green-500' : 'text-red-500'}">{status}</span>
		</p>

		<!-- <button on:click={toggle}>toggle status</button> -->
		<button
			class=" w-[176px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 active:scale-[.98]"
			type="button"
			onclick={toggle}>Toggle status</button
		>
	</div>

