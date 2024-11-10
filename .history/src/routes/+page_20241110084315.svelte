<script lang="ts">
	import Toggle from '../components/Toggle.svelte';
	import Header from '../components/Header.svelte';
	import Popover from '../components/Menu.svelte';
	import Cards from '../components/Cards.svelte';
	import Login from '../components/Login.svelte';
</script>

<header class="">
	<Popover />
	<Header />
</header>
<main>
	<section class="grid grid-rows-2 lg:grid-cols-2 items-start justify-start place-items-start h-[900px]">
		<img
			src="https://cdn.media.amplience.net/i/epammarketplace/HeaderIMG_CloudBasedSolutions?v=211806184287"
			alt="cloudSolutions"
			class="lg:max-w-[50ch] place-self-start ml-auto my-24"
		/>
		<article
			class="my-24 grid lg:max-w-[50ch] gap-2 place-self-start bg-blue-500/10 px-4 py-8 pt-6 text-sky-100"
		>
			<h2>Cloud Computing</h2>
			<p>
				Service delivery model over the internet (cloud). This includes, but is not limited to,
				compute power, meaning servers such as Windows, Linux, hosting environments, etc.; storage
				like files and/or databases; networking in Azure but also outside when connecting to your
				company network; and analytics services for visualization and telemetry data.
			</p>

			<p><strong>Key concepts:</strong></p>
			<ul class="list-inside list-disc pl-4">
				<li>
					<strong>Scalability:</strong> The ability to scale, so allocate and deallocate resources at
					any time.
				</li>
				<li><strong>Elasticity:</strong> The ability to scale dynamically.</li>
				<li><strong>Agility:</strong> The ability to react fast (scale quickly).</li>
				<li>
					<strong>Fault Tolerance:</strong> The ability to maintain system uptime while physical and
					service component failures happen.
				</li>
				<li>
					<strong>Disaster Recovery:</strong> The process and design principle which allows a system
					to recover from natural or human-induced disasters.
				</li>
				<li>
					<strong>High Availability:</strong> The agreed level of operational uptime for the system.
					It is a simple calculation of system uptime versus the whole lifetime of the system: availability
					= uptime / (uptime + downtime).
				</li>
			</ul>
		</article>
	</section>
	<section><Cards /></section>
	<aside><Toggle /></aside>
	<footer><Login /></footer>
</main>
