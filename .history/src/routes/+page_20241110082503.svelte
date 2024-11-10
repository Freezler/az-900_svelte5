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
	<article class="bg-blue-500/20  text-blue-400  grid gap-2 my-24 pt-6 w-[45ch] max-w-[80vw]" >
	<p>Cloud Computing Service delivery model over the internet (cloud). This includes, but is not limited to, compute power, meaning servers such as Windows, Linux, hosting environments, etc.; storage like files and/or databases; networking in Azure but also outside when connecting to your company network; and analytics services for visualization and telemetry data.</p>

	<p><strong>Key concepts:</strong></p>
	<ul>
		<li><strong>Scalability:</strong> The ability to scale, so allocate and deallocate resources at any time.</li>
		<li><strong>Elasticity:</strong> The ability to scale dynamically.</li>
		<li><strong>Agility:</strong> The ability to react fast (scale quickly).</li>
		<li><strong>Fault Tolerance:</strong> The ability to maintain system uptime while physical and service component failures happen.</li>
		<li><strong>Disaster Recovery:</strong> The process and design principle which allows a system to recover from natural or human-induced disasters.</li>
		<li><strong>High Availability:</strong> The agreed level of operational uptime for the system. It is a simple calculation of system uptime versus the whole lifetime of the system: availability = uptime / (uptime + downtime).</li>
	</ul>
</article>
	<section><Cards /></section>
	<aside><Toggle /></aside>
	<footer><Login /></footer>
</main>
