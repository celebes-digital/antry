<template>
	<ConfirmPopup class="max-lg:hidden" group="popup" />
	<ConfirmDialog class="lg:hidden" group="dialog" />
	<Toast class="max-lg:hidden"></Toast>

	<Navbar />
	
	<main class="relative top-20">
		<RouterView />
		<Footer />
	</main>

	<ScrollTop />
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			default: {
				title: 'ANTRY OFFICIAL',
				domain: 'https://antryofficial.com/'
			},
		}
	},
	provide() {
		return {
			default: this.default
		};
	}
}
</script>