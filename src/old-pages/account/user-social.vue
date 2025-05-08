<template>
<div>
    <Navbar :navLight="'nav-light'" />
    <section class="relative lg:pb-24 pb-16">
        <div class="container-fluid relative">
            <div class="profile-banner relative text-transparent">
                <input id="pro-banner" name="profile-banner" type="file" class="hidden" onchange="loadFile(event)" />
                <div class="relative shrink-0">
                    <img :src="bg" class="h-80 w-full object-cover" id="profile-banner" alt="">
                    <div class="absolute inset-0 bg-slate-900/70"></div>
                    <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                </div>
            </div>
        </div>
        <div class="container relative md:mt-24 mt-16">
            <div class="md:flex">
                <AccouTab />
                <div class="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                    <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h5 class="text-lg font-semibold">Social Profiles :</h5>
                        </div>

                        <div class="p-6">
                            <div class="md:flex ">
                                    <div class="md:w-1/3">
                                        <span class="font-medium">Twitter</span>
                                    </div>

                                    <div class="md:w-2/3 mt-4 md:mt-0">
                                        <form>
                                            <div class="form-icon relative">
                                                <i data-feather="twitter" class="w-4 h-4 absolute top-3 start-4"></i>
                                                <input type="text" class="ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Twitter Profile Name" id="twitter_name" name="name" required="">
                                            </div>
                                        </form>

                                        <p class="text-slate-400 mt-1">Add your Twitter username (e.g. jesus).</p>
                                    </div>
                                </div>
                            <div v-for="item in socials" :key="item" class="md:flex mt-8">
                                <div class="md:w-1/3">
                                    <span class="font-medium">{{item.name}}</span>
                                </div>

                                <div class="md:w-2/3 mt-4 md:mt-0">
                                    <form>
                                        <div class="form-icon relative">
                                            <i :data-feather="item.icon" class="size-4 absolute top-3 start-4"></i>
                                            <input type="text" class="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" :placeholder="item.placeholder" id="twitter_name" name="name"  required="">
                                        </div>
                                    </form>
                                    <p class="text-slate-400 mt-1">{{item.desc}}</p>
                                </div>
                            </div>
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <span class="font-medium"></span>
                                    <button class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">Save Social Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer :email=true />
    <Switcher />
</div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue'
import Switcher from '@/components/switcher.vue';
import Footer from '@/components/footer/footer.vue'
import bg from '@/assets/images/blog/bg.jpg'

const socials = [
    {
        name: "Facebook",
        icon: "facebook",
        placeholder: "Facebook Profile Name",
        desc: "Add your Facebook username (e.g. jesus)."
    },
    {
        name: "Instagram",
        icon: "instagram",
        placeholder: "Instagram Profile Name",
        desc: "Add your Instagram username (e.g. jesus)."
    },
    {
        name: "Linkedin",
        icon: "linkedin",
        placeholder: "Linkedin Profile Name",
        desc: "Add your Linkedin username."
    },
    {
        name: "Youtube",
        icon: "youtube",
        placeholder: "Youtube url",
        desc: "Add your Youtube url."
    }
]
</script>
