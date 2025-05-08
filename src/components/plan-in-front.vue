<template>
  <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
                    <div class="relative">
                        <img src="../assets/images/app/classic04.png" class="mx-auto" alt="">
                        <div class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full"></div>

                        <div class="absolute bottom-1/2 translate-y-1/2 lg:-end-7 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
                            <div class="flex">
                                <div class="text-center min-w-[75px]">
                                    <span class="text-2xl font-bold">4.90</span>
                                    <ul class="list-none mb-0 text-amber-400 text-xs">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                    </ul>
                                    <span class="text-xs"><span class="font-semibold">950</span> <span class="text-slate-400">Ratings</span></span>
                                </div>

                                <span class="font-bold ms-3">Trusted by over <span class="text-indigo-600">50000</span> members</span>
                            </div>
                        </div>

                        <div class="absolute flex justify-between items-center bottom-16 md:start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div class="flex items-center">
                                <img src="../assets/images/client/01.jpg" class="size-14 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="">
                                <div class="flex-1">
                                    <h6 class="text-lg font-semibold">Advin</h6>
                                    <p class="text-slate-400">Owner & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:ms-8">
                        <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Plan in front program for your needs</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li v-for="data in datas" :key="data" class="mb-1 flex"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i>{{ data }}</li>
                           
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">
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
                datas:[
                 'Digital Marketing Solutions for Tomorrow' , ' Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand' ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>