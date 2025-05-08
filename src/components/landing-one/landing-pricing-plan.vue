<template>
        <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pricing Plans</h3>
                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="group rounded-md shadow-sm bg-white dark:bg-slate-900">
                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h6 class="font-bold mb-3 text-lg uppercase">{{item.name}}</h6>
                            <p class="text-slate-400 mb-0">{{item.title}}</p>

                            <div class="flex my-5">
                                <span class="text-xl font-semibold">{{ item.symbol }}</span>
                                <span class="price text-4xl font-semibold mb-0">{{ item.price }}</span>
                                <span class="text-xl font-semibold self-end mb-1">{{ item.time }}</span>
                            </div>

                            <router-link to="#" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full">Buy Now</router-link>
                        </div>

                        <div class="p-6">
                            <h6 class="mb-3 font-semibold">Features:</h6>
                            <ul v-if="item.icon === true" class="list-none text-slate-400">
                                <li v-for="feature in item.feature.slice(0,3)"  :key="feature" class="mb-1 flex"><span class="text-emerald-600 h5"><i class="uil uil-check-circle text-xl me-2"></i></span> {{feature}}</li>
                                <li  class="mb-1 flex"><span class="text-red-600 h5"><i class="uil uil-times-circle text-xl me-2"></i></span> Unlimited bandwidth </li>
                            </ul>
                            <ul v-if="item.icon === false" class="list-none text-slate-400">
                                <li v-for="feature in item.feature"  :key="feature" class="mb-1 flex"><span class="text-emerald-600 h5"><i class="uil uil-check-circle text-xl me-2"></i></span> {{feature}}</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:flex justify-center mt-4">
                    <div class="text-center">
                        <p class="text-slate-400">Note: <span class="text-red-600 fs-5">*</span>No credit card required</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
    const datas = [
        {
            name: 'Free',
            title: 'For individuals looking for a simple Free solution',
            symbol: '$',
            price: '0',
            time: '/mo',
            feature: ['1 Domains', '1 GB File upload', '2 GB Secure storage', 'Unlimited bandwidth'],
            icon: true
        },
        {
            name: 'Startups',
            title: 'For individuals looking for a simple Free solution',
            symbol: '$',
            price: '9',
            time: '/mo',
            feature: ['1 Domains', '1 GB File upload', '2 GB Secure storage', 'Unlimited bandwidth'],
            icon: true
        },
        {
            name: 'Business',
            title: 'For individuals looking for a simple Free solution',
            symbol: '$',
            price: '74',
            time: '/mo',
            feature: ['1 Domains', '1 GB File upload', '2 GB Secure storage', 'Unlimited bandwidth'],
            icon: true
        },
        {
            name: 'Premium',
            title: 'For individuals looking for a simple Free solution',
            symbol: '$',
            price: '99',
            time: '/mo',
            feature: ['1 Domains', '1 GB File upload', '2 GB Secure storage', 'Unlimited bandwidth'],
            icon: false
        },
    ]
</script>