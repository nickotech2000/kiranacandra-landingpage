<template>
    <div class="lg:w-1/4 md:w-1/3 md:px-3">
        <div class="relative md:-mt-48 -mt-32">
            <div class="p-6 rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <div class="profile-pic text-center mb-5">
                    <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
                    <div>
                        <div class="relative size-28 mx-auto">
                            <img :src="imageSrc" class="rounded-full shadow-sm dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"  id="profile-image" alt="">
                            <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                        </div>

                        <div class="mt-4">
                            <h5 class="text-lg font-semibold">Jenny Jimenez</h5>
                            <p class="text-slate-400">jennyhot@hotmail.com</p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-100 dark:border-gray-700">
                    <ul class="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
                        <li class="navbar-item account-menu" :class="currentUrl == '/user-profile' ? 'active' : ''">
                            <router-link to="/user-profile" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-dashboard"></i></span>
                                <h6 class="mb-0 font-semibold">Profile</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/user-billing' ? 'active' : ''">
                            <router-link to="/user-billing" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-diary-alt"></i></span>
                                <h6 class="mb-0 font-semibold">Billing Info</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/user-payment' ? 'active' : ''">
                            <router-link to="/user-payment" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-credit-card"></i></span>
                                <h6 class="mb-0 font-semibold">Payment</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu"  :class="currentUrl == '/user-invoice' ? 'active' : ''">
                            <router-link to="/user-invoice" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-receipt"></i></span>
                                <h6 class="mb-0 font-semibold">Invoice</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/user-social' ? 'active' : ''">
                            <router-link to="/user-social" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-process"></i></span>
                                <h6 class="mb-0 font-semibold">Social Profile</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/user-notification' ? 'active' : ''">
                            <router-link to="/user-notification" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-bell"></i></span>
                                <h6 class="mb-0 font-semibold">Notifications</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/user-setting' ? 'active' : ''">
                            <router-link to="/user-setting" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-setting"></i></span>
                                <h6 class="mb-0 font-semibold">Settings</h6>
                            </router-link>
                        </li>

                        <li class="navbar-item account-menu" :class="currentUrl == '/auth-lock-screen' ? 'active' : ''">
                            <router-link to="/auth-lock-screen" class="navbar-link text-slate-400 flex items-center py-2 rounded">
                                <span class="me-2 text-[18px] mb-0"><i class="uil uil-power"></i></span>
                                <h6 class="mb-0 font-semibold">Sign Out</h6>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import client from '@/assets/images/client/06.jpg'

const currentUrl = ref('');
const imageSrc = ref(client);

onMounted(() => {
  currentUrl.value = window.location.pathname;
});

const loadFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    if (imageSrc.value.startsWith('blob:')) {
      URL.revokeObjectURL(imageSrc.value);
    }
    imageSrc.value = URL.createObjectURL(file);
  }
};
</script>