<script>
	import ServicesProvider from '$features/services/application/ServicesProvider.svelte';
	import '../app.css';
</script>

<ServicesProvider>
	<div class="mx-auto max-w-screen-md bg-gray-800 text-white">
		<slot />
	</div>
</ServicesProvider>
