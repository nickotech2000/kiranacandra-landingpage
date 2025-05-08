<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">What Our Client Say ?</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="flex justify-center relative mt-16">
            <div class="relative md:w-1/2 w-full" :class="width">
                <div class="absolute -top-20 md:-start-24 -start-0">
                    <i class="mdi mdi-format-quote-open text-9xl opacity-5"></i>
                </div>

                <div class="absolute bottom-28 md:-end-24 -end-0">
                    <i class="mdi mdi-format-quote-close text-9xl opacity-5"></i>
                </div>

                <div class="tiny-single-item">
                    <div v-for="client in clients" :key="client"  class="tiny-slide">
                        <div class="text-center">
                            <p class="text-lg text-slate-400 italic"> {{ client.desc }} </p>

                            <div class="text-center mt-5">
                                <ul class="text-xl font-medium text-orange-500 list-none mb-2">
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                </ul>

                                <img :src="client.image" class="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                <h6 class="mt-2 font-semibold">{{ client.name }}</h6>
                                <span class="text-slate-400 text-sm">{{client.position}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, defineProps } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

defineProps({
  width: {
    type: String,
    required: true
  }
});

const clients = [
  {
    image: client1,
    desc: 'Techwind made the processes so easy. Techwind instantly increased the amount of interest and ultimately saved us over $10,000.',
    name: 'Thomas Israel',
    position: 'Manager'
  },
  {
    image: client2,
    desc: 'I highly recommend Techwind as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home.',
    name: 'Carl Oliver',
    position: 'Manager'
  },
  {
    image: client3,
    desc: 'My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable!',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client4,
    desc: 'Great experience all around! Easy to use and efficient.',
    name: 'Jill Webb',
    position: 'Manager'
  },
  {
    image: client5,
    desc: 'Techwind made selling my home easy and stress-free. They went above and beyond what is expected.',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client6,
    desc: 'Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services!',
    name: 'Jill Webb',
    position: 'Manager'
  }
];

// Tiny Slider Initialization
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