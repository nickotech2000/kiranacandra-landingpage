<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">New Trends in SEO</h3>

                    <ul class="list-none">
                        <li class="inline font-semibold text-white/60 me-2"> <span class="text-white">Client :</span> Calvin Carlo</li>
                        <li class="inline font-semibold text-white/60"> <span class="text-white">Date :</span> 23th May, 2022</li>
                    </ul>
                </div>
            </div>
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">Techwind</router-link></li>
                   <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="#">Portfolio</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Detail</li>
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
                <div class="grid grid-cols-1">
                    <div class="tiny-single-item">
                        <div v-for="item in images" :key="item" class="tiny-slide">
                            <div class="m-2">
                                <img :src="item" class="rounded-md shadow-sm dark:shadow-gray-800" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-4 md:col-span-5">
                        <div class="bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 p-6 rounded-md">
                            <h5 class="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                            <dl class="grid grid-cols-12 mb-0">
                                <dt class="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                <dt class="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                <dt class="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd Sep, 2021</dd>

                                <dt class="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                <dt class="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                <dd class="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                            </dl>  
                        </div>
                    </div>

                    <div class="lg:col-span-8 md:col-span-7">
                        <div class="lg:me-5">
                            <h4 class="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Name :</h4>
                            <p class="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                            <p class="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>

           <Contact />
        </section>
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import Navbar from '@/components/navbar/navbar.vue';
import Contact from '@/components/portfolio-contact.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import image from '@/assets/images/portfolio/16.jpg';
import image2 from '@/assets/images/portfolio/17.jpg';
import image3 from '@/assets/images/portfolio/18.jpg';

const images = ref([
  image,
  image2,
  image3
]);

onMounted(() => {
  tns({
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  });
});
</script>
