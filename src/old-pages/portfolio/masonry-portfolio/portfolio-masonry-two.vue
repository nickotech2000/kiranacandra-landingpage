<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>
                    <p class="text-slate-300 text-lg max-w-xl mx-auto">Showcase of Our Awesome Works in Two Columns</p>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">Techwind</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="#">Portfolio</router-link>
                    </li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Masonry</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter filter-options space-x-3">
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                                    :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                                    :class="selectedCategory == 'branding' ? 'active ' : ''"
                                    @click="matchCategory('branding')">Branding</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                                    :class="selectedCategory == 'designing' ? 'active ' : ''"
                                    @click="matchCategory('designing')">Designing</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                                    :class="selectedCategory == 'photography' ? 'active ' : ''"
                                    @click="matchCategory('photography')">Photography</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500"
                                    :class="selectedCategory == 'development' ? 'active ' : ''"
                                    @click="matchCategory('development')">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" class="lg:w-3/4 md:columns-2 columns-1 gap-4 mx-auto mt-4">
                    <div v-for="(item, index) in filteredData" :key="index" class="picture-item mb-4">
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <router-link to="#" @click="showLightbox(index)" class="lightbox duration-500 group-hover:scale-105 tobii-zoom cursor-pointer" title="">
                                <img :src="item.image" class="" alt="work-image"/>
                            </router-link>
                            <div class="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow-sm dark:shadow-gray-800">
                                <router-link to="/portfolio-detail-two" class="hover:text-indigo-600 text-lg duration-500 font-medium">{{item.name}}</router-link>
                                <h6 class="text-slate-400">{{item.title}}</h6>
                            </div>
                        </div>
                    </div>

                </div>

            <Pagination />
            </div>

            <Contact />
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import Pagination from '@/components/shop/shop-pagination.vue';
import Contact from '@/components/portfolio-contact.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image10 from '@/assets/images/portfolio/10.jpg';
import image13 from '@/assets/images/portfolio/13.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';
import image9 from '@/assets/images/portfolio/9.jpg';
import image15 from '@/assets/images/portfolio/15.jpg';
import image16 from '@/assets/images/portfolio/16.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image11 from '@/assets/images/portfolio/11.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image14 from '@/assets/images/portfolio/14.jpg';
import image12 from '@/assets/images/portfolio/12.jpg';
import image1 from '@/assets/images/portfolio/1.jpg';

const selectedCategory = ref(null);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const datas = [
  { image: image10, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image13, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image7, name: 'Iphone mockup', title: 'Branding', category: 'photography' },
  { image: image8, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image9, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image15, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image16, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image2, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image11, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image6, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image14, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image12, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image1, name: 'Iphone mockup', title: 'Branding', category: 'development' }
];

const images = [
  image10, image13, image7, image8, image9,
  image15, image16, image2, image11, image6,
  image14, image12, image1
];

const filteredData = computed(() =>
  selectedCategory.value
    ? datas.filter((item) => item.category === selectedCategory.value)
    : datas
);

const matchCategory = (category) => {
  selectedCategory.value = category;
};

const showLightbox = (index) => {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>