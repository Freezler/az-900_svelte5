<script>
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

<div class="container">
	<section>
		{#each plans as plan}
			<div class="card grid grid-cols-1 w-full p-4 border-2 border-white">
				<div class="flex mx-auto">
					<h2 class="font-bolder text-center text-white">{plan.name}</h2>
				</div>
				<img src={plan.image} class="object-cover h-[100px]" loading="lazy" alt="tech used" />
				<div class="content">
					{#each plan.features as feature}
						<p class="">{feature}</p>
					{/each}
				</div>
				<button type="button" class="action border w-[130px] rounded px-4 py-2 mx-auto">try it out</button>
			</div>
		{/each}
	</section>
</div>

