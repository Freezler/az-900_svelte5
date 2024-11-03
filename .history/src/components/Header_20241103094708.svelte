<script lang="ts">
	// Declare props
	let { name = 'AZ-900' } = $props();

	// Local state for the surname
	let surname = $state('Exam prep');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);
</script>

<div
	class=" mx-auto grid h-96 place-content-center place-items-center items-start justify-center bg-[url('./HeaderAzure.png')] bg-cover bg-top"
>
	<div class="grid">
		<h1
			class="drop-shadow-[-2px_2px_2px_rgba(137, 25, 224, 0.9)] bg-clip-text text-center text-[clamp(1rem,5vw,2.5rem)] font-bold text-transparent text-white drop-shadow-lg"
		>
			Microsoft Azure <span
				class="bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-[clamp(2.8rem,5vw,8.5rem)] font-bold text-transparent drop-shadow-[-2px_2px_2px_rgba(120,10,90,0.9)]"
				>{name}</span
			>
		</h1>
		<h3
			class="bg-clip-text text-6xl text-center text-[clamp(1rem,5vw,2.5rem)] font-[500] bg-gradient-to-br from-blue-950 via-blue-950 to-blue-800 mix-blend-color drop-shadow-lg text-purple-800"
		>
			{surname}
		</h3>
	</div>
</div>
