<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="  p-3">
            <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                <img :src="shop1" class="group-hover:scale-110 duration-500" alt="">
                <div class="absolute bottom-4 start-4">
                    <router-link to="#" class="text-xl font-semibold hover:text-indigo-600 duration-500">Hoodies</router-link>
                </div>
            </div>
        </div>
        <div class="">
            <div class="p-3 picture-item">
                <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                    <img :src="shop2" class="group-hover:scale-110 duration-500" alt="">
                    <div class="absolute bottom-4 start-4">
                        <router-link to="#" class="text-xl font-semibold hover:text-indigo-600 duration-500">Beanies for Man & Women</router-link>
                    </div>
                </div>
            </div>

            <div class="p-3 picture-item">
                <div class="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                    <img :src="shop3" class="group-hover:scale-110 duration-500" alt="">
                    <div class="absolute bottom-4 start-4">
                        <router-link to="#" class="text-xl font-semibold hover:text-indigo-600 duration-500">Glasses</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
           
</template>

<script setup>
import shop1 from '@/assets/images/shop/hoodie.jpg'
import shop2 from '@/assets/images/shop/beanie.jpg'
import shop3 from '@/assets/images/shop/glasses.jpg'
</script>
