<template>
<div>
    <navbar :lightlogo=true :loginButton=true />
    <section class="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
            <div class="grid grid-cols-1 text-center mt-10">
                <h3 class="text-3xl leading-normal font-medium">Changelog</h3>
            </div>
        </div>

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="tracking-[0.5px] mb-0 inline-block">
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                    <router-link to="/">Techwind</router-link>
                </li>
                <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                    <router-link to="/index-forums">Forums</router-link>
                </li>
                <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
                    <router-link to="/forums-topic">Topic</router-link>
                </li>
                <li class="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                <li class="inline-block uppercase text-[13px] font-bold text-indigo-600" aria-current="page">Changelog </li>
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

    <section class="relative md:py-24 py-16">
        <div class="container relative">
            <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                <div class="lg:col-span-8">
                    <div class="rounded shadow-sm dark:shadow-slate-800">
                        <div class="p-6 bg-gray-50 dark:bg-slate-800 flex items-center justify-between">
                            <span class="text-lg font-semibold">Author</span>
                            <span class="text-lg font-semibold">Date</span>
                        </div>

                        <div v-for="item in datas" :key="item" class="p-6 border-b border-gray-100 dark:border-gray-800">
                            <div  class="sm:flex items-center justify-between">
                                <div class="flex items-center">
                                    <img :src="item.image" class="h-10 rounded-full shadow-sm dark:shadow-slate-800" alt="">

                                    <div class="ms-3">
                                        <router-link to="#" class="hover:text-indigo-600 font-semibold">{{item.name}}</router-link>
                                        <p class="text-slate-400 text-sm font-normal"><i class="uil uil-user"></i>Author</p>
                                    </div>
                                </div>
                                <p class="text-slate-400 text-sm font-normal mt-3 sm:mt-0"><i class="uil uil-clock"></i>{{item.date}}</p>
                            </div>

                            <p class="text-slate-400 mt-4">{{item.desc}}</p>
                        </div>

                    </div>
                </div>

                <div class="lg:col-span-4 md:col-span-6">
                    <div class="sticky top-20">
                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center">Sign In</h5>
                        <form class="text-start mt-8">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com">
                                </div>

                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Password:">
                                </div>

                                <div class="flex justify-between mb-4">
                                    <label for="RememberMe" class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2">
                                        <span class="text-slate-400 ms-2">Remember me</span>
                                    </label>
                                    <p class="text-slate-400 mb-0"><router-link to="/auth-re-password" class="text-slate-400">Forgot password ?</router-link></p>
                                </div>

                                <div class="mb-4">
                                    <input type="submit" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Login / Sign in">
                                </div>

                                <div class="text-center">
                                    <span class="text-slate-400 me-2">Don't have an account ?</span> <router-link to="/auth-signup" class="text-black dark:text-white font-bold inline-block">Sign Up</router-link>
                                </div>
                            </div>
                        </form>

                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8"> Recent Reply</h5>
                        <div v-for="item in replys" :key="item" class="flex items-center mt-8">
                            <img :src="item.image" class="h-16 rounded-md shadow-sm dark:shadow-gray-800" alt="">

                            <div class="ms-3">
                                <router-link to="#" class="font-semibold hover:text-indigo-600">{{ item.name }}</router-link>
                                <p class="text-sm text-slate-400">{{ item.time }}</p>
                            </div>
                        </div>
                        
                        <h5 class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                        <ul class="list-none text-center mt-8 space-x-1">
                            <li v-for="item in socials" :key="item" class="inline"><router-link to="#"
                                    class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"><i
                                        :data-feather="item" class="size-4"></i></router-link></li>
                        </ul>

                        <h5
                            class="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow-sm dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                            Tagscloud</h5>
                        <ul class="list-none text-center mt-8">
                            <li v-for="item in tages" :key="item" class="inline-block m-2"><router-link to="#"
                                    class="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow-sm dark:shadow-gray-800 duration-500">{{
                                    item }}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footers :email=true />
    <switcher />
</div>
</template>

<script setup>
import navbar from '@/components/navbar/navbar.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
import blog1 from '@/assets/images/blog/06.jpg'
import blog2 from '@/assets/images/blog/07.jpg'
import blog3 from '@/assets/images/blog/08.jpg'

import client1 from '@/assets/images/client/01.jpg'
import client2 from '@/assets/images/client/02.jpg'
import client3 from '@/assets/images/client/03.jpg'

const socials = ['facebook', 'instagram', 'twitter', 'linkedin', 'github', 'youtube', 'gitlab']

const tages = ['Business', 'Finance', 'Marketing', 'Fashion', 'Bride', 'Lifestyle', 'Travel', 'Beauty', 'Video', 'Audio']

const replys = [
    {
        image: blog1,
        name: 'Consultant Business',
        time: '1st May 2022'
    },
    {
        image: blog2,
        name: 'Grow Your Business',
        time: '1st May 2022'
    },
    {
        image: blog3,
        name: 'Look On The Glorious Balance',
        time: '1st May 2022'
    },
]

const datas = [
    {
        image: client1,
        name: 'Calvin Carlo',
        date: '16th Januanry, 2023 at 03:44 pm',
        desc: `" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."`
    },
    {
        image: client2,
        name: 'Calvin Carlo',
        date: '16th Januanry, 2023 at 03:44 pm',
        desc: `" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."`
    },
    {
        image: client3,
        name: 'Calvin Carlo',
        date: '16th Januanry, 2023 at 03:44 pm',
        desc: `" Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available."`
    },
]

</script>
