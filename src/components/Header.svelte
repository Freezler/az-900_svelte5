<script lang="ts">
	// Declare props
	const { name = '', number = '', topic = '' } = $props();

	// Local state for the Brand name
	const brand = $state('Microsoft Azure');

	// Derived state for the full course name
	const full_course = $derived(`${name} ${number}`);
</script>

<div
	class="z-100 mx-auto grid h-screen w-screen place-content-center place-items-center items-center justify-center bg-[url('/public/images/headImage.png')] bg-cover bg-top sm:h-[572px] md:h-[500px]"
>
	<div
		class="grid rounded-lg border-4 border-sky-800 bg-sky-900/40 w-screen sm:w-[80vw] pb-6 backdrop-blur-[2px] backdrop-brightness-[.90] "
	>
		<h1
			class="shadow-[rgba(7, 25, 224, 0.9)] drop bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-700 bg-clip-text text-center text-[clamp(1.25rem,0.2648rem+5.2273vw,4.9375rem)] font-bold text-transparent drop-shadow-[2px_1px_2px_rgba(50,0,90,0.9)] tracking-tight"
		>
			{brand}<span
				class="bg-gradient-to-tr from-yellow-300 via-yellow-300 to-yellow-200 bg-clip-text text-[clamp(2.625rem,0.6648rem+5.2273vw,6.9375rem)] font-bold text-transparent drop-shadow-[2px_4px_2px_rgba(36,50,100,0.9)] tracking-tight px-4"
				>{full_course}</span
			>
		</h1>
		<h3
			class="bg-gradient-to-r from-[hsl(192,88%,51%)] via-[--hsl(192,88%,71%)] to-[--text-color] bg-clip-text py-2 text-center font-[montserrat] text-4xl text-[clamp(1rem,5vw,3.5rem)] font-[700] text-transparent drop-shadow-[2px_4px_2px_rgba(36,50,100,0.9)] backdrop-brightness-[.90]"
		>
			{topic}
		</h3>
	</div>
</div>
