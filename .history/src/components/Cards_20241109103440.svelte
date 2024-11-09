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
			name: 'Security, Privacy, Compliance & Trust',
			features: [
				'Security Tools: Introduction to Security Center, Key Vault, and Azure Firewall',
				'Compliance & Privacy: Learn about Azure’s compliance standards and data protection practices.',
				'Identity Services: Basics of Azure Active Directory, MFA, and role-based access control (RBAC).'
			]
		}
	];
</script>

<section
	class=" mx-auto mb-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4  lg:grid-cols-3"

>
	{#each concepts as concept}
		<div class="my-0 grid w-full place-items-center rounded-xl border-2 border-blue-900 pb-6">
			<img
				src={concept.image}
				class="flex w-full rounded-t-md object-cover object-center h-[260px] "
				loading="lazy"
				alt="tech used"
			/>
			<div class="grid">
				<h2 class="grid pt-8  text-xl font-bold text-white">{concept.name}</h2>
			</div>
			<hr>
			<div class="grid-col-4 grid text-pretty p-5 text-sm">
				{#each concept.features as feature}
					<p class="max-w-[35ch] text-pretty py-4 text-white">{feature}</p>
					<hr>
				{/each}
			</div>
			<button
				type="button"
				class="mx-auto my-6 w-[160px] rounded border bg-blue-600/30 px-4 py-2 text-white"
				><a href="/{concept.url}">Learn more</a></button
			>
		</div>
	{/each}
</section>
