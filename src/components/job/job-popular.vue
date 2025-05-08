<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="job in jobs" :key="job.id" class="rounded-md shadow-sm dark:shadow-gray-800">
                <div class="p-6">
                    <router-link :to="`/page-job-detail/${job.id}`" class="title h5 text-lg font-semibold hover:text-indigo-600">{{job.name}}</router-link>
                    <p class="text-slate-400 mt-2"><i class="uil uil-clock text-indigo-600"></i> {{job.day}}</p>
                    <div class="flex justify-between items-center mt-4">
                        <span class="bg-indigo-600/5 text-indigo-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{{job.time}}</span>
                        <p class="text-slate-400"><i class="uil uil-usd-circle text-indigo-600"></i> {{job.salary}}</p>
                    </div>
                </div>

                <div class="flex items-center p-6 border-t border-gray-100 dark:border-gray-800">
                    <img :src="job.image" class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="">
                    <div class="ms-3">
                        <h6 class="mb-0 font-semibold text-base">{{job.company}}</h6>
                        <span class="text-slate-400 text-sm">{{job.location}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div class="md:col-span-12 text-center">
                <router-link to="/page-job-grid" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>See More Jobs <i class="uil uil-arrow-right align-middle"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import job1 from '@/assets/images/client/facebook-logo-2019.png'
import job2 from '@/assets/images/client/google-logo.png'
import job3 from '@/assets/images/client/linkedin.png'
import job4 from '@/assets/images/client/skype.png'
import job5 from '@/assets/images/client/spotify.png'
import job6 from '@/assets/images/client/telegram.png'

    const jobs = [
        {
            id: 1,
            name: 'Software Engineering',
            day: 'Posted 3 Days ago',
            time:'Full Time',
            salary: '$950 - $1100/mo',
            image: job1,
            company: 'Facebook Ltd.',
            location: 'Australia'
        },
        {
            id: 2,
            name: 'Web Developer',
            day: 'Posted 3 Days ago',
            time:'Remote',
            salary: '$2500 - $2600/mo',
            image: job2,
            company: 'Google Ltd.',
            location: 'America'
        },
        {
            id: 3,
            name: 'UX/UI Designer',
            day: 'Posted 3 Days ago',
            time:'Freelance',
            salary: '$3500 - $3600/mo',
            image: job3,
            company: 'Linkedin Ltd.',
            location: 'Canada'
        },
        {
            id: 4,
            name: 'Human Resource(HR)',
            day: 'Posted 3 Days ago',
            time:'Part Time',
            salary: '$2000 - $2500/mo',
            image: job4,
            company: 'Skype Ltd.',
            location: 'UK'
        },
        {
            id: 5,
            name: 'Web Designer',
            day: 'Posted 3 Days ago',
            time:'Full Time',
            salary: '$1500 - $1600/mo',
            image: job5,
            company: 'Spotify Ltd.',
            location: 'China'
        },
        {
            id: 6,
            name: 'Graphic Designer',
            day: 'Posted 3 Days ago',
            time:'Part time',
            salary: '$500 - $600/mo',
            image: job6,
            company: 'Telegram Ltd.',
            location: 'India'
        },
    ]
</script>

