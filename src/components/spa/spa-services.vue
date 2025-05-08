<template>
    <div class="container relative md:mt-24 mt-16 pt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h4 class="!font-alex text-3xl">Spa & Massage</h4>
            <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Our Services</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
        </div>

        <div class="grid md:grid-cols-2 mt-8 gap-[30px]">
            <div v-for="service in services" :key="service" class="flex ">
                <img :src="service.image" class="size-16" alt="">
                <div class="ms-2 w-full">
                    <div class="flex justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
                        <router-link to="" class="!font-ebgaramond hover:text-indigo-600 text-xl font-semibold">{{service.name}}</router-link>
                        <h6 class="text-indigo-600">{{service.price}}</h6>
                    </div>
                    <p class="text-slate-400 mt-2">{{ service.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import icon1 from '@/assets/images/spa/icons/facial-mask.png'
import icon2 from '@/assets/images/spa/icons/foot-massage.png'
import icon3 from '@/assets/images/spa/icons/massage.png'
import icon4 from '@/assets/images/spa/icons/natural-product.png'
import icon5 from '@/assets/images/spa/icons/relax.png'
import icon6 from '@/assets/images/spa/icons/sauna.png'
import icon7 from '@/assets/images/spa/icons/spa-and-relaxation.png'
import icon8 from '@/assets/images/spa/icons/spa-candles.png'
import icon9 from '@/assets/images/spa/icons/spa.png'
import icon10 from '@/assets/images/spa/icons/treatment.png'

const services = [
    {
        image: icon1,
        name: 'Facial Mask',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon2,
        name: 'Foot Massage',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon3,
        name: 'Massage',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon4,
        name: 'Natural Product',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon5,
        name: 'Relax',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon6,
        name: 'Sauna',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon7,
        name: 'Spa & Relaxation',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon8,
        name: 'Spa Candles',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon9,
        name: 'Spa',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
    {
        image: icon10,
        name: 'Treatments',
        price: '$140',
        title: 'Your athletic spa experience and recovery.',
    },
]
</script>

