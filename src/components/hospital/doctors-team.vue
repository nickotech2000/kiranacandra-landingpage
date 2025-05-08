<template>
   
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Doctors Team</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="lg:col-span-3 md:col-span-6">
                        <div class="team p-6 rounded-md border border-gray-100 dark:border-gray-800 group bg-white dark:bg-slate-900">
                            <img :src="item.image" class="size-24 rounded-full shadow-md dark:shadow-gray-800" alt="">

                            <div class="content mt-4">
                                <router-link to="#" class="text-lg font-medium hover:text-indigo-600 block">{{item.name}}</router-link>
                                <span class="text-slate-400 block">{{item.title}}</span>

                                <p class="text-slate-400 mt-4">{{item.desc}}</p>

                                <ul class="list-none mt-4">
                                    <li class="inline mx-0.5"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="facebook" class="size-4"></i></router-link></li>
                                    <li class="inline mx-0.5"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="instagram" class="size-4"></i></router-link></li>
                                    <li class="inline mx-0.5"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="twitter" class="size-4"></i></router-link></li>
                                    <li class="inline mx-0.5"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><i data-feather="linkedin" class="size-4"></i></router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
            title: 'Eye Care Specialist',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client2,
            name: 'Aliana Rosy',
            title: 'Gynecologist',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client3,
            name: 'Sofia Razaq',
            title: 'Psychologist',
            desc: "If the distribution of letters and 'words' is random"
        },
        {
            image: client4,
            name: 'Micheal Carlo',
            title: 'Orthopedic',
            desc: "If the distribution of letters and 'words' is random"
        },
    ]
</script>