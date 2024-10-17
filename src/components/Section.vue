<template>
	<section :id="sectionId" class="mb-10 scroll-mt-24">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name:'Section',
	props: {
		sectionId: String
	},
	methods: {
	},
	mounted() {
	},
}
</script>