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
		class="bg-clip-text text-center text-[clamp(.2rem,3vw,1.5rem)] font-bold text-transparent text-white text-shadow-lg shadow-slate-900 drop-shadow-[-2px_2px_2px_rgba(137, 225, 224, 0.9)]"
	>
		Microsoft Azure <span
			class="bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-200 bg-clip-text text-[clamp(1.8rem,5vw,4.5rem)] font-bold text-transparent drop-shadow-[-2px_2px_2px_rgba(120,10,90,0.9)]"
			>{name}</span
		>
	</h1>
	<h3>{surname}</h3>
</div>
