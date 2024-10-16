<template>
	<Container>
		<Divider />
		<div class="grid grid-cols-12 items-center">
			<div class="col-span-12 lg:col-span-3 flex items-center justify-around">
				<Image src="/src/assets/logoambema.png" width="200" />
				<Image src="/src/assets/logoantry.png" width="150" />
			</div>

			<div class="col-span-12 lg:col-span-9 grid grid-cols-12">
				<div class="col-span-6 h-32 lg:col-span-3 bg-red-50">
					test
				</div>
				<div class="col-span-6 h-32 lg:col-span-3 bg-orange-50">
					test
				</div>
				<div class="col-span-6 h-32 lg:col-span-3 bg-blue-50">
					test
				</div>
				<div class="col-span-6 h-32 lg:col-span-3 bg-green-50">
					test
				</div>
			</div>
		</div>
	</Container>
</template>

<script>
export default {
	name:'Footer',
	props: {
		navItems: Array
	},
	methods: {
	},
	mounted() {
	},
}
</script>