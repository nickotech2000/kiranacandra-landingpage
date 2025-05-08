<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />

        <section class="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
            <span class="absolute blur-[200px] size-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/50"></span>
            <div class="container relative z-1">
                <div class="grid md:grid-cols-2 items-center gap-[30px]">
                    <div class="">
                        <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-black dark:text-white relative">Hellow! <br> We Are A <span class="absolute end-0 start-0 bottom-4 lg:h-4 h-3 w-auto bg-indigo-600/30  text-indigo-600">
                       </span> <vue-typewriter-effect :strings="['Talented', 'Creative','Skilled']" /><br> Programmer.</h4>
                        <p class="text-slate-400 text-lg max-w-xl">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    
                        <div class="relative mt-8">
                            <router-link to="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2">Learn More</router-link>
                            <router-link to="#!" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full lightbox"><i class="mdi mdi-play text-xl align-middle"></i></router-link><small class="text-sm font-semibold uppercase align-middle ms-2">Watch Now</small>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="flex justify-center">
                            <div class="relative overflow-hidden rounded-full md:w-3/4">
                                <img :src="vector1" alt="">
                                <div class="absolute inset-0 bg-gradient-to-tl to-indigo-600/30 from-yellow-600/30"></div>
                            </div>
                        </div>

                        <div class="absolute -top-8 start-0 mover">
                            <img :src="programming1" class="rounded-2xl" alt="">
                        </div>

                        <div class="absolute -bottom-8 end-0 mover-2">
                            <img :src="programming2" class="rounded-2xl" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section class="py-6 border-t border-b border-gray-100 dark:border-gray-700">
            <div class="container relative">
                <CompanyLogos/>
            </div>
        </section>

         <section class="relative md:py-24 py-16 overflow-hidden">
            <div class="container relative">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative">
                        <div class="relative">
                            <img :src="programming3" class="mx-auto md:max-w-xs lg:max-w-sm rounded-lg shadow-md dark:shadow-gray-800" alt="">

                            <div class="absolute top-4 md:start-12 -start-2 text-center">
                                <router-link to="#!" @click="toggle" class="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </router-link>
                            </div>
                        </div>
                        <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                        <div class="absolute flex justify-between items-center bottom-10 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div class="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                                <i data-feather="code" class="size-6"></i>
                            </div>
                            <div class="flex-1">
                                <h6 class="text-slate-400">Lines of Code</h6>
                                <p class="text-xl font-bold"><count-up :end-val="45485"/></p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:ms-8">
                        <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Professional Developing & <br> Programming Services <br> You Can Trust!</h3>
                        <p class="text-slate-400 max-w-xl">You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>

                        <ul class="list-none text-slate-400 mt-4">
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Create your own skin to match your brand</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Services of Programmer</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="(item, index) in services" :key="index" class="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" class="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                                <i :class="item.icon"></i>
                            </div>
                        </div>

                        <div class="mt-6">
                            <router-link to="" class="text-lg font-medium group-hover:text-white duration-500">{{item.title}}</router-link>
                            <p class="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 w-full table relative bg-[url('../../assets/images/programming/bg.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-gradient-to-tl to-indigo-600/75 from-yellow-600/75"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-4 md:text-4xl text-3xl text-white font-semibold">We Are A Talented Developer or Programmer.</h3>

                    <p class="text-white/70 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                
                    <router-link to="#!" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </router-link>
                </div>
            </div>
        </section>

        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Frequently Asked Questions</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 md:gap-[30px]">
                    <div>
                        <div v-for="(item, index) in faqData.slice(0,4)" :key="index" class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4" >
                            <h2 class="text-base font-semibold">
                                <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" :class="activeTab === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' :''" @click="onTabClick(item.id)">
                                    <span>{{item.title}}</span>
                                    <svg data-accordion-icon class="size-4 shrink-0" :class="activeTab === item.id ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div v-if="item.id === activeTab">
                                <div class="p-5">
                                    <p class="text-slate-400 dark:text-gray-400">{{item.desc}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div v-for="(item, index) in faqData.slice(4,8)" :key="index" class="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4" >
                            <h2 class="text-base font-semibold">
                                <button type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" :class="activeTab === item.id ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' :''" @click="onTabClick(item.id)">
                                    <span>{{item.title}}</span>
                                    <svg data-accordion-icon class="size-4 shrink-0" :class="activeTab === item.id ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </h2>
                            <div v-if="item.id === activeTab">
                                <div class="p-5">
                                    <p class="text-slate-400 dark:text-gray-400">{{item.desc}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" md:mt-24 mt-16">
                <Blogs/>
            </div>
        </section>
        <Footer/>

        <Switcher/>

        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
            </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import CompanyLogos from '@/components/company-logos.vue';
import CountUp from 'vue-countup-v3';
import Blogs from '@/components/blogs/blogs.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';

import vector1 from '@/assets/images/vector01.png'
import programming1 from '@/assets/images/programming/1.jpg'
import programming2 from '@/assets/images/programming/2.jpg'
import programming3 from '@/assets/images/programming/3.jpg'

// Reactive variables
const isActive = ref(false);
const activeTab = ref(1);

// Toggle function
const toggle = () => {
  isActive.value = !isActive.value;
};

// Enable dark mode
const darkmode = () => {
  document.documentElement.classList.add('dark');
};
onMounted(darkmode);

// Service data
const services = ref([
  { icon: 'uil uil-chart-line', title: 'Software Development', desc: 'It is a long established fact that a reader.' },
  { icon: 'uil uil-crosshairs', title: 'Mobile App Development', desc: 'It is a long established fact that a reader.' },
  { icon: 'uil uil-airplay', title: 'Web Development', desc: 'It is a long established fact that a reader.' },
  { icon: 'uil uil-rocket', title: 'Game Development', desc: 'It is a long established fact that a reader.' },
]);

// FAQ data
const faqData = ref([
  { id: 1, title: 'How does it work ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 2, title: 'Do I need a designer to use Techwind ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 3, title: 'What do I need to do to start selling ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 4, title: 'What happens when I receive an order ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 5, title: 'How does it work ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 6, title: 'Do I need a designer to use Techwind ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 7, title: 'What do I need to do to start selling ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
  { id: 8, title: 'What happens when I receive an order ?', desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
]);

// Handle tab click
const onTabClick = (index) => {
  activeTab.value = index;
};
</script>

