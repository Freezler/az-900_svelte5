<script>
import { fly } from 'svelte/transition';
	// Define your plans as an array of objects
	const plans = [
		{
			price: 'HTML',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'hyperText markup language',
			features: [
				'When: Created in 1993',
				'Who: Tim Berners-Lee',
				'What: HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
			]
		},
		{
			price: 'CSS',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'cascading style sheets',
			features: [
				'When: Created in 1996',
				'Who: Håkon Wium Lie, Bert Bos',
				'What: CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.'

			]
		},
		{
			price: 'JavaScript',
			image: 'https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'JS (JavaScript)',
			features: [
				'When: Created in 1995',
				'Who: Brendan Eich',
				'What: JavaScript is a high-level, interpreted programming language that enables interactive web pages and web applications.'
			]
		}
	];
</script>


	<section class="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 " transition:fly={{ x: 200, duration: 1000 }}>
		{#each plans as plan }
			<div class="grid subgrid rounded bg-blue-500/20 w-full pb-4 px-0 border-4 border-transparent place-items-center"
      >

				<img src={plan.image} class="object-fit h-[208px] w-full  object-cover" loading="lazy" alt="tech used" />
        <div class="grid subgrid ">
					<h2 class="grid subgrid  font-bold p-2  text-white">{plan.name}</h2>
				</div>
				<div class="grid subgrid grid-col-4 px-8 text-pretty text-sm ">
					{#each plan.features as feature}
						<p class="text-white text-pretty  my-2  ">{feature}</p>
					{/each}
				</div>
				<button type="button" class="action border w-[180px] hover:bg-[hsl(210,55%,8%,1)] bg-indigo-500 text-white rounded px-4 py-2 my-4 mx-auto">try it out</button>
			</div>
		{/each}
	</section>


