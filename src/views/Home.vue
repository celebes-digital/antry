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
                    <img :src="this.default.domain + 'logoantry.png'" alt="">
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
                        <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.title" class="w-full h-[350px] rounded object-cover" />
                    </div>
                    <h4 class="text-[#334155]">{{ slotProps.data.title }}</h4>
                </template>
            </Carousel>
        </section>

        <section id="pilih-antry">
            <SectionTitle title="Pertanyaan Yang Sering Ditanyakan" subTitle="Beberapa pertanyaan yang biasa ditanyakan calon mitra kami." />

            <Card class="col-span-12 shadow-md">
                <template #title>
                    
                </template>
                <template #content>
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
                </template>
            </Card>
        </section>

        <section id="keuntungan-mitra">
            <SectionTitle title="Apa saja yang kalian dapatkan saat berbagung menjadi Mitra ANTRY?" subTitle="ANTRY juga memiliki program reward bagi semua Mitranya. Reward yang kalian bisa dapatkan tergantung dari jumlah pesanan yang kalian order. Bukan hanya itu saja, kalian juga berhak mendapatkan Reward Plus dari ANTRY sesuai dengan ketentuan yang berlaku. Berikut daftar reward dari Produk ANTRY :" />

            <div class="grid grid-cols-12 gap-3">
                <Card v-for="rewardItem in rewardItems" :key="rewardItem.title" class="col-span-12 lg:col-span-6 shadow-md">
                    <template #title>
                        {{ rewardItem.title }}
                    </template>
                    <template #content>
                        <div class="flex flex-col justify-between h-full">
                            <ul>
                                <li v-for="item in rewardItem.items" :key="item.title" class="mb-2">{{ item.title }}</li>
                            </ul>
                            <p class="mt-5">{{ rewardItem.notes }}</p>
                        </div>
                    </template>
                </Card>
            </div>
        </section>

        <section id="testimoni">
            <SectionTitle title="Testimoni Dari Klien Tercinta Kami" subTitle="Daftar testimoni dari berbagai social media dan maket place" />

            <Carousel :value="testimoniItems" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
                <template #item="slotProps">
                    <div class="mx-1 flex flex-col items-center">
                        <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.image" class="w-full h-[350px] rounded object-cover" />
                    </div>
                </template>
            </Carousel>
        </section>

        <section id="testimoni">
            <SectionTitle title="Apa Keuntungan Bergabung Menjadi Member ANTRY" subTitle="Hal yang paling penting bagi setiap calon member ANTRY pasti bertanya apasih keuntungan bergabung menjadi Mitra ANTRY?" />

            <div class="grid grid-cols-2">
                <div v-for="item in memberItems" :key="item.title" class="col-auto">
                    <h4 class="">{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </section>

    </Container>
</template>

<script>
export default {
	name:'Home',
    inject: ['default'],
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
                    image: 'antry-100ml-1.jpg',
                },
                {
                    title: 'ANTRY DEO SPRAY 60 ML',
                    image: 'antry-100ml-2.jpg',
                },
                {
                    title: 'ANTRY BRIGTHENING BODY SCRUB',
                    image: 'body-scrub-1.jpg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AEESYA',
                    image: 'aeesya.jpg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AMEENA',
                    image: 'ameena.jpg',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian SHAFEEA',
                    image: 'shafeea.jpg',
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
            ],
            rewardItems: [
                {
                    title: 'Reward Reguler untuk ANTRY DEO SPRAY 100 ML',
                    items: [
                        { title : '1. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 50 Pcs mendapatkan uang senilai Rp. 50.000 ' },
                        { title : '2. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 100 Pcs mendapatkan uang senilai Rp. 100.000' },
                        { title : '3. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 500 Pcs mendapatkan uang senilai Rp. 500.000' },
                        { title : '4. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 1.000 Pcs mendapatkan uang senilai Rp. 1.000.000' },
                        { title : '5. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 5.000 Pcs mendapatkan uang senilai Rp. 5.000.000' },
                        { title : '6. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 10.000 Pcs mendapatkan uang senilai Rp. 10.000.000' },
                        { title : '7. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 50.000 Pcs mendapatkan uang senilai Rp. 50.000.000' },
                        { title : '8. Pembelian ANTRY DEO SPRAY 100 ml sebanyak 100.000 Pcs mendapatkan uang senilai Rp. 100.000.000' },
                        { title : 'Kalian tidak hanya mendapatkan Reward Reguler dari ANTRY loh, tapi kalian juga berhak mendapatkan Reward Plus dari ANTRY jika kalian melakukan pembelian saat Pre Order (PO) dan Reward ini hanya berlaku saat PO dibuka.' },
                    ],
                    notes: 'Catatan : Reward terhitung mulai dari pembelian produk sebanyak 10 Pcs dan dapat dicairkan saat pembelian mencapai 50 Pcs'
                },
                {
                    title: 'Reward Plus untuk ANTRY DEO SPRAY 100 ML',
                    items: [
                        { title: '1. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 300 Pcs mendapatkan uang senilai Rp. 300.000' },
                        { title: '2. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 1.000 Pcs mendapatkan uang senilai Rp. 1.000.000 atau Emas 1 Gr '},
                        { title: '3. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 3.000 Pcs mendapatkan uang senilai Rp. 2.500.000 atau Handphone Android '},
                        { title: '4. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 5.000 Pcs mendapatkan uang senilai Rp. 5.000.000 atau Tour Singapore- Malaysia '},
                        { title: '5. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 10.000 Pcs mendapatkan uang senilai Rp. 10.000.000 atau Iphone 15 '},
                        { title: '6. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 20.000 Pcs mendapatkan uang senilai Rp. 20.000.000 atau Sepeda Motor Matic '},
                        { title: '7. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 25.000 Pcs mendapatkan uang senilai Rp. 25.000.000 atau Umroh '},
                        { title: '8. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 50.000 Pcs mendapatkan uang senilai Rp. 50.000.000 atau Umroh Pasangan '},
                        { title: '9. Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 100.000 Pcs mendapatkan uang senilai Rp. 100.000.000 atau Mobil '},

                    ],
                    notes: 'Catatan : Reward Plus hanya berlaku saat PO dan tidak mengurangi Reward Reguler. Reward sewaktu-waktu bisa berubah, sesuai kebijakan Manajemen ANTRY'
                },
            ],
            testimoniItems: [
                // https://primefaces.org/cdn/primevue/images/product/
                { image: 'testimoni-1.jpg' },
                { image: 'testimoni-2.jpg' },
                { image: 'testimoni-3.jpg' },
                { image: 'testimoni-4.jpg' },
                { image: 'testimoni-5.jpg' },
                { image: 'testimoni-6.jpg' },
                { image: 'testimoni-7.jpg' },
                { image: 'testimoni-8.jpg' },
            ],
            memberItems: [
                {
                    title: '1. Semua Produk ANTRY sudah Terdaftar dan memiliki Izin Edar atau BPOM',
                    description: 'Apa yang menjadi pertimbangan utama kalian dalam membeli suatu produk perawatan? mungkin salah satunya adalah apakah produk tersebut sudah BPOM atau tidak, karena jika sudah BPOM artinya produk tersebut sudah aman untuk di gunakan. Sama halnya dengan semua Produk ANTRY yang sudah BPOM, sehingga akan meningkatkan rasa yakin komsumen bahwasanya produk ANTRY memang sudah layak digunakan, jadi pastinya pembeli tidak akan ragu lagi untuk  membeli produk ANTRY.',
                },
                {
                    title: '2. Terbukti dengan Banyaknya Testimoni',
                    description: 'Kenapa produk ANTRY bisa laku keras dipasaran? Pasti salah satu penyebabnya adalah testimoni pengguna ANTRY yang membuktikan bahwasanya produk ANTRY memang ampuh dalam mengatasi masalah bau badan penggunanya.',
                },
                {
                    title: '3. Produk ANTRY Sudah Terkenal',
                    description: 'Produk ANTRY telah dikenal untuk wilayah Indonesia akan kualitasnya yang memang terbukti ampuh, dan bukan hanya dalam negeri saja Produk ANTRY terkenal, tapi juga sampai ke Negara tetangga, dan kami juga memiliki Mitra untuk yang berdomisili diluar Negeri.',
                },
                {
                    title: '4. Reward Produk',
                    description: 'Seperti yang telah kami tuliskan di atas bahwasanya Produk ANTRY punya reaward kepada Mitra yang tergabung menjadi member ANTRY dalam jumlah paket tertentu, yang bikin member semakin untung.',
                },
                {
                    title: '5. ID Card Member Resmi',
                    description: 'Untuk kalian yang telah tergabung menjadi member resmi akan mendapatkan ID Card yang menandakan kalian adalah member kami, sehingga menjamin kepercayaan calon kostumer.',
                },
            ]
        };
    },
    methods: {
    }
}
</script>

<style>
.p-card-content {
    @apply h-full
}
.p-card-body {
    @apply h-full
}
</style>
