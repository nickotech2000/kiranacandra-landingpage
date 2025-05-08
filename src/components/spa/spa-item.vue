<template>
    <div class="container relative">
        <div class="grid md:grid-cols-3 gap-[30px]">
            <div v-for="item in datas" :key="item" class="relative overflow-hidden h-fit">
                <img :src="item.image" class="" alt="">
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent via-slate-900/50 from-slate-900 "></div>

                <div class="absolute p-6 bottom-0 start-0 end-0">
                    <h6 class="text-white/70 mb-1">{{item.name}}</h6>
                    <router-link to="#" class="font-semibold !font-ebgaramond text-white uppercase tracking-wide">{{item.button}} <i class="uil uil-arrow-up-right ms-1"></i></router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import spa1 from '@/assets/images/spa/1.jpg'
import spa2 from '@/assets/images/spa/2.jpg'
import spa3 from '@/assets/images/spa/3.jpg'

const datas = [
    {
        image: spa1,
        name: 'Spa',
        button: 'Relaxation'
    },
    {
        image: spa2,
        name: 'Cosmatic',
        button: 'Essential Balance'
    },
    {
        image: spa3,
        name: 'Massage',
        button: 'Natural Health'
    },
]
</script>