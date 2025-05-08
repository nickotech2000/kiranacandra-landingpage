<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Benefit for Traveller</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div v-for="traveller in travellers" :key="traveller" class="group p-6 rounded-lg shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 duration-500">
                <div class="size-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 duration-500">
                    <i :class="traveller.icon"></i>
                </div>

                <div class="content mt-7">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ traveller.name }}</router-link>
                    <p class="text-slate-400 mt-3">{{ traveller.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const travellers = [
        {
            icon: 'uil uil-shield-check',
            name: 'Secure Payment',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-thumbs-up',
            name: 'Easy Book',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-keyboard-show',
            name: 'Free Amenities',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-award',
            name: 'Best Offers',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-bookmark',
            name: 'Cheap than Other',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-favorite',
            name: 'Top Rated',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-clock',
            name: '24/7 Support',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-process',
            name: 'Fast Refund',
            desc: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
    ]
</script>
