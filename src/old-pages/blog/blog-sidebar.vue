<template>
<div>
   <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Blogs & News</h3>
            </div>
        </div>
        
        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">Techwind</router-link></li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
            </ul>
        </div>
    </section>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div v-for="item in datas" :key="item" class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                            <img :src="item.image" alt="">
    
                            <div class="content p-6">
                                <router-link to="/blog-detail" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.title}}</router-link>
                                <p class="text-slate-400 mt-3">{{item.desc}}</p>
                                
                                <div class="mt-4"><router-link to="/blog-detail" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link> </div>
                            </div>
                        </div>
    
                        
                    </div>
                    <Pagination />
                </div>

                <Sidebar />
                
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <Subscribe />
        </div>
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Pagination from '@/components/shop/shop-pagination.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Sidebar from '@/components/blogs/blog-sidebar.vue';
import Subscribe from '@/components/subscribe.vue'

import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'
import blog5 from '@/assets/images/blog/05.jpg'
import blog6 from '@/assets/images/blog/06.jpg'
import blog7 from '@/assets/images/blog/07.jpg'
import blog8 from '@/assets/images/blog/08.jpg'

const datas = [
    {
        id: 1,
        image: blog1,
        title: 'Design your apps in your own way',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 2,
        image: blog2,
        title: 'How apps is changing the IT world',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 3,
        image: blog3,
        title: 'Smartest Applications for Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 4,
        image: blog4,
        title: 'Mobile Marketing, Its Synthes and 2021 Offer Prognosis',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 5,
        image:blog5,
        title: 'Stop Worrying About Deadlines! We Got You Covered',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 6,
        image: blog6,
        title: 'Change Your Strategy: Find a Business Consultant',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 7,
        image: blog7,
        title: 'Everything About Financial Modeling',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 8,
        image: blog8,
        title: 'On the other hand we provide denounce',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
]
</script>