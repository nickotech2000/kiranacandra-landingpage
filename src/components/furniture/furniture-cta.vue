<template>
    <!-- Start -->
    <section
        class="py-28 w-full table relative bg-[url('../../assets/images/furniture/bg04.jpg')] bg-center bg-no-repeat bg-cover jarallax"
        data-jarallax data-speed="0.5">
        <div class="absolute inset-0 bg-slate-900/30"></div>
        <div class="container relative">
            <div class="grid grid-cols-1 text-center">
                <h3 class="mb-4 md:text-4xl text-3xl text-white font-bold">Comfort Seating</h3>

                <p class="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you
                    need to generate awareness, drive traffic, connect.</p>

                <a @click="toggle" data-type="youtube" data-id="S_CGed6E610"
                    class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10 cursor-pointer">
                    <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
            </div><!--end grid-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

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
import { jarallax } from "jarallax";
import 'jarallax/dist/jarallax.min.css';
export default {
    data() {
        return {
            isActive: false,
        }
    },
    mounted() {
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5,
        });
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive;

        }
    },
}
</script>

<style lang="scss" scoped></style>