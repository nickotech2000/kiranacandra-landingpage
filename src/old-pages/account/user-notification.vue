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
                    <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h5 class="text-lg font-semibold">Account Notifications :</h5>
                        </div>

                        <div class="p-6">
                            <div class="flex justify-between pb-4">
                                <h6 class="mb-0 font-medium">When someone mentions me</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti1">
                                    <label class="form-check-label" for="noti1"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">When someone follows me</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti2">
                                    <label class="form-check-label" for="noti2"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">When shares my activity</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti3">
                                    <label class="form-check-label" for="noti3"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">When someone messages me</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti4">
                                    <label class="form-check-label" for="noti4"></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <div class="p-6 border-b border-gray-100 dark:border-gray-700">
                            <h5 class="text-lg font-semibold">Marketing Notifications :</h5>
                        </div>

                        <div class="p-6">
                            <div class="flex justify-between pb-4">
                                <h6 class="mb-0 font-medium">There is a sale or promotion</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti5">
                                    <label class="form-check-label" for="noti5"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">Company news</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" id="noti6">
                                    <label class="form-check-label" for="noti6"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">Weekly jobs</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti7">
                                    <label class="form-check-label" for="noti7"></label>
                                </div>
                            </div>
                            <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                                <h6 class="mb-0 font-medium">Unsubscribe News</h6>
                                <div class="">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" type="checkbox" value="" checked id="noti8">
                                    <label class="form-check-label" for="noti8"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </section>
  <Footers :email=true />
  <Switcher />
</div>
</template>

<script setup>
import bg from '@/assets/images/blog/bg.jpg'
import Navbar from '@/components/navbar/navbar.vue';
import AccouTab from '@/components/users-tab.vue';
import Footers from '@/components/footer/footer.vue';
import Switcher from '@/components/switcher.vue'
</script>
