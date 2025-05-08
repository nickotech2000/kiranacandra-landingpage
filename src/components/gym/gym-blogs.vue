<template>
            <div class="container relative md:my-24 my-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h5 class="font-semibold text-base text-indigo-600 mb-2">Blogs</h5>
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Blogs or News</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="blog in blogs" :key="blog" class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                        <img :src="blog.image" alt="">

                        <div class="content p-6">
                            <router-link to="blog-detail" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{blog.title}}</router-link>
                            <p class="text-slate-400 mt-3">{{blog.desc}}</p>
                            
                            <div class="mt-4">
                                <router-link to="blog-detail" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>

import blog1 from '@/assets/images/gym/blog1.jpg'
import blog2 from '@/assets/images/gym/blog2.jpg'
import blog3 from '@/assets/images/gym/blog3.jpg'

    const blogs = [
        {
            image: blog1,
            title: 'How to Maximize Time Spent at the Gym',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image:blog2,
            title: 'Today is the Best Day to Start Training',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            image: blog3,
            title: 'Simple Condition for all Around Fitness',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
    ]
</script>