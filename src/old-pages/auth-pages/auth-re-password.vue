<template>
<div>
    <section class="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div class="container relative">
            <div class="flex justify-center">
                <div class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                    <router-link to="/"><img :src="logo" class="mx-auto" alt=""></router-link>
                    <h5 class="my-6 text-xl font-semibold">Reset Your Password</h5>
                    <div class="grid grid-cols-1">
                        <p class="text-slate-400 mb-6">Please enter your email address. You will receive a link to create a new password via email.</p>
                        <form class="text-start">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="name@example.com" required>
                                </div>

                                <div class="mb-4">
                                    <input type="submit" class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Send">
                                </div>

                                <div class="text-center">
                                    <span class="text-slate-400 me-2">Remember your password ? </span><router-link to="/auth-login" class="text-black dark:text-white font-bold inline-block">Sign in</router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Switcher :backToTop=true />
</div>
</template>

<script setup>
import Switcher from '@/components/switcher.vue'
import logo from '@/assets/images/logo-icon-64.png'  
</script>

