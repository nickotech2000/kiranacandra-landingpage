<template>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <div class="section-title mb-8">
                    <h6 class="text-indigo-600 text-sm font-bold mb-2">Portfolio</h6>
                    <h4 class="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold mb-4">Read some amazing <br> case studies.</h4>
                    <p class="text-slate-400 max-w-xl mb-0">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
            </div>

            <div class="lg:columns-3 md:columns-2 columns-1 mx-3 gap-8" id="grid">
                <div v-for="item in datas" :key="item" class="picture-item rounded-md mb-8 ">
                    <div class="">
                        <div class="relative">
                            <div class="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                                <img :src="item.image" class="rounded-t-md shadow" alt="">
                            </div>
                        </div>
                        <div class="pt-4 px-3">
                            <h5 class="mb-1 font-semibold text-lg"><a href="https://1.envato.market/techwind-vue" target="_blank" class="hover:text-indigo-600">{{ item.name }}</a></h5>
                            <span class="text-slate-400">{{item.title}}</span>
                        </div>                            
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-12 grid-cols-1 mt-12">
                <div class="md:col-span-12 text-center">
                    <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script setup>
import work1 from '@/assets/images/studio/work1.jpg'
import work2 from '@/assets/images/studio/work2.jpg'
import work3 from '@/assets/images/studio/work3.jpg'
import work4 from '@/assets/images/studio/work4.jpg'
import work5 from '@/assets/images/studio/work5.jpg'
import work6 from '@/assets/images/studio/work6.jpg'
import work7 from '@/assets/images/studio/work7.jpg'

const datas = [
    {
        image:work1,
        name: 'Techwind Personal Portfolio',
        title: 'Creative',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30'
    },
    {
        image: work5,
        name: 'Techwind Constuction',
        title: 'Corporate',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-amber-600/5 dark:bg-amber-600/30'
    },
    {
        image:work2,
        name: 'Techwind Minimal Portfolio',
        title: 'Minimal',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30'
    },
    {
        image: work4,
        name: 'Techwind Portfolio',
        title: 'Portfolio',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-sky-600/5 dark:bg-sky-600/30'
    },
    {
        image: work7,
        name: 'Cryptor NFT Market',
        title: 'Crypto',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30'
    },
    {
        image: work3,
        name: 'Cryptor NFT Market',
        title: 'Crypto',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-red-600/5 dark:bg-red-600/30'
    },                  
    {
        image: work6,
        name: 'Techwind SEO',
        title: 'SEO',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30'
    },
    {
        image:work2,
        name: 'Techwind Minimal Portfolio',
        title: 'Minimal',
        bgcolor: 'shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-emerald-600/5 dark:bg-emerald-600/30'
    },
    
    
]
</script>