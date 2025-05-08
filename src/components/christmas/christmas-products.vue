<template>
    <div>
        <section class="relative pt-36 pb-10 bg-[url('../../assets/images/christmas/bg2.jpg')] bg-cover  jarallax" data-jarallax data-speed="0.5">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent from-slate-900"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">Today's Offer Products</h3>
                </div>
            </div>
        </section>

        <section class="relative lg:py-24 py-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
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

                            <ul class="list-none absolute top-[10px] start-4">
                                <li v-if="item.status === 'New'"><router-link to="#" class="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">New</router-link></li>
                                <li v-if="item.status === 'Sale'"><router-link to="#" class="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Sale</router-link></li>
                                <li v-if="item.status === 'Featured'"><router-link to="#" class="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">Featured</router-link></li>
                            </ul>
                        </div>

                        <div class="mt-4">
                            <router-link to="/shop-item-detail" class="hover:text-indigo-600 text-lg font-semibold">{{ item.name }}</router-link>
                            <div class="flex justify-between items-center mt-1">
                                <p class="text-green-600">{{ item.price }} <del class="text-red-600">{{ item.price2 }}</del></p>
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
    </div>
</template>

<script setup>
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.min.css';
import {onMounted} from 'vue'

import s1 from '@/assets/images/shop/items/s1.jpg'
import s2 from '@/assets/images/shop/items/s2.jpg'
import s3 from '@/assets/images/shop/items/s3.jpg'
import s4 from '@/assets/images/shop/items/s4.jpg'
import s5 from '@/assets/images/shop/items/s5.jpg'
import s6 from '@/assets/images/shop/items/s6.jpg'
import s7 from '@/assets/images/shop/items/s7.jpg'
import s8 from '@/assets/images/shop/items/s8.jpg'

const datas = [
  { image: s1, status: 'New', name: 'Branded T-Shirt', price: '$16.00', price2: '$21.00' },
  { image: s2, status: 'Featured', name: 'Shopping Bag', price: '$16.00', price2: '$21.00' },
  { image: s3, status: '', name: 'Elegent Watch', price: '$16.00', price2: '$21.00' },
  { image: s4, status: '', name: 'Casual Shoes', price: '$16.00', price2: '$21.00' },
  { image: s5, status: 'New', name: 'Earphones', price: '$16.00', price2: '$21.00' },
  { image: s6, status: '', name: 'Elegent Mug', price: '$16.00', price2: '$21.00' },
  { image: s7, status: '', name: 'Sony Headphones', price: '$16.00', price2: '$21.00' },
  { image: s8, status: 'Sale', name: 'Wooden Stools', price: '$16.00', price2: '$21.00' },
];

const initJarallax = () => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
  });
};

onMounted(() => {
  initJarallax();
});
</script>