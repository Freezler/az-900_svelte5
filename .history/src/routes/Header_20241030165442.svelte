<script lang="ts">
	let { name } = $props();
</script>

<div class="grid h-96 place-items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
>
	<h1
		class="bg-gradient-to-br from-yellow-700 via-green-600 to-orange-500 bg-clip-text text-3xl font-bold text-transparent"
	>
		Hello from header. my first steps with {name}
	</h1>
</div>
