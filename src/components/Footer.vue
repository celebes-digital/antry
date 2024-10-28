<template>
	<Container>
		<div class="grid grid-cols-12 items-center bg-white rounded-t-md shadow-md text-gray-700 p-5 pb-2">
			<div class="col-span-12 lg:col-span-4 flex items-center flex-wrap justify-center">
				<img :src="this.default.domain + 'logoambema.webp'" alt="logo ambema" width="200" />
				<img :src="this.default.domain + 'logoantry.webp'" alt="logo antry" width="150" class="ml-4" />
			</div>

			<div class="col-span-12 lg:col-span-8 grid grid-cols-12 gap-3">
				<!-- Navigation -->
				<div class="col-span-12 lg:col-span-6 min-w-0">
					<p class="font-bold text-lg pb-4">Navigasi</p>
					<ul>
						<li v-for="item in useStore.navItems" :key="item.label">
							<a :href="item.to" class="break-words">
								{{ item.label }}
							</a>
						</li>
					</ul>
				</div>

				<!-- Product List -->
				<div class="col-span-12 lg:col-span-6 min-w-0 w-full">
					<p class="font-bold text-lg pb-4">Daftar Produk Antry</p>
					<ol class="list-decimal list-inside">
						<li v-for="item in useStore.products" :key="item.title">
							<a href="#produk" class="break-words">
								{{ item.title }}
							</a>
						</li>
					</ol>
				</div>
			</div>

			<div class="col-span-12 text-center pt-5">
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