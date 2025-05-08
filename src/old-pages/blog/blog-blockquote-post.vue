<template>
<div>
    <Navbar :lightlogo=true :loginButton=true />
    <section class="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8 md:col-span-6">
                    <div class="relative">
                        <div
                            class="relative py-10 px-12 border-2 border-indigo-600 rounded-[30px]">
                            <span class="absolute w-28 border-[6px] border-white dark:border-slate-900 -bottom-1 start-16 z-2"></span>
                            <span class="absolute border-2 border-indigo-600 rounded-none rounded-e-[50px] w-20 h-20 -bottom-[80px] start-[60px] z-3 border-s-0 border-b-0"></span>
                            <span class="font-semibold text-2xl leading-normal">
                                Launch your campaign and benefit from our expertise on designing and managing conversion
                                centered latest Tailwind CSS html page.
                            </span>

                            <div
                                class="absolute text-8xl -top-0 start-4 text-indigo-600/10 dark:text-indigo-600/20 -z-1">
                                <i class="mdi mdi-format-quote-open"></i>
                            </div>
                        </div>

                        <div class="text-lg font-semibold mt-6 ms-44">
                            - Shreethemes
                        </div>
                    </div>

                    <Report />
                </div>

                <Sidebar />
            </div>
        </div>

        <div class="container relative md:mt-24 mt-16">
            <Subscribe />
        </div>
    </section>
    <Footers :emial=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Subscribe from '@/components/subscribe.vue';
import Sidebar from '@/components/blogs/blog-sidebar.vue';
import Report from '@/components/report.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
</script>
