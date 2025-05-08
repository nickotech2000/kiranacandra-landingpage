<template>

    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-2 gap-[30px] items-center">
            <div class="">
                <img :src="about" class="shadow-sm dark:shadow-gray-800 rounded" alt="">
            </div>

            <div class="lg:ms-8">
                <h4 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">The Best Quality Coffee <br> Tastes At One Place</h4>
                <p class="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>

                <div class="grid grid-cols-1 gap-[30px] mt-6">
                    <div v-for="coffee in coffees" :key="coffee" class="group flex duration-500 items-center">
                        <img :src="coffee.image" class="size-16 p-3 rounded-full shadow-md dark:shadow-gray-800 bg-white" alt="">
                        <div class="flex-1 ms-3">
                            <router-link to="" class="text-xl font-semibold !font-ebgaramond hover:text-indigo-600">{{ coffee.name }}</router-link>
                            <p class="text-slate-400 mt-3">{{ coffee.title }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Explore More <i class="uil uil-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import about from '@/assets/images/cafe/ab.jpg'
import icon1 from '@/assets/images/cafe/icons/coffee.svg'
import icon2 from '@/assets/images/cafe/icons/drip-glass.svg'
    const coffees = [
        {
            image: icon1,
            name: 'The Perfect Cup',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image: icon2,
            name: 'Coffee Machine',
            title: 'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
    ]
</script>
