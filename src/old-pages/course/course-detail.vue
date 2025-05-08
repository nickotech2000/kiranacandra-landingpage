<template>
<div>
   <navbar :navLight="'nav-light'" />
    <section class="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover" :style="{ 'background-image': `url(${data && data.image ? data.image : image})` }">
        <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center mt-10">
                <span class="bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded w-fit mx-auto h-5">$11/Lesson</span>
                <h3 class="mt-3 text-3xl leading-normal font-medium text-white">{{ data && data.title ? data.title : 'Become a Professional Graphic Designer' }}</h3>
                <div class="flex items-center mx-auto mt-3">
                    <img :src="client1" class="size-10 rounded-full shadow-md dark:shadow-gray-800" alt="">
                    <router-link to="#" class="font-semibold text-white block ms-3">Calvin Carlo</router-link>
                </div>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li v-for="item in datas" :key="item" class="inline-block items-center mt-2 mx-3">
                    <i :class="item.icon"></i>
                    <span class="text-white/60 ms-1">{{item.name}}</span>
                </li>
                <li class="inline-block items-center mt-2 mx-3">
                    <i class="uil uil-shopping-cart text-white"></i>
                    <a href="https://1.envato.market/techwind-vue" target="_blank" class="text-white">Buy Now</a>
                </li>
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

    <section class="relative md:py-24 py-16 overflow-hidden">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <h5 class="text-2xl font-semibold mb-5">Overview</h5>

                <p class="text-slate-400 mb-3">Ooh, name it after me! Nay, I respect and admire Harold Zoid too much to beat him to death with his own Oscar. Why would I want to know that? What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.</p>
                <p class="text-slate-400 mb-3">It's a T. It goes “tuh”. You seem malnourished. Are you suffering from intestinal parasites? I suppose I could part with 'one' and still be feared… And I'd do it again! And perhaps a third time! But that would be it.</p>
                <p class="text-slate-400 mb-3">I'm just glad my fat, ugly mama isn't alive to see this day. I can explain. It's very valuable. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him.</p>
                <p class="text-slate-400 mb-3">Bender, we're trying our best. Kif might! You can crush me but you can't crush my spirit! Kif, I have mated with a woman. Inform the men. I'm Santa Claus!</p>
                <p class="text-slate-400">What are you hacking off? Is it my torso?! 'It is!' My precious torso! You, a bobsleder!? That I'd like to see! And I'd do it again! And perhaps a third time! But that would be it. My fellow Earthicans, as I have explained in my book 'Earth in the Balance”, and the much more popular ”Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.</p>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 mt-6 gap-[30px]">
                <img  :src="data && data.image ? data.image : blogimage" class="rounded-md shadow" alt="">

                <div class="relative">
                    <img :src="c8" class="rounded-md shadow" alt="">

                    <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                        <router-link to="#" @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white cursor-pointer">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 mt-8">
                <h5 class="text-2xl font-semibold mb-5">Curriculum</h5>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]">
                <div>
                    <h5 class="text-lg font-semibold mb-5">Introductions</h5>

                    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        <table class="w-full text-start">
                            <thead>
                                <tr>
                                    <th class="px-4 py-5 text-start">Lessons</th>
                                    <th class="px-4 py-5 text-end">Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 1</a></td>
                                    <td class="p-4 text-end"><span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 2</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 3</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 4</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h5 class="text-lg font-semibold mb-5">Mastery</h5>
                    
                    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        <table class="w-full text-start">
                            <thead>
                                <tr>
                                    <th class="px-4 py-5 text-start">Lessons</th>
                                    <th class="px-4 py-5 text-end">Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 5</a></td>
                                    <td class="p-4 text-end"><span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 6</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 7</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 8</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h5 class="text-lg font-semibold mb-5">Final Thoughts</h5>
                    
                    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        <table class="w-full text-start">
                            <thead>
                                <tr>
                                    <th class="px-4 py-5 text-start">Lessons</th>
                                    <th class="px-4 py-5 text-end">Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 9</a></td>
                                    <td class="p-4 text-end"><span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 10</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 11</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 12</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h5 class="text-lg font-semibold mb-5">Bonus</h5>
                    
                    <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        <table class="w-full text-start">
                            <thead>
                                <tr>
                                    <th class="px-4 py-5 text-start">Lessons</th>
                                    <th class="px-4 py-5 text-end">Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 13</a></td>
                                    <td class="p-4 text-end"><span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Watch Free</span></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 14</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 15</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>

                                <tr class="border-t border-gray-100 dark:border-gray-700">
                                    <td class="p-4"><a href="" class=""><i class="uil uil-clipboard-alt"></i> Lesson 16</a></td>
                                    <td class="p-4 text-end"><i class="uil uil-lock"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <subscribe />
        </div>
    </section>

    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
        </div>
        <button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <footers :email=true />
    <switcher />
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import navbar from '@/components/navbar/navbar.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import subscribe from '@/components/subscribe.vue';
import blogimage from '../../assets/images/course/c3.jpg';
import image from '../../assets/images/course/cta.jpg';

import c1 from '@/assets/images/course/c1.jpg'
import c2 from '@/assets/images/course/c2.jpg'
import c3 from '@/assets/images/course/c3.jpg'
import c4 from '@/assets/images/course/c4.jpg'
import c5 from '@/assets/images/course/c5.jpg'
import c6 from '@/assets/images/course/c6.jpg'
import c7 from '@/assets/images/course/c7.jpg'
import c8 from '@/assets/images/course/c8.jpg'
import c9 from '@/assets/images/course/c9.jpg'
import c10 from '@/assets/images/course/c10.jpg'
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

const isActive = ref(false);
const data = ref('');
const id = ref('');
const route = useRoute();

const datas = ref([
  { icon: 'uil uil-clock text-white', name: '10 Weeks', link: '' },
  { icon: 'uil uil-signal text-white', name: 'All Levels', link: '' },
  { icon: 'uil uil-book-open text-white', name: '16 Lessons', link: '' },
  { icon: 'uil uil-cube text-white', name: '0 Quiz', link: '' },
  { icon: 'uil uil-book-reader text-white', name: '5 Students', link: '' }
]);



const datas2 = [
    {
        id:1,
        image: c1,
        image2: client1,
        name: 'Calvin Carlo',
        position: 'Professor',
        course: 'Digital Marketing',
        title: 'Starting SEO as your Home Based Business',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:2,
        image: c2,
        image2: client2,
        name: 'Christa Smith',
        position: 'Professor',
        course: 'Engineering',
        title: 'Java Programming Masterclass for Software',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:3,
        image: c3,
        image2: client3,
        name: 'Jani Jangad',
        position: 'Professor',
        course: 'Engineering',
        title: 'Microsoft Excel - Excel from Beginner to Advanced',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:4,
        image: c4,
        image2: client4,
        name: 'John Cartwright',
        position: 'Professor',
        course: 'Web Development',
        title: 'Vue - The Complete Guide (w/ Router, Composition API)',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:5,
        image: c5,
        image2: client5,
        name: 'Sally Short',
        position: 'Professor',
        course: 'Front-end Design',
        title: 'HTML, CSS, Javascripts, and Basic Knowledge about web design',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:6,
        image: c6,
        image2: client6,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:7,
        image: c7,
        image2: client1,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:8,
        image: c8,
        image2: client2,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:9,
        image: c9,
        image2: client3,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
    {
        id:10,
        image: c10,
        image2: client4,
        name: 'William Benson',
        position: 'Professor',
        course: 'Back-end Development',
        title: 'C Programming For Beginners - Master the C Language',
        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
        lectures: '25 Lectures',
        time: '1h 30m',
        view: '3012',
        price: '$11'
    },
]

onMounted(() => {
  id.value = route.params.id;
  data.value = datas2.find((item) => item.id === parseInt(id.value));
});

function toggle() {
  isActive.value = !isActive.value;
}
</script>