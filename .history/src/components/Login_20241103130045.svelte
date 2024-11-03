<script>
  import { onMount } from 'svelte';
let user = $state('Stranger');
  /**
	 * @param {any} response
	 */
  // function googleLoginEndpoint(response) {
  //   console.log('Google login successful:', response);
  // }

  // onMount(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://accounts.google.com/gsi/client";
  //   script.async = true;
  //   script.defer = true;
  //   document.head.appendChild(script);
  // });
</script>



<div class="min-h-[60vh] flex items-center justify-center  py-16">
  <div class="flex flex-col md:flex-row w-full max-w-4xl  rounded-lg shadow-lg overflow-hidden">
    <!-- Left side: Logo and Welcome message -->
    <div class="md:w-1/2 flex flex-col items-center justify-center p-14 bg-center object-cover bg-cover bg-[url('./images/headImage.png')] text-white">
      <img src=".~/images/Design 2.png" alt="Ran form Logo" class="w-40 h-40 rounded-full mb-4">
      <h2 class="text-2xl font-semibold text-red-900">Good Evening {user}!</h2>
      <p class="text-lg text-center mt-2">Log in to your account!</p>
    </div>

    <!-- Right side: Login Form -->
    <div class="md:w-1/2 flex flex-col items-center justify-center p-24 bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500">
      <!-- Google Login Button -->
      <div id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-context="signin"
        data-callback="googleLoginEndpoint"
        data-close_on_tap_outside="false"
        data-prompt_parent_id="g_id_onload">
      </div>

      <button class="w-full py-2 rounded-full bg-white shadow-md flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 focus:outline-none">
        <span class="fab fa-google text-gray-500"></span>
        <span class="text-gray-700">Continue with Google</span>
      </button>

      <!-- Divider -->
      <div class="flex items-center w-full my-4">
        <hr class="flex-grow border-t border-gray-300">
        <span class="px-3 text-gray-500">OR</span>
        <hr class="flex-grow border-t border-gray-300">
      </div>

      <!-- Email Login Button -->
      <button class="w-full py-2 rounded-full bg-white shadow-md flex items-center justify-center space-x-2 border border-gray-300 hover:bg-gray-50 focus:outline-none">
        <span class="fa fa-user text-gray-500"></span>
        <span class="text-gray-700">Enter Email & Password</span>
      </button>

      <!-- Sign up and Terms Links -->
      <div class="text-center mt-6 w-full">
        <p class="text-sm">Don't have an account? <a href="_blank" class="text-blue-600 hover:underline">Sign up</a></p>
        <p class="text-xs text-gray-500 mt-2">
          By continuing, you agree to our <a href="_blank" target="_blank" class="hover:underline">Terms of Service</a> and
          <a href="_blank" target="_blank" class="hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
</div>
