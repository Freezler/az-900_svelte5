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
			class="bg-gradient-to-tr from-blue-300 via-pink-400 to-pink-200 bg-clip-text text-center text-[clamp(1.5rem,5vw,3rem)] font-bold text-transparent drop-shadow-[-2px_2px_2px_rgba(137, 25, 224, 0.9)] font-[serif] text-3xl font-bold text-transparent drop-shadow-lg"
		>
			{surname}
		</h3>
	</div>
</div>
