<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
            <div class="lg:col-span-5 md:col-span-6 md:order-1 order-2">
                <div class="relative overflow-hidden">
                    <span class=" absolute h-40 w-40 bg-red-600/5 top-5 start-0 end-0 mx-auto -z-0 rounded-3xl animate-[spin_10s_linear_infinite]"></span>
                    <img :src="hero" class="relative z-1" alt="">
                </div>
            </div>

            <div class="lg:col-span-7 md:col-span-6 md:order-2 order-1">
                <div class="tiny-single-item">
                    <div v-for="item in datas" :key="item" class="tiny-slide text-center">
                        <img :src="item.image" class="h-6 mx-auto" alt="">
                        <p class="text-slate-400 mt-6">{{ item.desc }}</p>
                        <h6 class="text-indigo-600 font-semibold mt-3">{{ item.name }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client1 from '@/assets/images/client/amazon.svg'
import client2 from '@/assets/images/client/google.svg'
import client3 from '@/assets/images/client/lenovo.svg'
import client4 from '@/assets/images/client/paypal.svg'
import client5 from '@/assets/images/client/shopify.svg'
import client6 from '@/assets/images/client/spotify.svg'
import hero from '@/assets/images/hero2.png'

const datas = ref([
  {
    image: client1,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Thomas Israel',
  },
  {
    image: client2,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Carl Oliver',
  },
  {
    image: client3,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Barbara McIntosh',
  },
  {
    image: client4,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Jill Webb',
  },
  {
    image: client5,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Dean Tolle',
  },
  {
    image: client6,
    desc: `" If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page consists of a more or less random series of words or syllables. "`,
    name: '- Christa Smith',
  },
]);

onMounted(() => {
  tns({
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  });
});
</script>
