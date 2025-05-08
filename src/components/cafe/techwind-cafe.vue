<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Welcome to Techwind Cafe</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
                </div>

                <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
                    <div class="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
                        <div class="grid grid-cols-1 gap-[30px]">
                            <div v-for="cafe in cafes" :key="cafe" class="group duration-500 md:text-end text-start">
                                <img :src="cafe.image" class="size-16 md:ms-auto p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="">
                                <div class="mt-2 md:order-1 order-2">
                                    <router-link to="#" class="text-xl font-semibold !font-ebgaramond hover:text-indigo-600">{{ cafe.name }}</router-link>
                                    <p class="text-slate-400 mt-3">{{ cafe.title }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-4 md:col-span-12 lg:order-2 order-1">
                        <img :src="services" class="lg:w-auto md:w-80 mx-auto" alt="">
                    </div>

                    <div class="lg:col-span-4 md:col-span-6 order-3">
                        <div class="grid grid-cols-1 gap-[30px]">
                            <div v-for="cafe in cafes2" :key="cafe" class="group duration-500">
                                <img :src="cafe.image" class="size-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="">
                                <div class="mt-2">
                                    <router-link to="#" class="text-xl font-semibold !font-ebgaramond hover:text-indigo-600">{{cafe.name}}</router-link>
                                    <p class="text-slate-400 mt-3">{{ cafe.title }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import services from '@/assets/images/cafe/cafe-services.png'
import icon1 from '@/assets/images/cafe/icons/coffee-time.svg'
import icon2 from '@/assets/images/cafe/icons/pot.svg'
import icon3 from '@/assets/images/cafe/icons/coffee-beans.svg'
import icon4 from '@/assets/images/cafe/icons/coffee.svg'
import icon5 from '@/assets/images/cafe/icons/drip-glass.svg'
import icon6 from '@/assets/images/cafe/icons/coffee-cup.svg'

    const cafes = [
        {
            image: icon1,
            name: 'High Quality',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image: icon2,
            name: 'Pure Grades',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image: icon3,
            name: 'Proper Roasting',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
    ]
    const cafes2 = [
        {
            image: icon4,
            name: 'The Perfect Cup',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image: icon5,
            name: 'Coffee Machine',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image: icon6,
            name: 'Coffee to Go',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
    ]
</script>

<style lang="scss" scoped>

</style>