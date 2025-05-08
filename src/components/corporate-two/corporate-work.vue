<template>
    <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Latest Works</h3>
                <p class="text-slate-400 max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
            </div>
        </div>

        <div class="sm:flex mt-4">
            <div v-for="item in datas" :key="item" class="sm:w-1/2 picture-item p-4 rounded-md">
                <div class="">
                    <div class="relative">
                        <div class="shadow-sm dark:shadow-gray-800 p-5 pb-0 rounded-md bg-indigo-600/5 dark:bg-indigo-600/30">
                            <img :src="item.image" class="rounded-t-md shadow" alt="">
                        </div>
                    </div>

                    <div class="pt-4 px-3">
                        <h5 class="mb-1 font-semibold text-xl"><a href="https://1.envato.market/techwind-vue" target="_blank" class="hover:text-indigo-600 duration-500">{{ item.name }}</a></h5>
                        <span class="text-slate-400">{{item.title}}</span>
                    </div>                            
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'

    const datas = [
        {
            image: portfolio1,
            name: 'Techwind Personal Portfolio',
            title: 'Creative'
        },
        {
            image: portfolio2,
            name: 'Techwind Minimal Portfolio',
            title: 'Minimal'
        },
    ]
</script>