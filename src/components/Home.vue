<template>
    <div id="hero" class="bg-orange-50 scroll-m-20">
        <Container>
            <div class="grid grid-cols-12 pb-10">
                <div class="col-span-12 lg:col-span-7 flex flex-col items-center text-center lg:text-left lg:items-start justify-center px-2 lg:pe-20 order-2 lg:order-1">
                    <p class="text-xl font-normal  text-gray-700">{{ useStore.about.subTitle }}</p>
                    <h1 class="text-2xl font-semibold text-gray-700 mb-4">{{ useStore.about.description }}</h1>
                    <a href="https://wa.me/6285342913781">
                        <Button label="Daftar Menjadi Mitra" icon="pi pi-whatsapp" severity="success" class="text-white w-fit" size="large"></Button>
                    </a>
                </div>
                <div class="col-span-12 lg:col-span-5 flex w-full justify-end order-1 lg:order-2 ">
                    <DeferredContent>
                        <img :src="this.default.domain + 'logoantry.png'" alt="logo antry">
                    </DeferredContent>
                </div>
            </div>
        </Container>
    </div>

    <Container>
        <Section sectionId="produk">
            <SectionTitle title="Produk-Produk Antry" subTitle="Hingga saat ini produk-produk ANTRY telah banyak tersebar diseluruh wilayah Indonesia hingga ke mancanegara dan memberikan manfaat bagi seluruh penggunanya." />

            <div class="grid grid-cols-12 gap-4">
                <Card class="col-span-12 lg:col-span-6 shadow-md" v-for="item in useStore.products" :key="item.title">
                    <template #title>
                        <h4 class="font-bold text-lg text-center pb-4">{{ item.title }}</h4>
                    </template>
                    <template #content>
                        <Image alt="Image" preview class="z-20">
                            <template #previewicon>
                                <i class="pi pi-eye text-2xl"></i>
                            </template>
                            <template #image>
                                <img :src="this.default.domain + 'thumbnail-' + item.image" :alt="item.title" class="w-full rounded object-cover" />
                            </template>
                            <template #preview>
                                <div class="w-full flex justify-center">
                                    <img :src="this.default.domain + item.image" :alt="item.title" @click="slotProps.onClick" class="w-full lg:w-1/2" />
                                </div>
                            </template>
                        </Image>
                    </template>
                </Card>
            </div>
        </Section>

        <Section>
            <SectionTitle title="Produk-Produk ANTRY MINIFA EAU DE TOILETTE" subTitle="Daftar variant produk ANTRY MINIFA EAU DE TOILETTE" />

            <div class="grid grid-cols-12 gap-4 items-center">
                <Image alt="Image" preview class="col-span-12 lg:col-span-4 gap-4">
                    <template #previewicon>
                        <i class="pi pi-eye text-2xl"></i>
                    </template>
                    <template #image>
                        <img :src="this.default.domain + 'thumbnail-' + 'minifa-price.webp'" alt="Daftar Harga Minifa" class="w-full rounded object-cover" />
                    </template>
                    <template #preview>
                        <div class="w-full flex justify-center">
                            <img :src="this.default.domain + 'minifa-price.webp'" :alt="item.title" @click="slotProps.onClick" class="w-full lg:w-1/2" />
                        </div>
                    </template>
                </Image>

                <div class="col-span-12 lg:col-span-8">
                    <Carousel :value="useStore.minifa" :numVisible="2" :numScroll="1" :responsiveOptions="useStore.responsiveOptions" circular :autoplayInterval="3000">
                        <template #item="slotProps">
                            <div class="mx-1 flex flex-col items-center">
                                <Card class="col-span-12 shadow-md mb-2 w-full">
                                    <template #title>{{ slotProps.data.title }}</template>
                                    <template #content>
                                        <Image alt="Image" preview class="z-20">
                                            <template #previewicon>
                                                <i class="pi pi-eye text-2xl"></i>
                                            </template>
                                            <template #image>
                                                <div class="w-full flex justify-center">
                                                    <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.image" class="w-full rounded object-cover" />
                                                </div>
                                            </template>
                                            <template #preview>
                                                <div class="w-full flex justify-center">
                                                    <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.title" @click="slotProps.onClick" class="w-full lg:w-1/2" />
                                                </div>
                                            </template>
                                        </Image>
                                    </template>
                                </Card>
                            </div>
                        </template>
                    </Carousel>
                </div>
            </div>
        </Section>

        <Section sectionId="faq" class="grid grid-cols-12 items-center">
            <SectionTitle class="col-span-12 lg:col-span-4 lg:text-start text-center" title="Pertanyaan Yang Sering Ditanyakan" subTitle="Beberapa pertanyaan yang biasa ditanyakan calon mitra kami." />
            <Card class="col-span-12 lg:col-span-8 shadow-md">
                <template #content>
                    <Accordion value="0">
                        <AccordionPanel v-for="tab in useStore.tabs" :key="tab.title" :value="tab.value">
                            <AccordionHeader>{{ tab.title }}</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0">{{ tab.content }}</p>
                                <ul class="list-disc px-4">
                                    <li v-for="item in tab.list" :key="item.title">{{ item.title }}</li>
                                </ul>
                                <p class="m-0">{{ tab.subContent }}</p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </template>
            </Card>
        </Section>

        <Section sectionId="keuntungan-mitra">
            <SectionTitle title="Apa saja yang kalian dapatkan saat berbagung menjadi Mitra ANTRY?" subTitle="ANTRY juga memiliki program reward bagi semua Mitranya. Reward yang kalian bisa dapatkan tergantung dari jumlah pesanan yang kalian order. Bukan hanya itu saja, kalian juga berhak mendapatkan Reward Plus dari ANTRY sesuai dengan ketentuan yang berlaku. Berikut daftar reward dari Produk ANTRY :" />
            <div class="grid grid-cols-12 gap-3">
                <Card v-for="rewardItem in useStore.rewardItems" :key="rewardItem.title" class="col-span-12 lg:col-span-6 shadow-md">
                    <template #title>
                        {{ rewardItem.title }}
                    </template>
                    <template #content>
                        <div class="flex flex-col justify-between h-full">
                            <ol class="list-decimal px-4">
                                <li v-for="item in rewardItem.items" :key="item.title" class="mb-2">{{ item.title }}</li>
                            </ol>
                            <p class="mt-5">{{ rewardItem.notes }}</p>
                        </div>
                    </template>
                </Card>
            </div>
        </Section>

        <Section sectionId="keuntungan-member">
            <SectionTitle title="Apa Keuntungan Bergabung Menjadi Member ANTRY" subTitle="Hal yang paling penting bagi setiap calon member ANTRY pasti bertanya apasih keuntungan bergabung menjadi Mitra ANTRY?" />
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Card v-for="item in useStore.memberItems" :key="item.title" class="shadow-md">
                    <template #title>
                        {{ item.title }}
                    </template>
                    <template #content>
                        <p v-html="item.description"></p>
                    </template>
                </Card>
            </div>
        </Section>

        <Section sectionId="daftar">
            <!-- <SectionTitle title="Daftar Menjadi Mitra ANTRY" subTitle="" /> -->
            <Card class="col-span-12 shadow-md">
                <template #content>
                    <div class="flex flex-col items-center w-full py-5">
                        <h2 class="text-2xl font-semibold pb-5">Tunggu Apalagi Daftar Menjadi Mitra ANTRY Sekarang Juga</h2>
                        <a href="https://wa.me/6285342913781">
                            <Button label="Daftar Sekarang" icon="pi pi-whatsapp" severity="success" class="text-white" ></Button>
                        </a>
                    </div>
                </template>
            </Card>
        </Section>

        <Section sectionId="testimoni">
            <SectionTitle title="Testimoni Dari Klien Tercinta Kami" subTitle="Daftar testimoni dari berbagai social media dan market place" />
            <Carousel :value="useStore.testimoniItems" :numVisible="3" :numScroll="1" :responsiveOptions="useStore.responsiveOptions" circular :autoplayInterval="3000">
                <template #item="slotProps">
                    <div class="mx-1 flex flex-col items-center">
                        <Card class="col-span-12 shadow-md mb-2 w-full">
                            <template #content>
                                <!-- <img :src="this.default.domain + 'thumbnail-' + slotProps.data.image" :alt="slotProps.data.image" class="w-full h-[350px] rounded object-cover" /> -->
                                <Image alt="Image" preview class="z-20">
                                    <template #previewicon>
                                        <i class="pi pi-eye text-2xl"></i>
                                    </template>
                                    <template #image>
                                        <div class="w-full flex justify-center">
                                            <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.image" class="w-full rounded object-cover" />
                                        </div>
                                    </template>
                                    <template #preview>
                                        <div class="w-full flex justify-center">
                                            <img :src="this.default.domain + slotProps.data.image" :alt="slotProps.data.title" @click="slotProps.onClick" class="w-full lg:w-1/2" />
                                        </div>
                                    </template>
                                </Image>
                            </template>
                        </Card>
                    </div>
                </template>
            </Carousel>
        </Section>
    </Container>
</template>

<script>
import { useStore } from '@/stores';
export default {
	name:'Home',
    inject: ['default'],
    data() {
        return {
            useStore: useStore(),
        };
    },
}
</script>

<style>
.p-card-content {
    @apply h-full
}
.p-card-body {
    @apply h-full
}
/* .p-toast {
    z-index: 45;
} */
</style>