<template>
    <div class="container relative">
        <div class="grid grid-cols-1 items-center">
            <h3 class="text-2xl leading-normal font-semibold">Top Categories</h3>
        </div>
        <div class="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-8 gap-[30px]">
            <div v-for="item in datas" :key="item" class="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 rounded-md duration-500 p-6 text-center">
                <img :src="item.image" class="rounded-full shadow-md dark:shadow-gray-800 size-20 block mx-auto mb-2" alt="">
                <router-link to="#" class="font-semibold hover:text-indigo-600 text-lg">{{item.name}}</router-link>
            </div>
        </div>
    </div>

</template>

<script setup>
import categories1 from '@/assets/images/shop/categories/electronics.jpg'
import categories2 from '@/assets/images/shop/categories/fashion.jpg'
import categories3 from '@/assets/images/shop/categories/furniture.jpg'
import categories4 from '@/assets/images/shop/categories/mobile.jpg'
import categories5 from '@/assets/images/shop/categories/music.jpg'
import categories6 from '@/assets/images/shop/categories/sports.jpg'

    const datas = [
        {
            image: categories1,
            name: 'Electronics'
        },
        {
            image: categories2,
            name: 'Fashion'
        },
        {
            image: categories3,
            name: 'Furniture'
        },
        {
            image: categories4,
            name: 'Mobile'
        },
        {
            image: categories5,
            name: 'Music'
        },

        {
            image: categories6,
            name: 'Sports'
        },
    ]
</script>