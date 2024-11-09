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

<section class="py-8 grid gap-8 md:grid-cols-2 md:gap-8 md:px-8 xl:grid-cols-3 grid-rows-1">
	{#each concepts as concept}
		<div
			class="   grid  place-items-center  overflow-hidden rounded-2xl border-2 border-[--text-color] hover:border-[hsla(184,69%,60%,1)] pb-12 shadow-[0_2px_22px_rgba(255,255,99,0.4)] brightness-90 transition duration-700 hover:scale-[1.001]   bg-yellow-600/10 hover:shadow-[2px_6px_12px_rgba(22,125,22,0.9)]  "
		>
			<img
				src={concept.image}
				class=" w-full h-[22vh]  border-b-2 border-[--text-color]  object-cover object-center"
				loading="lazy"
				alt="concept"
			/>
			<div class="grid grid-cols-subgrid  place-items-center items-center justify-center">
				<h2
					class="text-2xl uppercase  mt-[24px] font-semibold text-[--text-color] tracking-wide  "
				>
					{concept.name}
				</h2>
			</div>

			<div
				class="my-6  px-4 py-6 rounded-xl bg-sky-500/20  grid grid-rows-subgrid place-items-start items-start text-pretty text-center gap-4 row-span-12 "
			>
				{#each concept.features as feature}
					<p
						class="mx-auto w-[35ch] text-balance px-0  font-normal text-sky-200  text-sm  lg:text-[16px] border-b-2 border-[--text-color] leading-snug tracking-wider"					>
						{feature}
					</p>
				{/each}
			</div>
			<button
				type="button"
				class="mx-auto  w-[220px] grid-cols-subgrid rounded-xl border-[2px_solid_var(--text-color)] bg-sky-900 px-8 py-3 text-[--text-color] hover:bg-sky-500 hover:text-white transition duration-[300ms] hover:shadow-[2px_2px_42px_rgb(122,122,0,0.6)] text-base font-semibold md:text-lg lg:text-lg uppercase"
				><a href="/{concept.url}">Learn more</a></button
			>
		</div>
	{/each}
</section>
