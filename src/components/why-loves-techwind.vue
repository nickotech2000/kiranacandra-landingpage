<template>
    <div>
            <div class="container relative ">
                <div class="grid grid-cols-1 pb-8 text-center" :class="wowAnimate" data-wow-delay=".1s">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Why Everyone Loves Techwind</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div class="relative" :class="wowAnimate" data-wow-delay=".3s">
                        <img src="../assets/images/saas/classic02.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                        <div class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div class="lg:ms-8" :class="wowAnimate" data-wow-delay=".3s">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br> With Real Problem</h4>
                        <p class="text-slate-400">{{ desc }}</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
                                <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div>
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2" :class="wowAnimate" data-wow-delay=".5s">
                        <img src="../assets/images/saas/classic03.png" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">
                        <div class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div class="lg:me-8 order-2 md:order-1" :class="wowAnimate" data-wow-delay=".5s">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Get Notified About Importent Email</h4>
                        <p class="text-slate-400">{{ desc }}</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                            
                        </ul>

                        <div class="mt-4">
                            <router-link to="page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
                            <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                                Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div>
    
            </div><!--end container-->
        </div>
</template>

<script>
    export default {
        props:{
            wowAnimate:{
                type: String,
                required: true
            }
        },
        data() {
            return {
                datas:[
                 'Digital Marketing Solutions for Tomorrow' , ' Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand' ],
                 desc: 'Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.'
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>