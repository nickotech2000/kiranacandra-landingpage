<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">How It Work ?</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group relative lg:px-6 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="relative overflow-hidden text-transparent -m-3">
                    <i :data-feather="item.icon" class="size-32 fill-indigo-600/5 mx-auto"></i>
                    <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center">
                        <img :src="item.image" class="size-14" alt="">
                    </div>
                </div>

                <div class="mt-6">
                    <router-link to="#" class="text-xl font-medium duration-500 hover:text-indigo-600">{{ item.name }}</router-link>
                    <p class="text-slate-400 duration-500 mt-3">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import yoga1 from '@/assets/images/yoga/life-coach.png'
import yoga2 from '@/assets/images/yoga/meditation.png'
import yoga3 from '@/assets/images/yoga/nutrition.png'
import yoga4 from '@/assets/images/yoga/religious.png'

const datas = [
    {
        icon: 'hexagon',
        image: yoga1,
        name: 'Life Coaching',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
    {
        icon: 'hexagon',
        image: yoga2,
        name: 'Meditation & Yoga',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
    {
        icon: 'hexagon',
        image: yoga3,
        name: 'Nutrition',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
    {
        icon: 'hexagon',
        image: yoga4,
        name: 'Religion',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making."
    },
]
</script>
