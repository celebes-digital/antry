<template>
	<section id="home" class="text-orange-600 w-full scroll-mt-20">
        <!-- <img class="px-3 pb-3" src="/src/assets/antry-deodorant-spray-ketiak.jpg" alt="Image" width="100%" /> -->
        <img class="px-3 pb-3" src="https://down-id.img.susercontent.com/file/id-11134207-7r98v-luvw39ozob0c99.webp" alt="Image" width="100%" />
	</section>

	<section id="manfaat" class="text-orange-600 w-full scroll-mt-20">
        <img class="px-3 pb-3" src="https://down-id.img.susercontent.com/file/id-11134207-7r98t-luvw39ozsipo8a.webp" alt="Image" width="100%" />
	</section>

	<section id="komposisi" class="text-orange-600 w-full scroll-mt-20">
        <!-- <img class="px-3 pb-3" src="/src/assets/komposisi.jpg" alt="Image" width="100%" /> -->
        <img class="px-3 pb-3" src="https://down-id.img.susercontent.com/file/9c5ec159873083ca678479e0dc7e4b27.webp" alt="Image" width="100%" />
	</section>
    
	<section id="testimoni" class="text-orange-600 w-full scroll-mt-20">
        <!-- <img class="px-3 pb-3" src="/src/assets/komposisi.jpg" alt="Image" width="100%" /> -->
        <img class="px-3 pb-3" src="https://down-id.img.susercontent.com/file/id-11134207-7r98q-luvw39ozppkse1.webp" alt="Image" width="100%" />
	</section>

	<!-- <section id="testimoni" class="text-orange-600 w-full scroll-mt-20">
        <div class="text-center mb-10">
            <h3 class="font-bold text-2xl">Title Lorem, ipsum dolor.</h3>
            <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eaque.</p>
        </div>
		<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
			<template #item="slotProps">
				<div class="text-orange-600 border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
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
	</section> -->

	<section id="daftar" class="text-orange-600 w-full scroll-mt-20 flex flex-col items-center">
        <!-- <img class="px-3 pb-3" src="/src/assets/gabung-mitra.jpg" alt="Image" width="100%" /> -->
        <SectionTitle title="Daftar Menjadi Mitra" subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, totam?"></SectionTitle>
        <img class="px-3 pb-3" src="https://scontent.fupg2-1.fna.fbcdn.net/v/t39.30808-6/456954384_855795649952373_4717355523071977988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pcGpyEpCulwQ7kNvgGxGxzo&_nc_zt=23&_nc_ht=scontent.fupg2-1.fna&_nc_gid=AOezZV9deJSNY6uh5l5hyok&oh=00_AYB3_zQXyfKUDatpCYvDHaR9IYqzTgkiQeSAtHU1ak6nrg&oe=6714D68C" alt="Image" width="100%" />
        <img class="w-96" src="https://sahabatkhadeejah.co.id/wp-content/uploads/2024/03/arrow-down-animated.gif" alt="Image" width="100%" />
        <a href="https://wa.me/6285342913781" class="mb-40">
            <img class="w-[600px]" src="https://sahabatkhadeejah.co.id/wp-content/uploads/2024/03/tombol-whatsapp-iframe-multimedia-1.png" alt="">
        </a>
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