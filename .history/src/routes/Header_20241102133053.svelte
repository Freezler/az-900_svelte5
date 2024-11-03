<script lang="ts">
	let { name }: { name: string } = $props();
</script>

<div
	class="grid h-96 place-items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
>
	<h1
		class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
	>
		Hello my name is <span class="text-4xl text-white">{name}</span>
	</h1>
</div>
