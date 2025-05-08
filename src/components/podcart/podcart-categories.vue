<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Explore Podcast Categories</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="flex justify-center items-center text-center mt-8">
            <ul class="list-none space-x-3 space-y-4">
                <li v-for="item in categories" :key="item" class="inline-block">
                    <router-link to="#" class="group flex items-center bg-white dark:bg-slate-900 hover:text-indigo-600 shadow-sm hover:shadow-md dark:shadow-gray-800 hover:dark:shadow-gray-800 border-4 border-double border-gray-100 hover:border-indigo-600/30 dark:border-gray-800 hover:dark:border-indigo-600/50 py-1.5 px-4 rounded-full align-middle duration-500">
                        <i :class="item.icon" class="me-2 text-[18px]"></i>
                        <span class="text-[18px] font-medium">{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const categories = [
        {
            title: 'Art',
            icon: 'uil uil-airplay',
        },
        {
            title: 'Comedy',
            icon: 'uil uil-at',
        },
        {
            title: 'News',
            icon: 'uil uil-award',
        },
        {
            title: 'Business',
            icon: 'uil uil-bag',
        },
        {
            title: 'Entertainment',
            icon: 'uil uil-dna',
        },
        {
            title: 'Education',
            icon: 'uil uil-dribbble',
        },
        {
            title: 'Movies',
            icon: 'uil uil-favorite',
        },
        {
            title: 'Culture',
            icon: 'uil uil-discord',
        },
        {
            title: 'Relationship',
            icon: 'uil uil-cube',
        },
        {
            title: 'Travel',
            icon: 'uil uil-compass',
        },
        {
            title: 'Science',
            icon: 'uil uil-club',
        },
        {
            title: 'Corporate',
            icon: 'uil uil-check-circle',
        },
        {
            title: 'Sports',
            icon: 'uil uil-bright',
        },
        {
            title: 'Family & Friends',
            icon: 'uil uil-books',
        },
        {
            title: 'Design',
            icon: 'uil uil-battery-bolt',
        },
        {
            title: 'Banking',
            icon: 'uil uil-bolt',
        },
        {
            title: 'Goveronment',
            icon: 'uil uil-atom',
        },
        {
            title: 'Web Development',
            icon: 'uil uil-bell',
        },
        {
            title: 'NFT',
            icon: 'uil uil-bitcoin',
        },
        {
            title: 'Stock Market',
            icon: 'uil uil-bitcoin-circle',
        },
    ]
</script>
