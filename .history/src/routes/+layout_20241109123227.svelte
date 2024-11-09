<script lang="ts">
	import '../app.css';
	import { showMenu } from '../Menu';
	let { children } = $props();
	const clickOutside = () => {
		if (showMenu) {
			showMenu = false;
		}
	}
	const clicked = () => document.addEventListener('click', clickOutside);
</script>

<div class="bg-gray-950 bg-cover bg-center bg-no-repeat ">{@render children()}</div>
