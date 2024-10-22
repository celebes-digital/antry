import { defineStore } from 'pinia'

export const useStore = defineStore('products', {
    state: () => {
        return {
            navItems: [
                {
                    label: 'Home',
                    to: '#hero'
                },
                {
                    label: 'Produk',
                    to: '#produk'
                },
                {
                    label: "FAQ's",
                    to: '#faq'
                },
                {
                    label: 'Keuntungan Mitra',
                    to: '#keuntungan-mitra'
                },
                {
                    label: 'Keuntungan Member',
                    to: '#keuntungan-member'
                },
                {
                    label: 'Testimoni',
                    to: '#testimoni'
                },
            ],
            products: [
                {
                    title: 'ANTRY DEO SPRAY 100 ML',
                    image: 'antry-100ml.webp',
                },
                {
                    title: 'ANTRY DEO SPRAY 60 ML',
                    image: 'antry-60ml.webp',
                },
                // {
                //     title: 'ANTRY BRIGHTENING BODY SCRUB',
                //     image: 'body-scrub-1.webp',
                // },
            ],
            minifa: [
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AEESYA',
                    image: 'aeesya.webp',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian AMEENA',
                    image: 'ameena.webp',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian SHAFEEA',
                    image: 'shafeea.webp',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian REEHANA',
                    image: 'reehana.webp',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian KHALEEJA',
                    image: 'khaleeja.webp',
                },
                {
                    title: 'ANTRY MINIFA EAU DE TOILETTE - Varian MAREEA',
                    image: 'mareea.webp',
                },
            ],
            resMinifa: [
                {
                    breakpoint: '1280px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '1024px',
                    numVisible: 1,
                    numScroll: 1
                },
                {
                    breakpoint: '768px',
                    numVisible: 1,
                    numScroll: 1
                },
                {
                    breakpoint: '640px',
                    numVisible: 1,
                    numScroll: 1
                }
            ],
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
            about: {
                subTitle: 'Apa itu ANTRY?',
                description: 'ANTRY adalah sebuah merek produk yang berada di Kota Makassar dengan fokus produk perawatan tubuh yang menggunakan 100% bahan alami yang InsyaAllah aman bagi segala usia.'
            },
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
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 50 Pcs mendapatkan uang senilai Rp 50.000 ' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 100 Pcs mendapatkan uang senilai Rp 100.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 500 Pcs mendapatkan uang senilai Rp 500.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 1.000 Pcs mendapatkan uang senilai Rp 1.000.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 5.000 Pcs mendapatkan uang senilai Rp 5.000.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 10.000 Pcs mendapatkan uang senilai Rp 10.000.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 50.000 Pcs mendapatkan uang senilai Rp 50.000.000' },
                        { title: 'Pembelian ANTRY DEO SPRAY 100 ml sebanyak 100.000 Pcs mendapatkan uang senilai Rp 100.000.000' },
                        { title: 'Kalian tidak hanya mendapatkan Reward Reguler dari ANTRY loh, tapi kalian juga berhak mendapatkan Reward Plus dari ANTRY jika kalian melakukan pembelian saat Pre Order (PO) dan Reward ini hanya berlaku saat PO dibuka.' },
                    ],
                    notes: 'Catatan : Reward terhitung mulai dari pembelian produk sebanyak 10 Pcs dan dapat dicairkan saat pembelian mencapai 50 Pcs'
                },
                {
                    title: 'Reward Plus untuk ANTRY DEO SPRAY 100 ML',
                    items: [
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 300 Pcs mendapatkan uang senilai Rp 300.000' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 1.000 Pcs mendapatkan uang senilai Rp 1.000.000 atau Emas 1 Gr ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 3.000 Pcs mendapatkan uang senilai Rp 2.500.000 atau Handphone Android ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 5.000 Pcs mendapatkan uang senilai Rp 5.000.000 atau Tour Singapore- Malaysia ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 10.000 Pcs mendapatkan uang senilai Rp 10.000.000 atau Iphone 15 ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 20.000 Pcs mendapatkan uang senilai Rp 20.000.000 atau Sepeda Motor Matic ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 25.000 Pcs mendapatkan uang senilai Rp 25.000.000 atau Umroh ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 50.000 Pcs mendapatkan uang senilai Rp 50.000.000 atau Umroh Pasangan ' },
                        { title: 'Pembelian PO ANTRY DEO SPRAY 100 ml sebanyak 100.000 Pcs mendapatkan uang senilai Rp 100.000.000 atau Mobil ' },

                    ],
                    notes: 'Catatan : Reward Plus hanya berlaku saat PO dan tidak mengurangi Reward Reguler. Reward sewaktu-waktu bisa berubah, sesuai kebijakan Manajemen ANTRY'
                },
            ],
            testimoniItems: [
                // https://primefaces.org/cdn/primevue/images/product/
                { image: 'testimoni-1.webp' },
                { image: 'testimoni-2.webp' },
                { image: 'testimoni-3.webp' },
                { image: 'testimoni-4.webp' },
                { image: 'testimoni-5.webp' },
                { image: 'testimoni-6.webp' },
                { image: 'testimoni-7.webp' },
                { image: 'testimoni-8.webp' },
            ],
            memberItems: [
                {
                    title: '1. Semua Produk ANTRY sudah Terdaftar dan memiliki Izin Edar atau BPOM',
                    description: 'Apa yang menjadi pertimbangan utama kalian dalam membeli suatu produk perawatan? mungkin salah satunya adalah apakah produk tersebut sudah BPOM atau tidak, karena jika sudah BPOM artinya produk tersebut sudah aman untuk di gunakan. <br /> Sama halnya dengan semua Produk ANTRY yang sudah BPOM, sehingga akan meningkatkan rasa yakin komsumen bahwasanya produk ANTRY memang sudah layak digunakan, jadi pastinya pembeli tidak akan ragu lagi untuk  membeli produk ANTRY.',
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
        }
    },
})