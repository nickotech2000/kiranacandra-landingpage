<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal !font-ebgaramond font-medium">Customer Reviews</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Every cup is a performance of thoroughly pressured hot water through the finest delicious and finely ground compacted coffee.</p>
        </div>

        <div class="flex justify-center relative mt-8">
            <div class="relative lg:w-1/2 md:w-3/4 w-full">
                <div class="tiny-one-item">
                    <div v-for="client in clients" :key="client" class="tiny-slide">
                        <div class="text-center">
                            <p class="text-lg text-slate-400 italic !font-ebgaramond"> {{  client.desc }} </p>
                            <div class="text-center mt-5">
                                <ul class="text-xl font-medium text-orange-500 list-none mb-2">
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                    <li class="inline"><i class="mdi mdi-star"></i></li>
                                </ul>

                                <img :src="client.image" class="size-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="">
                                <h6 class="mt-2 font-semibold !font-ebgaramond text-lg">{{client.name}}</h6>
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
import { ref, onMounted } from 'vue';
import { tns } from 'tiny-slider/src/tiny-slider';
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

const clients = ref([
  {
    image: client1,
    desc: '" Techwind made the processes so easy. Techwind instantly increased the amount of interest and ultimately saved us over $10,000. "',
    name: 'Thomas Israel',
    position: 'Manager'
  },
  {
    image: client2,
    desc: `" I highly recommend Techwind as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "`,
    name: 'Carl Oliver',
    position: 'Manager'
  },
  {
    image: client3,
    desc: '" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client4,
    desc: '" Great experience all around! Easy to use and efficient. "',
    name: 'Jill Webb',
    position: 'Manager'
  },
  {
    image: client5,
    desc: '" Techwind made selling my home easy and stress free. They went above and beyond what is expected. "',
    name: 'Barbara McIntosh',
    position: 'Manager'
  },
  {
    image: client6,
    desc: '" Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services! " ',
    name: 'Jill Webb',
    position: 'Manager'
  }
]);

onMounted(() => {
  tns({
    container: '.tiny-one-item',
    items: 1,
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
  });
});
</script>