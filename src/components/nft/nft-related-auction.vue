<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Related Auction Items</h3>
            <p class="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Techwind with their fans and unique token collectors!</p>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="product in products" :key="product"
                class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
                <div class="relative">
                    <img :src="product.image" alt="">
                    <div class="absolute end-0 top-0 mt-6 me-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                        <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow-sm dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"><i class="mdi mdi-heart"></i></router-link>
                    </div>

                    <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                        <router-link to="/nft-detail" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Place Bid</router-link>
                    </div>
                </div>

                <div class="p-6 relative">
                    <router-link to="/nft-detail" class="text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{ product.name }}</router-link>

                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center">
                            <i class="mdi mdi-ethereum text-xl leading-none text-indigo-600 me-1"></i>
                            <span class="block font-semibold text-indigo-600">{{ product.eth }}</span>
                        </div>
                        <div>
                            <i class="mdi mdi-heart text-red-600"></i> <span class="text-slate-400">{{product.like}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import item1 from '@/assets/images/nft/items/1.jpg'
import item2 from '@/assets/images/nft/items/2.jpg'
import item3 from '@/assets/images/nft/items/3.jpg'
import item4 from '@/assets/images/nft/items/4.jpg'
    const products = [
        {
            image: item1,
            name: 'Deep Sea Phantasy',
            eth: '20.5 ETH',
            like: '22',
            
        },
        {
            image: item2,
            name: 'CyberPrimal 042 LAN',
            eth: '20.5 ETH',
            like: '22'
        },
        {
            image: item3,
            name: 'Crypto Egg Stamp #5',
            eth: '20.5 ETH',
            like: '22'
        },
        {
            image: item4,
            name: 'Color Abstract Painting',
            eth: '20.5 ETH',
            like: '22'
        },
    ]
</script>
