<template>
	<div id="home" class="bg-red-50 w-full h-96 scroll-mt-20">
		<Card v-animateonscroll="{ enterClass: 'animate-fadeintop', leaveClass: 'animate-fadeouttop' }" class="col-span-12 shadow-md">
			<template #title>
				Testtt
			</template>
			<template #content>
				
			</template>
		</Card>
	</div>

	<div id="tentang-kami" class="bg-red-50 w-full h-96 scroll-mt-20">
		<Card v-animateonscroll="{ enterClass: 'animate-fadeintop', leaveClass: 'animate-fadeouttop' }" class="col-span-12 shadow-md">
			<template #title>
				Testtt
			</template>
			<template #content>
				
			</template>
		</Card>
	</div>

	<div id="produk" class="bg-red-50 w-full h-96 scroll-mt-20">
		<Card v-animateonscroll="{ enterClass: 'animate-fadeintop', leaveClass: 'animate-fadeouttop' }" class="col-span-12 shadow-md">
			<template #title>
				Testtt
			</template>
			<template #content>
				
			</template>
		</Card>
	</div>

	<div id="testimoni" class="bg-white w-full h-96 scroll-mt-20">
		<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
			<template #item="slotProps">
				<div class="bg-white border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
					<div class="mb-4">
						<div class="relative mx-auto">
							<img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
							<Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
						</div>
					</div>
					<div class="mb-4 font-medium">{{ slotProps.data.name }}</div>

					<div class="flex justify-between items-center">
						<div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
						<span>
							<Button icon="pi pi-heart" severity="secondary" outlined />
							<Button icon="pi pi-shopping-cart" class="ml-2"/>
						</span>
					</div>
				</div>
			</template>
		</Carousel>
	</div>

	<div id="daftar" class="bg-red-50 w-full h-96 scroll-mt-20">
		<Card v-animateonscroll="{ enterClass: 'animate-fadeintop', leaveClass: 'animate-fadeouttop' }" class="col-span-12 shadow-md">
			<template #title>
				Testtt
			</template>
			<template #content>
				
			</template>
		</Card>
	</div>
</template>

<script>
export default {
	name:'Home',
    data() {
        return {
			products: [
                {
                    name: 'Product 1',
                    price: 29.99,
                    image: 'product1.jpg',
                    inventoryStatus: 'INSTOCK'
                },
                {
                    name: 'Product 2',
                    price: 19.99,
                    image: 'product2.jpg',
                    inventoryStatus: 'LOWSTOCK'
                },
                {
                    name: 'Product 3',
                    price: 49.99,
                    image: 'product3.jpg',
                    inventoryStatus: 'OUTOFSTOCK'
                },
                {
                    name: 'Product 4',
                    price: 39.99,
                    image: 'product4.jpg',
                    inventoryStatus: 'INSTOCK'
                },
                {
                    name: 'Product 5',
                    price: 24.99,
                    image: 'product5.jpg',
                    inventoryStatus: 'INSTOCK'
                },
                {
                    name: 'Product 6',
                    price: 59.99,
                    image: 'product6.jpg',
                    inventoryStatus: 'LOWSTOCK'
                },
                {
                    name: 'Product 7',
                    price: 99.99,
                    image: 'product7.jpg',
                    inventoryStatus: 'OUTOFSTOCK'
                },
                {
                    name: 'Product 8',
                    price: 34.99,
                    image: 'product8.jpg',
                    inventoryStatus: 'INSTOCK'
                },
                {
                    name: 'Product 9',
                    price: 79.99,
                    image: 'product9.jpg',
                    inventoryStatus: 'LOWSTOCK'
                }
            ],
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 1
                },
                {
                    breakpoint: '767px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '575px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    methods: {
        getSeverity(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warn';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
</script>