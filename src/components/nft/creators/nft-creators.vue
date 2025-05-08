<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30]">
                    <div v-for="seller in sellers" :key="seller" class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out m-2 mb-5">
                                <div class="py-10 bg-gradient-to-r" :class="seller.bgclass"></div>
                                <div class="p-6 pt-0 -mt-10 text-center">
                                    <img :src="seller.image" class="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="">
        
                                    <div class="mt-4">
                                        <router-link to="/nft-creator-profile" class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{{ seller.name }}</router-link>
                                        <span class="text-slate-400">{{ seller.sellerid }}</span>
                                    </div>
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
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client8 from '@/assets/images/client/08.jpg'

    const  sellers = [
        {
            bgclass:'to-orange-600/70 from-indigo-600/70',
            image: client1,
            name: 'Calvin Carlo',
            sellerid: '@calvin_carlo'
        },
        {
            bgclass:'to-red-600/70 from-indigo-600/70',
            image: client2,
            name: 'Tiffany Betancourt',
            sellerid: '@cutiegirl'
        },
        {
            bgclass:'to-fuchsia-600/70 from-green-600/70',
            image: client3,
            name: 'Mari Harrington',
            sellerid: '@norse_queen'
        },
        {
            bgclass:'to-pink-600/70 from-purple-600/70',
            image: client4,
            name: 'Floyd Glasgow',
            sellerid: '@bigbull'
        },
        {
            bgclass:'to-indigo-600/70 from-blue-600/70',
            image: client5,
            name: 'Donna Schultz',
            sellerid: '@angel'
        },
        {
            bgclass:'to-orange-600/70 from-indigo-600/70',
            image: client6,
            name: 'Joshua Morris',
            sellerid: '@crazyanyone'
        },
        {
            bgclass:'to-sky-600/70 from-yellow-600/70',
            image: client7,
            name: 'Carl Williams',
            sellerid: '@looserbad'
        },
        {
            bgclass:'to-lime-600/70 from-rose-600/70',
            image: client8,
            name: 'Eugene Green',
            sellerid: '@kristyhoney'
        },
        {
            bgclass:'to-orange-600/70 from-indigo-600/70',
            image: client1,
            name: 'Calvin Carlo',
            sellerid: '@calvin_carlo'
        },
        {
            bgclass:'to-red-600/70 from-indigo-600/70',
            image: client2,
            name: 'Tiffany Betancourt',
            sellerid: '@cutiegirl'
        },
        {
            bgclass:'to-fuchsia-600/70 from-green-600/70',
            image: client3,
            name: 'Mari Harrington',
            sellerid: '@norse_queen'
        },
        {
            bgclass:'to-pink-600/70 from-purple-600/70',
            image: client4,
            name: 'Floyd Glasgow',
            sellerid: '@bigbull'
        },
        {
            bgclass:'to-indigo-600/70 from-blue-600/70',
            image: client5,
            name: 'Donna Schultz',
            sellerid: '@angel'
        },
        {
            bgclass:'to-orange-600/70 from-indigo-600/70',
            image: client6,
            name: 'Joshua Morris',
            sellerid: '@crazyanyone'
        },
        {
            bgclass:'to-sky-600/70 from-yellow-600/70',
            image: client7,
            name: 'Carl Williams',
            sellerid: '@looserbad'
        },
    ]
</script>