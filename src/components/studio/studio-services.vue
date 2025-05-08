<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
            <div class="lg:col-span-8 md:col-span-6 md:text-start text-center">
                <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">We create world-class <br> web design, and <br> branding.</h3>
            </div>

            <div class="lg:col-span-4 md:col-span-6 md:text-end hidden md:block">
                <a href="" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></a>
            </div>
        </div>

        <div class="grid lg:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div class="lg:col-span-3">
                <div class="grid lg:grid-cols-1 grid-cols-2 sticky top-20">
                    <div class="counter-box relative md:text-start text-center">
                        <h1 class="font-bold text-3xl text-indigo-600 flex"><count-up class="counter-value" :end-val="11">3</count-up>+</h1>
                        <span class="counter-head font-medium h6">Designers & <br> developers</span>
                    </div>

                    <div class="counter-box relative md:text-start text-center lg:mt-6">
                        <h1 class="font-bold text-3xl text-indigo-600"><count-up class="counter-value" :end-val="5">1</count-up></h1>
                        <span class="counter-head font-medium h6">Years of <br> Experience</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-9">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="p-6 rounded-lg shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div class="size-16 bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ item.name }}</router-link>
                            <p class="text-slate-400 mt-3">{{item.title}}</p>

                            <div class="mt-5">
                                <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 md:hidden mt-8">
                    <div class="md:col-span-12 text-center">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More <i class="uil uil-arrow-right align-middle"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
const datas = [
    {
        name: 'Digital Marketing',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-presentation-line'
    },
    {
        name: 'Investing',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-bill'
    },
    {
        name: 'Mortgage Advisor',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-money-withdrawal'
    },
    {
        name: 'Real Estate',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-presentation-line'
    },
    {
        name: 'Payroll & Accounting',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-usd-circle'
    },
    {
        name: 'Branch Registration',
        title: 'The phrasal sequence of the is now so that many campaign and benefit',
        icon: 'uil uil-invoice'
    },
]
</script>