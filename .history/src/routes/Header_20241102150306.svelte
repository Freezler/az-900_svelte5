<script lang="ts">
	// Declare props
	let { name = 'Randy' } = $props();

	// Local state for the surname
	let surname = $state('de vries');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);

</script>

<div
	class="grid h-96 place-items-center  bg-[url('./pic.avif')] bg-cover bg-center"
>
	<h1
		class=" text-white  bg-clip-text text-2xl font-bold text-transparent"
	>
		Hello my name is <span class="bg-gradient-to-tr from-violet-200 via-purple-800 to-pink-800 bg-clip-text text-5xl font-bold text-transparent drop-shadow-md shad">{full_name}</span>
	</h1>
</div>
