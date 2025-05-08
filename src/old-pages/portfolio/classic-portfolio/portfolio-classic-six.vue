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
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="/">Techwind</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i  class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                        <router-link to="">Portfolio</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"  aria-current="page">Classic</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none"  xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section class="relative md:py-24 py-16">
            <div class="relative">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter-box filter-options space-x-3">
                                <li class="inline-block font-medium text-base mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md duration-500"
                                    :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                                <li class="inline-block font-medium text-base mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md duration-500"
                                    :class="selectedCategory == 'branding' ? 'active ' : ''"
                                    @click="matchCategory('branding')">Branding</li>
                                <li class="inline-block font-medium text-base mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md duration-500"
                                    :class="selectedCategory == 'designing' ? 'active ' : ''"
                                    @click="matchCategory('designing')">Designing</li>
                                <li class="inline-block font-medium text-base mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md duration-500"
                                    :class="selectedCategory == 'photography' ? 'active ' : ''"
                                    @click="matchCategory('photography')">Photography</li>
                                <li class="inline-block font-medium text-base mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md duration-500"
                                    :class="selectedCategory == 'development' ? 'active ' : ''"
                                    @click="matchCategory('development')">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="grid mx-auto lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-4 gap-[30px] px-4">
                    <div v-for="item in filteredData" :key="item" class="picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <router-link to="/portfolio-detail-one"><img :src="item.image" class="rounded-md" alt=""></router-link>
                            <div class="content pt-3">
                                <h5 class="mb-1"><router-link to="/portfolio-detail-one"
                                        class="hover:text-indigo-600 duration-500 font-semibold">{{ item.title }}</router-link></h5>
                                <h6 class="text-slate-400">{{ item.name }}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
            <Contact />
        </section>
        <Footers :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Pagination from '@/components/shop/shop-pagination.vue';
import Contact from '@/components/portfolio-contact.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image from '@/assets/images/portfolio/01.jpg';
import image2 from '@/assets/images/portfolio/02.jpg';
import image3 from '@/assets/images/portfolio/03.jpg';
import image4 from '@/assets/images/portfolio/04.jpg';
import image5 from '@/assets/images/portfolio/05.jpg';
import image6 from '@/assets/images/portfolio/06.jpg';
import image7 from '@/assets/images/portfolio/07.jpg';
import image8 from '@/assets/images/portfolio/08.jpg';
import image9 from '@/assets/images/portfolio/09.jpg';
import image10 from '@/assets/images/portfolio/010.jpg';

const selectedCategory = ref(null);

const datas = [
  { image, name: 'Branding', title: 'Iphone mockup', category: 'branding' },
  { image: image2, name: 'Mockup', title: 'Mockup Collection', category: 'designing' },
  { image: image3, name: 'Abstract', title: 'Abstract images', category: 'photography' },
  { image: image4, name: 'Books', title: 'Yellow bg with Books', category: 'development' },
  { image: image5, name: 'V-card', title: 'Company V-card', category: 'branding' },
  { image: image6, name: 'Photography', title: 'Mockup box with paints', category: 'branding' },
  { image: image7, name: 'Cups', title: 'Coffee cup', category: 'designing' },
  { image: image8, name: 'Article', title: 'Pen and article', category: 'development' },
  { image: image9, name: 'Color', title: 'White mockup box', category: 'photography' },
  { image: image10, name: 'Logos', title: 'Logo Vectors', category: 'photography' },
];

const filteredData = computed(() =>
  selectedCategory.value
    ? datas.filter((item) => item.category === selectedCategory.value)
    : datas
);

function matchCategory(category) {
  selectedCategory.value = category;
}

onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>