<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Hello !
                    <br> How can we help you?
                </h3>

                <div class="text-center subcribe-form mt-4 pt-2">
                    <form class="relative mx-auto max-w-xl">
                        <input type="text" id="help" name="name" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic...">
                        <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Search</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Helpcenter</li>
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

    <section class="relative md:mt-24 mt-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything  you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                <div v-for="item in helps" :key="item" class="text-center px-6 mt-6">
                    <div class="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                        <i :data-feather="item.icon" class="size-[30px]"></i>
                    </div>

                    <div class="content mt-7">
                        <router-link :to="item.to" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name }}</router-link>
                        <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                        <div class="mt-5">
                            <router-link :to="item.to" class="text-indigo-600">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Started</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div v-for="item in starts" :key="item" class="flex">
                    <i data-feather="help-circle" class="fea icon-ex-md text-indigo-600 me-3"></i>
                    <div class="flex-1">
                        <h5 class="mb-2 text-xl font-semibold">{{ item.name }} <span class="text-indigo-600">{{item.name2 }}</span> {{ item.name3 }}</h5>
                        <p class="text-slate-400">{{ item.desc }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <GetInTouch />
    <Footer :email=true />
    <Switcher />
    <Cookies />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch-helpcenter.vue'

const helps = [
    {
        icon: 'help-circle',
        name: 'FAQs',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        to: '/helpcenter-faqs'
    },
    {
        icon: 'bookmark',
        name: 'Guides / Support',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        to: '/helpcenter-guides'


    },
    {
        icon: 'settings',
        name: 'Support Request',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        to: '/helpcenter-support'

    },
]

const starts = [
    {
        name: 'How our',
        name2: 'Techwind',
        name3: 'work ?',
        desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.'
    },
    {
        name: ' What is the main process open account ?',
        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact."
    },
    {
        name: ' How to make unlimited data entry ?',
        desc: 'Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.'
    },
    {
        name: ' Is',
        name2: 'Techwind',
        name3: 'safer to use with my account ?',
        desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin."
    },
]
</script>