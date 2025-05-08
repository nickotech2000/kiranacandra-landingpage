<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                    <h6 class="text-indigo-600 font-semibold mb-2">Portfolio</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                    <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                    <router-link to="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                    <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-4" id="grid">
                <div v-for="item in datas" :key="item" class="picture-item rounded-md">
                    <div class="">
                        <div class="relative">
                            <div class="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md " :class="item.bgclass">
                                <img :src="item.image" class="rounded-t-md shadow" alt="">
                            </div>
                        </div>
                        <div class="pt-4 px-3">
                            <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind-vue" target="_blank" class="hover:text-indigo-600 duration-500">{{ item.name }}</a></h5>
                            <span class="text-slate-400">{{ item.title }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                <div class="md:col-span-12 text-center">
                    <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                </div>
            </div>
        </div>

        <div class="container relative md:my-24 my-16">
            <div class="grid grid-cols-1 text-center">
                <h6 class="text-indigo-600 text-sm font-bold mb-2">Available for freelance projects</h6>
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Do you have digital project? <br> Let's talk.</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                <div class="mt-6">
                    <router-link to="/contact-one" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"><i class="uil uil-phone"></i> Contact us</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import image1 from '@/assets/images/portfolio/pro1.jpg'
import image2 from '@/assets/images/portfolio/pro2.jpg'
import image3 from '@/assets/images/portfolio/pro3.jpg'
import image4 from '@/assets/images/portfolio/pro4.jpg'
import image5 from '@/assets/images/portfolio/pro5.jpg'
import image6 from '@/assets/images/portfolio/pro6.jpg'

const datas = ref([
  {
    image: image1,
    name: 'Techwind Personal Portfolio',
    title: 'Creative',
    class: 'hover:text-indigo-600',
    bgclass: 'bg-indigo-600/5 dark:bg-indigo-600/30'
  },
  {
    image: image2,
    name: 'Techwind Minimal Portfolio',
    title: 'Minimal',
    class: 'hover:text-emerald-600',
    bgclass: 'bg-emerald-600/5 dark:bg-emerald-600/30'
  },
  {
    image: image3,
    name: 'Techwind NFT Market',
    title: 'Crypto',
    class: 'hover:text-red-600',
    bgclass: 'bg-red-600/5 dark:bg-red-600/30'
  },
  {
    image: image4,
    name: 'Techwind Portfolio',
    title: 'Portfolio',
    class: 'hover:text-sky-600',
    bgclass: 'bg-sky-600/5 dark:bg-sky-600/30'
  },
  {
    image: image5,
    name: 'Techwind Construction',
    title: 'Corporate',
    class: 'hover:text-amber-600',
    bgclass: 'bg-amber-600/5 dark:bg-amber-600/30'
  },
  {
    image: image6,
    name: 'Techwind SEO',
    title: 'SEO',
    class: 'hover:text-indigo-600',
    bgclass: 'bg-indigo-600/5 dark:bg-indigo-600/30'
  },
]);
</script>