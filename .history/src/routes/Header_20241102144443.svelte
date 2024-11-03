<script lang="ts">
	// Declare props
	let { name = 'Randy' } = $props();

	// Local state for the surname
	let surname = $state('de vries');

	// Derived state for the full name
	let full_name = $derived(`${name} ${surname}`);

</script>

<div
	class="grid h-96 place-items-center  bg-[url('https://images.unsplash.com/photo-1490237014491-822aee911b99?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] bg-cover bg-center"
>
	<h1
		class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
	>
		Hello my name is <span class="text-4xl text-white">{full_name}</span>
	</h1>
</div>
