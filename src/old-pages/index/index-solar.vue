<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />

        <section class="relative overflow-hidden table w-full py-36 lg:py-44">
            <div class="image-wrap absolute -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-[url('../../assets/images/solar/bg/2.jpg')] bg-no-repeat bg-center bg-cover"></div>
            <div class="absolute inset-0 bg-white/80 dark:bg-slate-900/80"></div>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div class="md:col-span-7">
                        <div class="me-6">
                            <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-slate-900 dark:text-white">Sustainable Energy Empowering The Customer</h4>
                            <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                            <div class="mt-6">
                                <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded me-2 mt-2">Get a Free Quote <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-5">
                        <div class="relative">
                            <div class="relative md:shrink-0">
                                <img class="object-cover md:w-[400px] w-84 lg:h-[550px] md:h-[400px] h-[550px] rounded-full shadow-md dark:shadow-gyay-700 ms-auto" :src="heroImg" alt="">
                            </div>
    
                            <div class="absolute bottom-16 md:-start-10 md-start-5 start-1 flex items-center p-2 rounded shadow-md dark:shadow-gray-800 bg-white/90 dark:bg-slate-900/90 max-w-80">
                                <div class="min-w-28 w-28 relative">
                                    <div class="grid grid-cols-1">
                                        <div class="tiny-one-item">
                                            <div class="tiny-slide">
                                                <div class="m-2">
                                                    <img :src="solar1" class="rounded" alt="">
                                                </div>
                                            </div>
        
                                            <div class="tiny-slide">
                                                <div class="m-2">
                                                    <img :src="solar2" class="rounded" alt="">
                                                </div>
                                            </div>
        
                                            <div class="tiny-slide">
                                                <div class="m-2">
                                                    <img :src="solar3" class="rounded" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="ms-3">
                                    <h5 class="text-lg font-semibold">View Our Success Stories With Renewable Energy</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:pb-24 pb-16">
            <div class="container relative">
                <div class="md:flex justify-center">
                    <div class="lg:w-3/4 md:w-full relative -mt-16">
                        <div class="p-6 relative z-3 bg-white dark:bg-slate-900 rounded shadow-sm shadow-slate-200 dark:shadow-slate-800">
                            <div class="md:flex justify-center">
                                <div class="md:w-1/3">
                                    <div class="text-center">
                                        <h6 class="text-slate-400 mb-0">Worldwide Customer</h6>
                                        <h2 class="mb-0 text-4xl mt-3 font-bold"><CountUp class="counter-value inline-block" :end-val="24">1</CountUp>K+</h2>
                                    </div>
                                </div>

                                <div class="md:w-1/3 mt-8 md:mt-0">
                                    <div class="text-center">
                                        <h6 class="text-slate-400 mb-0">Solar Panels</h6>
                                        <h2 class="mb-0 text-4xl mt-3 font-bold"><CountUp class="counter-value inline-block" :end-val="2840">2012</CountUp>+</h2>
                                    </div>
                                </div>

                                <div class="md:w-1/3 mt-8 md:mt-0">
                                    <div class="text-center">
                                        <h6 class="text-slate-400 mb-0">Customer Satisfaction</h6>
                                        <h2 class="mb-0 text-4xl mt-3 font-bold"><CountUp class="counter-value inline-block" :end-val="99">1</CountUp>%</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-5">
                        <div class="relative">
                            <div class="relative md:shrink-0 lg:me-0 me-10">
                                <img class="object-cover md:w-96 w-84 h-[500px] rounded shadow-md dark:shadow-gyay-700" :src="solar2" alt="">
                            </div>

                            <div class="absolute bottom-16 end-0">
                                <div class="relative md:shrink-0">
                                    <img class="object-cover size-48 rounded shadow-md dark:shadow-gyay-700" :src="solar3" alt="">
                                </div>
                                <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <router-link to="#" @click="isActive = !isActive" class="lightbox size-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </router-link>
                                </div>
                            </div>

                            <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
                                <div class="h-[100%] flex items-center justify-center">
                                    <iframe  src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
                                </div>
                                <button class="text-slate-400 absolute top-[20px] right-[20px]">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="isActive = !isActive">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-7">
                        <div class="lg:ms-4">
                            <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar Energy Squad: <br> Illuminating a Sustainable Future</h4>
                            <p class="text-slate-400 max-w-xl">At Esoler Solar Energy, we are dedicated to providing sustainable and renewable energy solutions to empower individuals, businesses, and communities. With a passion for harnessing the power of the sun, we strive to make a positive impact on the environment while helping our clients reduce their carbon footprint and energy costs.</p>
                            <p class="text-slate-400 max-w-xl mt-3">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today one can now find slightly different versions.</p>
                            <div class="mt-6">
                                <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded">Read More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What we do ?</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in feature" :key="index" class="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" class="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                                <i :class="item.icon"></i>
                            </div>
                        </div>

                        <div class="mt-6">
                            <router-link to="" class="text-xl font-medium group-hover:text-white duration-500">{{item.title}}</router-link>
                            <p class="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{{item.desc}}</p>

                            <div class="mt-3">
                                <router-link to="" class="font-medium group-hover:text-white/80 group-hover:hover:text-white duration-500">Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative">
                <div class="absolute inset-0 opacity-25 dark:opacity-50 bg-[url('../../assets/images/map.png')] bg-no-repeat bg-center bg-cover"></div>
                <SoftwareClient/>
            </div>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Solar & Renewable Projects</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in projectData" :key="index" class="group relative overflow-hidden rounded shadow-sm shadow-slate-100 dark:shadow-slate-800">
                        <div class="relative md:shrink-0">
                            <img class="object-cover md:w-96 w-full h-96 group-hover:scale-105 duration-500" :src="item.image" alt="">
                        </div>

                        <div class="p-6 absolute bottom-0 -start-72 group-hover:start-0 duration-500">
                            <div class="bg-white dark:bg-slate-900 py-3 px-4 w-fit rounded">
                                <router-link to="" class="hover:text-indigo-600 text-lg font-semibold">{{item.title}}</router-link>
                                <p class="text-slate-400">{{ item.subtitle }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16 bg-[url('../../assets/images/solar/bg/1.jpg')] bg-no-repeat bg-fixed bg-top bg-cover" id="table">
            <div class="absolute inset-0 bg-slate-900/60"></div>
            <div class="container relative">
                <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div>
                        <h4 class="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-semibold text-white">Best Solution for <br> Your Home Service</h4>
                        <p class="text-white/70 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <div class="grid md:grid-cols-2 mt-4">
                            <ul class="list-none">
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar Panel Installation</span></li>
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar System Design</span></li>
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar Energy Consultation</span></li>
                            </ul>

                            <ul class="list-none">
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar System Maintenance</span></li>
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar Energy Storage</span></li>
                                <li class="mt-2"><i class="mdi mdi-arrow-right text-[14px] text-white"></i> <span class="text-white/50">Solar Financing</span></li>
                            </ul>
                        </div>

                        <div class="mt-6">
                            <router-link to="" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded bg-indigo-600 text-white">Learn More <i class="mdi mdi-arrow-right ms-1"></i></router-link>
                        </div>

                        <div class="flex items-center mt-8">
                            <i class="mdi mdi-phone me-2 text-white text-5xl"></i>
                            <div class="content">
                                <h6 class="text-base font-medium text-white/70">Received and acurate quote within in 3-5 days</h6>
                                <a href="tel:+152534-468-854" class="text-white font-semibold">+152 534-468-854</a>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded lg:p-12 p-6 lg:ms-12">
                        <div class="section-title mb-4">
                            <h4 class="text-2xl font-bold uppercase mb-4">Request A Quote</h4>
                            <p class="text-slate-400 mx-auto para-desc">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <form>
                            <div class="grid md:grid-cols-12 grid-cols-1 gap-4 mt-6">
                                <div class="md:col-span-6">
                                    <label class="font-semibold">Your Name:</label>
                                    <input name="name" id="name" type="text" class="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="First Name:">
                                </div>

                                <div class="md:col-span-6">
                                    <label class="font-semibold">Your Email:</label>
                                    <input name="email" id="email" type="email" class="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="Your email:">
                                </div> 

                                <div class="md:col-span-6">
                                    <label class="font-semibold">Phone no.:</label>
                                    <input name="number" type="number" id="phone-number" class="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="Phone no.:">
                                </div> 

                                <div class="md:col-span-6">
                                    <label class="font-semibold">Electricity usage in kWh?</label>
                                    <input name="name" id="kWh" type="text" class="w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0" placeholder="kWh">
                                </div>

                                <div class="md:col-span-12">
                                    <label class="font-semibold">System Type:</label>
                                    <select class="form-select w-full py-2 px-3 border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 bg-transparent focus:outline-none rounded h-10 mt-1 focus:ring-0">
                                        <option value="USA">Solar for water</option>
                                        <option value="CAD">Solar Panels</option>
                                    </select>
                                </div>

                                <div class="md:col-span-12">
                                    <h6 class="font-semibold">Select Contact Method:</h6>

                                    <ul class="list-none mt-1">
                                        <li class="inline-block me-2">
                                            <div class="flex items-center mb-0">
                                                <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaCall">
                                                <label class="form-checkbox-label text-slate-400" for="ViaCall">Phone</label>
                                            </div>
                                        </li>
                                        <li class="inline-block">
                                            <div class="flex items-center mb-0">
                                                <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="ViaEmail">
                                                <label class="form-checkbox-label text-slate-400" for="ViaEmail">Email</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 mt-4">
                                <input type="submit" id="submit" name="send" class="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded bg-indigo-600 text-white" value="Submit Request">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-6 text-center">
                    <h4 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Latest Blogs & News</h4>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in blogData" :key="index" class="blog relative rounded shadow-sm dark:shadow-gray-800 overflow-hidden">
                        <img :src="item.image" alt="">

                        <div class="content p-6">
                            <router-link to="/blog-detail" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">ReNew’s Solar Manufacturing Plant: Setting in Sustainable Innovation</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            
                            <div class="mt-4">
                                <router-link to="/blog-detail" class="relative group inline-block tracking-wide align-middle text-base text-center border-none  font-normal hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span> Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import Footer from '@/components/footer/footer.vue';

import heroImg from '@/assets/images/solar/4.jpg'
import solar1 from '@/assets/images/solar/1.jpg'
import solar2 from '@/assets/images/solar/2.jpg'
import solar3 from '@/assets/images/solar/3.jpg'

import project4 from '@/assets/images/solar/project/4.jpg'
import project5 from '@/assets/images/solar/project/5.jpg'
import project6 from '@/assets/images/solar/project/6.jpg'
import project7 from '@/assets/images/solar/project/7.jpg'
import project8 from '@/assets/images/solar/project/8.jpg'
import project9 from '@/assets/images/solar/project/9.jpg'

import { tns } from 'tiny-slider';
import { onMounted } from 'vue';
import CountUp from 'vue-countup-v3'
import SoftwareClient from '@/components/software-client.vue';
import Switcher from '@/components/switcher.vue';

onMounted(()=>{
    tns({
        container: '.tiny-one-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
    });
})

const projectData = [
    {
        image:project4,
        title:'Solar Revolution',
        subtitle:'Solar Transformation'
    },
    {
        image:project5,
        title:'Sunwave Energy',
        subtitle:'Solar Solutions'
    },
    {
        image:project6,
        title:'Solar Sync',
        subtitle:'indigo Energy'
    },
    {
        image:project7,
        title:'Solstice Systems',
        subtitle:'Eco Future'
    },
    {
        image:project8,
        title:'Solar Spark',
        subtitle:'Clean Energy'
    },
    {
        image:project9,
        title:'Sun Power',
        subtitle:'Bright Future'
    },
]

const feature = [
    {
        icon:'uil uil-chart-line',
        title:'Installation',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
    {
        icon:'uil uil-crosshairs',
        title:'Maintenance',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
    {
        icon:'uil uil-airplay',
        title:'System Design',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
    {
        icon:'uil uil-rocket',
        title:'Energy Consulting',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
    {
        icon:'uil uil-clock',
        title:'Financing',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
    {
        icon:'uil uil-users-alt',
        title:'Feasibility Analysis',
        desc:'The phrasal sequence of the is now so that many campaign and benefit.'
    },
]

const blogData = [
    {
        image:project7,
        title:'ReNew’s Solar Manufacturing Plant: Setting in Sustainable Innovation',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:project8,
        title:'Women Empowerment: Key to Addressing Climate Change',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:project9,
        title:'ReNew Solar Manufacturing: Fueling Global Decarbonization Dreams',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
]

const isActive = ref(false)



</script>
