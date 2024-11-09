<script>
	import { goto } from '$app/navigation';
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

<section class="my-0 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 md:px-8 xl:grid-cols-3">
	{#each concepts as concept}
		<div
			class="z-100 my-0 gap-4 grid grid-cols-subgrid place-items-center items-center justify-center  overflow-hidden rounded-2xl border-2 border-[--text-color] pb-6 shadow-[0_4px_12px_rgb(122,122,0,0.6)] transition duration-300 hover:scale-[1.01]   bg-yellow-600/10 hover:shadow-[0_8px_22px_rgb(122,122,0,0.6)]"
		>
			<img
				src={concept.image}
				class="aspect-[14/9] h-[220px] w-[100%] min-w-0 grid-cols-subgrid border-b-2 border-[--text-color] object-cover object-center"
				loading="lazy"
				alt="tech used"
			/>
			<div class="grid-cols-subgrid">
				<h2
					class="text-xl border-b border-blue-900 pt-8 font-semibold text-[--text-color] md:text-xl lg:text-2xl"
				>
					{concept.name}
				</h2>
			</div>

			<div
				class="grid-cols-subgrid place-items-center items-center justify-center text-pretty text-center md:text-lg lg:text-xl"
			>
				{#each concept.features as feature}
					<p
						class="mx-auto my-4 w-[45ch] text-balance px-2 text-xs font-normal text-[--text-color] md:text-sm lg:text-base"
					>
						{feature}
					</p>
				{/each}
			</div>
			<button
				type="button"
				class="mx-auto my-6 w-[160px] grid-cols-subgrid rounded-xl border bg-blue-600/30 px-8 py-4 text-white"
				><a href="/{concept.url}">Learn more</a></button
			>
		</div>
	{/each}
</section>
