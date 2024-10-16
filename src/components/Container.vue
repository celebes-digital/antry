<template>
	<!-- <MobileNavbar :navItems="navItems" /> -->

	<Navbar :navItems="navItems" />

	<div class="max-w-full lg:max-w-[800px] relative top-20 mx-auto h-full bg-orange-50">
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
					label: 'Manfaat',
					to: '#manfaat'
				},
				{
					label: 'Komposisi',
					to: '#komposisi'
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