<template>
    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Event Schedules</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>

            <div class="grid grid-cols-1 mt-8">
                <ul class="md:w-fit w-full mx-auto flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md space-x-1" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                    <li @click="toggle(1)"
                        :class="isActive === 1 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 hover:text-indigo-600 dark:hover:text-white dark:rounded-md'" role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full duration-500" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="true">Tuesday</button>
                    </li>
                    <li @click="toggle(2)"
                        :class="isActive === 2 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 hover:text-indigo-600 dark:hover:text-white dark:rounded-md'"
                        role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full duration-500" id="wednesday-tab"
                            data-tabs-target="#wednesday" type="button" role="tab" aria-controls="wednesday"
                            aria-selected="false">Wednesday</button>
                    </li>
                    <li @click="toggle(3)"
                        :class="isActive === 3 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 hover:text-indigo-600 dark:hover:text-white dark:rounded-md'"
                        role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full duration-500" id="thursday-tab"
                            data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday"
                            aria-selected="false">Thursday</button>
                    </li>
                    <li @click="toggle(4)"
                        :class="isActive === 4 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 hover:text-indigo-600 dark:hover:text-white dark:rounded-md'"
                        role="presentation" class="md:inline-block block md:w-fit w-full">
                        <button class="px-6 py-2 font-semibold rounded-md w-full duration-500" id="friday-tab"
                            data-tabs-target="#friday" type="button" role="tab" aria-controls="friday"
                            aria-selected="false">Friday</button>
                    </li>
                </ul>
                <div id="StarterContent" class="mt-1">
                    <div :class="isActive === 1 ? '' : 'hidden'" id="tuesday" role="tabpanel"
                        aria-labelledby="tuesday-tab">
                        <div class="grid grid-cols-1">
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table class="w-full text-start">
                                    <tbody>
                                        <tr v-for="item in datas" :key="item">
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                                               {{item.time}}</td>
                                            <td
                                                class="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                <div class="flex items-center">
                                                    <img :src="item.image"
                                                        class="rounded-full size-24 shadow-md dark:shadow-gray-700"
                                                        alt="">

                                                    <div class="ms-4">
                                                        <a href=""
                                                            class="hover:text-indigo-600 text-lg font-semibold">{{item.name}}</a>
                                                        <p class="text-slate-400 mt-2">{{ item.desc }}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                <span class="block">{{item.position}}</span>
                                                <span class="block text-black dark:text-white text-md mt-1">{{item.title}}</span>
                                            </td>
                                            <td
                                                class="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                <a href=""
                                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none font-medium hover:text-indigo-600 duration-500 ease-in-out">Buy
                                                    Ticket <i class="uil uil-arrow-right"></i></a>
                                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div :class="isActive === 2 ? '' : 'hidden'" id="wednesday" role="tabpanel"
                        aria-labelledby="wednesday-tab">
                        <div class="grid grid-cols-1">
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table class="w-full text-start">
                                    <tbody>
                                        <tr v-for="item in datas2" :key="item">
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                                               {{item.time}}</td>
                                            <td
                                                class="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                <div class="flex items-center">
                                                    <img :src="item.image"
                                                        class="rounded-full size-24 shadow-md dark:shadow-gray-700"
                                                        alt="">

                                                    <div class="ms-4">
                                                        <a href=""
                                                            class="hover:text-indigo-600 text-lg font-semibold">{{item.name}}</a>
                                                        <p class="text-slate-400 mt-2">{{ item.desc }}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                <span class="block">{{item.position}}</span>
                                                <span class="block text-black dark:text-white text-md mt-1">{{ item.title }}</span>
                                            </td>
                                            <td
                                                class="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                <a href=""
                                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none font-medium hover:text-indigo-600 duration-500 ease-in-out">Buy
                                                    Ticket <i class="uil uil-arrow-right"></i></a>
                                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div :class="isActive === 3 ? '' : 'hidden'" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                        <div class="grid grid-cols-1">
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table class="w-full text-start">
                                    <tbody>
                                        <tr v-for="item in datas3" :key="item">
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                                                {{item.time}}</td>
                                            <td
                                                class="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                <div class="flex items-center">
                                                    <img :src="item.image"
                                                        class="rounded-full size-24 shadow-md dark:shadow-gray-700"
                                                        alt="">

                                                    <div class="ms-4">
                                                        <a href=""
                                                            class="hover:text-indigo-600 text-lg font-semibold">{{item.name}}</a>
                                                        <p class="text-slate-400 mt-2">{{ item.desc }}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                <span class="block">{{item.position}}</span>
                                                <span class="block text-black dark:text-white text-md mt-1">{{ item.title }}</span>
                                            </td>
                                            <td
                                                class="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                <a href=""
                                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none font-medium hover:text-indigo-600 duration-500 ease-in-out">Buy
                                                    Ticket <i class="uil uil-arrow-right"></i></a>
                                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div :class="isActive === 4 ? '' : 'hidden'" id="friday" role="tabpanel"
                        aria-labelledby="friday-tab">
                        <div class="grid grid-cols-1">
                            <div class="relative overflow-x-auto block w-full bg-white dark:bg-slate-900">
                                <table class="w-full text-start">
                                    <tbody>
                                        <tr v-for="item in datas4" :key="item">
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[200px] text-slate-400">
                                                {{item.time}}</td>
                                            <td
                                                class="p-3 border-b border-gray-100 dark:border-gray-700 min-w-[540px] py-12 px-5">
                                                <div class="flex items-center">
                                                    <img :src="item.image"
                                                        class="rounded-full size-24 shadow-md dark:shadow-gray-700"
                                                        alt="">

                                                    <div class="ms-4">
                                                        <a href=""
                                                            class="hover:text-indigo-600 text-lg font-semibold">{{ item.name }}</a>
                                                        <p class="text-slate-400 mt-2">{{item.desc}}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                class="text-center border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px] text-slate-400">
                                                <span class="block">{{item.position}}</span>
                                                <span class="block text-black dark:text-white text-md mt-1">{{ item.title }}</span>
                                            </td>
                                            <td
                                                class="text-end border-b border-gray-100 dark:border-gray-700 py-12 px-5 min-w-[180px]">
                                                <a href=""
                                                    class="relative inline-block tracking-wide align-middle text-base text-center border-none font-medium hover:text-indigo-600 duration-500 ease-in-out">Buy
                                                    Ticket <i class="uil uil-arrow-right"></i></a>
                                                    <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import event1 from '@/assets/images/event/eve-sch/1.jpg'
import event2 from '@/assets/images/event/eve-sch/2.jpg'
import event3 from '@/assets/images/event/eve-sch/3.jpg'
import event4 from '@/assets/images/event/eve-sch/4.jpg'
import event5 from '@/assets/images/event/eve-sch/5.jpg'
import event6 from '@/assets/images/event/eve-sch/6.jpg'
import event7 from '@/assets/images/event/eve-sch/7.jpg'
import event8 from '@/assets/images/event/eve-sch/8.jpg'
import event9 from '@/assets/images/event/eve-sch/9.jpg'
import event10 from '@/assets/images/event/eve-sch/10.jpg'
import event11 from '@/assets/images/event/eve-sch/11.jpg'
import event12 from '@/assets/images/event/eve-sch/12.jpg'

const isActive = ref(1);

const toggle = (number) => {
  isActive.value = number;
};

const datas = [
    {
    time: '09:00AM - 10:00AM',
    image: event1,
    name: 'Digital Conference Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Raymond Turner'
    },
    {
    time: '10:30AM - 11:30AM',
    image: event2,
    name: 'Conference On User Interface',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Cindy Morrison'
    },
    {
    time: '12:00PM - 01:00PM',
    image: event3,
    name: 'Business World Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Vincent Adams'
    },
    {
    time: '02:00PM - 03:00PM',
    image: event4,
    name: 'Business Conference for professional',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Ana Heweit'
    },
]

const datas2 = [
    {
    time: '09:00AM - 10:00AM',
    image: event5,
    name: 'Digital Conference Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Raymond Turner'
    },
    {
    time: '10:30AM - 11:30AM',
    image: event6,
    name: 'Conference On User Interface',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Cindy Morrison'
    },
    {
    time: '12:00PM - 01:00PM',
    image: event7,
    name: 'Business World Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Vincent Adams'
    },
    {
    time: '02:00PM - 03:00PM',
    image: event8,
    name: 'Business Conference for professional',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Ana Heweit'
    },
]

const datas3 = [
    {
    time: '09:00AM - 10:00AM',
    image: event9,
    name: 'Digital Conference Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Raymond Turner'
    },
    {
    time: '10:30AM - 11:30AM',
    image: event10,
    name: 'Conference On User Interface',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Cindy Morrison'
    },
    {
    time: '12:00PM - 01:00PM',
    image: event11,
    name: 'Business World Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Vincent Adams'
    },
    {
    time: '02:00PM - 03:00PM',
    image: event12,
    name: 'Business Conference for professional',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Ana Heweit'
    },
]

const datas4 = [
    {
    time: '09:00AM - 10:00AM',
    image: event5,
    name: 'Digital Conference Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Raymond Turner'
    },
    {
    time: '10:30AM - 11:30AM',
    image: event6,
    name: 'Conference On User Interface',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Cindy Morrison'
    },
    {
    time: '12:00PM - 01:00PM',
    image: event7,
    name: 'Business World Event Intro',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Vincent Adams'
    },
    {
    time: '02:00PM - 03:00PM',
    image: event8,
    name: 'Business Conference for professional',
    desc: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century",
    position: 'Speaker',
    title: 'Ana Heweit'
    },
]

</script>

<style lang="scss" scoped></style>