<script lang="ts">

	let name = $state('Randy');
	let status: 'DARK' | 'LIGHT' = $state('DARK');
	let full_name = $derived(name + ' ' + 'de vries');

	function toggle() {
		status = status === 'DARK' ? 'LIGHT' : 'DARK';
	}

	function onclick() {
		status = status === 'DARK' ? 'LIGHT' : 'DARK';
		window.document.body.classList.toggle('dark-mode')
	}
</script>

<div class="max-w-[400px] mx-auto grid place-items-center items-center justify-center gap-2 border-2 p-4  py-8 my-4 bg-yellow-600/10">
		<p class="text-2xl font-serif text-white ">
			set theme: <span class="font-sans {status === 'LIGHT' ? 'text-gray-200' : 'text-red-900'}">{status}</span>
		</p>

		<!-- <button on:click={toggle}>toggle status</button> -->
		<button
			class=" w-[176px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 active:scale-[.98]"
			type="button"
			onclick={toggle}>Toggle theme</button
		>
	</div>

