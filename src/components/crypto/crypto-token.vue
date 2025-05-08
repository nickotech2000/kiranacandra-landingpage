<template>
    <div class="relative">
        <div class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="p-6 border-t border-dashed border-white/30">
                        <div class="grid grid-cols-12 items-center">
                            <div class="lg:col-span-4 md:col-span-6 col-span-5">
                                <h5 class="text-white/50 text-xl mb-0">Token Popular</h5>
                            </div>

                            <div class="lg:col-span-8 md:col-span-6 col-span-7 relative">
                                <div class="tiny-home-slide-four">
                                    <div v-for="item in datas" :key="item" class="tiny-slide">
                                        <div class="text-center">
                                            <h6 class="text-white mb-1">{{item.name}}</h6>
                                            <span class="text-white/50 block">{{item.price}}</span>
                                            <span :class="item.textcolor">{{item.percentage}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';

const datas = ref([
  {
    name: 'Bitcoin',
    price: '$ 41245',
    percentage: '- 3.5%',
    textcolor: 'text-red-600',
  },
  {
    name: 'Litecoin',
    price: '$ 216',
    percentage: '+ 3.5%',
    textcolor: 'text-emerald-600',
  },
  {
    name: 'Ethereum',
    price: '$ 451',
    percentage: '+ 3.5%',
    textcolor: 'text-emerald-600',
  },
  {
    name: 'Blocknet',
    price: '$ 845',
    percentage: '+ 3.5%',
    textcolor: 'text-emerald-600',
  },
  {
    name: 'Monero',
    price: '$ 654',
    percentage: '- 3.5%',
    textcolor: 'text-red-600',
  },
]);

onMounted(() => {
  tns({
    container: '.tiny-home-slide-four',
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
        items: 4
      },
      992: {
        items: 3
      },
      767: {
        items: 2
      },
      320: {
        items: 1
      },
    },
  });
});
</script>