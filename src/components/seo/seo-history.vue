<template>
    <!-- Start -->
    <section class="realtive md:py-24 py-16">
        <div class="container relative">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="md:col-span-6">
                    <div class="relative lg:me-8">
                        <img src="../../assets/images/business/about01.jpg" class="rounded-md" alt="">

                        <div class="absolute bottom-24 end-0">
                            <img src="../../assets/images/business/about02.jpg" class="rounded-md shadow-md size-48"
                                alt="">
                            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                                    class="lightbox size-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                    <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="md:col-span-6">
                    <div class="lg:ms-5">
                        <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Our History</h6>
                        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">“Sweet as
                            the Moment When <br> the coworking Went 'Pop”</h3>

                        <p class="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go,
                            easily implement secure money transfer solutions, boost your daily efficiency, connect to
                            other app users and create your own Techwind network, and much more with just a few taps.
                            commodo consequat. Duis aute irure.</p>

                        <a href=""
                            class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md">Get
                            Started</a>
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
        </div><!--end container-->

        <div class="container relative md:mt-24 mt-16">
                <companylogo />
        </div><!--end container-->

    </section>
    <!-- iframe start  -->
    <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
        <div class="h-[100%] flex items-center justify-center">
            <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500" frameborder="0"></iframe>
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
import companylogo from '../company-logos.vue';

export default {
    data() {
        return {
            isActive: false
        }
    },
    components: {
        companylogo
    },
    methods: {
        toggle() {
            if (!this.isActive) {
                this.isActive = true;
            } else {
                this.isActive = false
            }
        }
    },
}
</script>

<style lang="scss" scoped></style>