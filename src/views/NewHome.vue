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

	<section id="testimoni" class="text-orange-600 w-full scroll-mt-20">
        <SectionTitle title="Daftar Produk" subTitle="Beberapa Aroma Antry Deo Spray"></SectionTitle>
		<Carousel :value="products" :numVisible="2" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
			<template #item="slotProps">
                <div class="relative mx-1 flex flex-col items-center">
                    <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-[350px] h-[350px] rounded object-cover" />
                    <Tag :value="slotProps.data.title" :severity="getSeverity(slotProps.data.title)" class="absolute font-semibold text-xl  " style="left:5px; top: 5px"/>
                </div>
			</template>
		</Carousel>
	</section>

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
	name:'NewHome',
    data() {
        return {
			products: [
                // https://primefaces.org/cdn/primevue/images/product/
                {
                    title: 'Aroma Original',
                    image: 'https://ngorder-1.sgp1.digitaloceanspaces.com/71878/products/antry-deospray-1719044048185.jpeg',
                },
                {
                    title: 'Aroma AEESYA',
                    image: 'https://cdn.orderonline.id/uploads/images_3897201719126537455.jpg',
                },
                {
                    title: 'Aroma AMEENA',
                    image: 'https://cdn.orderonline.id/uploads/images_2848241719126539231.jpg',
                },
                {
                    title: 'Aroma SHAFEEA',
                    image: 'https://cdn.orderonline.id/uploads/images_4503441719126539312.jpg',
                },
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
                    numVisible: 1,
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