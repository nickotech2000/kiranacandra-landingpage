<template>
    <div>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 v-if="Community" class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Community</h3>
                <h3 v-else class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
            </div>
        </div>

        <div class="container-fluid relative overflow-hidden">
            <div class="grid grid-cols-1 mt-8">
                <div class="slider relative overflow-hidden m-auto mb-4">
                    <span class="absolute top-0 start-0 z-2"></span>
                    <span class="absolute top-0 end-0 z-2"></span>
                    <div class="slide-track flex items-center">
                        <div v-for="user in users" :key="user" class="slide h-auto md:w-[360px] w-72 m-2">
                            <ul class="space-y-4">
                                <li class="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                    <div class="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                        <img :src="user.image" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                        <div class="ps-4">
                                            <router-link to="#" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{user.name}}</router-link>
                                            <p class="text-slate-400">{{user.position}}</p>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <p class="text-slate-400">{{user.desc}}</p>
                                        <ul class="list-none mb-0 text-amber-400 mt-2">
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                            <li class="inline"><i class="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>

                                <li class="rounded-lg shadow-sm dark:shadow-gray-800 p-6 border-b-4 border-indigo-600">
                                    <div class="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                        <img :src="user.image2" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                                        <div class="ps-4">
                                            <router-link to="#" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{user.name2}}</router-link>
                                            <p class="text-slate-400">{{user.position2}}</p>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <p class="text-slate-400">{{ user.desc2 }}</p>
                                        <ul class="list-none mb-0 text-amber-400 mt-2">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'
import client4 from '@/assets/images/client/04.jpg'
import client5 from '@/assets/images/client/05.jpg'
import client6 from '@/assets/images/client/06.jpg'

defineProps({
  Community: {
    type: Boolean,
    required: true,
  },
});

const users = [
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    {
        image: client1,
        name: 'Thomas Israel',
        position: 'User',
        desc: "I didn't know a thing about icon design until I readthis book. Now I can create any icon I need in no time. Great resource!",
        image2: client5,
        name2: 'Barbara McIntosh',
        position2: 'User',
        desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
    },
    {
        image: client2,
        name: 'Carl Oliver',
        position: 'User',
        desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        image2: client4,
        name2: 'Jill Webb',
        position2: 'User',
        desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
    },
    {
        image: client3,
        name: 'Barbara McIntosh',
        position: 'User',
        desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
        image2:client6,
        name2: 'Janisha Doll',
        position2: 'User',
        desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."
    },
    
]
</script>
