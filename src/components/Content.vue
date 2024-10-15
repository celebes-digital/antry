<template>
	<!-- <MobileNavbar :navItems="navItems" /> -->

	<Navbar :navItems="navItems" />

	<div class="max-w-full lg:max-w-[1280px] relative top-20 mx-auto h-full bg-white">
		<RouterView></RouterView>
	</div>
</template>

<script>
export default {
	name:'Content',
	data() {
		return {
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
}
</script>