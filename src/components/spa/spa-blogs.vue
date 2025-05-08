<template>
    <div class="container relative md:my-24 my-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h4 class="!font-alex text-3xl">Blog</h4>
            <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Blog Or News</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            <div v-for="blog in blogs" :key="blog" class="blog relative shadow-sm dark:shadow-gray-800 overflow-hidden">
                <img :src="blog.image" alt="">

                <div class="content p-6">
                    <router-link to="blog-detail" class="title h5 text-xl font-semibold !font-ebgaramond hover:text-indigo-600 duration-500 ease-in-out">{{ blog.name }}</router-link>
                    <p class="text-slate-400 mt-3">{{ blog.desc }}</p>
                    
                    <div class="mt-4">
                        <router-link to="blog-detail" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import blog1 from '@/assets/images/spa/b1.jpg'
import blog2 from '@/assets/images/spa/b2.jpg'
import blog3 from '@/assets/images/spa/b3.jpg'

const blogs = [
    {
        image: blog1,
        name: 'Hiking for health in Peru',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image: blog2,
        name: 'Sisley Spa opens at Miramar',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image: blog3,
        name: 'Top 5 Tips for Choosing a Day Spa',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
]
</script>