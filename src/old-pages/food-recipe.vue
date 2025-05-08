<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-40 lg:py-64 bg-[url('../../assets/images/food/blog/recipe.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section class="relative md:pb-24 pb-16">
            <div class="container relative">
                <div class="md:flex">
                    <div class="relative lg:w-2/3 w-full -mt-32">
                        <div class="px-6 py-12 bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 text-center">
                            <router-link to="#" class="bg-indigo-600/10 text-indigo-600 font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food & Recipes</router-link>
                            <h5 class="font-semibold text-2xl mt-5">Recipes Creamy Garlic Parmesan Chicken Salad</h5>

                            <div class="flex items-center justify-center mt-5">
                                <div class="flex items-center mx-2">
                                    <img :src="client1" class="size-7 rounded-full shadow-md dark:shadow-gray-800" alt="">
                                    <router-link to="#" class="font-medium text-slate-400 block ms-2">Cristina Romsey</router-link>
                                </div>

                                <span class="text-slate-400 block mx-2"><i class="uil uil-calendar-alt"></i> 14th July 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-8 md:col-span-6">
                        <div class="space-x-1">
                            <router-link to="#" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Food</router-link>
                            <router-link to="#" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Drinks</router-link>
                            <router-link to="#" class="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded w-fit mx-auto h-5">Recipes</router-link>

                            <p class="text-slate-400 mb-4 mt-5">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
                            <p class="text-slate-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <p class="text-slate-400 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

                            <div class="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
                                <img :src="data &&  data.image ? data.image : blogimage" class="rounded-md shadow" alt="">

                                <div class="relative">
                                    <img :src="f2" class="rounded-md shadow" alt="">

                                    <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <Report />
                    </div>

                    <div class="lg:col-span-4 md:col-span-6">
                        <div class="sticky top-20">
                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                            <div class="text-center mt-8">
                                <img :src="client1" class="size-24 mx-auto rounded-full shadow-sm mb-4" alt="">

                                <router-link to="#" class="text-lg font-semibold hover:text-indigo-600 duration-500">Cristina Romsey</router-link>
                                <p class="text-slate-400">Content Writer</p>
                            </div>

                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8"> Recent post</h5>
                            <div v-for="item in datas" :key="item" class="flex items-center mt-8">
                                <img :src="item.image" class="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="">
                                <div class="ms-3">
                                    <router-link to="#" class="font-semibold hover:text-indigo-600">{{ item.name }}</router-link>
                                    <p class="text-sm text-slate-400">{{ item.date }}</p>
                                </div>
                            </div>


                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul class="list-none text-center mt-8 space-x-1">
                                <li v-for="social in socials" :key="social" class="inline"><router-link to="#" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i :data-feather="social" class="size-4"></i></router-link></li>
                            </ul>

                            <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Tagscloud</h5>
                            <ul class="list-none text-center mt-8">
                                <li v-for="tag in tages" :key="tag" class="inline-block m-2"><router-link to="#" class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 duration-500">{{ tag }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <RecentBlog />
        </section>
    
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <Subscribe />
            </div>
        </section>

        <Instapost />

        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
            </div>
            <button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <Footers :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from '@/components/navbar/navbar.vue';
import RecentBlog from '@/components/food-blog/recent-blog.vue';
import Instapost from '@/components/restaurent/food-insta-post.vue';
import Footers from '@/components/footer/footer-small.vue';
import Switcher from '@/components/switcher.vue';
import Subscribe from '@/components/subscribe.vue';
import Report from '@/components/report.vue';
import blogimage from '../assets/images/food/blog/f1.jpg';

import blog1 from '@/assets/images/food/blog/1.jpg'
import blog2 from '@/assets/images/food/blog/2.jpg'
import blog3 from '@/assets/images/food/blog/3.jpg'
import blog5 from '@/assets/images/food/blog/5.jpg'
import blog6 from '@/assets/images/food/blog/6.jpg'
import blog7 from '@/assets/images/food/blog/7.jpg'
import blog8 from '@/assets/images/food/blog/8.jpg'

import m1 from '@/assets/images/food/blog/m1.jpg'
import m2 from '@/assets/images/food/blog/m2.jpg'
import m3 from '@/assets/images/food/blog/m3.jpg'
import m4 from '@/assets/images/food/blog/m4.jpg'
import m5 from '@/assets/images/food/blog/m5.jpg'
import m6 from '@/assets/images/food/blog/m6.jpg'
import client1 from '@/assets/images/client/01.jpg'
import f1 from '@/assets/images/food/blog/f1.jpg'
import f2 from '@/assets/images/food/blog/f2.jpg'
import f3 from '@/assets/images/food/blog/f3.jpg'
import f4 from '@/assets/images/food/blog/f4.jpg'

const isActive = ref(false);
const route = useRoute();
const id = ref(null);
const data = ref(null);
const socials = ['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab'];
const tages = ['Food', 'Chicken', 'Recipe', 'Enjoy', 'Restra', 'Sunday', 'Offer', 'Holiday', 'Cake', 'Burns'];

const datas = [
  { image: blog6, name: 'Consultant Business', date: '1st May 2022' },
  { image: blog7, name: 'Grow Your Business', date: '1st May 2022' },
  { image: blog8, name: 'Look On The Glorious Balance', date: '1st May 2022' }
];

const datas2 = [
    {
        id: 1,
        image: m1,
        title: 'Eggs',
        desc: 'Spicy Cauliflower Burgers and Salad Recipe',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 2,
        image: m6,
        title: 'Rice and Tomatos',
        desc: 'Awesome Cake with Cream Cheese Frosting',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 3,
        image: m3,
        title: 'Chiken',
        desc: 'Make Asian-Style Recipe ( Video and Gallery )',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 4,
        image: m4,
        title: 'Pizzas',
        desc: 'Chocolate Mint Dessert Brownies Recipe',
        image2: client1,
        name: 'Calvin Carlo'
    },
        {
        id: 5,
        image: m5,
        title: 'Noodles',
        desc: 'Healthy Homemade Pizza with a glass of wine',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 6,
        image: m2,
        title: 'Breads',
        desc: 'Strawberry, Kiwi and Spinach Salad Recipe',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 7,
        image: m6,
        title: 'Rice and Tomatos',
        desc: 'Healthy Homemade Pizza with a glass of wine',
        image2: client1,
        name: 'Calvin Carlo'
    },
    {
        id: 8,
        image:blog1,
        status: 'Salad',
        title: 'Giant Multi-Stuffed Soft Pretzel',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id: 9,
        image: blog6,
        status: 'Cooker',
        title: 'Slow Cooker Coconut Curry',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id: 10,
        image: m3,
        status: 'Breads',
        title: 'Meal Prep Breakfast For The Week',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:11,
        image:blog5,
        status: 'Breakfast',
        title: 'Romantic Breakfast for Two',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:12,
        image: m2,
        status: 'Birthday',
        title: 'Perfect for a Birthday Party',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:13,
        image: f3,
        status: 'Salad',
        title: 'Mint-Pomegranate Salad',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:14,
        image: f1,
        status: 'Breads',
        title: 'Macchiato Pumpkin Soup',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:15,
        image:blog2,
        status: 'Breads',
        title: 'Cinnamon Buns for Two',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:16,
        image: blog3,
        status: 'Vegetarian',
        title: 'Vegetarian Breakfast for You',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:17,
        image: f4,
        status: 'Apple',
        title: 'Tiny Apple Pies with Cinnamon',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:18,
        image: m1,
        status: 'Chef',
        title: 'Braised Pork Belly Adobo By Chef Leah Cohen',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:19,
        image: f2,
        status: 'Eat',
        title: '5 Recipes Almost Too Cute To Eat',
        date: ' 14th July 2022',
        like: '22'
    },
    {
        id:20,
        image: blog7,
        status: 'Cheese',
        title: 'Lactose Free Homemade Cheese',
        date: ' 14th July 2022',
        like: '22'
    },

]

const toggle = () => {
  isActive.value = !isActive.value;
};

onMounted(() => {
  id.value = route.params.id;
  data.value = datas2.find(item => item.id === parseInt(id.value));
});
</script>
