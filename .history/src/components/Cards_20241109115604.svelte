<script>
	import { fade, fly, slide } from 'svelte/transition';
	// Define your plans as an array of objects
	const concepts = [
		{
			url: 'concepts',
			image:
				'https://learn.microsoft.com/training/achievements/microsoft-azure-fundamentals-describe-cloud-concepts-social.png',
			name: 'Cloud Concepts',
			features: [
				'Cloud Models: Learn the basics of Public, Private, and Hybrid cloud models',
				'Cloud Services: Understand IaaS, PaaS, and SaaS, and when to use each.',
				'Benefits of Cloud: Explore key benefits like scalability, elasticity, agility, and disaster recovery.'
			]
		},
		{
			url: 'services',
			image:
				'https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Azure Core Services',
			features: [
				'Core Resources: Virtual Machines, App Services, Functions, and Kubernetes Service',
				'Regions & Availability Zones: Learn how Azure ensures high availability and resilience.',
				'Compute, Networking, and Storage Basics: Overview of Azure’s core infrastructure.'
			]
		},
		{
			url: 'security',
			image:
				'https://plus.unsplash.com/premium_photo-1700830452756-1a3f4314e564?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Security, Compliance & Trust',
			features: [
				'Security Tools: Introduction to Security Center, Key Vault, and Azure Firewall',
				'Compliance & Privacy: Learn about Azure’s compliance standards and data protection practices.',
				'Identity Services: Basics of Azure Active Directory, MFA, and role-based access control (RBAC).'
			]
		}
	];
</script>

<section class="my-24 grid grid-cols-1 gap-4 md:px-8 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
	{#each concepts as concept}
		<div
			class="my-0 gap-2 grid grid-cols-subgrid place-items-center items-center justify-center rounded-2xl border-2 border-blue-900 pb-6 z-100"
		>
			<img
				src={concept.image}
				class="h-[220px] w-[100%] grid-cols-subgrid border-b-2 min-w-0 object-cover aspect-[14/9] object-center rounded-t-2xl "
				loading="lazy"
				alt="tech used"
			/>
			<div class="grid-cols-subgrid">
				<h2 class="border-b border-blue-900  pt-8 text-md md:text-xl lg:text-2xl font-semibold text-white">{concept.name}</h2>
			</div>

			<div class="grid-cols-subgrid  place-items-center items-center justify-center text-center text-pretty text-md md:text-lg lg:text-xl">
				{#each concept.features as feature}
					<p class="my-4 mx-auto text-balance font-thin text-xs md:text-sm lg:text-md w-[45ch] px-2 text-white">{feature}</p>

				{/each}
			</div>
			<button
				type="button"
				class="grid-cols-subgrid mx-auto my-6 w-[160px] rounded-xl border bg-blue-600/30 px-8 py-4 text-white"
				><a href="/{concept.url}">Learn more</a></button
			>
		</div>
	{/each}
</section>
