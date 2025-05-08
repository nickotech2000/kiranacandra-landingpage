<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="lg:col-span-3 md:col-span-6">
                <div  class="team p-6 rounded-md border border-gray-100 dark:border-gray-800 group bg-white dark:bg-slate-900">
                    <img :src="item.image" class="size-24 rounded-full shadow-md dark:shadow-gray-800" alt="">

                    <div class="content mt-4">
                        <router-link to="#" class="text-lg font-medium hover:text-indigo-600 block">{{item.name}}</router-link>
                        <span class="text-slate-400 block">{{item.position}}</span>

                        <p class="text-slate-400 mt-4">{{ item.desc }}</p>

                        <ul class="list-none mt-4 space-x-1">
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" class="size-4"></i></router-link></li>
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" class="size-4"></i></router-link></li>
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" class="size-4"></i></router-link></li>
                            <li class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" class="size-4"></i></router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'

    const datas = [
        {
            image: client1,
            name: 'Ronny Jofra',
            position: 'C.E.O.',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client2,
            name: 'Aliana Rosy',
            position: 'HR',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client3,
            name: 'Sofia Razaq',
            position: 'C.O.O.',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client4,
            name: 'Micheal Carlo',
            position: 'Director',
            desc: "If the distribution of letters and 'words' is random"
        },
    ]
</script>