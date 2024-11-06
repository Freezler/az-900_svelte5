<script>
	let isOpen = false;
</script>

<style>
	.dropdown {
		position: relative;
	}
	.dropdown__content {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #fff;
		border: 1px solid #ddd;
		padding: 10px;
		display: none;
		transition: all 0.3s ease-in-out;
	}
	.dropdown__content.open {
		display: block;
	}
</style>

<div class="dropdown">
	<button on:click={() => isOpen = !isOpen}>
	<div class="dropdown__content" class=open={isOpen}>
