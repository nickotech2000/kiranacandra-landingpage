<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                <div class="relative">
                    <img src="../assets/images/app/classic01.png" class="mx-auto" alt="">
                    <div
                        class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]">
                    </div>
                </div>

                <div class="lg:ms-8">
                    <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We Build High
                        Performing <br> Application</h4>
                    <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of
                        great importance: human perception is tuned to recognize certain patterns and repetitions in texts.
                        If the distribution of letters visual impact.</p>
                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }} </li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus"
                            class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none duration-500 ease-in-out text-indigo-600 hover:text-indigo-600">
                            <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500  bg-indigo-600"></span>
                            Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                    </div>
                </div>
            </div><!--end grid-->

        </div><!--end container-->
        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                <div class="relative order-1 md:order-2">
                    <img src="../assets/images/app/classic02.png" class="mx-auto" alt="">
                    <div
                        class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 end-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]">
                    </div>
                </div>

                <div class="lg:me-8 order-2 md:order-1">
                    <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Easy And Best
                        Solution <br> For Your App</h4>
                    <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of
                        great importance: human perception is tuned to recognize certain patterns and repetitions in texts.
                        If the distribution of letters visual impact.</p>
                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }} </li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus"
                            class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600  duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container relative md:mt-24 mt-16">
            <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                <div class="relative">
                    <img src="../assets/images/app/classic04.png" class="mx-auto" alt="">
                    <div
                        class="overflow-hidden absolute lg:size-[400px] size-[320px] bg-indigo-600/5 bottom-2/4 translate-y-2/4 start-0 rotate-45 -z-1 shadow-md shadow-indigo-600/10 rounded-[100px]">
                    </div>
                </div>

                <div class="lg:ms-8">
                    <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Beautiful, Simple &
                        <br> Easy to Use</h4>
                    <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of
                        great importance: human perception is tuned to recognize certain patterns and repetitions in texts.
                        If the distribution of letters visual impact.</p>
                    <ul class="list-none text-slate-400 mt-4">
                        <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }} </li>
                    </ul>

                    <div class="mt-4">
                        <router-link to="/page-aboutus"
                            class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                            Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                            
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </div>
</template>

<script>
export default {
data() {
    return {
        datas:[
                 'Digital Marketing Solutions for Tomorrow' , ' Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand' ]
    }
},
}
</script>

<style lang="scss" scoped></style>