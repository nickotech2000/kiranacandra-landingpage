<template>
    <div>
        <section class="relative md:pb-24 pb-16 overflow-hidden">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <div class="flex items-center justify-center rounded-full mx-auto bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 size-[110px]">
                        <img src="../assets/images/logo-icon-40.png" class="block mx-auto" alt="">
                    </div>
                    <h3 class="mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">The best customer relationship <br> management platform for just <br> about <span class="absolute end-0  start-0  bottom-1 lg:h-3 h-2 w-auto rounded-md bg-indigo-600/30 relative text-indigo-600">everything.</span></h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div><!--end grid-->

                <div class="grid mt-8">
                    <div class="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
                        <video controls autoplay loop>
                            <source src="../assets/images/modern.mp4" type="video/mp4">
                        </video>

                        <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                            <a @click="toggle" data-type="youtube" data-id="S_CGed6E610" class="lightbox cursor-pointer lg:h-20 h-16 lg:w-20 w-16 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                                <i class="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                            </a>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section>
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
    </div>
</template>

<script>
    export default {
        name: 'managementS',
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            toggle(){
                if(!this.isActive){
                    this.isActive = true;
                } else{
                    this.isActive = false;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>