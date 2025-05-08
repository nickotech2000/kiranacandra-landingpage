<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
            <div class="relative">
                <div class="relative">
                    <img src="../assets/images/avatar.jpg"
                        class="mx-auto md:max-w-xs lg:max-w-sm rounded-lg shadow-md dark:shadow-gray-800" alt="">

                    <div class="absolute top-4 md:end-14 -end-2 text-center">
                        <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                            class="lightbox cursor-pointer size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-indigo-600">
                            <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </a>
                    </div>
                </div>
                <div
                    class="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-indigo-600/20 via-indigo-600/70 from-indigo-600 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-indigo-600/10 rounded-full">
                </div>

                <div
                    class="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-64 m-3">
                    <div class="flex items-center">
                        <div
                            class="flex items-center justify-center h-[65px] min-w-[65px] bg-indigo-600/5 text-indigo-600 text-center rounded-full me-3">
                            <i data-feather="dollar-sign" class="size-6"></i>
                        </div>
                        <div class="flex-1">
                            <h6 class="text-slate-400">Revenue</h6>
                            <p class="text-xl font-bold">$<span class="counter-value" data-target="45485">39548</span>
                            </p>
                        </div>
                    </div>

                    <span class="text-green-600"><i class="uil uil-arrow-growth"></i> 3.85%</span>
                </div>
            </div>

            <div class="lg:ms-8">
                <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Ready to kick off
                    <br> your startup journey?
                </h4>
                <p class="text-slate-400 mb-6">Due to its widespread use as filler text for layouts, non-readability is
                    of great importance: human perception is tuned to recognize certain patterns and repetitions in
                    texts. If the distribution of letters visual impact.</p>

                <div class="pt-6 flex items-center border-t border-gray-200 dark:border-gray-700">
                    <img src="../assets/images/client/05.jpg"
                        class="size-20 rounded-full shadow-md dark:shadow-gray-800 me-3" alt="">
                    <div class="flex-1">
                        <h6 class="text-lg text-slate-400 italic font-semibold">" Human perception is tuned to recognize
                            certain patterns and repetitions in texts. "</h6>
                        <p class="font-semibold">Owner & CEO</p>
                    </div>
                </div>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
    <!-- iframe start  -->
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                frameborder="0"></iframe>
        </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                @click="toggle">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    <!-- iframe end  -->
</template>

<script>
export default {
    name: 'startUp',
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        toggle() {
            if(!this.isActive){
                this.isActive = true
            }else{
                this.isActive = false
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>