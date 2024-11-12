<script lang="ts">
	// Declare props
	let { name = 'AZ-900' } = $props();

	// Local state for the surname
	let surname = $state('Fundamentals');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);
</script>

<div
	class="max-w-[100vw] z-100 mx-auto grid h-screen sm:h-56 place-content-center place-items-center items-center justify-center bg-[url('/public/images/headImage.png')] bg-cover bg-top   "
>
	<div class="grid backdrop-blur-[4px] rounded-lg backdrop-brightness-[.90] px-6 pb-6 bg-sky-900/40 border-4 border-sky-800">
		<h1
			class="shadow-[rgba(7, 25, 224, 0.9)] drop bg-clip-text text-center text-[clamp(1rem,5vw,2.5rem)] font-bold text-transparent bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-700  drop-shadow-[2px_1px_2px_rgba(50,0,90,0.9)]"
		>
			Microsoft Azure <span
				class="bg-gradient-to-tr from-yellow-300 via-yellow-300 to-yellow-200 bg-clip-text text-[clamp(2.8rem,5vw,8.5rem)] font-bold text-transparent drop-shadow-[2px_4px_2px_rgba(36,50,100,0.9)]"
				>{name}</span
			>
		</h1>
		<h3
			class="bg-clip-text text-4xl text-center text-[clamp(1rem,5vw,3.5rem)] font-[700] font-[montserrat] bg-gradient-to-r from-[hsl(192,88%,51%)] via-[--hsl(192,88%,71%)] to-[--text-color]  py-2 text-transparent drop-shadow-[2px_4px_2px_rgba(36,50,100,0.9)] backdrop-brightness-[.90] "
		>
			{surname}
		</h3>
	</div>
</div>