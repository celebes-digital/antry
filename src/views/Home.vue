<template>
	<section id="home" class="bg-red-50 w-full scroll-mt-20 mb-20">
        <Image src="/src/assets/antry-deodorant-spray-ketiak.jpg" alt="Image" width="100%" />
	</section>

	<section id="tentang-kami" class="bg-red-50 w-full scroll-mt-20 my-20">
        <Image src="/src/assets/manfaat-antry-deo-spray.jpg" alt="Image" width="100%" />
	</section>

	<section id="produk" class="bg-red-50 w-full scroll-mt-20 my-20">
        <Image src="/src/assets/komposisi.jpg" alt="Image" width="100%" />
	</section>

	<section id="testimoni" class="bg-white w-full scroll-mt-20 my-20">
        <div class="text-center mb-10">
            <h3 class="font-bold text-2xl">Title Lorem, ipsum dolor.</h3>
            <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eaque.</p>
        </div>
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
	</section>

	<section id="daftar" class="bg-red-50 w-full h-96 scroll-mt-20 my-20">
        <Image src="/src/assets/gabung-mitra.jpg" alt="Image" width="100%" />
	</section>
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
                    image: 'bamboo-watch.jpg',
                    inventoryStatus: 'INSTOCK'
                },
                {
                    name: 'Product 2',
                    price: 19.99,
                    image: 'black-watch.jpg',
                    inventoryStatus: 'LOWSTOCK'
                },
                {
                    name: 'Product 3',
                    price: 49.99,
                    image: 'blue-band.jpg',
                    inventoryStatus: 'OUTOFSTOCK'
                },
                {
                    name: 'Product 4',
                    price: 39.99,
                    image: 'blue-t-shirt.jpg',
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
                    numVisible: 2,
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