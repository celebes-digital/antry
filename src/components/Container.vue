<template>
	<div class="max-w-full lg:max-w-[1280px] mx-auto">
		<slot></slot>
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