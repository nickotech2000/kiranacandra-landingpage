<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Clients Testimonials</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <ul v-for="item in datas" :key="item" class="space-y-8">
                <li  class="shadow-sm dark:shadow-gray-800 p-6">
                    <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                        <img :src="item.image" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                        <div class="ps-4">
                            <router-link to="#" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{item.name}}</router-link>
                            <p class="text-slate-400">{{item.position}}</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <p class="text-slate-400">{{ item.desc }}</p>
                        <ul class="list-none mb-0 text-amber-400 mt-2 space-x-1">
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                        </ul>
                    </div>
                </li>

                <li class="shadow-sm dark:shadow-gray-800 p-6">
                    <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                        <img :src="item.image2" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                        <div class="ps-4">
                            <router-link to="#" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{item.name2}}</router-link>
                            <p class="text-slate-400">{{item.position2}}</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <p class="text-slate-400">{{ item.desc2}}</p>
                        <ul class="list-none mb-0 text-amber-400 mt-2 space-x-1">
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                            <li class="inline"><i class="mdi mdi-star"></i></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

const datas = [
    {
        image: client1,
        image2: client2,
        name: 'Thomas Israel',
        name2: 'Barbara McIntosh',
        position2: 'C.E.O',
        position: 'C.E.O',
        desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    
    {
        image: client3,
        image2: client4,
        name: 'Carl Oliver',
        name2: 'Jill Webb',
        position: 'C.E.O',
        position2: 'C.E.O',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client5,
        image2: client6,
        name: 'Barbara McIntosh',
        name2: 'Janisha Doll',
        position: 'C.E.O',
        position2: 'C.E.O',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    
]
</script>