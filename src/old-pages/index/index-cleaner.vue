<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative flex items-center w-full py-36 lg:py-0 lg:h-screen" id="home" :style="{ 'background-image': `url(${randomImage})` }">
            <div class="absolute inset-0 bg-yellow-400 -z-2"></div>
            <div class="absolute inset-0 bg-[url('../../assets/images/cleaner/bg.png')] bg-center bg-no-repeat bg-cover -z-1"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-14">
                    <h5 class="text-lg text-white font-medium mb-3">Your Home is Your Heaven</h5>
                    <h3 class="font-bold lg:leading-normal leading-normal text-5xl lg:text-7xl mb-5 text-white">Clean Your Way to Happiness</h3>

                    <p class="text-slate-300 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                
                    <div class="mt-8">
                        <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-white rounded-md">Get an Quote</router-link>
                    </div>
                </div>
            </div>
        </section>

         <section class="relative md:py-24 py-16">
            <div class="container relative pb-10">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="relative">
                            <div class="relative">
                                <img :src="about1" class="lg:w-[400px] w-[280px] rounded-md" alt="">
                                <div class="absolute top-0 translate-y-2/4 end-0 text-center">
                                    <router-link to="#!" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="absolute -end-5 -bottom-16 rounded-md">
                                <img :src="about2" class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
                        <div class="lg:ms-6">
                            <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">We Make Places <br> Clean & Bright</h3>
                            <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                            <div class="grid lg:grid-cols-2 gap-6 mt-6">
                                <div class="group flex duration-500 xl:p-3">
                                    <div class="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-xs dark:shadow-gray-800 duration-500">
                                        <i data-feather="user-check" class="size-5"></i>
                                    </div>
                                    <div class="flex-1 ms-4">
                                        <h4 class="mb-0 text-lg font-medium">Customer Service</h4>
                                        <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin.</p>
                                    </div>
                                </div>

                                <div class="group flex duration-500 xl:p-3">
                                    <div class="flex align-middle justify-center items-center size-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl shadow-xs dark:shadow-gray-800 duration-500">
                                        <i data-feather="thumbs-up" class="size-5"></i>
                                    </div>
                                    <div class="flex-1 ms-4">
                                        <h4 class="mb-0 text-lg font-medium">Quality Cleaning</h4>
                                        <p class="text-slate-400 mt-3">One disadvantage of Lorum Ipsum is that in Latin.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-4">
                                <div class="relative p-6 border-2 border-indigo-600 rounded-[30px]">
                                    <span class="absolute w-28 border-[6px] border-white dark:border-slate-900 -bottom-1 start-16 z-2"></span>
                                    <span class="absolute border-2 border-indigo-600 rounded-none rounded-e-[50px] w-20 h-20 -bottom-[80px] start-[60px] z-3 border-s-0 border-b-0"></span>
                                    <span class="font-semibold text-2xl leading-normal">
                                        Cleanliness is a state of purity, clarity, and precision.
                                    </span>
    
                                    <div class="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                        <i class="mdi mdi-format-quote-open"></i>
                                    </div>
                                </div>
    
                                <div class="text-lg font-semibold mt-6 ms-44">- Shreethemes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Cleaning Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    <div v-for="(item, index) in servicesData" :key="index" class="group relative overflow-hidden px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                        <i :data-feather="item.icon" class="size-12 stroke-1 text-indigo-600"></i>
                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.title}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            
                            <div class="mt-5">
                                <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                        <span class="absolute bottom-0 end-0 text-9xl font-bold opacity-[0.03] group-hover:opacity-10 duration-500">{{item.id}}</span>
                    </div>
                </div>
            </div>
            
            <div class="container relative mt-6">
                <CompanyLogos/>
            </div>
        </section>

        <section class="py-20 w-full table relative bg-[url('../../assets/images/cleaner/bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900/75"></div>
            <div class="container relative">
                <div class="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div v-for="(item, index) in ctaData" :key="index" class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 text-white flex justify-center"> <count-up :end-val="item.value"></count-up>+</h1>
                        <h5 class="counter-head text-lg font-medium text-white/50">{{item.title}}</h5>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Featured Services</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="(item, index) in services" :key="index" class="group relative">
                        <div class="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                            <img :src="item.image" class="group-hover:scale-110 duration-500" alt="">
                        </div>

                        <div class="relative -mt-6 px-6">
                            <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6">
                                <router-link to="" class="title h5 text-lg font-semibold hover:text-indigo-600 duration-500 ease-in-out">{{item.title}}</router-link>
                                <ul class="list-none mt-4">
                                    <li v-for="(el, index) in item.feature" :key="index" class="flex text-slate-400 ms-0"><i class="mdi mdi-check text-indigo-600 align-middle me-2"></i> {{el}}</li>
                                </ul>
                                <div class="mt-4">
                                    <router-link to="#!" class="relative inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Team</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in team" :key="index" class="lg:col-span-3 md:col-span-6">
                        <div class="group text-center">
                            <div class="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                <img :src="item.image" class="" alt="">
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>
                                <ul class="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                    <li v-for="(el, index) in item.social" :key="index" class="inline mx-0.5"><a href="" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><i :data-feather="el" class="size-4"></i></a></li>
                                </ul>
                            </div>

                            <div class="content mt-3">
                                <router-link to="" class="text-lg font-semibold hover:text-indigo-600 duration-500">{{item.name}}</router-link>
                                <p class="text-slate-400">{{item.title}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blog Or News</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
                    <div v-for="(item, index) in blogData" :key="index" class="blog relative rounded-md shadow-sm dark:shadow-gray-800 overflow-hidden">
                        <img :src="item.image" alt="">
                        <div class="content p-6">
                            <router-link to="/blog-detail" class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">{{item.title}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            
                            <div class="mt-4">
                                <router-link to="/blog-detail" class="relative group inline-block tracking-wide align-middle text-base text-center border-none font-normal hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer :email='true'/>
        <Switcher/>

        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
            </div>
            <button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import CompanyLogos from '@/components/company-logos.vue';
import CountUp from 'vue-countup-v3'
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import bg1 from '@/assets/images/cleaner/bg1.png'
import bg2 from '@/assets/images/cleaner/bg2.png'
import bg3 from '@/assets/images/cleaner/bg3.png'
import about1 from '@/assets/images/cleaner/ab1.jpg'
import about2 from '@/assets/images/cleaner/ab2.jpg'

import { ref, onMounted } from 'vue'

const randomImage = ref('')
const backgroundImages = ref([bg1,bg2,bg3])

const changeBackground = () =>{
    const randomIndex = Math.floor(Math.random() * backgroundImages.value.length);
    randomImage.value = backgroundImages.value[randomIndex];
}

onMounted(() => {
    changeBackground();
    setInterval(changeBackground, 5000);
})

const isActive = ref(false)

let toggle = () =>{
    if (!isActive.value) {
            isActive.value = true;
        } else {
            isActive.value = false;
        }
}

const servicesData = ref([
    {
        id:1,
        icon:'codesandbox',
        title:'Latest Equipments',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id:2,
        icon:'dollar-sign',
        title:'Affordable Service',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id:3,
        icon:'users',
        title:'Expert Team',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id:4,
        icon:'thumbs-up',
        title:'Quality Work',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
])

const ctaData = ref([
    {
        title:'Satisfied Client',
        value:1548
    },
    {
        title:'Expert Team',
        value:25
    },
    {
        title:'Years Experience',
        value:9
    },
])

const services = ref([
    {
        image:require('../../assets/images/cleaner/1.jpg'),
        title:'House Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
    {
        image:require('../../assets/images/cleaner/2.jpg'),
        title:'Office Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
    {
        image:require('../../assets/images/cleaner/3.jpg'),
        title:'Kitchen Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
    {
        image:require('../../assets/images/cleaner/4.jpg'),
        title:'Window Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
    {
        image:require('../../assets/images/cleaner/5.jpg'),
        title:'Carpet Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
    {
        image:require('../../assets/images/cleaner/6.jpg'),
        title:'Car Cleaning',
        feature:['House Cleaning','Bathroom Cleaning','Window Cleaning','Bedrooms Cleaning']
    },
])

const team = ref([
    {
        image:require('../../assets/images/client/04.jpg'),
        name:'Jack John',
        title:'Cleaner',
        social:['facebook','instagram','linkedin']
    },
    {
        image:require('../../assets/images/client/05.jpg'),
        name:'Jack John',
        title:'Cleaner',
        social:['facebook','instagram','linkedin']
    },
    {
        image:require('../../assets/images/client/06.jpg'),
        name:'Jack John',
        title:'Cleaner',
        social:['facebook','instagram','linkedin']
    },
    {
        image:require('../../assets/images/client/07.jpg'),
        name:'Jack John',
        title:'Cleaner',
        social:['facebook','instagram','linkedin']
    },
])

const blogData = ref([
    {
        image:require('../../assets/images/cleaner/1.jpg'),
        titile:'Design your apps in your own way',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:require('../../assets/images/cleaner/2.jpg'),
        titile:'How apps is changing the IT world',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        image:require('../../assets/images/cleaner/3.jpg'),
        titile:'Smartest Applications for Business',
        desc:'The phrasal sequence of the is now so that many campaign and benefit'
    },
])

blogData.value

</script>

<style lang="scss" scoped>

</style>