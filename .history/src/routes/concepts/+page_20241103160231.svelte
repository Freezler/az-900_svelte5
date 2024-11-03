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
        <div class="category">
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

<style>
    /* Basic styling for layout and readability */
    .container {
        max-width: 800px;
        margin: auto;
        padding: 1rem;
    }

    h1 {
        text-align: center;
        color: #0078d4; /* Azure blue */
    }

    .category {
        margin-bottom: 3rem;
    }

    h2 {
        color: #004578; /* Darker Azure color */
        margin-bottom: 1rem;
    }

    article {
        margin-bottom: 2rem;
        padding: 1rem;
        background-color: #f3f3f3;
        border-radius: 5px;
    }

    h3 {
        color: #005a9e;
        margin-bottom: 0.5rem;
    }

    p {
        line-height: 1.6;
    }
</style>