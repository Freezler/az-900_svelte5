<script>
	import { fade, fly } from 'svelte/transition';
	import Popover from '../../components/Popover.svelte';

	let title = 'Azure Fundamentals (AZ-900) Concepts';
	let topics = [
		{
			category: 'Cloud Concepts',
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
	class="grid h-screen w-full place-items-center items-center justify-center"
	transition:fade={{ duration: 600 }}
>
	<Popover />
	<div class="bg-[--bg-color2] text-[--text-color] p-4 grid gap-4">
		<h1 class="text-[clamp(.8rem,5vw,2.4rem)] text-center">{title}</h1>

		{#each topics as topic}
			<div
				class="text-[--text-color] mx-auto grid w-[80%] max-w-3xl place-items-center items-center justify-center gap-4 p-4"
			>
				<h2 class="text-3xl">{topic.category}</h2>

				{#each topic.articles as article}
					<article class="grid gap-4  bg-[--] p-4">
						<h3 class="text-2xl text-start underline underline-offset-4">{article.name}</h3>
						<p class="text-start p-4 text-balance">{article.description}</p>
					</article>
				{/each}
			</div>
		{/each}
	</div>
</div>


