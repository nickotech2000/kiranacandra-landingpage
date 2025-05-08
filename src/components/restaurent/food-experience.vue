<template>
    <div>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <img :src="about" class="rounded-md shadow-sm dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="ms-6">
                            <p class="text-slate-400 text-lg mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum".</p>
                            <h4 class="my-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Food is our common ground, <br> a universal experience.</h4>
                            <p class="text-slate-400">Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                            <div class="mt-6">
                                <img :src="sign" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    <div v-for="item in restaurants" :key="item" class="md:px-6 duration-500 rounded-2xl text-center">
                        <div class="size-20 bg-indigo-600/5 mx-auto text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            
                            <div class="mt-5">
                                <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative py-36 bg-[url('../../assets/images/food/menu.jpg')] bg-no-repeat bg-fixed bg-top bg-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
            <div class="absolute bottom-0 start-0 end-0 text-center px-3">
                <h5 class="text-slate-400 text-xl leading-normal font-semibold">Our Menu</h5>
                <h4 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mb-5">Choose your mixture & order now!</h4>
            </div>
        </section>
    </div>
</template>

<script setup>
import about from '@/assets/images/food/about.jpg'
import sign from '@/assets/images/sign.png'
const restaurants = [
  {
    icon: 'uil uil-pizza-slice',
    name: 'Food Meets Style',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: 'uil uil-restaurant',
    name: 'Quality Check',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
  {
    icon: 'uil uil-swiggy',
    name: 'Home Delivery',
    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
  },
];
</script>