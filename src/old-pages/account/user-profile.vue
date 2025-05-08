<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative lg:pb-24 pb-16">
        <div class="container-fluid relative">
            <div class="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" class="hidden"/>
                <div class="relative shrink-0">
                    <img :src="bg" class="h-80 w-full object-cover" id="profile-banner" alt="">
                    <div class="absolute inset-0 bg-slate-900/70"></div>
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <AccouTab />
                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                    <div class="pb-6 border-b border-gray-100 dark:border-gray-700">
                        <h5 class="text-xl font-semibold">Jenny Jimenez</h5>
                        <p class="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this  journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                    </div>

                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-[30px] pt-6">
                        <div>
                            <h5 class="text-xl font-semibold">Personal Details :</h5>
                            <div class="mt-6">
                                <div class="flex items-center">
                                    <i data-feather="mail" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Email :</h6>
                                        <router-link to="#" class="text-slate-400">jennyhot@hotmail.com</router-link>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="bookmark" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Skills :</h6>
                                        <router-link to="#" class="text-slate-400">html</router-link>, <router-link to="#" class="text-slate-400">css</router-link>, <router-link to="#" class="text-slate-400">js</router-link>, <router-link to="#" class="text-slate-400">mysql</router-link>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="italic" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Language :</h6>
                                        <router-link to="#" class="text-slate-400">English</router-link>, <router-link to="#" class="text-slate-400">Japanese</router-link>, <router-link to="#" class="text-slate-400">Chinese</router-link>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="globe" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Website :</h6>
                                        <router-link to="#" class="text-slate-400">www.kristajoseph.com</router-link>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="gift" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Birthday :</h6>
                                        <p class="text-slate-400 mb-0">2nd March, 1996</p>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="map-pin" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Location :</h6>
                                        <router-link to="#" class="text-slate-400">Beijing, China</router-link>
                                    </div>
                                </div>
                                <div class="flex items-center mt-3">
                                    <i data-feather="phone" class="fea icon-ex-md text-slate-400 me-3"></i>
                                    <div class="flex-1">
                                        <h6 class="text-indigo-600 dark:text-white font-medium mb-0">Cell No :</h6>
                                        <router-link to="#" class="text-slate-400">(+12) 1254-56-4896</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-[30px] lg:mt-0">
                            <h5 class="text-xl font-semibold">Experience :</h5>

                            <div v-for="item in datas2" :key="item"
                                class="flex duration-500 hover:scale-105 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-4 rounded-md bg-white dark:bg-slate-900 mt-6">
                                <img :src="item.image" class="size-16 p-4 bg-slate-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md" alt="">
                                <div class="flex-1 content ms-4">
                                    <h4 class="text-lg text-medium">{{item.title}}</h4>
                                    <p class="text-slate-400 mb-0">{{item.expe}}</p>
                                    <p class="text-slate-400 mb-0"><router-link to="#" class="text-indigo-600">{{item.link}}</router-link>{{item.country}}</p>
                                </div>
                            </div>                           
                        </div>
                    </div>
                    <h5 class="text-xl font-semibold mt-[30px]">Portfolio :</h5>

                    <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                        <div v-for="(item, index) in datas" :key="index" class="group relative block overflow-hidden rounded-md duration-500">
                            <img :src="item.image" class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                            <div class="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-md"></div>

                            <div class="content duration-500">
                                <div class="icon absolute z-10 opacity-0 group-hover:opacity-100 top-6 end-6 duration-500">
                                    <router-link to="#" @click="showLightbox(index)" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox cursor-pointer"><i class="uil uil-camera"></i></router-link>
                                </div>

                                <div class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                                    <router-link to="/portfolio-detail-three" class="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ item.name }}</router-link>
                                    <p class="text-slate-400 mb-0">{{item.title}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue';
import image from '@/assets/images/portfolio/1.jpg'
import image2 from '@/assets/images/portfolio/2.jpg'
import image3 from '@/assets/images/portfolio/3.jpg'
import image4 from '@/assets/images/portfolio/4.jpg'
import image5 from '@/assets/images/portfolio/5.jpg'
import image6 from '@/assets/images/portfolio/6.jpg';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'

import client1 from '@/assets/images/client/circle-logo.png'
import client2 from '@/assets/images/client/facebook-logo-2019.png'
import client3 from '@/assets/images/client/spotify.png'

import bg from '@/assets/images/blog/bg.jpg'

const datas = [
    {
        image: image,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
    {
        image: image2,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
    {
        image: image3,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
    {
        image: image4,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
    {
        image: image5,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
    {
        image: image6,
        name: 'Mockup Collection',
        title: 'Abstract'
    },
]

const images = [image,image2,image3,image4, image5,image6,]

const visibleRef = ref(false)
const imgsRef = ref([])
const indexRef = ref(0)

const  datas2 = [
    {
        image: client1,
        name: 'Senior Web Developer',
        expe: '3 Years Experience',
        link: 'CircleCi',
        country: ' @London, UK'
    },
    {
        image: client2,
        name: 'Web Designer',
        expe: '2 Years Experience',
        link: 'Facebook',
        country: '@Washington D.C, USA'
    },
    {
        image: client3,
        name: 'UI Designer',
        expe: '2 Years Experience',
        link: 'Spotify',
        country: '@Perth, Australia'
    },
]

const showLightbox = (index) =>{
    imgsRef.value = images
    indexRef.value = index
    visibleRef.value = true
}

const onHide = () =>{
    visibleRef.value = false
}
</script>
