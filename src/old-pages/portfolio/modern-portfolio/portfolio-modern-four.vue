<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section
            class="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>

                    <p class="text-slate-300 text-lg max-w-xl mx-auto">Showcase of Our Awesome Works in Two Columns</p>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">Techwind</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="uil uil-angle-right-b"></i></li>
                    <li
                        class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <a href="">Portfolio</a>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i
                            class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
                        aria-current="page">Modern</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div
                class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>


        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                :class="selectedCategory == 'branding' ? 'active ' : ''"
                                    @click="matchCategory('branding')">Branding</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                    :class="selectedCategory == 'designing' ? 'active ' : ''"
                                    @click="matchCategory('designing')">Designing</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                    :class="selectedCategory == 'photography' ? 'active ' : ''"
                                    @click="matchCategory('photography')">Photography</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500"
                                :class="selectedCategory == 'development' ? 'active ' : ''"
                                    @click="matchCategory('development')">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="grid mx-auto lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-4 gap-[30px]">
                    <div v-for="(item, index) in filteredData" :key="index" class="picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <img :src="item.image"
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500"
                                alt="">
                            <div
                                class="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-md">
                            </div>

                            <div class="content duration-500">
                                <div class="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                    <router-link to="#" @click="showLightbox(index)"
                                        class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i
                                            class="uil uil-camera"></i></router-link>
                                </div>

                                <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                    <router-link to="/portfolio-detail-three"
                                        class="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ item.name }}</router-link>
                                    <p class="text-slate-400 mb-0">{{item.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
                <Contact />
            </div>
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <Footers :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import Pagination from '@/components/shop/shop-pagination.vue';
import Contact from '@/components/portfolio-contact.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image from '@/assets/images/portfolio/1.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image3 from '@/assets/images/portfolio/3.jpg';
import image4 from '@/assets/images/portfolio/4.jpg';
import image5 from '@/assets/images/portfolio/5.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';
import image20 from '@/assets/images/portfolio/20.jpg';
import image21 from '@/assets/images/portfolio/21.jpg';
import image22 from '@/assets/images/portfolio/22.jpg';
import image23 from '@/assets/images/portfolio/23.jpg';

const selectedCategory = ref(null);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const datas = [
  { image, name: 'Mockup Collection', title: 'Abstract', category: 'branding' },
  { image: image2, name: 'Mockup Collection', title: 'Abstract', category: 'designing' },
  { image: image3, name: 'Mockup Collection', title: 'Abstract', category: 'photography' },
  { image: image4, name: 'Mockup Collection', title: 'Abstract', category: 'branding' },
  { image: image5, name: 'Mockup Collection', title: 'Abstract', category: 'branding' },
  { image: image6, name: 'Mockup Collection', title: 'Abstract', category: 'designing' },
  { image: image7, name: 'Mockup Collection', title: 'Abstract', category: 'development' },
  { image: image8, name: 'Mockup Collection', title: 'Abstract', category: 'development' },
  { image: image20, name: 'Mockup Collection', title: 'Abstract', category: 'development' },
  { image: image21, name: 'Mockup Collection', title: 'Abstract', category: 'development' },
  { image: image22, name: 'Mockup Collection', title: 'Abstract', category: 'branding' },
  { image: image23, name: 'Mockup Collection', title: 'Abstract', category: 'designing' },
];

const images = [image, image2, image3, image4, image5, image6, image7, image8, image20, image21, image22, image23];

const filteredData = computed(() =>
  selectedCategory.value
    ? datas.filter((item) => item.category === selectedCategory.value)
    : datas
);

function matchCategory(category) {
  selectedCategory.value = category;
}

function showLightbox(index) {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}

onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>