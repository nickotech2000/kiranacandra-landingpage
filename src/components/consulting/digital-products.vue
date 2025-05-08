<template>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Digital Product</h3>
                        <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                    <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                        <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                    </div>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]" id="grid">
                    <div v-for="item in datas" :key="item" class="picture-item rounded-md">
                        <div class="">
                            <div class="relative">
                                <div class="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                    <img :src="item.image" class="rounded-t-md shadow" alt="">
                                </div>
                            </div>

                            <div class="pt-4 px-3">
                                <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind-vue" target="_blank" class="hover:text-indigo-600 duration-500">{{ item.name }}</a></h5>
                                <span class="text-slate-400">{{item.title}}</span>
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
</template>

<script setup>
import pro1 from '@/assets/images/portfolio/pro1.jpg'
import pro2 from '@/assets/images/portfolio/pro2.jpg'
import pro3 from '@/assets/images/portfolio/pro3.jpg'
import pro4 from '@/assets/images/portfolio/pro4.jpg'
import pro5 from '@/assets/images/portfolio/pro5.jpg'
import pro6 from '@/assets/images/portfolio/pro6.jpg'

const datas = [
    {
        image: pro1,
        name: 'Techwind Personal Portfolio',
        title: 'Creative'
    },
    {
        image: pro2,
        name: 'Techwind Minimal Portfolio',
        title: 'Minimal'
    },
    {
        image: pro3,
        name: 'Techwind NFT Market',
        title: 'Crypto'
    },
    {
        image: pro4,
        name: 'Techwind Portfolio',
        title: 'Portfolio'
    },
    {
        image: pro5,
        name: 'Techwind Constuction',
        title: 'Corporate'
    },
    {
        image: pro6,
        name: 'Techwind SEO',
        title: 'SEO'
    },
]
</script>