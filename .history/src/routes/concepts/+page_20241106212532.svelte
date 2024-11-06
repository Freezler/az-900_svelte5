<script>
	import { fade, fly } from 'svelte/transition';
	import Popover from '../../components/Popover.svelte';

	let title = 'Azure Fundamentals (AZ-900) Cloud';
	let topics = [
		{
			category: 'Concepts',
			articles: [
				{
					name: 'Cloud Models',
					description: `Understand the differences between Public, Private, and Hybrid cloud models.
                    Public clouds are available to multiple customers, private clouds are dedicated to one organization,
                    and hybrid clouds combine both models, allowing flexibility and control.`
				},
				{
					name: 'Cloud Services',
					description: `Learn about IaaS, PaaS, and SaaS. IaaS provides virtualized computing resources, PaaS
                    offers an environment for app development, and SaaS delivers applications as a service over the internet.`
				},
				{
					name: 'Benefits of Cloud Computing',
					description: `Cloud computing offers benefits such as scalability, elasticity, cost efficiency, agility,
                    disaster recovery, and global reach, enabling businesses to adapt quickly to changing needs.`
				}
			]
		}
	];
</script>

<div
	class="grid h-full w-[100vw] place-items-center items-center justify-center"
	transition:fade={{ duration: 400 }}
>
<header><Popover /></header>

	<div class="bg-blue-500/20  text-blue-400  grid gap-2 my-24 pt-6">
		<h1 class="text-[clamp(1rem,5vw,2.2rem)] text-center">{title.toUpperCase()}</h1>

		{#each topics as topic}
			<div
				class="text-blue-100 mx-auto grid w-[100vw] md:w-[100vw] max-w-5xl place-items-center items-center justify-center gap-4 py-2"
			>
				<h2 class="text-3xl mb-4 text-center">{topic.category}</h2>

				{#each topic.articles as article}
					<article class="grid gap-4 py-16 bg-[--bg-color] ">
						<h3 class="text-2xl text-center underline underline-offset-8 decoration-blue-400">{article.name}</h3>
						<p class="text-start p-8 text-balance">{article.description}</p>
					</article>
				{/each}
			</div>
		{/each}
	</div>
</div>


