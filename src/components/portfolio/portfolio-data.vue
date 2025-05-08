<template>
    <div>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter filter-options space-x-3">
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500" :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500" :class="selectedCategory == 'branding' ? 'active ' : ''" @click="matchCategory('branding')">Branding</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500" :class="selectedCategory == 'designing' ? 'active ' : ''" @click="matchCategory('designing')">Designing</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500" :class="selectedCategory == 'photography' ? 'active ' : ''" @click="matchCategory('photography')">Photography</li>
                                <li class="inline-block font-medium text-lg mb-3 cursor-pointer relative text-slate-400 duration-500" :class="selectedCategory == 'development' ? 'active ' : ''" @click="matchCategory('development')">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="container-fluid relative mt-8">
                <div id="grid" class="lg:columns-5 md:columns-3 sm:columns-2 columns-1 gap-2 mx-3">
                    <div v-for="(item, index) in filteredData" :key="index" class="picture-item mb-2" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <a @click="showLightbox(index)" class="lightbox duration-500 group-hover:scale-105 tobii-zoom" title=""><img :src="item.image" class="" alt="work-image"></a>
                            <div class="absolute -bottom-52 group-hover:bottom-2 start-2 end-2 duration-500 bg-white dark:bg-slate-900 p-4 rounded </div> dark:shadow-gray-800">
                                <router-link to="/portfolio-detail-two" class="hover:text-indigo-600 text-lg duration-500 font-medium">Iphone mockup</router-link>
                                <h6 class="text-slate-400">Branding</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-8">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">See More</router-link>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <span class="text-slate-400 mb-4">Available for freelance projects</span>
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br> Let's talk.</h3>

                    <div class="mt-6">
                        <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-phone"></i> Contact us</router-link>
                    </div>
                </div>
            </div>
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import image10 from '@/assets/images/portfolio/10.jpg';
import image2 from '@/assets/images/portfolio/2.jpg';
import image11 from '@/assets/images/portfolio/11.jpg';
import image13 from '@/assets/images/portfolio/13.jpg';
import image6 from '@/assets/images/portfolio/6.jpg';
import image7 from '@/assets/images/portfolio/7.jpg';
import image14 from '@/assets/images/portfolio/14.jpg';
import image12 from '@/assets/images/portfolio/12.jpg';
import image8 from '@/assets/images/portfolio/8.jpg';
import image9 from '@/assets/images/portfolio/9.jpg';
import image1 from '@/assets/images/portfolio/1.jpg';
import image15 from '@/assets/images/portfolio/15.jpg';
import image16 from '@/assets/images/portfolio/16.jpg';

const selectedCategory = ref(null);
const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

const datas = [
  { image: image10, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image8, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image2, name: 'Iphone mockup', title: 'Branding', category: 'photography' },
  { image: image7, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image15, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image16, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image11, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image9, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image13, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image1, name: 'Iphone mockup', title: 'Branding', category: 'development' },
  { image: image6, name: 'Iphone mockup', title: 'Branding', category: 'branding' },
  { image: image14, name: 'Iphone mockup', title: 'Branding', category: 'designing' },
  { image: image12, name: 'Iphone mockup', title: 'Branding', category: 'development' },
];

const images = datas.map((item) => item.image);

// Computed filtered data
const filteredData = computed(() =>
  selectedCategory.value
    ? datas.filter((item) => item.category === selectedCategory.value)
    : datas
);

// Methods
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

// Initialize on mount
onMounted(() => {
  matchCategory(selectedCategory.value);
});
</script>
