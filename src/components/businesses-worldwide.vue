<template>
    <div class="container relative ">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Loved by businesses
                worldwide</h3>

            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you
                need to generate awareness, drive traffic, connect.</p>
        </div><!--end grid-->

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <ul class="space-y-8">
                <li v-for="user in users" :key="user" class="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                    <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                        <img :src="user.image" class="size-16 rounded-full shadow-sm dark:shadow-gray-800" alt="">

                        <div class="ps-4">
                            <a href="" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{ user.name }}</a>
                            <p class="text-slate-400">C.E.O</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <p class="text-slate-400">{{ user.desc }}</p>
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

            <ul class="space-y-8 hidden sm:block">
                <li  v-for="user in users2" :key="user" class="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                    <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                        <img :src="user.image" class="size-16 rounded-full shadow-sm dark:shadow-gray-800"
                            alt="">

                        <div class="ps-4">
                            <a href="" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{ user.name }}</a>
                            <p class="text-slate-400">C.E.O</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <p class="text-slate-400">{{ user.desc }}</p>
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

            <ul class="space-y-8 hidden lg:block">
                <li v-for="user in users3" :key="user" class="rounded-lg shadow-lg dark:shadow-gray-800 p-6">
                    <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                        <img :src="user.image" class="size-16 rounded-full shadow-sm dark:shadow-gray-800"
                            alt="">

                        <div class="ps-4">
                            <a href="" class="text-lg hover:text-indigo-600 duration-500 ease-in-out">{{ user.name }}</a>
                            <p class="text-slate-400">{{ user.position }}</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <p class="text-slate-400">{{ user.desc }}</p>
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
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    image: require('../assets/images/client/01.jpg'),
                    name: 'Thomas Israel',
                    position: 'C.E.O',
                    desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!"
                },
                {
                    image: require('../assets/images/client/05.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'C.E.O',
                    desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."
                },
            ],
            users2: [
                {
                    image: require('../assets/images/client/02.jpg'),
                    name: 'Carl Oliver',
                    position: 'C.E.O',
                    desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined."
                },
                {
                    image: require('../assets/images/client/04.jpg'),
                    name: 'Jill Webb',
                    position: 'C.E.O',
                    desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."
                },
            ],
            users3: [
                {
                    image: require('../assets/images/client/03.jpg'),
                    name: 'Barbara McIntosh',
                    position: 'C.E.O',
                    desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though."
                },
                {
                    image: require('../assets/images/client/06.jpg'),
                    name: 'Janisha Doll',
                    position: 'C.E.O',
                    desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is          important."
                },
            ]
        }
    },

}
</script>

<style lang="scss" scoped></style>