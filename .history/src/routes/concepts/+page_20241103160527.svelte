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
        },

    ];

</script>

<div class="grid h-screen w-full place-items-center items-center justify-center"
transition:fade={{ duration: 600 }}>
  <Popover />
  <div class="container">
    <h1>{title}</h1>

    {#each topics as topic}
        <div class="bg-red-400 max-w-3xl w-md>
            <h2>{topic.category}</h2>

            {#each topic.articles as article}
                <article>
                    <h3>{article.name}</h3>
                    <p>{article.description}</p>
                </article>
            {/each}
        </div>
    {/each}
</div>
</div>

