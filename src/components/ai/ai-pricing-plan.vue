<template>
     <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Our Pricing Plans</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="price in pricing" :key="price" class="group md:flex items-center justify-between p-6 rounded-lg shadow-sm dark:shadow-gray-700">
                        <div class="lg:flex items-center justify-between lg:w-2/4">
                            <div class="lg:mb-0 mb-5">
                                <h5 class="text-2xl font-semibold">{{price.name}}</h5>
                                <p class="text-slate-400 lg:w-[200px] md:w-[300px] mt-2">{{ price.title }}</p>
                            </div>
    
                            <ul class="list-none text-slate-400 md:mb-0 mb-5">
                                <li v-for="detail in price.detail" :key="detail" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{detail}}</li>
                            </ul>
                        </div>

                        <div class="flex md:mb-0 mb-5">
                            <span class="text-xl font-semibold">{{ price.symbol }}</span>
                            <span class="price text-4xl font-semibold mb-0">{{ price.price }}</span>
                            <span class="text-xl font-semibold self-end mb-1">{{ price.time }}</span>
                        </div>

                        <a href="" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-gray-100 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-600 text-slate-900 dark:text-white hover:text-white rounded-full">{{price.button}}</a>
                    </div><!--end content--> 
                </div><!--end-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return { 
                pricing: [
                    {
                        name: 'Free',
                        title: 'We offers a free month of service for new customers.',
                        detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
                        symbol: '$',
                        price: '0',
                        time: '/mo',
                        button: 'Signup'
                    },
                    {
                        name: 'Starter',
                        title: 'We offers a free month of service for new customers.',
                        detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
                        symbol: '$',
                        price: '9',
                        time: '/mo',
                        button: 'Buy Now'
                    },
                    {
                        name: 'Business',
                        title: 'We offers a free month of service for new customers.',
                        detail: ['Full Access', 'Source Files', 'Free Appointments', 'Enhanced Security'],
                        symbol: '$',
                        price: '29',
                        time: '/mo',
                        button: 'Started now'
                    },

                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>