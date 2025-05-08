<template>
    <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">All your crypto and NFTs in one place</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">With Techwind Trade, you can be sure your trading skills are matched with excellent service.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 justify-center mt-2">
                    <ul class="list-none text-center">
                        <li v-for="item in datas" :key="item" class="inline-block md:m-6 my-6 mx-1">
                            <img :src="item" class="shadow-md dark:shadow-gray-800 rounded-full size-20 p-4" alt="">
                        </li>
                    </ul>
                </div><!--end grid-->
            </div><!--end container-->
</template>

<script>
import image from '../../assets/images/crypto/coin/auroracoin.png';
import image2 from '../../assets/images/crypto/coin/avalanche.png';
import image3 from '../../assets/images/crypto/coin/binance.png';
import image4 from '../../assets/images/crypto/coin/bitcoin-cash.png';
import image5 from '../../assets/images/crypto/coin/bitcoin.png';
import image6 from '../../assets/images/crypto/coin/bittorrent.png';
import image7 from '../../assets/images/crypto/coin/blocknet.png';
import image8 from '../../assets/images/crypto/coin/coinye.png';
import image9 from '../../assets/images/crypto/coin/ethereum.png';
import image10 from '../../assets/images/crypto/coin/kucoin.png';
import image11 from '../../assets/images/crypto/coin/litecoin.png';
import image12 from '../../assets/images/crypto/coin/monero.png';
import image13 from '../../assets/images/crypto/coin/potcoin.png';
import image14 from '../../assets/images/crypto/coin/primecoin.png';
import image15 from '../../assets/images/crypto/coin/zcash.png';

    export default {
        data() {
            return {
                datas: [image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>