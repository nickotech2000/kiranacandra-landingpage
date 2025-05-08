<template>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Projects</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="item in datas" :key="item" class="group relative block overflow-hidden rounded-md duration-500">
                    <router-link to="portfolio-detail-one"><img :src="item.image" class="rounded-md shadow-sm dark:shadow-gray-800" alt=""></router-link>
                    <div class="content pt-3">
                        <h5 class="mb-1"><router-link to="portfolio-detail-one" class="hover:text-indigo-600 duration-500 font-semibold text-lg">{{item.name}}</router-link></h5>
                        <h6 class="text-slate-400">{{item.type}}</h6>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import image1 from '@/assets/images/construction/1.jpg'
import image2 from '@/assets/images/construction/2.jpg'
import image3 from '@/assets/images/construction/3.jpg'
import image4 from '@/assets/images/construction/4.jpg'
import image5 from '@/assets/images/construction/5.jpg'
import image6 from '@/assets/images/construction/6.jpg'

const datas = [
    {
        image: image1,
        name: 'Serenity Apartments',
        type: 'Branding'
    },
    {
        image: image2,
        name: 'The Landscape House',
        type: 'Mockup'
    },
    {
        image: image3,
        name: 'New Build Family Home',
        type: 'Abstract'
    },
    {
        image: image4,
        name: 'Private and Social Apartments',
        type: 'Books'
    },
    {
        image: image5,
        name: 'Apartment Complex',
        type: 'V-card'
    },
    {
        image: image6,
        name: 'Construction Engineering',
        type: 'Photography'
    },
]
</script>