<template>
        <section class="relative md:py-24 py-16">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center">
                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img :src="about3" class="shadow-sm rounded-md" alt="">
                                    <img :src="about2" class="shadow-sm rounded-md" alt="">
                                </div>
                            </div>

                            <div class="col-span-6">
                                <div class="grid grid-cols-1 gap-6">
                                    <img :src="about1" class="shadow-sm rounded-md" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <h3 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are Largest Job <br> Site in The World</h3>

                            <p class="text-slate-400 max-w-xl mb-2">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind css html page.</p>
                            <p class="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div class="mt-6">
                                <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right align-middle"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative mt-12">
                <div class="grid grid-cols-2 md:grid-cols-4">
                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="3" :end-val="200"></count-up>+K</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Total User</span>
                    </div>

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="15"></count-up>+</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Years of Experience</span>
                    </div>

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="5" :end-val="54"></count-up></h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">Offices in the World</span>
                    </div>

                    <div class="counter-box relative text-center">
                        <h3 class="font-extrabold lg:text-[72px] text-[50px] opacity-5 flex justify-center"><count-up class="counter-value" :start-val="12" :end-val="125"></count-up>K</h3>
                        <span class="counter-head font-semibold text-xl absolute top-2/4 start-0 end-0">No. of Job Positions</span>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
    import CountUp from 'vue-countup-v3'
    import about1 from '@/assets/images/about/ab01.jpg'
    import about2 from '@/assets/images/about/ab02.jpg'
    import about3 from '@/assets/images/about/ab03.jpg'
</script>