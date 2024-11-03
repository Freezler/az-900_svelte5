<script lang="ts">
	// Declare props
	let { name = 'AZ-900' } = $props();

	// Local state for the surname
	let surname = $state('Exam prep');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);

</script>

<div
	class="grid h-96 place-items-center  bg-[url('./HeaderAzure.png')] bg-top bg-cover drop-shadow-[12px_-6px_13px_rgba(220,210,90,0.8)] "
>
	<h1
		class=" text-white text-center  bg-clip-text text-[clamp(.2rem,3vw,1.5rem)] font-bold text-transparent"
	>
		Microsoft Azure  <span class="bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-400 bg-clip-text text-[clamp(1.8rem,5vw,4.5rem)] font-bold text-transparent drop-shadow-[12px_-6px_13px_rgba(120,210,90,0.8)] ">{name}</span>
	</h1><p>{}</p>
</div>
