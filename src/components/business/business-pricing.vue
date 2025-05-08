<template>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Choose Pricing Plan</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
            <div v-for="price in pricing" :key="price" class="group border-b-[3px] border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow-sm dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
                <div class="p-6 py-8">
                    <h6 class="font-bold uppercase mb-5 text-indigo-600">{{price.name}}</h6>
                    <div class="flex mb-5">
                        <span class="text-xl font-semibold">{{price.symbol }}</span>
                        <span class="price text-4xl font-semibold mb-0">{{ price.price }}</span>
                        <span class="text-xl font-semibold self-end mb-1">{{ price.time }}</span>
                    </div>

                    <ul class="list-none text-slate-400">
                        <li v-for="detail in price.detail" :key="detail" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{detail}}</li>
                    </ul>
                    <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">{{price.button}}</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    const pricing = [
        {
            name: 'Starter',
            symbol: '$',
            price: '39',
            time: '/mo',
            detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
            button: 'Get Started'
        },
        {
            name: 'Business',
            symbol: '$',
            price: '49',
            time: '/mo',
            detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
            button: 'Try it Now'
        },
        {
            name: 'Professional',
            symbol: '$',
            price: '59',
            time: '/mo',
            detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
            button: 'Try it Now'
        },
    ]
</script>