<template>
    <div>
        <Navbar />
        <section class="relative table w-full py-32 lg:py-40 bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">     
              <div class="container relative">
                  <div class="grid grid-cols-1 text-center mt-10">
                      <h3 class="text-3xl leading-normal font-medium">Auction</h3>
                  </div>
              </div>
              
              <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                  <ul class="tracking-[0.5px] mb-0 inline-block">
                      <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/">Techwind</router-link></li>
                      <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                      <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/index-nft">NFT</router-link></li>
                      <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                      <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Auction</li>
                  </ul>
              </div>
          </section>
          <div class="relative">
              <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                  <svg class="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                  </svg>
              </div>
          </div>
          <Auctions />
          <Footer :email=true />
          <Switcher />
        </div>
  </template>
  
  <script setup>
    import Navbar from '@/components/navbar/navbar-nft.vue';
    import Auctions from '@/components/nft/nft-auction.vue';
    import Footer from '@/components/footer/footer.vue';
    import Switcher from '@/components/switcher.vue'
  </script>