<script>
  import { fade } from 'svelte/transition';
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
        {
            category: 'Security, Privacy, Compliance, and Trust',
            articles: [
                {
                    name: 'Azure Security Features',
                    description: `Learn about Network Security Groups (NSG), Azure DDoS Protection, and Azure Firewall.
                    NSGs filter traffic to VMs, DDoS Protection safeguards against attacks, and Azure Firewall enforces security rules.`
                },
                {
                    name: 'Azure Identity Services',
                    description: `Azure Active Directory (AD) is a cloud-based identity and access management service.
                    Multi-Factor Authentication (MFA) adds a second verification step, enhancing security.`
                },
                {
                    name: 'Compliance Offerings',
                    description: `Azure meets global compliance standards like GDPR, ISO, and SOC. The Microsoft Trust Center provides
                    information on compliance, privacy, and data protection within Azure.`
                },
                {
                    name: 'Azure Governance',
                    description: `Azure Policy, Blueprints, and Role-Based Access Control (RBAC) help maintain resource compliance.
                    Azure Policy ensures compliance, Blueprints streamline setup, and RBAC manages access to resources.`
                }
            ]
        },
        {
            category: 'Azure Pricing and Support',
            articles: [
                {
                    name: 'Azure Pricing Model',
                    description: `Azure uses pay-as-you-go, reserved, and spot pricing. Pay-as-you-go charges by usage,
                    reserved pricing offers discounts for long-term commitments, and spot pricing is for unused capacity at a discount.`
                },
                {
                    name: 'Total Cost of Ownership (TCO)',
                    description: `TCO calculator helps estimate the cost of running Azure services versus on-premises. It factors in cost savings
                    from hardware, power, and administrative costs.`
                },
                {
                    name: 'Azure Service Level Agreements (SLAs)',
                    description: `SLAs guarantee uptime and performance for Azure services. For instance, Azure Virtual Machines have an SLA of
                    99.9% or higher, depending on the redundancy option.`
                },
                {
                    name: 'Azure Support Plans',
                    description: `Azure offers Basic, Developer, Standard, and Professional Direct support plans. Each plan varies
                    by response time and scope of services provided.`
                }
            ]
        }
    ];

</script>

<div class="grid h-screen w-full place-items-center items-center justify-center"
in:fade={{ duration: 600 }}>
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