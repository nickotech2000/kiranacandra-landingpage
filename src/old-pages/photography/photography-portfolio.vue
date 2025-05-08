<template>
    <div>
        <navbar />
        <section class="relative md:py-56 py-44 bg-[url('../../assets/images/photography/photographer.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5" id="aboutme">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-white/80 dark:via-slate-900/80 from-white dark:from-slate-900"></div>

            <div class="absolute text-center p-6 bottom-0 start-0 end-0">
                <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold">Portfolio</h3>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter-border-bottom filter-options space-x-3">
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == null ? 'active' : ''" @click="matchCategory(null)">All</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'branding' ? 'active ' : ''" @click="matchCategory('branding')">Branding</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'designing' ? 'active ' : ''" @click="matchCategory('designing')">Designing</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'photography' ? 'active ' : ''" @click="matchCategory('photography')">Photography</li>
                                <li class="inline-block text-lg font-semibold mb-3 cursor-pointer relative border-b border-transparent text-slate-400 duration-500" :class="selectedCategory == 'development' ? 'active ' : ''" @click="matchCategory('development')">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" class="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-2 mx-3 mt-4">
                    <div v-for="(item, index) in filteredData" :key="index" class="picture-item mb-2">
                        <div class="group relative block overflow-hidden rounded-md duration-500">
                            <img :src="item.image" class="" alt="work-image">
                            <div
                                class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <router-link to="#" @click="showLightbox(index)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-8">
                    <div class="text-center">
                        <router-link to="/photography-portfolio" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-slate-400 dark:text-white/70 dark:hover:text-white hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600 dark:bg-white"></span> See More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </section>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
        <Footer />
        <switcher />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';
import Navbar from '@/components/navbar/navbar-photography.vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Footer from '@/components/footer/photography-footer.vue';
import Switcher from '@/components/switcher.vue';

// Import Images
import image from '@/assets/images/photography/p1.jpg';
import image5 from '@/assets/images/photography/p5.jpg';
import image10 from '@/assets/images/photography/p10.jpg';
import image13 from '@/assets/images/photography/p13.jpg';
import image17 from '@/assets/images/photography/p17.jpg';
import image2 from '@/assets/images/photography/p2.jpg';
import image9 from '@/assets/images/photography/p9.jpg';
import image12 from '@/assets/images/photography/p12.jpg';
import image15 from '@/assets/images/photography/p15.jpg';
import image18 from '@/assets/images/photography/p18.jpg';
import image3 from '@/assets/images/photography/p3.jpg';
import image7 from '@/assets/images/photography/p7.jpg';
import image14 from '@/assets/images/photography/p14.jpg';
import image4 from '@/assets/images/photography/p4.jpg';
import image6 from '@/assets/images/photography/p6.jpg';
import image8 from '@/assets/images/photography/p8.jpg';
import image11 from '@/assets/images/photography/p11.jpg';
import image16 from '@/assets/images/photography/p16.jpg';

// Data and States
const datas = ref([
  { image, category: 'branding' },
  { image: image5, category: 'photography' },
  { image: image10, category: 'photography' },
  { image: image13, category: 'branding' },
  { image: image17, category: 'branding' },
  { image: image2, category: 'designing' },
  { image: image9, category: 'photography' },
  { image: image12, category: 'development' },
  { image: image15, category: 'photography' },
  { image: image18, category: 'photography' },
  { image: image3, category: 'branding' },
  { image: image7, category: 'designing' },
  { image: image14, category: 'designing' },
  { image: image4, category: 'designing' },
  { image: image6, category: 'branding' },
  { image: image8, category: 'branding' },
  { image: image11, category: 'development' },
  { image: image16, category: 'photography' },
]);

const images = datas.value.map((item) => item.image);

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);
const filteredData = ref(datas.value);
const selectedCategory = ref(null);

// Methods
const darkmode = () => {
  document.documentElement.classList.add('dark');
};

const matchCategory = (category) => {
  selectedCategory.value = category;
  filteredData.value = category
    ? datas.value.filter((item) => item.category === category)
    : datas.value;
};

const showLightbox = (index) => {
  imgsRef.value = images;
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => {
  visibleRef.value = false;
};

// Lifecycle
onMounted(() => {
  jarallax(document.querySelectorAll('.jarallax'), { speed: 0.5 });
  darkmode();
});
</script>