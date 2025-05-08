<template>
    <div>
        <navbar :lightlogo=true :loginButton=true />
        <!-- Start Hero -->
        <section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1 text-center mt-10">
                    <h3 class="text-3xl leading-normal font-medium">Changelog</h3>
                </div><!--end grid-->
            </div><!--end container-->
            
            <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul class="tracking-[0.5px] mb-0 inline-block">
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/">Techwind</router-link></li>
                    <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><a href="">Docs</a></li>
                    <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Changelog</li>
                </ul>
            </div>
        </section><!--end section-->
        <div class="relative">
            <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!-- End Hero -->

         <!-- Start Section-->
         <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="md:flex justify-center">
                    <div class="lg:w-3/4 rounded-md shadow-sm dark:shadow-gray-800 h-fit bg-white dark:bg-slate-900">
                        <div class="p-6">
                             <!-- v1.0 Start -->
                             <h5 class="text-xl font-bold">Version <span class="text-emerald-600">2.3.0</span> - 9th September 2024</h5>
                            <ul class="list-none mb-10">
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="airplay" class="size-4 me-2 text-indigo-600 inline"></i>Landing</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Add : Added new Web Programming (index-web-programming) demo</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Add : Added new Index Cleaner (index-cleaner) demo</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Add : Added new Page Service Detail (page-service-detail) demo</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Version 3.5.3</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Router Version 4.4.3</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Countup 1.4.2</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Datepicker Version 8.8.1</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Jarallax Version 2.2.1</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Swiper Version 11.1.12</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Tailwind Css 3.4.10</li>
                            </ul>

                            <ul class="list-none mb-10">
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="airplay" class="size-4 me-2 text-indigo-600 inline"></i>Admin Dashboard:</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Add : Added new Index Ecommerce (index-ecommerce) demo</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Version 3.5.3</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Router Version 4.4.3</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Ckeditor5-build-classic 43.1.0</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Ckeditor5-vue 7.0.0</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Fullcalendar 6.1.15</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Simplebar 6.2.7</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue Countup 1.4.2</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Vue3 Apexcharts 1.6.0</li>
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Update: Updated the Tailwind Css 3.4.10</li>
                            </ul>
                            <!-- v1.0 End -->

                            <!-- v1.0 Start -->
                            <h5 class="text-xl font-bold">Version <span class="text-emerald-600">1.0.0</span> - 23th April 2024</h5>
                            <ul class="list-none mb-10">
                                <li class="items-center text-slate-400 my-3 ms-2"><i data-feather="arrow-right-circle" class="size-4 me-2 text-indigo-600 inline"></i>Initial Released</li>
                            </ul>
                            <!-- v1.0 End -->

                            <div>
                                <a href="https://1.envato.market/techwind-vue" target="_blank" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Download Now</a>
                            </div>
                        </div>
                    </div>
                </div><!--grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End Section-->
        <footers :email=true />
        <switcher />
    </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            navbar,
            footers,
            switcher
        }
    }
</script>

<style lang="scss" scoped>

</style>