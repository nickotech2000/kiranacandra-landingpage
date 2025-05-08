<template>
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="grid grid-cols-12 gap-6 items-center relative">
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
                            <div class="overflow-hidden"></div>
                            <span class="absolute size-[512px] bg-indigo-600/5 top-0 -end-5 -z-1 rounded-full"></span>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <h3 class="mb-6 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">The Techwind Yoga <br> & Meditation</h3>

                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.</p>
                        
                            <div class="mt-6">
                                <router-link to="#" class="relative inline-block tracking-wide align-middle text-base text-center border-none font-semibold text-indigo-600 duration-500 ease-in-out">Learn more <i class="uil uil-arrow-right"></i></router-link>
                                <span class="absolute h-px w-0 hover:w-full end-0 hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script setup>
   import about1 from '@/assets/images/yoga/ab01.jpg'
   import about2 from '@/assets/images/yoga/ab02.jpg'
   import about3 from '@/assets/images/yoga/ab03.jpg'
</script>
