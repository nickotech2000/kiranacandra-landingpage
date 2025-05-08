<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/course/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Courses</h3>
                <h5 class="text-white/50 text-lg font-medium">Please see our latest educational courses</h5>
            </div>
        </div>
        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/index-course">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Courses</li>
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
    <section class="relative md:py-24 py-16 overflow-hidden">
        <div class="container relative">
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                <div v-for="item in datas" :key="item.id" class="group relative rounded-md shadow-sm hover:shadow-lg dark:shadow-gray-800 duration-500 ease-in-out overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img :src="item.image" class="group-hover:scale-110 duration-500 ease-in-out" alt="">
                        <div class="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 duration-500 ease-in-out"></div>
                        <div class="absolute start-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <div class="pb-4 ps-4 flex items-center">
                                <img :src="item.image2" class="size-12 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                <div class="ms-3">
                                    <router-link to="#" class="font-semibold text-white block">{{ item.name }}</router-link>
                                    <span class="text-white/70 text-sm">{{ item.position }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content p-6 relative">
                        <router-link :to="{ name: 'course-detail', params: { id: item.id } }" class="font-medium block text-indigo-600">{{ item.course}}</router-link>
                        <router-link :to="{ name: 'course-detail', params: { id: item.id } }" class="text-lg font-medium block hover:text-indigo-600 duration-500 ease-in-out mt-2">{{item.title }}</router-link>
                        <p class="text-slate-400 mt-3 mb-4">{{ item.desc }}</p>

                        <ul class="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center list-none text-slate-400">
                            <li class="flex items-center me-4">
                                <i class="uil uil-book-open text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                <span>{{ item.lectures }}</span>
                            </li>

                            <li class="flex items-center me-4">
                                <i class="uil uil-clock text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                <span>{{ item.time }}</span>
                            </li>

                            <li class="flex items-center">
                                <i class="uil uil-eye text-lg leading-none me-2 text-slate-900 dark:text-white"></i>
                                <span>{{ item.view }}</span>
                            </li>
                        </ul>

                        <div
                            class="absolute -top-7 end-6 z-1 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                            <div class="flex justify-center items-center size-14 bg-white dark:bg-slate-900 rounded-full shadow-lg dark:shadow-gray-800 text-indigo-600 dark:text-white">
                                <span class="font-semibold">{{ item.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex justify-center">
                <div class="lg:w-2/3 text-center">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe  our weekly subscription</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on  your services. We'll send you the best of our blog just once a weekly.</p>

                    <div class="mt-8">
                        <div class="text-center subcribe-form">
                            <form class="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"  placeholder="Enter your email id..">
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
import Switcher from '@/components/switcher.vue'
import c1 from '@/assets/images/course/c1.jpg'
import c2 from '@/assets/images/course/c2.jpg'
import c3 from '@/assets/images/course/c3.jpg'
import c4 from '@/assets/images/course/c4.jpg'
import c5 from '@/assets/images/course/c5.jpg'
import c6 from '@/assets/images/course/c6.jpg'
import c7 from '@/assets/images/course/c7.jpg'
import c8 from '@/assets/images/course/c8.jpg'
import c9 from '@/assets/images/course/c9.jpg'
import c10 from '@/assets/images/course/c10.jpg'
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

const datas = [
    {
        id:1,
        image: c1,
        image2: client1,
        name: 'Calvin Carlo',
        position: 'Professor',
        course: 'Digital Marketing',
        title: 'Starting SEO as your Home Based Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:2,
        image: c2,
        image2: client2,
        name: 'Christa Smith',
        position: 'Professor',
        course: 'Engineering',
        title: 'Java Programming Masterclass for Software',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:3,
        image: c3,
        image2: client3,
        name: 'Jani Jangad',
        position: 'Professor',
        course: 'Engineering',
        title: 'Microsoft Excel - Excel from Beginner to Advanced',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:4,
        image: c4,
        image2: client4,
        name: 'John Cartwright',
        position: 'Professor',
        course: 'Web Development',
        title: 'Vue - The Complete Guide (w/ Router, Composition API)',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:5,
        image: c5,
        image2: client5,
        name: 'Sally Short',
        position: 'Professor',
        course: 'Front-end Design',
        title: 'HTML, CSS, Javascripts, and Basic Knowledge about web design',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:6,
        image: c6,
        image2: client6,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:7,
        image: c7,
        image2: client1,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:8,
        image: c8,
        image2: client2,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:9,
        image: c9,
        image2: client3,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:10,
        image: c10,
        image2: client4,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
]
  
</script>
