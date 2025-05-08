<template>
    <div>
        <section class="py-20 w-full table relative bg-[url('../../assets/images/digital/bg01.jpg')] bg-center bg-no-repeat bg-cover">
            <div class="container relative">
                <div class="flex">
                    <div class="lg:w-1/3 md:w-1/2 sm:w-2/3 p-6 rounded-md shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h6 class="text-indigo-600 font-semibold mb-2">Techwind Digital Agency</h6>
                        <h4 class="mb-4 md:text-[28px]] text-2xl leading-normal font-bold">Leading Digital <br> Business For <vue-typewriter-effect class="text-indigo-600 typewrite" data-period="2000" :strings='["Agency", "Software", "Technology", "Studio", "Webapps"]' /> <br> Solution.</h4>
                        <p class="text-slate-400 mb-0">Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>
                    
                        <div class="mt-4">
                            <router-link to="#!" @click="openModel" class="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Get a project?</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="isOpen === true" class="fixed w-full h-screen z-999 top-0 left-0 bottom-0 bg-slate-600/70">
            <div id="contactModal" class="shadow-sm dark:shadow-gray-800 size-full inline-flex justify-center items-center">
                <div class="relative h-auto md:w-[480px] w-300px bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-md ">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Contact Form</h3>
                        <form method="dialog">
                            <button class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost" @click="openModel"> <i class="uil uil-multiply"></i></button>
                        </form>
                    </div>
                    <div class="p-6 text-center">
                        <form>
                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="name" class="font-semibold">Your Name:</label>
                                        <div class="form-icon relative mt-2">
                                            <i class="uil uil-user size-4 absolute top-3 start-4"></i>
                                            <input name="name" id="name" type="text" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :">
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="email" class="font-semibold">Your Email:</label>
                                        <div class="form-icon relative mt-2">
                                            <i class="uil uil-envelope size-4 absolute top-3 start-4"></i>
                                            <input name="email" id="email" type="email" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Email :">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1">
                                <div class="mb-5">
                                    <div class="text-start">
                                        <label for="subject" class="font-semibold">Your Question:</label>
                                        <div class="form-icon relative mt-2">
                                            <i class="uil uil-book-alt size-4 absolute top-3 start-4"></i>
                                            <input name="subject" id="subject" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <div class="text-start">
                                        <label for="comments" class="font-semibold">Your Comment:</label>
                                        <div class="form-icon relative mt-2">
                                            <i class="uil uil-comment size-4 absolute top-3 start-4"></i>
                                            <textarea name="comments" id="comments" class="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" id="submit" name="send" class="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import VueTypewriterEffect from "vue-typewriter-effect";

const isOpen = ref(false);

const openModel = () => {
  isOpen.value = !isOpen.value;
};
</script>