<template>
    <div id="hero" class="bg-orange-50">
        <Container>
            <div class="grid grid-cols-12 pb-10">
                <div class="col-span-12 lg:col-span-7 flex flex-col items-center text-center lg:text-left lg:items-start justify-center px-2 lg:pe-20 order-2 lg:order-1">
                    <h2 class="text-xl font-normal text-[#334155]">Apa itu ANTRY?</h2>
                    <h1 class="text-2xl font-semibold text-[#334155] mb-4">ANTRY adalah sebuah merk produk yang berada di Kota Makassar dengan fokus produk perawatan tubuh yang menggunakan 100% bahan alami yang InsyaAllah aman bagi segala usia.</h1>
                    <Button label="Daftar Sekarang" icon="pi pi-whatsapp" class="w-fit" severity="success" size="large"></Button>
                </div>
                <div class="col-span-12 lg:col-span-5 flex w-full justify-end order-1 lg:order-2 ">
                    <img src="/src/assets/logoantry.png" alt="">
                </div>
            </div>
        </Container>
    </div>

    <Container>

        <section id="produk">
            <SectionTitle title="Produk-Produk Antry" subTitle="Hingga saat ini produk-produk ANTRY telah banyak tersebar diseluruh wilayah Indonesia hingga kemanca negara dan memberikan manfaat bagi seluruh penggunanya." />

            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
                <template #item="slotProps">
                    <div class="mx-1 flex flex-col items-center">
                        <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full h-[350px] rounded object-cover" />
                    </div>
                    <h4 class="text-[#334155]">{{ slotProps.data.title }}</h4>
                </template>
            </Carousel>
        </section>

        <section id="pilih-antry">
            <SectionTitle title="Pertanyaan Yang Sering Ditanyakan" subTitle="Beberapa pertanyaan yang biasa ditanyakan calon mitra kami." />

            <Accordion value="0">
                <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                    <AccordionHeader>{{ tab.title }}</AccordionHeader>
                    <AccordionContent>
                        <p class="m-0">{{ tab.content }}</p>
                        <ul class="list-disc list-inside">
                            <li v-for="item in tab.list" :key="item.title">{{ item.title }}</li>
                        </ul>
                        <p class="m-0">{{ tab.subContent }}</p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </section>

        <section id="keuntungan-mitra">
            <SectionTitle title="Apa saja yang kalian dapatkan saat berbagung menjadi Mitra ANTRY?" subTitle="ANTRY juga memiliki program reward bagi semua Mitranya. Reward yang kalian bisa dapatkan tergantung dari jumlah pesanan yang kalian order. Bukan hanya itu saja, kalian juga berhak mendapatkan Reward Plus dari ANTRY sesuai dengan ketentuan yang berlaku. Berikut daftar reward dari Produk ANTRY :" />

            <div class="grid grid-cols-12">
                <Card v-for="rewardItem in rewardItems" :key="rewardItem.title" class="col-span-6 shadow-md">
                    <template #title>
                        {{ rewardItem.title }}
                    </template>
                    <template #content>
                        
                    </template>
                </Card>
            </div>
        </section>

    </Container>
</template>

<script>
export default {
	name:'NewHome',
    data() {
        return {
            tabs: [
                { 
                    title: 'Kenapa harus memilih ANTRY Your Daily Solution?', 
                    content: 'Tidak perlu ragu memilih ANTRY Your Daily Solution, karena :',
                    list: [
                        { title: 'Harga terjangkau dengan produk yang berkualitas' },
                        { title: 'Target pasar jelas dan luas sehingga memudahkan dalam pemasaran' },
                        { title: 'Keuntungan penjualan yang besar' },
                    ],
                    value: '0' 
                },
                { 
                    title: 'Keunggulan Produk ANTRY Your Daily Solution dengan produk lain?', 
                    content: 'ANTRY memiliki fungsi utama untuk kebutuhan keluarga, dimana semua produk ANTRY aman digunakan untuk segala usia dan keluarga anda akan mendapatkan sensasi yang berbeda dari setiap varian produk ANTRY tanpa perlu khawatir dengan perbedaan selera dan kami akan terus mengembangkan dan berinovasi untuk menghasilkan produk-produk yang dibutuhkan untuk setiap keluarga. ', 
                    value: '1' 
                },
                { 
                    title: 'Apa keuntungan menjadi Agen resmi ANTRY Your Daily Solution?', 
                    list: [
                        { title: 'Mitra berhak mendapatkan Reward Reguler dan Reward Plus ' },
                        { title: 'Mitra mendapatkan bimbingan langsung cara pemasaran yang baik via online maupun offline' },
                        { title: 'Bahan promosi disediakan tinggal posting' },
                        { title: 'Keuntungan besar dan repeat order tinggi' },
                        { title: 'Produk Legal terdaftar BPOM' },
                        { title: 'Produk dengan bahan berkualitas dan halal' },
                        { title: 'Real Testimoni dengan ratusan ribu produk yang telah terjual' },
                    ],
                    value: '2' 
                },
                { 
                    title: 'Dimana lokasi pengambilan barang jika anda hendak menjadi Mitra ANTRY?', 
                    content: 'Jadi ada 2 lokasi pengiriman barang yang bisa kalian pilih yakni sebagai berikut', 
                    list: [
                        { title: 'Pengiriman dari Pusat ANTRY yaitu Kota Makassar' },
                        { title: 'Pengiriman dari Mitra terdekat dari wilayah calon Mitra ANTRY' },
                    ],
                    subContent: 'Pengiriman bisa dipilih dan kami rekomendasikan sesuai deengan daerah calon Mitra agar mengurangi biaya pengiriman dan bahkan GRATIS',
                    value: '3' 
                }
            ],
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