<template>
   <div class="container relative md:py-24 py-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Services</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold bg-gradient-to-r from-red-600 to-indigo-600 text-transparent bg-clip-text">We are SEO Professionals</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Your content is an integral part of your SEO efforts and online marketing strategy</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                    <div v-for="service in services" :key="service" :class="service.class">
                        <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800">
                            <i :class="service.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{service.name}}</router-link>
                            <p class="text-slate-400 mt-3">{{ service.desc }}</p>
                            
                            <div class="mt-5">
                                <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                               
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                services:[
                    {
                        icon: 'uil uil-arrow',
                        name: 'SEO',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                    {
                        icon: 'uil uil-pen',
                        name: 'Content Marketing',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                    {
                        icon: 'uil uil-circle-layer',
                        name: 'Branding',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                    {
                        icon: 'uil uil-chart-line',
                        name: 'Analytics',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                    {
                        icon: 'uil uil-users-alt',
                        name: 'Management',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                    {
                        icon: 'uil uil-comments',
                        name: 'Email Marketing',
                        desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                        class: 'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>