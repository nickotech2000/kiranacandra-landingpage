<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Brands</h3>

            <p class="text-slate-400 max-w-2xl mx-auto">As a Freelance Designer & Developer, I am here to make you stand
                out in the digital world and my passion for design and your vision will ensure a great end result.</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-[30px]">
            <div v-for="image in images" :key="image" class="mx-auto">
                <img :src="image"
                    class="size-[110px] grayscale hover:grayscale-0 duration-500 ease-in-out" alt="">
            </div>
        </div><!--end grid-->
    </div><!--end container-->
</template>

<script>
import prime from '../../assets/images/client/amazon-prime-video-logo.svg'
import angular from '../../assets/images/client/angular-3.svg'
import huawei from '../../assets/images/client/huawei-2.svg'
import bosch from '../../assets/images/client/bosch.svg'
import coinbase from '../../assets/images/client/coinbase.svg'
import husd from '../../assets/images/client/husd-3.svg'
import intercom from '../../assets/images/client/intercom-1.svg'
import linkedin from '../../assets/images/client/linkedin-logo-2013-1.svg'
import yamaha from '../../assets/images/client/yamaha-2-1.svg'
import donington from '../../assets/images/client/logo-donington-park.svg'
import microsoft from '../../assets/images/client/microsoft-office-2013.svg'
import netflix from '../../assets/images/client//netflix-3.svg'
import python from '../../assets/images/client/python-3.svg'
import redbull from '../../assets/images/client/redbull-1.svg'
import communications from '../../assets/images/client/zoom-communications-logo.svg'
import suntech from '../../assets/images/client/suntech-power-logo.svg'
import power from '../../assets/images/client/v-power-1.svg'
export default {
    data() {
        return {
            images: [
                prime,
                angular,
                huawei,
                bosch,
                coinbase,
                husd,
                intercom,
                linkedin,
                yamaha,
                donington,
                microsoft,
                netflix,
                python,
                redbull,
                communications,
                suntech,
                power
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>