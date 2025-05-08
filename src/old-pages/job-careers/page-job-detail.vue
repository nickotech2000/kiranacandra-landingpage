<template>
    <div>
        <Navbar :navLight="'nav-light'" />
        <section class="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/job/job.jpg')] bg-no-repeat bg-center bg-cover">
            <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">{{data?.name ? data?.name : 'Senior Web Developer'}}</h3>
                    <ul class="list-none">
                        <li class="inline text-slate-400 me-3"><i class="uil uil-map-marker text-white h6 me-1"></i> London, UK - <span class="text-white">Full Time</span></li>
                    </ul>
                </div>
            </div>

            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/">Techwind</router-link></li>
                   <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                   <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><router-link to="/index-job">Job</router-link></li>
                    <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Detail</li>
                </ul>
            </div>
        </section>
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section class="relative md:mt-24 mt-16">
            <div class="container relative">
                <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div class="lg:col-start-2 lg:col-span-10">
                        <h5 class="mb-4 font-medium text-xl">Description:</h5>

                        <p class="text-slate-400 mb-4">Our vision is to provide the next billion people with access to products that exemplify the ideals of Techwind. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.</p>

                        <p class="text-slate-400 mb-4">Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.</p>

                        <h5 class="mb-4 mt-6 font-medium text-xl">Duties:</h5>

                        <ul class="list-none mb-0">
                            <li v-for="dutie in duties" :key="dutie" class="text-slate-400 flex mt-2"><i class="uil uil-arrow-right text-indigo-600 h5 mb-0 me-2"></i> {{ dutie }}</li>
                        </ul>

                        <h5 class="mb-4 mt-6 font-medium text-xl">Requirements</h5>
                        
                        <ul class="list-none mb-0">
                            <li v-for="item in requirements" :key="item" class="text-slate-400 flex mt-2"><i class="uil uil-arrow-right text-indigo-600 h5 mb-0 me-2"></i> {{ item }}</li>
                        </ul>

                        <h5 class="mb-4 mt-6 font-medium text-xl">Nice To Have</h5>
                        
                        <ul class="list-none mb-0">                        
                            <li v-for="item in haves" :key="item" class="text-slate-400 flex mt-2"><i class="uil uil-arrow-right text-indigo-600 h5 mb-0 me-2"></i> {{ item }}</li>
                        </ul>

                        <h5 class="mb-4 mt-6 font-medium text-xl">Benefits</h5>
                        <p class="text-slate-400 mb-4">Bitcoin.com is paving the way for the next generation of financial technology products and platforms. We're bringing cryptocurrency and the future of money to the masses. We’d love to have you on board.</p>

                        <p class="text-slate-400 mb-4">We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:</p>


                        <ul class="list-none mb-4">
                            <li v-for="item in benefits" :key="item" class="text-slate-400 flex mt-2"><i class="uil uil-arrow-right text-indigo-600 h5 mb-0 me-2"></i> {{ item }}</li>
                        </ul>

                        <p class="text-slate-400 mb-4">For employees residing in Japan, we offer "permanent employment" status (正社員) and the option to be paid in yen.</p>

                        <p class="text-slate-400 mb-4">Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.</p>

                        <div class="mt-6">
                            <router-link to="/page-job-apply" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Apply now</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MobileApp />
        <Footers />
        <Switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import MobileApp from '@/components/mobile-app.vue';
import Footers from '@/components/footer/footer-job.vue';
import Switcher from '@/components/switcher.vue'

import client1 from '@/assets/images/client/facebook-logo-2019.png'
import client2 from '@/assets/images/client/google-logo.png'
import client3 from '@/assets/images/client/linkedin.png'
import client4 from '@/assets/images/client/skype.png'
import client5 from '@/assets/images/client/spotify.png'
import client6 from '@/assets/images/client/telegram.png'
import client7 from '@/assets/images/client/circle-logo.png'
import client8 from '@/assets/images/client/lenovo-logo.png'
import client9 from '@/assets/images/client/shree-logo.png'
import client10 from '@/assets/images/client/snapchat.png'
import client11 from '@/assets/images/client/android.png'
import client12 from '@/assets/images/client/shree-logo.png'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const duties = ['Work alongside Product, Engineering, Design and Marketing to build world-class cryptocurrency applications and experiences', 'Provide produce vision and strategy for the team', "Design and lead a multi-year roadmap in accordance with company's OKRs, strategy and vision", 'Build and lead an exceptional engineering team to innovate, invent, implement and deploy complex software solutions in mission-critical environment', 'Understand customer needs and gather product requirements. Identify market opportunities and define product vision and strategy']

const requirements = ['5+ years of Product Management, Product Marketing or Product Growth experience with creating product roadmaps from conception to launch, driving product vision and defining go-to-market strategy', 'Has experience designing, implementing and/or integrating IAM solutions', 'Has managed engineering teams, designers, and collaborated with other product people', 'Strong project management skills and ability to work across different product teams', 'Strong leadership skills', 'Agile mindset to improve iteratively, rather than placing big long term bets', 'Excellent communication skills', 'Communicates well in both written and verbal English']

const haves = ['Strong understanding of blockchain, both technical and practical', ' Cryptocurrency or financial services product management is a big plus', 'Experience in KYC (know your customer), AML (anti-money laundering) and IAM services', 'Understanding of custodial vs non-custodial aspects of cryptocurrency financial products', 'Financial/payment apps experience']

const benefits = ['Flexible work hours', 'Remote work', 'Health insurance reimbursement', 'Wellness program (gym, etc.)', 'Yoga classes', 'Japanese classes']

const jobs = ref([
  { id: 1, name: 'Software Engineering', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$950 - $1100/mo', image: client1, company: 'Facebook Ltd.', location: 'Australia' },
  { id: 2, name: 'Web Developer', day: 'Posted 3 Days ago', time: 'Remote', salary: '$2500 - $2600/mo', image: client2, company: 'Google Ltd.', location: 'America' },
  { id: 3, name: 'UX/UI Designer', day: 'Posted 3 Days ago', time: 'Freelance', salary: '$3500 - $3600/mo', image: client3, company: 'Linkedin Ltd.', location: 'Canada' },
  { id: 4, name: 'Human Resource(HR)', day: 'Posted 3 Days ago', time: 'Part Time', salary: '$2000 - $2500/mo', image: client4, company: 'Skype Ltd.', location: 'UK' },
  { id: 5, name: 'Web Designer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$1500 - $1600/mo', image: client5, company: 'Spotify Ltd.', location: 'China' },
  { id: 6, name: 'Graphic Designer', day: 'Posted 3 Days ago', time: 'Part time', salary: '$500 - $600/mo', image: client6, company: 'Telegram Ltd.', location: 'India' },
  { id: 7, name: 'Senior Web Developer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$950 - $1100/mo', image: client7, company: 'Circle CI Ltd.', location: 'Australia' },
  { id: 8, name: 'Front-End Developer', day: 'Posted 3 Days ago', time: 'Remote', salary: '$2500 - $2600/mo', image: client8, company: 'Lenovo Ltd.', location: 'America' },
  { id: 9, name: 'Back-End Developer', day: 'Posted 3 Days ago', time: 'Freelance', salary: '$3500 - $3600/mo', image: client9, company: 'Shreethemes Ltd.', location: 'Canada' },
  { id: 10, name: 'Data Entry', day: 'Posted 3 Days ago', time: 'Part Time', salary: '$2000 - $2500/mo', image: client10, company: 'Snapchat Ltd.', location: 'UK' },
  { id: 11, name: 'Android Developer', day: 'Posted 3 Days ago', time: 'Full Time', salary: '$1500 - $1600/mo', image: client11, company: 'Android Ltd.', location: 'China' },
  { id: 12, name: 'Sketch Designer', day: 'Posted 3 Days ago', time: 'Part time', salary: '$500 - $600/mo', image: client12, company: 'Shreethemes Ltd.', location: 'India' },
]);

const data = ref('')
const id = ref('')


const route = useRoute();

onMounted(()=>{
    id.value = parseInt(route.params.id);
    data.value = jobs.value.find((item) => item.id === parseInt(id.value))
})

    
</script>
