<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-x-[30px] gap-y-[50px]">
            <div v-for="item in datas" :key="item" class="text-center md:px-3">
                <div class="size-24 bg-indigo-600/5 text-indigo-600 rounded-3xl text-4xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                    <i :class="item.icon"></i>
                </div>
                <div class="content mt-7">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>
                    <p class="text-slate-400 mt-3">{{item.title}}</p>
                </div>
            </div>                 
        </div>
    </div>
</template>

<script setup>
    const datas = [
        {
            icon: 'uil uil-chart-line',
            name: 'Hign Performance',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-crosshairs',
            name: 'Best Securities',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-airplay',
            name: 'Trusted Service',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-rocket',
            name: 'Info Technology',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-clock',
            name: '24/7 Support',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-users-alt',
            name: 'IT Management',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-file-alt',
            name: 'Certified Company',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-search',
            name: 'Data Analytics',
            title: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
    ]
</script>