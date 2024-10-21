<template>
	<Container>
		<Divider />
		<div class="grid grid-cols-12 items-center gap-10">
			<div class="col-span-12 lg:col-span-3 flex items-center justify-around">
				<Image :src="this.default.domain + 'logoambema.png'" alt="logo ambema" width="200" />
				<Image :src="this.default.domain + 'logoantry.png'" alt="logo antry" width="150" />
			</div>

			<div class="col-span-12 lg:col-span-9 grid grid-cols-12 gap-3">
				<div class="col-span-12 lg:col-span-6">
					<h4 class="font-bold text-lg">Navigasi</h4>
					<ul>
						<li v-for="item in useStore.navItems" :key="item.label">
							<RouterLink :to="item.to">
								{{ item.label }}
							</RouterLink>
						</li>
					</ul>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<h4 class="font-bold text-lg">Daftar Produk Antry</h4>
					<ul class="list-disc list-inside">
						<li v-for="item in useStore.products" :key="item.title">
							{{ item.title }}
						</li>
					</ul>
				</div>
			</div>

			<div class="col-span-12 text-center">
				Made By Celebes Digital
			</div>
		</div>
	</Container>
</template>

<script>
import { useStore } from '@/stores';

export default {
	name:'Footer',
	inject: ['default'],
	data() {
		return {
			useStore: useStore()
		}
	},
	props: {
		navItems: Array,
		products: Array
	},
	methods: {
	},
	mounted() {
	},
}
</script>

<style>
</style>