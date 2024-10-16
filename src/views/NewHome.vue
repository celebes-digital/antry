<template>
    <div id="hero" class="bg-orange-50">
        <Container>
            <div class="grid grid-cols-12 pb-10">
                <div class="col-span-12 lg:col-span-7 flex flex-col items-center text-center px-2 lg:pe-20 order-2 lg:order-1">
                    <h2 class="text-xl font-normal text-gray-800">Apa itu ANTRY?</h2>
                    <h1 class="text-2xl font-semibold text-gray-800 mb-4">ANTRY adalah sebuah merk produk yang berada di Kota Makassar dengan fokus produk perawatan tubuh yang menggunakan 100% bahan alami yang InsyaAllah aman bagi segala usia.</h1>
                    <Button label="Daftar Sekarang" icon="pi pi-whatsapp" class="w-fit" severity="success" size="large"></Button>
                </div>
                <div class="col-span-12 lg:col-span-5 flex w-full justify-end order-1 lg:order-2 ">
                    <img src="/src/assets/logoantry.png" alt="">
                </div>
            </div>
        </Container>
    </div>

    <Container>
        <div id="" class="">
            <SectionTitle title="Produk-Produk Antry" subTitle="Hingga saat ini produk-produk ANTRY telah banyak tersebar diseluruh wilayah Indonesia hingga kemanca negara dan memberikan manfaat bagi seluruh penggunanya."></SectionTitle>

            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
                <template #item="slotProps">
                    <div class="mx-1 flex flex-col items-center">
                        <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full h-[350px] rounded object-cover" />
                    </div>
                    <h4>{{ slotProps.data.title }}</h4>
                </template>
            </Carousel>
        </div>
    </Container>
</template>

<script>
export default {
	name:'NewHome',
    data() {
        return {
			products: [
                // https://primefaces.org/cdn/primevue/images/product/
                {
                    title: 'ANTRY DEO SPRAY 100 ML',
                    image: 'https://ngorder-1.sgp1.digitaloceanspaces.com/71878/products/antry-deospray-1719044048185.jpeg',
                },
                {
                    title: 'ANTRY DEO SPRAY 60 ML',
                    image: 'https://ngorder-1.sgp1.digitaloceanspaces.com/71878/products/antry-deospray-1719044048185.jpeg',
                },
                {
                    title: 'ANTRY BRIGTHENING BODY SCRUB',
                    image: 'https://ngorder-1.sgp1.digitaloceanspaces.com/71878/products/antry-deospray-1719044048185.jpeg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AEESYA',
                    image: 'https://cdn.orderonline.id/uploads/images_3897201719126537455.jpg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AMEENA',
                    image: 'https://cdn.orderonline.id/uploads/images_2848241719126539231.jpg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian SHAFEEA',
                    image: 'https://cdn.orderonline.id/uploads/images_4503441719126539312.jpg',
                },
            ],
            responsiveOptions: [
                {
                    breakpoint: '1280px',
                    numVisible: 3,
                    numScroll: 1
                },
                {
                    breakpoint: '1024px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '768px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '640px',
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