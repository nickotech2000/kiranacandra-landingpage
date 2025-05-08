<template>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Select Phone Numbers</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect</p>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="number in numbers" :key="number" class="group p-4 text-center rounded-lg shadow-sm hover:shadow-lg dark:shadow-gray-800 duration-500">
                        <router-link to="#" class="hover:text-indigo-600 text-xl font-semibold">{{number.number}}</router-link>

                        <div class="mt-3 flex items-center justify-center">
                            <span class="text-indigo-600 text-lg">{{ number.price }}</span>
                            <router-link to="#" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full ms-3">Buy Now</router-link>
                        </div>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div class="md:col-span-12 text-center">
                        <router-link to="#" class="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-slate-400 hover:text-indigo-600 duration-500 ease-in-out">See More Numbers <i class="uil uil-arrow-right align-middle"></i></router-link>
                        <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                    </div>
                </div>
            </div>
</template>

<script setup>
    const numbers = [
        {
            number: '+201-102-0000',
            price: '$99'
        },
        {
            number: '+201-102-1234',
            price: '$99'
        },
        {
            number: '+201-102-4567',
            price: '$99'
        },
        {
            number: '+201-102-2345',
            price: '$99'
        },
        {
            number: '+201-102-3456',
            price: '$99'
        },
        {
            number: '+201-102-5678',
            price: '$99'
        },
        {
            number: '+201-102-6789',
            price: '$99'
        },
        {
            number: '+201-102-7891',
            price: '$99'
        },
        {
            number: '+201-102-8912',
            price: '$99'
        },
        {
            number: '+201-102-9123',
            price: '$99'
        },
        {
            number: '+201-102-4321',
            price: '$99'
        },
        {
            number: '+201-102-9876',
            price: '$99'
        },
        {
            number: '+201-102-8765',
            price: '$99'
        },
        {
            number: '+201-102-6543',
            price: '$99'
        },
        {
            number: '+201-102-5432',
            price: '$99'
        },
        {
            number: '+201-102-1597',
            price: '$99'
        },
        {
            number: '+201-102-3578',
            price: '$99'
        },
        {
            number: '+201-102-7954',
            price: '$99'
        },
        {
            number: '+201-102-1346',
            price: '$99'
        },
        {
            number: '+201-102-1379',
            price: '$99'
        },
        {
            number: '+201-102-4679',
            price: '$99'
        },
        {
            number: '+201-102-1245',
            price: '$99'
        },
        {
            number: '+201-102-4578',
            price: '$99'
        },
        {
            number: '+201-102-2356',
            price: '$99'
        },
    ]
</script>

<style lang="scss" scoped>

</style>