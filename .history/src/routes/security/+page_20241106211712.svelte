<script>
	import { fade } from 'svelte/transition';
	import Popover from '../../components/Popover.svelte';

	let title = 'Azure Fundamentals (AZ-900) Security';
	let topics = [
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

 hover:underline underline-offset-4