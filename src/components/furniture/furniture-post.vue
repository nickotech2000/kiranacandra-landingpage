<template>
    <!-- Insta Post Start -->
    <div class="container-fluid relative">
        <div class="grid grid-cols-1 relative">
            <div class="tiny-ten-item">
                <div v-for="(image, index) in images" :key="index" class="tiny-slide">
                    <div class="card border-0 rounded-0">
                        <div class="card-body p-0">
                            <a @click="showLightbox(index)" class="lightbox d-inline-block cursor-pointer" title="">
                                <img :src="image" class="" alt="Furniture">
                                <div class="overlay bg-dark"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                <a href="https://www.instagram.com/shreethemes/" target="_blank"
                    class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow
                    Now</a>
            </div>
        </div><!--end grid-->
    </div><!--end container-->
    <!-- Insta Post End -->
    <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';
import VueEasyLightbox from 'vue-easy-lightbox';
import image from '../../assets/images/furniture/insta-1.jpg'
import image2 from '../../assets/images/furniture/insta-2.jpg'
import image3 from '../../assets/images/furniture/insta-3.jpg'
import image4 from '../../assets/images/furniture/insta-4.jpg'
import image5 from '../../assets/images/furniture/insta-5.jpg'
import image6 from '../../assets/images/furniture/insta-6.jpg'
import image7 from '../../assets/images/furniture/insta-7.jpg'
import image8 from '../../assets/images/furniture/insta-8.jpg'
import image9 from '../../assets/images/furniture/insta-9.jpg'
import image10 from '../../assets/images/furniture/insta-10.jpg'
import image11 from '../../assets/images/furniture/insta-11.jpg'
import image12 from '../../assets/images/furniture/insta-12.jpg'

export default {
    data() {
        return {
            images: [
                image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
            visibleRef: false,
            imgsRef: [],
            indexRef: 0
        }
    },
    components: {
        VueEasyLightbox
    },
    mounted() {
        tns({
            container: '.tiny-ten-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 10
            },

            992: {
                items: 7
            },

            767: {
                items: 5
            },

            320: {
                items: 2
            },
                }
        })
    },       
    methods: {
        showLightbox(index) {
            this.imgsRef = this.images
            this.indexRef = index
            this.visibleRef = true
        },
        onHide() {
            this.visibleRef = false
        }
    }
}
</script>

<style lang="scss" scoped></style>