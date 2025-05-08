<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 lg:py-64 bg-[url('../../assets/images/hospital/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 mt-10">
                <img :src="logo" alt="">

                <h1 class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-3">Meet The <br> Best Doctor</h1>
                <p class="text-white/60 text-lg max-w-xl">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>

                <div class="mt-8">
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Make Appointment</router-link>
                    <p class="text-white/60 text-base mt-2">T&C apply. Please read <a href="" class="text-white">Terms  and Conditions <i class="uil uil-arrow-right"></i></a></p>
                </div>
            </div>
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
        <Feature />
        <Treatments />
        <Services />
    </section>
    <Doctors />
    <Teams />
    <Cta />
    <section class="relative md:py-24 py-16">
        <Users :hospital=true />
    </section>
    <Blogs :blog=true />
        <section class="md:mt-24 mt-16 py-6 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
               <Companylogo />
            </div>
        </section>
        <Footer :email=true />
        <Switcher />
        <Cookies />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Feature from '@/components/hospital/hospital-feature.vue';
import Treatments from '@/components/hospital/hospital-treatments.vue';
import Services from '@/components/hospital/hospital-services.vue';
import Doctors from '@/components/hospital/doctors-time-table.vue';
import Teams from '@/components/hospital/doctors-team.vue';
import Cta from '@/components/hospital/hospital-cta.vue';
import Users from '@/components/users.vue';
import Blogs from '@/components/blogs/blogs.vue';
import Companylogo from '@/components/company-logos.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue'

import logo from '@/assets/images/logo-icon-40.png'

</script>
