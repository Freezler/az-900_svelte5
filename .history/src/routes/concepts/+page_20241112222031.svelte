<script>
	import { fade, fly } from 'svelte/transition';
	import Popover from '../../components/Menu.svelte';

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
				class="text-blue-100 mx-auto grid w-[100vw] md:w-[100vw] max-w-5xl place-items-center items-center justify-center gap-2 py-0 "
			>
				<h2 class="text-2xl mb-2 text-center">{topic.category}</h2>

				{#each topic.articles as article}
					<article class="grid w-[42ch] md:w-3/4 place-items-center items-center justify-center gap-8  bg-[--bg-color] p-8 my-2 py-16 rounded-xl">
						<h3 class="text-3xl text-center underline underline-offset-8 text-">{article.name}</h3>
						<p class="mx-auto text-center m-8 text-pretty">{article.description}</p>
					</article>
				{/each}
			</div>
		{/each}
	</div>
</div>


