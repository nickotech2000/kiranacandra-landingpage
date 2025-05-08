<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h4 class="!font-alex text-3xl">Our Minds</h4>
            <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Management Team</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Every treatment is specifically designed to using massage sequences and the most potent actives available in the world today.</p>
        </div>

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="team in teams" :key="team" class="lg:col-span-3 md:col-span-6">
                <div class="group text-center">
                    <div class="relative inline-block mx-auto size-52 overflow-hidden">
                        <img :src="team.image" class="" alt="">
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 opacity-0 group-hover:opacity-100 duration-500"></div>

                        <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="facebook" class="size-4"></i></router-link></li>
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="instagram" class="size-4"></i></router-link></li>
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i data-feather="linkedin" class="size-4"></i></router-link></li>
                        </ul>
                    </div>

                    <div class="content mt-3">
                        <router-link to="#" class="text-xl font-semibold !font-ebgaramond hover:text-indigo-600 duration-500">{{team.name}}</router-link>
                        <p class="text-slate-400">{{team.work}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import client1 from '@/assets/images/client/04.jpg'
import client2 from '@/assets/images/client/05.jpg'
import client3 from '@/assets/images/client/06.jpg'
import client4 from '@/assets/images/client/07.jpg'

const teams = [
    {
        image: client1,
        name: 'Jack John',
        work: 'Thai Massage'
    },
    {
        image: client2,
        name: 'Krista John',
        work: 'Thai Massage'
    },
    {
        image: client3,
        name: 'Roger Jackson',
        work: 'Thai Massage'
    },
    {
        image: client4,
        name: 'Johnny English',
        work: 'Thai Massage'
    },
]
</script>