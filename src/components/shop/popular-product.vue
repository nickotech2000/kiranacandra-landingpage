<template>
            <div class="container relative py-16">
                <div class="grid grid-cols-1 items-center">
                    <h3 class="text-2xl leading-normal font-semibold">Popular Products</h3>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group">
                        <div class="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                            <img :src="item.image" alt="">
    
                            <div class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                <router-link to="/shop-cart" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-slate-900 border-slate-900 text-white w-full rounded-md">Add to Cart</router-link>
                            </div>
    
                            <ul class="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500">
                                <li><a href="javascript:void(0)" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-heart"></i></a></li>
                                <li class="mt-1"><router-link to="/shop-item-detail" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-eye-outline"></i></router-link></li>
                                <li class="mt-1"><a href="javascript:void(0)" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"><i class="mdi mdi-bookmark-outline"></i></a></li>
                            </ul>

                            <ul class="list-none absolute top-[10px] start-4">
                                <li><a href="javascript:void(0)" class="bg-cyan-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">{{item.status}}</a></li>
                            </ul>
                        </div>

                        <div class="mt-4">
                            <router-link to="/shop-item-detail" class="hover:text-indigo-600 text-lg font-semibold">{{item.name}}</router-link>
                            <div class="flex justify-between items-center mt-1">
                                <p class="text-green-600">{{item.price}} <del class="text-red-600">{{item.price2}}</del></p>
                                <ul class="font-medium text-amber-400 list-none space-x-1">
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
</template>

<script setup>
import s9 from '@/assets/images/shop/items/s9.jpg'
import s10 from '@/assets/images/shop/items/s10.jpg'
import s11 from '@/assets/images/shop/items/s11.jpg'
import s12 from '@/assets/images/shop/items/s12.jpg'

    const datas = [
        {
            image:s9,
            status: 'Popular',
            name: 'Branded T-Shirt',
            price: '$16.00',
            price2: '$21.00'
        },
        {
            image: s10,
            status: 'Popular',
            name: 'Shopping Bag',
            price: '$16.00',
            price2: '$21.00'
        },
        {
            image: s11,
            status: 'Popular',
            name: 'Sports Shoes',
            price: '$16.00',
            price2: '$21.00'
        },
        {
            image: s12,
            status: 'Popular',
            name: 'T-shirt',
            price: '$16.00',
            price2: '$21.00'
        },
    ]
</script>