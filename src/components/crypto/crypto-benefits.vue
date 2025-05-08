<template>
        <section class="relative md:py-24 py-16 bg-[url('../../assets/images/crypto/bg2.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="absolute inset-0 bg-indigo-600/90"></div>
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Our Benefits</h3>
                    <p class="text-white/70 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="border border-dashed border-white/30 rounded-md p-6 text-center">
                        <i :class="item.icon"></i>

                        <div class="content mt-7">
                            <router-link to="#" class="text-lg font-medium text-white">{{item.name}}</router-link>
                            <p class="text-white/70 mt-3">{{item.title}}</p>
                            
                            <div class="mt-5">
                                <router-link to="#" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-white hover:text-white duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>

                    <div class="border border-dashed border-white/30 rounded-md p-6 text-center">
                        <i class="uil uil-lock-alt text-4xl text-white"></i>

                        <div class="content mt-7">
                            <router-link to="#" class="text-lg font-medium text-white">Platform Fees</router-link>
                            <p class="text-white/70 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div class="mt-5">
                                <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-white"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
    const datas = [
        {
            icon: 'uil uil-file-contract-dollar text-4xl text-white',
            name: 'Support',
            title: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-analytics text-4xl text-white',
            name: 'Service Level',
            title: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-dashboard text-4xl text-white',
            name: 'Take profit / Stoploss',
            title: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-swatchbook text-4xl text-white',
            name: 'Trailing Stop',
            title: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
        {
            icon: 'uil uil-exchange text-4xl text-white',
            name: 'Pending Orders',
            title: 'The phrasal sequence of the is now so that many campaign and benefit'
        },
    ]
</script>