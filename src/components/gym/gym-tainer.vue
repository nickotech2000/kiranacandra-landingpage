<template>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h5 class="font-semibold text-base text-indigo-600 mb-2">Team</h5>
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Gym Trainer</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="tainer in tainers" :key="tainer" class="group relative rounded-md overflow-hidden shadow-sm text-center">
                        <img :src="tainer.image"  alt="">
                        <div class="absolute inset-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black duration-300 ease-in"></div>

                        <div class="content absolute bottom-0 group-hover:bottom-6 start-0 end-0 duration-500 opacity-0 group-hover:opacity-100">
                            <h4 class="text-lg font-medium text-white">{{tainer.name}}</h4>
                            <p class="text-white/50 relative -bottom-5 group-hover:bottom-0 duration-500">{{tainer.position}}</p>

                            <ul class="list-none relative -bottom-12 group-hover:bottom-0 duration-500 mt-4">
                                <li class="inline mx-0.5"><routre-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><i data-feather="facebook" class="size-4"></i></routre-link></li>
                                <li class="inline mx-0.5"><routre-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><i data-feather="instagram" class="size-4"></i></routre-link></li>
                                <li class="inline mx-0.5"><routre-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><i data-feather="twitter" class="size-4"></i></routre-link></li>
                                <li class="inline mx-0.5"><routre-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border text-white rounded-md border-indigo-600 bg-indigo-600"><i data-feather="linkedin" class="size-4"></i></routre-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>

import team1 from '@/assets/images/gym/team1.jpg'
import team2 from '@/assets/images/gym/team2.jpg'
import team3 from '@/assets/images/gym/team3.jpg'
import team4 from '@/assets/images/gym/team4.jpg'

const tainers = [
    {
        image: team1,
        name: 'Calvin Carlo',
        position: 'Trainer'
    },
    {
        image: team2,
        name: 'Judith Williams',
        position: 'Trainer'
    },
    {
        image: team3,
        name: 'John Hodge',
        position: 'Trainer'
    },
    {
        image: team4,
        name: 'Frances Bartley',
        position: 'Trainer'
    },
]
</script>