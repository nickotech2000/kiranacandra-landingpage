<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />

    <section class="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800">

                        <div id="grid" class="lg:columns-4 md:columns-3 columns-1 gap-2 mx-3">
                            <div v-for="(item, index) in images" :key="index" class="picture-item mb-2"
                                data-groups='["branding"]'>
                                <div
                                    class="group relative block overflow-hidden rounded-md shadow-sm dark:shadow-gray-800 duration-500">
                                    <router-link to="#" @click="showLightbox(index)"
                                        class="lightbox duration-500 group-hover:scale-105 cursor-pointer" title="">
                                        <img :src="item" class="shadow-sm dark:shadow-gray-800" alt="work-image"/>
                                    </router-link>
                                </div>
                            </div>

                        </div>

                        <div class="text-center mt-12">
                            <span
                                class="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">Photography</span>
                            <h3 class="my-3 text-[26px] font-semibold">Get Ready To Up Your <br> Creative Game With The
                                New DJI Mavic Air 2</h3>

                            <ul class="list-none mt-6">
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Client :</span> <span
                                        class="block">Calvin Carlo</span></li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Date :</span> <span
                                        class="block">23th May, 2022</span></li>
                                <li class="inline-block font-semibold text-slate-400 mx-4"> <span
                                        class="text-slate-900 dark:text-white block">Time :</span> <span class="block">8
                                        Min Read</span></li>
                            </ul>
                        </div>

                        <div class="mt-6">
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said
                                to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                                language which more or less corresponds to 'proper' Latin. It contains a series of real
                                Latin words. This ancient dummy text is also incomprehensible, but it imitates the
                                rhythm of most European languages in Latin script.</p>
                            <p
                                class="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                " There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. "</p>
                            <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative
                                meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                                distract the viewer's attention from the layout.</p>
                        </div>
                    </div>

                    <Report />
                </div>

                <Sidebar />
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
           <Subscribe />
        </div>
    </section>
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    <Footers :email=true />
    <Switcher />
</div>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import Report from '@/components/report.vue';
import Sidebar from '@/components/blogs/blog-sidebar.vue';
import Subscribe from '@/components/subscribe.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image from '@/assets/images/portfolio/1.jpg';
import image2 from '@/assets/images/portfolio/11.jpg';
import image3 from '@/assets/images/portfolio/10.jpg';
import image4 from '@/assets/images/portfolio/4.jpg';
import image5 from '@/assets/images/portfolio/2.jpg';
import image6 from '@/assets/images/portfolio/12.jpg';
import image7 from '@/assets/images/portfolio/13.jpg';
import image8 from '@/assets/images/portfolio/3.jpg';

const images = ref([
  image, image2, image3, image4, image5, image6, image7, image8
]);

const visibleRef = ref(false);
const imgsRef = ref([]);
const indexRef = ref(0);

function showLightbox(index) {
  imgsRef.value = images.value;
  indexRef.value = index;
  visibleRef.value = true;
}

function onHide() {
  visibleRef.value = false;
}
</script>