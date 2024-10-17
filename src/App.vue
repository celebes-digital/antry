<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>

	<Navbar :navItems="navItems" />
    
    <main class="relative top-20">
        <RouterView></RouterView>
        
        <Footer :navItems="navItems" />
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
			navItems: [
				{
					label: 'Home',
					to: '#home'
				},
				{
					label: 'Tentang Kami',
					to: '#tentang-kami'
				},
				{
					label: 'Produk',
					to: '#produk'
				},
				{
					label: 'Testimoni',
					to: '#testimoni'
				},
			]
		}
    },
	provide() {
		return {
			default: this.default
		};
	}
}
</script>

<style>

</style>