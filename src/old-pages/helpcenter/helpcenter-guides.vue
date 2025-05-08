<template>
<div>
    <Navbar :navLight="'nav-light'" />

        <section class="relative table w-full py-36 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">Guides & Support</h3>

                </div>
            </div>
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">Techwind</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/helpcenter">Helpcenter</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Guides</li>
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

        <section class="relative md:pt-24 pt-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    <div v-for="item in guidesData" :key="item" class="">
                        <h5 class="font-semibold text-xl mb-4">{{ item.title }}</h5>
                        <ul v-for="features in item.features" :key="features" class="list-none mt-2">
                            <li class="mt-2"><a href="" class="text-slate-400"><i  class="mdi mdi-arrow-right text-indigo-600 me-2"></i>{{ features }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <GetInTouch />
        <Footer :email=true />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch-helpcenter.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
    const guidesData = [
        {
            title: 'Getting started',
            features: [
                'Deciding to purchase', 'List your space', 'Landing an experience or adventure', 'Top uses questions'
            ]
        },
        {
            title: 'Your calendar',
            features: [
                'Pricing & availability', 'Booking settings', 'Responding to enquiries & requests', 'Snoozing or deactivating your listing'
            ]
        },
        {
            title: 'Your listings',
            features: [
                'Updating your listing', 'Neighbourhoods', 'Listing photos & photography', 'Techwind Plus', 'API-connected software'
            ]
        },
        {
            title: 'How payouts work',
            features: [
                'Getting paid', 'Adding payout info', 'Your payout status', 'Donations', 'Taxes'
            ]
        },
        {
            title: 'Your reservations',
            features: [
                'Techwind safely', 'Techwind Experiences and Adventures', 'Changing a reservation', 'Cancelling a reservation', 'Long-term reservations'
            ]
        },
        {
            title: 'Reservation help',
            features: [
                'Help with a reservation or guest', 'Guest cancellations'
            ]
        },
        {
            title: 'Your account',
            features: [
                'Your profile', 'Account security', 'Identification & verifications', 'Reviews', 'Superhost status'
            ]
        }
    ]
</script>
