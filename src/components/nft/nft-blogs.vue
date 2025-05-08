<template>
    
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>
            <p class="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            <div v-for="blog in blogs" :key="blog" class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                <img :src="blog.image" alt="">

                <div class="content p-6">
                    <router-link :to="`/blog-detail/${blog.id}`" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ blog.title }}</router-link>
                    <p class="text-slate-400 mt-3">{{ blog.desc }}</p>
                    
                    <div class="mt-4">
                        <router-link :to="`/blog-detail/${blog.id}`" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import blog1 from '@/assets/images/nft/items/21.jpg'
import blog2 from '@/assets/images/nft/items/22.jpg'
import blog3 from '@/assets/images/nft/items/23.jpg'

const blogs = [
  {
    id: 12,
    image: blog1,
    title: 'Mindfulness Activities for Kids & Toddlers with NFT',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    id: 13,
    image: blog2,
    title: 'Save Thousands Of Lives Through This NFT',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    id: 14,
    image: blog3,
    title: 'A place where technology meets craftsmanship',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
];
</script>