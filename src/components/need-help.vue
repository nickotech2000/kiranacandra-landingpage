<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <div class="grid grid-cols-12 items-center gap-4 lg:gap-0">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 lg:gap-6 gap-4">
                                    <img src="../assets/images/notification.jpg" class="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="">
                                    <img src="../assets/images/about/ab02.jpg" class="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="">
                                </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1">
                                    <img src="../assets/images/about/ab01.jpg" class="shadow-sm rounded-md lg:max-w-[240px] mx-auto" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                        <div class="absolute flex justify-between items-center md:bottom-16 bottom-0 end-5 rounded-lg shadow-md dark:shadow-gray-800 lg:w-72 w-48 m-3">
                            <img src="../assets/images/sales-chart.jpg" class="rounded-lg shadow-sm dark:shadow-gray-800" alt="">
                        </div>
                    </div>

                    <div class="lg:me-8 order-2 md:order-1">
                        <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">If you need help, <br> we're here for you</h4>
                        
                        <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                            <div  v-for="item in datas" :key="item" class="relative shadow-sm mt-4 dark:shadow-gray-800 rounded-md overflow-hidden">
                                <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                                    <button @click="handleclick(item.id)"  :class="item.id === activeIndex ? 'bg-gray-50 dark:bg-slate-800 text-indigo-600' : ''" type="button" class="flex justify-between items-center p-5 w-full font-medium text-start" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                        <span> {{ item.title }}</span>
                                        <svg :class="item.id === activeIndex ? 'rotate-180' : ''" data-accordion-icon class="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-collapse-body-1" class="" :class="item.id === activeIndex ? '' : 'hidden'" aria-labelledby="accordion-collapse-heading-1">
                                    <div class="p-5">
                                        <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-indigo-600 hover:text-indigo-600  duration-500 ease-in-out">
                                <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 1,
                datas: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Techwind ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
    
            ],
            }
        },
        methods: {
            handleclick(id) {
            this.activeIndex = id
        },
    }
    }
</script>

<style lang="scss" scoped>

</style>