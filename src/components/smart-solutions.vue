<template>
    <!-- Start Section-->
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
                <div class="lg:col-span-8 md:col-span-12">
                    <div class="grid grid-cols-1 pb-8">
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Instant
                            Smart Solutions <br> With Techwind</h3>

                        <p class="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on
                            designing and managing conversion centered Tailwind CSS v4.x html page.</p>
                    </div><!--end grid-->

                    <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <div v-for="service in services" :key="service"
                            class="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                            <i :data-feather="service.icon" class="size-12 stroke-1 text-indigo-600"></i>

                            <div class="content mt-7">
                                <router-link to="/page-services"
                                    class="title h5 text-lg font-medium hover:text-indigo-600">{{ service.title }}</router-link>
                                <p class="text-slate-400 mt-3">{{ service.desc }}</p>

                                <div class="mt-5">
                                    <router-link to="/page-services"
                                        class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                        Read More <i class="uil uil-arrow-right"></i></router-link>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-12">
                    <div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        <div v-for="service in services2" :key="service"
                            class="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-2xl bg-white dark:bg-slate-900">
                            <i :data-feather="service.icon" class="size-12 stroke-1 text-indigo-600"></i>

                            <div class="content mt-7">
                                <router-link to="/page-services"
                                    class="title h5 text-lg font-medium hover:text-indigo-600">{{service.title}}</router-link>
                                <p class="text-slate-400 mt-3">{{ service.desc }}</p>

                                <div class="mt-5">
                                    <router-link to="/page-services"
                                        class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="overflow-hidden ">
                    <span class="absolute h-40 w-40 bg-red-600/5 top-2/4 start-0 -z-1 rounded-3xl animate-[spin_10s_linear_infinite]"></span>
                </div>
                <div
                    class="overflow-hidden ">
                    <span class="absolute size-[512px] bg-indigo-600/5 top-1/4 end-0 -z-1 rounded-full"></span>
                </div>
            </div><!--grid-->
        </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: 'codesandbox',
                    title: 'User Friendly',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'send',
                    title: 'Super Fast',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'star',
                    title: 'Insightful Analytics',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'bookmark',
                    title: 'Highly Rated',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ],
            services2: [
                {
                    icon: 'users',
                    title: 'User Forum Forum',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'message-circle',
                    title: '24/7 Support',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>