<template>
	<div class="max-w-full xl:max-w-[1140] 2xl:max-w-[1320px] lg:max-w-[960px] mx-auto px-2">
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