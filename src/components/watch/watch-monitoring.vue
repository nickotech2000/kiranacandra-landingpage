<template>
    <div>
            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div class="relative">
                        <img src="../../assets/images/smartwatch/2.png" class="max-w-[440px] mx-auto" alt="">
                        <div class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 start-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div class="lg:ms-8">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Real Time Health <br> Monitoring</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{ item }}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div>
            </div><!--end container-->

            <div class="container relative md:py-24 py-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div class="relative order-1 md:order-2">
                        <img src="../../assets/images/smartwatch/1.png" class="max-w-[440px] mx-auto" alt="">
                        <div class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
                    </div>

                    <div class="lg:me-8 order-2 md:order-1">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Freedom to play your <br> favourite tunes !</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="item in datas" :key="item" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> {{item}}</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                        </div>
                    </div>
                </div>
            </div><!--end container-->
            <!-- Start -->
        <section class="relative flex items-center md:py-72 py-44 jarallax" data-jarallax data-speed="0.5"  :style="{ backgroundImage: `url(${image})`, backgroundPosition: 'center',  }"></section>

    </div>
        <!-- End -->
</template>

<script>
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';
import image from '../../assets/images/smartwatch/bg2.jpg'
    export default {
        data() {
            return {
                image,
                datas:[
                 'Digital Marketing Solutions for Tomorrow' , ' Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand' ]
            }
        },
         mounted() {
            jarallax(document.querySelectorAll('.jarallax'), {
                speed: 0.5,
            }); 
        },
    }
</script>

<style lang="scss" scoped>

</style>