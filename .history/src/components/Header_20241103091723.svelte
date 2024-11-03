<script lang="ts">
	// Declare props
	let { name = 'AZ-900' } = $props();

	// Local state for the surname
	let surname = $state('Exam prep');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);
</script>

<div
	class=" mx-auto grid h-96 place-content-start place-items-center justify-center items-start bg-[url('./HeaderAzure.png')] bg-cover bg-top mix-blend-multiply"
>
	<h1
		class="bg-clip-text text-center text-[clamp(.2rem,3vw,1.5rem)] font-bold text-transparent text-white text-shadow-lg shadow-orange-600"
	>
		Microsoft Azure <span
			class="bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-400 bg-clip-text text-[clamp(1.8rem,5vw,4.5rem)] font-bold text-transparent drop-shadow-[-2px_2px_2px_hs]"
			>{name}</span
		>
	</h1>
	<h3>{surname}</h3>
</div>
