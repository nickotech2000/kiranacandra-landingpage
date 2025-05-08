<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-72 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        </section>

        <section class="relative md:pt-24 pt-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-4 md:col-span-5">
                        <div class="lg:-mt-[330px] -mt-[299px]">
                            <div class="rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                <div class="text-center py-8 p-6 border-b border-gray-100 dark:border-gray-700">
                                    <img :src="logo" class="size-24 p-4 shadow-md mx-auto rounded-full block" alt="">
                                    <h5 class="mt-5 text-xl font-semibold mb-0">CircleCi</h5>
                                    <p class="text-slate-400 mb-0">Internet Services</p>
                                </div>

                                <div class="p-6">
                                    <h5 class="font-semibold">Company Details :</h5>
                                    <ul class="list-none mt-4">
                                        <li class="flex mt-2 items-center font-medium"><i data-feather="map-pin" class="size-4 text-amber-500 me-3"></i><span class="text-slate-400 me-3">Location :</span> San Francisco</li>
                                        <li class="flex mt-2 items-center font-medium"><i data-feather="link" class="size-4 text-amber-500 me-3"></i><span class="text-slate-400 me-3">Comapny :</span> circleci.com</li>
                                        <li class="flex mt-2 items-center font-medium"><i data-feather="dollar-sign" class="size-4 text-amber-500 me-3"></i><span class="text-slate-400 me-3">Revenue :</span> $ 5M / Annual</li>
                                        <li class="flex mt-2 items-center font-medium"><i data-feather="users" class="size-4 text-amber-500 me-3"></i><span class="text-slate-400 me-3">No. of employees :</span> 200</li>
                                    </ul>

                                    <router-link to="/page-job-apply" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-6">Apply Now</router-link>
                                </div>
                            </div>

                            <div class="w-full leading-[0] border-0 mt-8">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style="border:0" class="w-full h-[500px]" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-8 md:col-span-7">
                        <h4 class="text-xl font-semibold">About us :</h4>
                        <p class="text-slate-400 mt-4">Almost no business is immune from the need for quality software
                            development. The act of building quality software, and shipping it quickly, has become the core
                            engine of value creation in companies across all industries. CircleCI allows teams to rapidly
                            release code they trust by automating the build, test, and delivery process. Thousands of
                            leading companies, including Samsung, Ford Motor Company, Spotify, Lyft, Coinbase, PagerDuty,
                            Stitch Fix, and BuzzFeed rely on CircleCI to accelerate delivery and improve quality.</p>
                        <p class="text-slate-400 mt-4">CircleCI was named a Leader in cloud-native continuous integration by
                            Forrester in 2021 and has been named to multiple Best DevOps Tools lists. CircleCI is the first
                            CI/CD tool to become FedRAMP certified and processes more than 30 million builds each month
                            across Linux, macOS, Docker and Windows build environments.</p>
                        <p class="text-slate-400 mt-4">Founded in 2011 and headquartered in San Francisco with a global
                            remote workforce, CircleCI is venture-backed by Scale Venture Partners, Threshold Ventures
                            (formerly DFJ), Baseline Ventures, Top Tier Capital, Industry Ventures, Heavybit, Harrison Metal Capital, Owl Rock Capital Partners, and NextEquity Partners.</p>

                        <h4 class="mt-8 text-xl font-semibold">Join The Team :</h4>
                        <p class="text-slate-400 mt-4">Started in 2011, we have grown to over 200 employees all over the  world. Headquartered in San Francisco, we have offices in London, Tokyo, Toronto, Boston, and Denver, with team members working across 50+ cities and 13 countries.</p>

                        <div class="grid lg:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                            <router-link v-for="item in datas" :key="item" to="/page-job-detail">
                                <div class="group flex  bg-white dark:bg-slate-900 duration-500 hover:scale-105 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md">
                                    <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                                        <i :data-feather="item.icon" class="size-5 rotate-45"></i>
                                    </div>
                                    <div class="content">
                                        <h4 class="text-lg font-medium group-hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</h4>
                                        <p class="text-slate-400">{{item.location}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>

                        <router-link to="/page-job-grid"  class="relative inline-block font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 mt-6"><span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See All Jobs <i class="uil uil-angle-right-b align-middle"></i></router-link>

                    </div>
                </div>
            </div>

            <MobileApp />
        </section>
        <Footers />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue'
import logo from '@/assets/images/client/circle-logo.png'

const datas = [
    {
        icon: 'monitor',
        name: 'Senior Web Developer',
        location: 'London, UK'
    },
    {
        icon: 'airplay',
        name: 'Front-End Developer',
        location: 'Brasilia, Brazil'
    },
    {
        icon: 'cpu',
        name: ' Back-End Developer',
        location: 'Ottawa, Canada'
    },
    {
        icon: 'hexagon',
        name: 'UI Designer',
        location: 'Beijing, China'
    },
    {
        icon: 'figma',
        name: 'UX Designer',
        location: 'Bogota, Colombia'
    },
    {
        icon: 'crop',
        name: 'Php Developer',
        location: 'Havana, Cuba'
    },
]

</script>
