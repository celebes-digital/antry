<template>
	<Container>
		<div class="grid grid-cols-12 items-center gap-10 bg-white p-10 pb-5 rounded-t-md shadow-md text-gray-700">
			<div class="col-span-12 lg:col-span-3 flex items-center justify-around">
				<Image :src="this.default.domain + 'logoambema.png'" alt="logo ambema" width="200" />
				<Image :src="this.default.domain + 'logoantry.png'" alt="logo antry" width="150" />
			</div>

			<div class="col-span-12 lg:col-span-9 grid grid-cols-12 gap-3">
				<div class="col-span-12 lg:col-span-6">
					<h4 class="font-bold text-lg pb-4">Navigasi</h4>
					<ul>
						<li v-for="item in useStore.navItems" :key="item.label">
							<RouterLink :to="item.to">
								{{ item.label }}
							</RouterLink>
						</li>
					</ul>
				</div>

				<div class="col-span-12 lg:col-span-6">
					<h4 class="font-bold text-lg pb-4">Daftar Produk Antry</h4>
					<ol class="list-decimal list-inside">
						<li v-for="item in useStore.products" :key="item.title">
							<a href="#produk">
								{{ item.title }}
							</a>
						</li>
					</ol>
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
.router-link-active {
	@apply font-medium bg-white text-gray-700;
}
</style>