<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Yoga Schedule</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div class="lg:col-span-4 md:col-span-5">
                <div class="sticky top-20">
                    <ul class="flex-column text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li role="presentation">
                            <button @click="toggle(1)" :class="isActive === 1 ? 'text-white bg-indigo-600 rounded-md ' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600'" class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full duration-500" id="monday-tab" data-tabs-target="#monday" type="button" role="tab" aria-controls="monday" aria-selected="true">Monday</button>
                        </li>
                        <li role="presentation">
                            <button @click="toggle(2)" :class="isActive === 2 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600 dark:hover:text-white'" class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full mt-3 duration-500" id="tuesday-tab" data-tabs-target="#tuesday" type="button" role="tab" aria-controls="tuesday" aria-selected="false">Tuesday</button>
                        </li>
                        <li role="presentation">
                            <button @click="toggle(3)" :class="isActive === 3 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600 dark:hover:text-white'" class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full mt-3 duration-500" id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab"  aria-controls="wednesday" aria-selected="false">Wednesday</button>
                        </li>
                        <li role="presentation">
                            <button @click="toggle(4)" :class="isActive === 4 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600 dark:hover:text-white'" class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full mt-3 duration-500" id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab" aria-controls="thursday" aria-selected="false">Thursday</button>
                        </li>
                        <li role="presentation">
                            <button @click="toggle(5)" :class="isActive === 5 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600 dark:hover:text-white'"  class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full mt-3 duration-500" id="friday-tab" data-tabs-target="#friday" type="button" role="tab" aria-controls="friday" aria-selected="false">Friday</button>
                        </li>
                        <li role="presentation">
                            <button @click="toggle(6)" :class="isActive === 6 ? 'text-white bg-indigo-600 rounded-md' : 'dark:hover:bg-slate-800  hover:bg-gray-50 dark:rounded-md hover:text-indigo-600 dark:hover:text-white'" class="px-4 py-2 text-base font-semibold shadow-sm dark:shadow-gray-800 rounded-md w-full mt-3 duration-500" id="saturday-tab" data-tabs-target="#saturday" type="button" role="tab"  aria-controls="saturday" aria-selected="false">Saturday</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="lg:col-span-8 md:col-span-7">
                <div id="myTabContent" class="bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                    <div :class="isActive === 1 ? '' : 'hidden'" class="relative overflow-hidden" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                        <div v-for="schedule in schedules" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>
                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">
                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>
                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/ab01.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>

                    <div :class="isActive === 2 ? '' : 'hidden'" class="relative overflow-hidden" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                        <div v-for="schedule in schedules2" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>

                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>
                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/ab02.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>

                    <div :class="isActive === 3 ? '' : 'hidden'" class="relative overflow-hidden" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                        <div v-for="schedule in schedules3" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>

                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>
                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/ab03.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>

                    <div :class="isActive === 4 ? '' : 'hidden'" class="relative overflow-hidden" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                        <div v-for="schedule in schedules4" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>

                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>
                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/i9.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>

                    <div :class="isActive === 5 ? '' : 'hidden'" class="relative overflow-hidden" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                        <div v-for="schedule in schedules5" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>

                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>

                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/bg.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>

                    <div :class="isActive === 6 ? '' : 'hidden'" class="relative overflow-hidden" id="saturday" role="tabpanel" aria-labelledby="saturday-tab">
                        <div v-for="schedule in schedules6" :key="schedule" class="md:flex items-center p-6 relative z-1 border-t border-gray-200 dark:border-gray-800">
                            <h5 class="text-xl font-semibold w-24">{{ schedule.time }}</h5>

                            <div class="flex items-center md:ms-4 md:mt-0 mt-4">
                                <img :src="schedule.image" class="size-10 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                <div class="ms-4">
                                    <h5 class="text-lg font-semibold">{{ schedule.yoga }}</h5>
                                    <p class="text-slate-400">{{ schedule.name }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute inset-0 bg-[url('../../assets/images/yoga/i11.jpg')] bg-center bg-cover opacity-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import yoga1 from '@/assets/images/yoga/t01.jpg'
import yoga2 from '@/assets/images/yoga/t02.jpg'
import yoga3 from '@/assets/images/yoga/t03.jpg'
import yoga4 from '@/assets/images/yoga/t04.jpg'

const isActive = ref(1)

const toggle = (Number) =>{
    isActive.value = Number
}

const  schedules = [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Dhanurasana',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Bhujangasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Sirsasana',
        name: '- Alice Perry',
    },
    {
        time: '11:00AM',
        image: yoga4,
        yoga: 'Padmasana',
        name: '- Hayley Matthews',
    },
    {
        time: '2:00AM',
        image: yoga1,
        yoga: 'Utthita Parsvakonasana',
        name: '- Calvin Carlo',
    },
    {
        time: '3:00AM',
        image: yoga2,
        yoga: 'Natarajasana',
        name: '- Cristina Murphy',
    },
    {
        time: '4:00AM',
        image: yoga3,
        yoga: 'Halasana',
        name: '- Alice Perry',
    },
    {
        time: '5:00AM',
        image: yoga4,
        yoga: 'Vajrasana',
        name: '- Hayley Matthews',
    },
]

const schedules2 = [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Virabhadrasana',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Chakrasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Surya Namaskar',
        name: '- Alice Perry',
    },
    {
        time: '11:00AM',
        image: yoga4,
        yoga: 'Ustrasana',
        name: '- Hayley Matthews',
    },
    {
        time: '2:00AM',
        image: yoga1,
        yoga: 'Sarvangasana',
        name: '- Calvin Carlo',
    },
]

const schedules3 = [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Siddhasana',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Bhairavasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Vriksasana',
        name: '- Alice Perry',
    },
    {
        time: '11:00AM',
        image: yoga4,
        yoga: 'Tadasana',
        name: '- Hayley Matthews',
    },
    {
        time: '2:00AM',
        image: yoga1,
        yoga: 'Navasana',
        name: '- Calvin Carlo',
    },
]  

const schedules4 = [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Trikonasana',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Shavasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Baddha Konasana',
        name: '- Alice Perry',
    },
    {
        time: '11:00AM',
        image: yoga4,
        yoga: 'Gomukhasana',
        name: '- Hayley Matthews',
    },
]

const schedules5 =  [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Viparita Dandasana',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Bakasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Utkatasana',
        name: '- Alice Perry',
    },
    {
        time: '11:00AM',
        image: yoga4,
        yoga: 'Uttanasana',
        name: '- Hayley Matthews',
    },
    {
        time: '2:00AM',
        image: yoga1,
        yoga: 'Salabhasana',
        name: '- Calvin Carlo',
    },
    {
        time: '3:00AM',
        image: yoga2,
        yoga: 'Natarajasana',
        name: '- Cristina Murphy',
    },
]

const schedules6 = [
    {
        time: '8:00AM',
        image: yoga1,
        yoga: 'Ashtanga Namaskara',
        name: '- Calvin Carlo',
    },
    {
        time: '9:00AM',
        image: yoga2,
        yoga: 'Trivikramasana',
        name: '- Cristina Murphy',
    },
    {
        time: '10:00AM',
        image: yoga3,
        yoga: 'Garudasana',
        name: '- Alice Perry',
    },
]

</script>
