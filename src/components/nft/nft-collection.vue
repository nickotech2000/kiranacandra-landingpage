<template>
    <div>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="collection in collections" :key="collection" class="group relative overflow-hidden bg-gray-50 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800">
                <div class="p-2 rounded-md shadow-sm dark:shadow-gray-800 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
                    <div class="flex items-center">
                        <div class="w-full p-1">
                            <img :src="collection.image" class="rounded-md" alt="">
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div class="w-1/3 p-1">
                            <img :src="collection.image2" class="rounded-md" alt="">
                        </div>

                        <div class="w-1/3 p-1">
                            <img :src="collection.image3" class="rounded-md" alt="">
                        </div>

                        <div class="w-1/3 p-1">
                            <img :src="collection.image4" class="rounded-md" alt="">
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 -mt-10 text-center">
                    <img :src="collection.image5" class="size-20 rounded-full shadow-lg dark:shadow-gray-800 mx-auto" alt="">
                    <div class="mt-4">
                        <router-link to="#" class="text-xl leading-none font-semibold hover:text-indigo-600 duration-500 ease-in-out block">{{ collection.name }}</router-link>
                    </div>
                </div>
            </div>
                    
                </div>
            </div>
        </section>
        <footers :email=true />
        <switcher />
    </div>
</template>

<script setup>
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'
import client7 from '@/assets/images/client/07.jpg'
import client8 from '@/assets/images/client/08.jpg'

import items1 from '@/assets/images/nft/items/1.jpg'
import items2 from '@/assets/images/nft/items/2.jpg'
import items3 from '@/assets/images/nft/items/3.jpg'
import items4 from '@/assets/images/nft/items/4.jpg'
import items5 from '@/assets/images/nft/items/5.jpg'
import items6 from '@/assets/images/nft/items/6.jpg'
import items7 from '@/assets/images/nft/items/7.jpg'
import items8 from '@/assets/images/nft/items/8.jpg'
import items9 from '@/assets/images/nft/items/9.jpg'
import items10 from '@/assets/images/nft/items/10.jpg'
import items11 from '@/assets/images/nft/items/11.jpg'
import items12 from '@/assets/images/nft/items/12.jpg'
import items13 from '@/assets/images/nft/items/13.jpg'
import items14 from '@/assets/images/nft/items/14.jpg'
import items15 from '@/assets/images/nft/items/15.jpg'
import items16 from '@/assets/images/nft/items/16.jpg'
import items17 from '@/assets/images/nft/items/17.jpg'
import items18 from '@/assets/images/nft/items/18.jpg'
import items19 from '@/assets/images/nft/items/19.jpg'
import items20 from '@/assets/images/nft/items/20.jpg'
import items21 from '@/assets/images/nft/items/21.jpg'
import items22 from '@/assets/images/nft/items/22.jpg'
import items23 from '@/assets/images/nft/items/23.jpg'
import items24 from '@/assets/images/nft/items/24.jpg'

const collections = [
    {
        image: items16,
        image2: items1,
        image3: items2,
        image4: items3,
        image5: client1,
        name: 'Digital Arts'
    },
    {
        image: items17,
        image2: items4,
        image3: items5,
        image4: items6,
        image5: client2,
        name: 'Sports'
    },
    {
        image: items18,
        image2: items7,
        image3: items8,
        image4: items9,
        image5: client3,
        name: 'Photography'
    },
    {
        image: items19,
        image2: items10,
        image3: items11,
        image4: items12,
        image5: client4,
        name: 'Illustrations'
    },
    {
        image: items20,
        image2: items13,
        image3: items14,
        image4: items15,
        image5: client5,
        name: 'Animations'
    },
    {
        image: items21,
        image2: items5,
        image3: items8,
        image4: items11,
        image5: client6,
        name: 'Virtual Reality'
    },
    {
        image: items22,
        image2: items2,
        image3: items3,
        image4: items4,
        image5: client7,
        name: 'Sports'
    },
    {
        image: items23,
        image2: items6,
        image3: items7,
        image4: items9,
        image5: client8,
        name: 'Digital Arts'
    },
    {
        image: items24,
        image2: items11,
        image3: items12,
        image4: items13,
        image5: client1,
        name: 'Photography'
    },
    
]
</script>