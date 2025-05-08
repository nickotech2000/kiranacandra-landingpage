<template>
<div>
    <Navbar :navLight="'nav-light'" />

    <section class="relative table w-full py-52 md:py-64 bg-[url('../../assets/images/crypto/bg1.jpg')] bg-center bg-no-repeat bg-cover">
        <div class="container relative">
            <div class="grid grid-cols-1">
                <h5 class="font-normal text-lg text-white/50 mb-3">Pay with <span class="typewrite text-white" data-period="2000" data-type='[ "Crypto", "ETH", "BNB", "SOL", "DOT", "NEAR", "CEL" ]'> <span class="wrap"></span> </span></h5>
                <h4 class="text-white font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Building the future <br> of Crypto Revolution.</h4>
                <p class="text-white/70 max-w-xl mb-0">Take full control of your cryptocurrencies and collectibles by storing them on your own device.</p>
                <div class="subcribe-form mt-6 mb-4">
                    <form class="relative max-w-xl">
                        <input type="email" id="subcribe" name="email" class="py-4 pe-40 ps-6 w-full h-[50px] outline-none dark:text-white rounded-full bg-white/5 shadow-sm border border-slate-900 text-white" placeholder="Your Email Address :">
                        <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full">Register Now <i class="uil uil-arrow-right"></i></button>
                    </form>
                </div>
                <span class="text-white">Looking for help? <a href="" class="text-amber-500">Get in touch with us</a></span>
            </div>
        </div>
    </section>

    <Token />
    <Currency />
    <Benefits />

    <section class="relative md:py-24 py-16 md:pb-0 pb-0">
        <CryptoSale />
        <CryptoNft />
        <CryptoInvest />
    </section>

      <CryptoCta />

      <section class="relative md:mt-24 mt-16"></section>

      <Users :customer=true />
      <Question />
      <GetInTouch />
      <Footer :email=true />
      <Switcher />
      <Cookies />

    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import Token from '@/components/crypto/crypto-token.vue';
import Currency from '@/components/crypto/crypto-currency.vue';
import Benefits from '@/components/crypto/crypto-benefits.vue';
import CryptoSale from '@/components/crypto/crypto-token-sale.vue';
import CryptoNft from '@/components/crypto/crypto-all-nft.vue';
import CryptoInvest from '@/components/crypto/crypto-invest.vue';
import CryptoCta from '@/components/crypto/crypto-cta.vue';
import Users from '@/components/users.vue';
import Question from '@/components/crypto/crypto-question.vue';
import GetInTouch from '@/components/get-in-touch/get-in-touch.vue';
import Footer from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';

const darkmode = () => {
  document.documentElement.classList.add('dark');
};

darkmode();
</script>

<style lang="scss" scoped></style>