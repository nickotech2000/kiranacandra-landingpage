<template>
    <!-- Start -->
    <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Features</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
                    <!-- Content -->
                    <div v-for="feature in features" :key="feature" class="group relative lg:px-6 mt-4 duration-500 rounded-xl overflow-hidden text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i :data-feather="feature.icon2" class="size-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                                <i :class="feature.icon"></i>
                            </div>
                        </div>

                        <div class="mt-6">
                            <a href="" class="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">{{ feature.title }}</a>
                            <p class="text-slate-400 duration-500 mt-3">{{feature.desc}}</p>
                        </div>
                    </div>
                    <!-- Content -->
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div class="relative">
                        <div class="md:me-10">
                            <img src="../../assets/images/saas/about.jpg" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                        </div>
                        <div class="absolute -bottom-10 end-0 p-6 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 md:w-80 w-60">
                            <h5 class="text-lg font-semibold mb-3">Helpcenter Software</h5>
                            <p class="text-slate-400">If the distribution of letters and 'words' is random</p>
                            <div class="flex justify-between mt-3 mb-2">
                                <span class="text-slate-400">Work in progress</span>
                                <span class="text-slate-400">84%</span>
                            </div>
                            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                <div class="bg-indigo-600 h-[6px] rounded-full" style="width: 84%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:ms-8 mt-8 md:mt-0">
                        <h4 class="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Manage all your tasks <br> on this one plateform</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <img src="../../assets/images/saas/classic03.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                    </div>

                    <div class="lg:me-8 order-2 md:order-1">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div>
            </div><!--end container-->
        </section><!--end section-->
        <!-- End  -->

</template>

<script>
    export default {
        name: 'featureS',
        data() {
            return {
                features: [
                    {
                        icon: 'uil uil-adjust-circle',
                        title: 'Grow Your Business',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                    {
                        icon: 'uil uil-circuit',
                        title: 'Drive More Sales',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                    {
                        icon: 'uil uil-fire',
                        title: 'Handled By Expert',
                        desc: "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
                        icon2: 'hexagon'
                    },
                ],
                datas: ['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand']
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>