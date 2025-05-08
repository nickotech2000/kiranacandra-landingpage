<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Popular Tours</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[30px] mt-8">
            <div v-for="tour in tours" :key="tour" class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                <img :src="tour.image" alt="">
                <span class="absolute inset-0 bg-slate-900/20 duration-500"></span>
                <div class="absolute top-0 start-0 p-4 pb-0">
                    <span class="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">{{tour.status}}</span>
                </div>

                <div class="absolute bottom-0 start-0 end-0 p-4 pt-0">
                    <router-link to="#" class="text-white/80 hover:text-white text-xl font-semibold">{{tour.place}}</router-link>

                    <div class="flex justify-between mt-1">
                        <span class="text-gray-100"><i class="uil uil-dollar-sign text-[18px]"></i> {{tour.price}}</span>
                        <span class="text-gray-100"><i class="uil uil-plane-fly text-[18px]"></i> {{tour.time}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import hotel1 from '@/assets/images/hotel/1.jpg'
import hotel2 from '@/assets/images/hotel/2.jpg'
import hotel3 from '@/assets/images/hotel/3.jpg'
import hotel4 from '@/assets/images/hotel/4.jpg'
import hotel5 from '@/assets/images/hotel/5.jpg'
import hotel6 from '@/assets/images/hotel/6.jpg'
import hotel7 from '@/assets/images/hotel/7.jpg'
import hotel8 from '@/assets/images/hotel/8.jpg'

    const tours = [
        {
            status : 'Recommend',
            image: hotel1,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image:  hotel2,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel3,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel4,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel5,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel6,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel7,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
        {
            status : 'Recommend',
            image: hotel8,
            place: 'Paradise Beach, Island',
            price: '549',
            time: '10 Days'
        },
    ]
</script>