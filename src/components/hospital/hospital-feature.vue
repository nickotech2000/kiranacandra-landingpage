<template>
    <div class="container relative">
        <div class="flex justify-center">
            <div class="relative z-2 duration-500 sm:-mt-[200px] -mt-[140px] m-0 lg:w-10/12 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md p-6">
                <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                    <div v-for="item in datas" :key="item" class="">
                        <div class="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-6">
                            <h5 class="text-lg font-medium">{{ item.name }}</h5>
                            <p class="text-slate-400 mt-3">{{ item.desc }}</p>

                            <div class="mt-5">
                                <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="size-16 bg-indigo-600/5 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                            <i class="uil uil-clock"></i>
                        </div>

                        <div class="content mt-6">
                            <h5 class="text-lg font-medium">Opening Hours</h5>
                            <ul class="list-none mt-3">
                                <li v-for="item in days" :key="item" class="flex justify-between">
                                    <p class="text-slate-400">{{item.day}}</p>
                                    <p class="text-indigo-600">{{item.time}}</p>
                                </li>
                            </ul>

                            <div class="mt-5">
                                <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
                                <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const datas = [
    {
        icon: 'uil uil-clinic-medical',
        name: 'Emergency Cases',
        desc: "This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'."
    },
    {
        icon: 'uil uil-medkit',
        name: 'Doctors Timetable',
        desc: "This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'."
    },
]

const days = [
    {
        day: 'Monday - Friday',
        time: '8.00 - 20.00'
    },
    {
        day: 'Saturday',
        time: '8.00 - 18.00'
    },
    {
        day: 'Sunday',
        time: '8.00 - 14.00'
    },
]

</script>
