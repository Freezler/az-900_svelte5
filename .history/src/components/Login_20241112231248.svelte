<script>
	import { onMount } from 'svelte';
	let user = $state('Stranger');
	/**
	 * @param {any} response
	 */
	function googleLoginEndpoint(response) {
	  console.log('Google login successful:', response);
	}

	// onMount(() => {
	//   const script = document.createElement("script");
	//   script.src = "https://accounts.google.com/gsi/client";
	//   script.async = true;
	//   script.defer = true;
	//   document.head.appendChild(script);
	// });
</script>

<div class="relative flex min-h-[60vh] items-center justify-center pt-16 ">
	<div class="flex w-full max-w-4xl flex-col overflow-hidden rounded-lg shadow-lg md:flex-row">
		<!-- Left side: Logo and Welcome message -->
		<div
			class="flex flex-col items-center justify-center bg-[url('/public/images/headImage.png')] bg-cover bg-center object-cover p-14 text-white md:w-1/2 "
		>
			<img
				src="/public/images/Design 2.png"
				alt="Ran form Logo"
				class="mb-4 h-40 w-40 rounded-full"
			/>
			<h2 class="text-2xl font-semibold p-2 rounded-xl bg-slate-600/50  ">Good Evening {user}!</h2>
			<p class="mt-2 text-center text-lg rounded-xl bg-slate-600/50  p-2 ">Log in to your account!</p>
		</div>

		<!-- Right side: Login Form -->
		<div
			class="flex flex-col items-center justify-center text-center h- bg-blue-600/40"
		>
			<!-- Google Login Button -->
			<!-- <div
				id="g_id_onload"
				data-client_id="YOUR_GOOGLE_CLIENT_ID"
				data-context="signin"
				data-callback="googleLoginEndpoint"
				data-close_on_tap_outside="false"
				data-prompt_parent_id="g_id_onload"
			></div> -->

			<button
				class="flex w-3/5 items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 shadow-md hover:bg-gray-50 focus:outline-none mt-7"
			>
				<span class=" text-gray-500"></span>
				<span class="text-gray-700">Continue with Google</span>
			</button>

			<!-- Divider -->
			<div class="my-4 flex w-full items-center">
				<hr class="flex-grow border-t border-gray-300" />
				<span class="px-3 text-gray-500">OR</span>
				<hr class="flex-grow border-t border-gray-300" />
			</div>

			<!-- Email Login Button -->
			<button
				class="flex w-3/5 items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white py-2 shadow-md hover:bg-gray-50 focus:outline-none"
			>
				<span class=" text-gray-500"></span>
				<span class="text-gray-700">Enter Email & Password</span>
			</button>

			<!-- Sign up and Terms Links -->
			<div class=" w-full text-center mt-8">
				<p class="text-sm text-red-300">
					Don't have an account? <a href="_blank" class="text-blue-600 hover:underline">Sign up</a>
				</p>
				<p class="mx-auto text-xs text-gray-500 w-[35ch] text-center">
					By continuing, you agree to our <a href="_blank" target="_blank" class="hover:underline"
						>Terms of Service</a
					>
					and
					<a href="_blank" target="_blank" class="hover:underline">Privacy Policy</a>.
				</p>
			</div>
		</div>
	</div>
</div>
