<script>
  import { fade } from 'svelte/transition';
  import Popover from '../../components/Popover.svelte';

  let title = 'Azure Fundamentals (AZ-900) Services';
    let topics = [

        {
            category: 'Core Azure Services',
            articles: [
                {
                    name: 'Azure Compute Options',
                    description: `Azure offers virtual machines, Azure App Services, and serverless computing.
                    Virtual machines provide flexible computing power, App Services allow quick deployment of web apps,
                    and serverless lets you run code without managing infrastructure.`
                },
                {
                    name: 'Azure Networking',
                    description: `Azure networking includes Virtual Networks (VNets), VPN gateways, and Azure Content Delivery Network (CDN).
                    VNets enable secure communication, while CDNs enhance content delivery performance.`
                },
                {
                    name: 'Azure Storage Options',
                    description: `Azure offers Blob Storage, Disk Storage, and Files. Blob is for unstructured data,
                    Disk is for virtual machine disks, and Files provide cloud file shares accessible from anywhere.`
                },
                {
                    name: 'Azure Databases',
                    description: `Azure has SQL Database, Cosmos DB, and more. SQL Database is a managed database,
                    while Cosmos DB provides a globally distributed, NoSQL database service with high availability.`
                }
            ]
        },

    ];

</script>

<div
	class="grid h-full w-full place-items-center items-center justify-center "
	transition:fade={{ duration: 300 }}
>
	<Popover />
	<div class="bg-[--bg-color2] text-[--text-color] p-16 grid gap-2 my-36 rounded-sm">
		<h1 class="text-[clamp(1rem,5vw,2.2rem)] text-center">{title}</h1>

		{#each topics as topic}
			<div
				class="text-[--text-color] mx-auto grid w-[80vw] md:w-[80vw] max-w-5xl place-items-center items-center justify-center gap-4 p-6"
			>
				<h2 class="text-3xl mb-4">{topic.category}</h2>

				{#each topic.articles as article}
					<article class="grid gap-4  bg-[--bg-color] p-8">
						<h3 class="text-2xl text-start underline underline-offset-4">{article.name}</h3>
						<p class="text-start p-4 text-balance">{article.description}</p>
					</article>
				{/each}
			</div>
		{/each}
	</div>
</div>

