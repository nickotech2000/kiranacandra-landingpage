<template>
    <section class="relative mt-16">
        <div class="container relative">
            <div class="grid grid-cols-1 items-center">
                <h3 class="text-2xl leading-normal font-semibold">Recent Products</h3>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="item in datas" :key="item" class="group">
                    <div class="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                        <img :src="item.image" alt="">

                        <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                            <router-link to="/shop-cart" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</router-link>
                        </div>

                        <ul class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                            <li><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-heart"></i></router-link></li>
                            <li class="mt-1"><router-link to="/shop-item-detail" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-eye-outline"></i></router-link></li>
                            <li class="mt-1"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-bookmark-outline"></i></router-link></li>
                        </ul>
                    </div>

                    <div class="mt-4">
                        <router-link to="/shop-item-detail" class="hover:text-indigo-600 text-lg font-semibold">{{ item.name }}</router-link>
                        <div class="flex justify-between items-center mt-1">
                            <p class="text-green-600">{{item.price}} <del class="text-red-600">{{item.price2}}</del></p>
                            <ul class="font-medium text-amber-400 list-none">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import s13 from '@/assets/images/shop/items/s13.jpg'
import s14 from '@/assets/images/shop/items/s14.jpg'
import s15 from '@/assets/images/shop/items/s15.jpg'
import s16 from '@/assets/images/shop/items/s16.jpg'

const datas = [
    {
        image: s13,
        name: 'Wooden Chair',
        price: '$16.00',
        price2: '$21.00'
    },
    {
        image: s14,
        name: 'Women Block Heels',
        price: '$16.00',
        price2: '$21.00'
    },
    {
        image: s15,
        name: 'Shorts',
        price: '$16.00',
        price2: '$21.00'
    },
    {
        image: s16,
        name: 'Masks',
        price: '$16.00',
        price2: '$21.00'
    },
]
</script>
