<template>
	<div class="text-center my-10 flex flex-col gap-2 text-[#334155]">
		<h2 class="font-bold text-4xl">{{ title }}</h2>
		<p class="text-lg">{{ subTitle }}</p>
	</div>
</template>

<script>
export default {
	name:'SectionTitle',
	props: {
		title: String,
		subTitle: String,
	},
	methods: {
	},
	mounted() {
	},
}
</script>