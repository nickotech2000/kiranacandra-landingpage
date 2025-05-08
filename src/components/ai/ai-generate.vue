<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] relative">
            <div class="lg:col-span-8 md:col-span-12">
                <div class="grid grid-cols-1 pb-8">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">AI Generate
                        Content In Seconds</h3>

                    <p class="text-slate-400 max-w-xl">Launch your campaign and benefit from our expertise on designing
                        and managing conversion centered Tailwind CSS v4.x html page.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div v-for="service in services" :key="service"
                        class="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                        <i :class="service.icon"></i>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{
                        service.title }}</router-link>
                            <p class="text-slate-400 mt-3">{{ service.desc }}</p>

                            <div class="mt-5">
                                <router-link to="/page-services"
                                    class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
                                    <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-4 md:col-span-12">
                <div class="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    <div v-for="service in services2" :key="service"
                        class="px-6 py-10 shadow-sm hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-lg hover:bg-white hover:dark:bg-slate-900">
                        <i
                            :class="service.icon"></i>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{ service.title }}</router-link>
                            <p class="text-slate-400 mt-3">T{{ service.desc }}</p>

                            <div class="mt-5">
                                <router-link to="/page-services"
                                    class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
                                    <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                    Read More <i class="uil uil-arrow-right"></i></router-link>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--grid-->
    </div><!--end container-->
</template>

<script>
export default {
    name: 'aiGenerate',
    data() {
        return {
            services: [
                {
                    icon: 'uil uil-flip-h text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Plagiarism checker',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'uil uil-envelope-upload text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Plagiarism checker',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'uil uil-star text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Search Engine Optimization',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'uil uil-bookmark text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Digital name generator',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ],
            services2: [
                {
                    icon: 'uil uil-users-alt text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Ad Targeting tips',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
                {
                    icon: 'uil uil-comments text-4xl bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text',
                    title: 'Content Rewriter',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>