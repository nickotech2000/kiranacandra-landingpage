<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-slate-900 opacity-80"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <h3 class="mb-3 text-3xl leading-normal font-medium text-white">{{ data &&  data.title ? data.title : 'My Very Minimal Interior Design Ideas' }} </h3>
                <ul class="list-none mt-6">
                    <li class="inline-block font-semibold text-white/50 mx-5"> <span class="text-white block">Client :</span> <span class="block">Calvin Carlo</span></li>
                    <li class="inline-block font-semibold text-white/50 mx-5"> <span class="text-white block">Date :</span> <span class="block">23th May, 2022</span></li>
                    <li class="inline-block font-semibold text-white/50 mx-5"> <span class="text-white block">Time :</span> <span class="block">8 Min Read</span></li>
                </ul>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
                    <router-link to="/">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
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

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800">
                        <img :src="data && data.image ? data.image : blogimage" class="rounded-md h-auto w-full" alt="">

                        <div class="mt-6">
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said
                                to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                                language which more or less corresponds to 'proper' Latin. It contains a series of real
                                Latin words. This ancient dummy text is also incomprehensible, but it imitates the
                                rhythm of most European languages in Latin script.</p>
                            <p
                                class="text-slate-400 italic border-x-4 border-indigo-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                                " There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable. "</p>
                            <p class="text-slate-400 mt-3">The advantage of its Latin origin and the relative
                                meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or
                                distract the viewer's attention from the layout.</p>
                        </div>
                    </div>
                    <report />
                </div>
                <Sidebar />
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex justify-center">
                <div class="lg:w-2/3 text-center">
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                    <div class="mt-8">
                        <div class="text-center subcribe-form">
                            <form class="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"  placeholder="Enter your email id..">
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Sooter :email=true />
    <Switcher />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import blogimage from '../../assets/images/blog/slide02.jpg';
import Navbar from '@/components/navbar/navbar.vue';
import Sidebar from '@/components/blogs/blog-sidebar.vue';
import Sooter from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import report from '@/components/report.vue';

const route = useRoute();
const id = ref('');
const data = ref('');

const datas = [
    {
        id: 1,
        image: require('../../assets/images/blog/01.jpg'),
        title: 'Design your apps in your own way',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 2,
        image: require('../../assets/images/blog/02.jpg'),
        title: 'How apps is changing the IT world',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 3,
        image: require('../../assets/images/blog/03.jpg'),
        title: 'Smartest Applications for Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 4,
        image: require('../../assets/images/blog/04.jpg'),
        title: 'Mobile Marketing, Its Synthes and 2021 Offer Prognosis',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 5,
        image: require('../../assets/images/blog/05.jpg'),
        title: 'Stop Worrying About Deadlines! We Got You Covered',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 6,
        image: require('../../assets/images/blog/06.jpg'),
        title: 'Change Your Strategy: Find a Business Consultant',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 7,
        image: require('../../assets/images/blog/07.jpg'),
        title: 'Everything About Financial Modeling',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 8,
        image: require('../../assets/images/blog/08.jpg'),
        title: 'On the other hand we provide denounce',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 9,
        image: require('../../assets/images/blog/06.jpg'),
        title: 'Consultant Business',
        time: '1st May 2022'
    },
    {
        id: 10,
        image: require('../../assets/images/blog/07.jpg'),
        title: 'Grow Your Business',
        time: '1st May 2022'
    },
    {
        id: 11,
        image: require('../../assets/images/blog/08.jpg'),
        title: 'Look On The Glorious Balance',
        time: '1st May 2022'
    },
    {
        id: 12,
        image: require('../../assets/images/nft/items/21.jpg'),
        title: 'Mindfulness Activities for Kids & Toddlers with NFT',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 13,
        image: require('../../assets/images/nft/items/22.jpg'),
        title: 'Save Thousands Of Lives Through This NFT',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 14,
        image: require('../../assets/images/nft/items/23.jpg'),
        title: 'A place where technology meets craftsmanship',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 15,
        image: require('../../assets/images/hotel/b1.jpg'),
        title: 'Design your apps in your own way',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 16,
        image: require('../../assets/images/hotel/b2.jpg'),
        title: 'How apps is changing the IT world',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 17,
        image: require('../../assets/images/hotel/b3.jpg'),
        title: 'Smartest Applications for Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 18,
        category: 'tech',
        image: require('../../assets/images/blog/09.jpg'),
        title: 'How apps is changing the IT world',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 19,
        category: 'tech',
        image: require('../../assets/images/blog/10.jpg'),
        title: 'Smartest Applications for Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 20,
        category: 'tech',
        image: require('../../assets/images/blog/11.jpg'),
        title: 'Stop Worrying About Deadlines! We Got You Covered',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 21,
        category: 'lifestyle',
        image: require('../../assets/images/blog/12.jpg'),
        title: 'Change Your Strategy: Find a Business Consultant',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 22,
        category: 'food',
        image: require('../../assets/images/food/blog/1.jpg'),
        title: 'Everything About Financial Modeling',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 23,
        category: 'lifestyle',
        image: require('../../assets/images/blog/13.jpg'),
        title: 'On the other hand we provide denounce',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 24,
        category: 'business',
        image: require('../../assets/images/blog/14.jpg'),
        title: 'Design your apps in your own way',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 25,
        category: 'food',
        image: require('../../assets/images/food/blog/2.jpg'),
        title: 'How apps is changing the IT world',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit'
    },
    {
        id: 26,
        image: require('../../assets/images/food/blog/3.jpg'),
        titile: 'Dont miss these amazing side trips',
        date: '1st May 2022'
    },
]

onMounted(() => {
  id.value = route.params.id;
  data.value = datas.find((item) => item.id === parseInt(id.value));
});
</script>
