<template>
   
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business Consulting Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in datas" :key="index" class="group relative">
                        <div class="relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                            <img :src="item.image" class="" alt="">
                            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        </div>

                        <div class="mt-6">
                            <router-link to="#" class="text-xl font-semibold hover:text-indigo-600 duration-500">{{item.name}}</router-link>
                            <p class="text-slate-400 mt-4">{{item.desc}}</p>
                            <div class="mt-4">
                                <router-link to="#" class="hover:text-indigo-600 duration-500 ease-in-out font-semibold"><span class="hidden group-hover:inline-block">Read More</span> <i class="uil uil-arrow-right align-middle text-lg"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>

import image1 from '@/assets/images/consulting/1.jpg'
import image2 from '@/assets/images/consulting/2.jpg'
import image3 from '@/assets/images/consulting/3.jpg'

const datas = [
    {
        image:  image1,
        name: 'Profitable Marketing',
        desc: 'We develop digital strategies, products and services appreciated by clients.'
    },
    {
        image: image2,
        name: 'SEO Specialists',
        desc: 'We develop digital strategies, products and services appreciated by clients.'
    },
    {
        image: image3,
        name: 'Audience Analysis',
        desc: 'We develop digital strategies, products and services appreciated by clients.'
    },
]
</script>