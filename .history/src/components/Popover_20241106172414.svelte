/*************  ✨ Codeium Command ⭐  *************/
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
		{#if isOpen}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
		{/if}
	</button>
	<div class="dropdown__content" class=open={isOpen}>
		<slot></slot>
	</div>
</div>
/******  eb278871-5f8e-433d-9c52-0c6e96eaa60f  *******/