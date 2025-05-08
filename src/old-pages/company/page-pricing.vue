<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/services.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h5 class="text-white/50 text-lg font-medium">Our Comfortable Rates</h5>
                <h3 class="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Pricing / Plans</h3>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="#">Company</router-link></li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Pricing</li>
            </ul>
        </div>
    </section>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-gray-50 dark:text-slate-800">
            <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section class="relative py-16 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div v-for="item in datas" :key="item" class="flex">
                    <div class="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-xs dark:shadow-gray-800">
                        <i :class="item.icon"></i>
                    </div>

                    <div class="content ms-6">
                        <router-link to="#" class="text-lg font-medium hover:text-indigo-600">{{ item.name }}</router-link>
                        <p class="text-slate-400 mt-3">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="relative md:py-24 py-16">
        <Pricing />
        <Questions />
    </section>
    <Users :users=true />
    <GetInTouch />
    <Footers :email=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Pricing from '@/components/pricing-plan.vue';
import Questions from '@/components/asked-questions/software-questions.vue';
import Users from '@/components/users.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'

const datas = [
    {
        icon: 'uil uil-water',
        name: '24/7 Support',
        title: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: 'uil uil-dropbox',
        name: 'Take Ownership',
        title: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        icon: 'uil uil-focus-target',
        name: 'Team Work',
        title: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
]

</script>
