<script>
	import { fade } from 'svelte/transition';
	// Define your plans as an array of objects
	const plans = [
		{
			url: 'concepts',
			image:
				'https://plus.unsplash.com/premium_photo-1681488035387-675b10c6b4e6?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			name: 'Cloud Concepts',
			features: [
				'Cloud Models: Learn the basics of Public, Private, and Hybrid cloud models',
				'Cloud Services: Understand IaaS, PaaS, and SaaS, and when to use each.',
				'Benefits of Cloud: Explore key benefits like scalability, elasticity, agility, and disaster recovery.'
			]
		},
		{
			url: '_blank',
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
			url: '_blank',
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
	class=" mx-auto my-16 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 md:px-4 lg:grid-cols-3"
	in:fade={{ duration: 1000 }}
>
	{#each plans as plan}
		<div
			class=" subgrid grid w-full place-items-center gap-4 mb-8 rounded-2xl border-2 border-blue-900 pb-6"
		>
			<img
				src={plan.image}
				class="object-fit h-[208px] w-full object-cover rounded-t-2xl"
				loading="lazy"
				alt="tech used"
			/>
			<div class="subgrid grid">
				<h2 class="subgrid grid p-2 font-bold text-white">{plan.name}</h2>
			</div>
			<div class="subgrid grid-col-4 grid text-pretty px-8 text-sm">
				{#each plan.features as feature}
					<p class="my-2 text-pretty text-white">{feature}</p>
				{/each}
			</div>
			<button

				type="button"
				class="action mx-auto my-4 w-[180px] rounded border bg-indigo-500 px-4 py-2 text-white hover:bg-[hsl(210,55%,80%,1)]"
				><a href="/{plan.url}">Learn more</button
			>
		</div>
	{/each}
</section>
