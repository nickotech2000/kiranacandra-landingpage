<template>
<div>
    <section
        class="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div class="container relative">
            <div class="flex justify-center">
                <div
                    class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                    <div class="text-center">
                        <img :src="client1"
                            class="mx-auto size-28 rounded-full shadow-sm dark:shadow-gray-800" alt="">
                        <h5 class="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                    </div>
                    <form>
                        <div class="grid grid-cols-1">
                            <div class="mb-4">
                                <label class="font-semibold" for="LoginPassword">Password:</label>
                                <input id="LoginPassword" type="password"
                                    class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                                    required="" placeholder="Password:" >
                            </div>

                            <div class="flex justify-between mb-4">
                                <div class="flex items-center mb-0">
                                    <input
                                        class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                        type="checkbox" value="" id="RememberMe">
                                    <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember
                                        me</label>
                                </div>
                                <p class="text-slate-400 mb-0"><router-link to="/auth-re-password"
                                        class="text-slate-400">Forgot password ?</router-link></p>
                            </div>

                            <router-link to="user-profile">
                                <div class="">
                                    <input type="submit"
                                        class="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                                        value="Login / Sign in">
                                </div>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Switcher :backToTop=true />
</div>
</template>

<script setup>
import Switcher from '@/components/switcher.vue'
import client1 from '@/assets/images/client/05.jpg'

</script>

<style lang="scss" scoped></style>