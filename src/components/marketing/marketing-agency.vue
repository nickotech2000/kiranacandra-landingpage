<template>
    <!-- Start -->
    <section class="realtive md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">A Performance-driven Marketing Agency</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">We offer flexible and comprehensive online marketing plans and strategies so you can take advantage of our full spectrum of marketing services.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    <div class="lg:col-span-4 md:col-span-5">
                        <div class="sticky top-20">
                            <ul class="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                                <li v-for="item in steps" :key="item" role="presentation" class="mt-4 first:mt-0">
                                    <button @click="handleclick(item.id)" :class="item.id === activeIndex ? 'text-white bg-indigo-600 ' : 'dark:hover:bg-slate-800 hover:text-indigo-600 hover:bg-gray-50 dark:hover:text-white'" class="px-4 py-2 text-start text-base font-semibold rounded-md w-full  duration-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                                        <span class="block">{{ item.step }}</span>
                                        <span class="text-xl mt-2 block">SEO Audit</span>
                                        <span class="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" class="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                            <div class="" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <img :class="activeIndex === 1 ? '' : 'hidden'" src="../../assets/images/cowork/7.jpg" class="shadow-sm rounded-md" alt="">
                            </div>
                            <div class=" " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                <img :class="activeIndex === 2 ? '' : 'hidden'" src="../../assets/images/cowork/8.jpg" class="shadow-sm rounded-md" alt="">
                            </div>
                            <div class=" " id="settings" role="tabpanel" aria-labelledby="settings-tab">
                                <img :class="activeIndex === 3 ? '' : 'hidden'" src="../../assets/images/cowork/9.jpg" class="shadow-sm rounded-md" alt="">
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 1,
                steps:[
                    {
                        id: 1,
                        step: 'Step 1',
                        name: 'SEO Audit',
                        desc: 'We offer flexible and comprehensive online marketing plans'
                    },
                    {
                        id: 2,
                        name: 'Project Execution',
                        step: 'Step 2',
                        desc: 'We offer flexible and comprehensive online marketing plans'
                    },
                    {
                        id: 3,
                        step: 'Step 3',
                        name: 'Results & Reporting',
                        desc: 'We offer flexible and comprehensive online marketing plans'
                    },
                ]
                
            }
        },
        methods: {
        handleclick(id){
            this.activeIndex = id;
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>