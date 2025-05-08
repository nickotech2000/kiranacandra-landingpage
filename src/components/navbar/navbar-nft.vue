<template>
    <nav id="topnav" class="defaultscroll is-sticky">
        <div class="container relative">
            <router-link class="logo ps-0" to="/">
                <img :src="logoIcon" class="inline-block sm:hidden" alt="">
                <div class="sm:block hidden">
                    <img :src="logoDark" class="inline-block dark:hidden" alt="">
                    <img :src="logoLight" class="hidden dark:inline-block" alt="">
                </div>
            </router-link>

            <div class="menu-extras" @click="handler">
                <div class="menu-item">
                    <router-link to="#" class="navbar-toggle" id="isToggle" :class="toggle === false ? '' : 'open'">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </router-link>
                </div>
            </div>

            <ul class="buy-button list-none mb-0">
                <li class="inline-block mb-0">
                    <div class="form-icon relative">
                        <i class="uil uil-search text-lg absolute top-1/2 -translate-y-1/2 start-3"></i>
                        <input type="text" class="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search...">
                    </div>
                </li>

                <li class="inline-block ps-1 mb-0">
                    <router-link to="#" id="connectWallet" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i class="uil uil-wallet"></i></router-link>
                </li>

                <li class="dropdown inline-block relative ps-1">
                    <button data-dropdown-toggle="dropdown" @click="toggleParagraph" class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" type="button">
                        <img :src="user" class="rounded-full" alt="">
                    </button>
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" :class="cartmenu === false ? 'hidden' : ''">
                        <div class="relative">
                            <div class="py-8 bg-gradient-to-tr from-indigo-600 to-red-600"></div>
                            <div class="absolute px-4 -bottom-7 start-0">
                                <div class="flex items-end">
                                    <img :src="user" class="rounded-full size-10 shadow-sm dark:shadow-gray-700" alt="">
                                    <span class="font-semibold text-[15px] ms-1">Cristina Murfy</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 px-4">
                            <h5 class="font-semibold text-[15px]">Wallet:</h5>
                            <div class="flex items-center justify-between">
                                <span class="text-[13px] text-slate-400">qhut0...hfteh45</span>
                                <router-link to="#" class="text-indigo-600"><i class="uil uil-copy"></i></router-link>
                            </div>
                        </div>

                        <div class="mt-4 px-4">
                            <h5 class="text-[15px]">Balance: <span class="text-indigo-600 font-semibold">0.00045ETH</span></h5>
                        </div>

                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="/nft-creator-profile" class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-user text-[16px] align-middle me-1"></i> Profile</router-link>
                            </li>
                            <li>
                                <router-link to="/nft-creator-profile-edit" class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-setting text-[16px] align-middle me-1"></i>Settings</router-link>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <router-link to="/auth-login" class="block text-[14px] font-semibold py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>Logout</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <div id="navigation" :class="toggle === false ? 'hidden' : 'block'">
                <ul class="navigation-menu !justify-start">
                    <li :class="activeMenu === '/index-nft' ? 'active' : ''"><router-link to="/index-nft" class="sub-menu-item">Home</router-link></li>

                    <li class="has-submenu parent-parent-menu-item" :class="['/nft-explore', '/nft-auction', '/nft-collection', '/index-nfts', '/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creators', '/nft-create-item', '/nft-detail'].includes(activeMenu) ? 'active' : ''">
                        <router-link to="" @click="submenu(menuOpen === '/index-nfts' ? '' : '/index-nfts')">NFTs <span class="menu-arrow"></span></router-link>
                        <ul class="submenu" :class="['/nft-explore', '/nft-auction', '/nft-collection', '/index-nfts', '/index-creators'].includes(menuOpen) ? 'open' : ''">
                            <li :class="activeMenu === '/nft-explore' ? 'active' : ''"><router-link to="/nft-explore" class="sub-menu-item">Explore</router-link></li>
                            <li :class="activeMenu === '/nft-auction' ? 'active' : ''"><router-link to="/nft-auction" class="sub-menu-item">Auction</router-link></li>
                            <li :class="activeMenu === '/nft-collection' ? 'active' : ''"><router-link to="/nft-collection" class="sub-menu-item">Collections</router-link></li>
                            <li class="has-submenu parent-menu-item" :class="['/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creators'].includes(activeMenu) ? 'active' : ''">
                                <router-link to="" @click="submenu('/index-creators')"> Creator <span class="submenu-arrow"></span> </router-link>
                                <ul class="submenu" :class="['/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creators'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/nft-creators' ? 'active' : ''"><router-link to="/nft-creators" class="sub-menu-item"> Creators</router-link></li>
                                    <li :class="activeMenu === '/nft-creator-profile' ? 'active' : ''"><router-link to="/nft-creator-profile" class="sub-menu-item"> Creator Profile</router-link></li>
                                    <li :class="activeMenu === '/nft-creator-profile-edit' ? 'active' : ''"><router-link to="/nft-creator-profile-edit" class="sub-menu-item"> Profile Edit</router-link></li>
                                </ul>
                            </li>
                            <li :class="activeMenu === '/nft-create-item' ? 'active' : ''"><router-link to="nft-create-item" class="sub-menu-item">Create NFT</router-link></li>
                            <li :class="activeMenu === '/nft-detail' ? 'active' : ''"><router-link to="nft-detail" class="sub-menu-item">Single NFT</router-link></li>
                        </ul>
                    </li>

                    <li :class="activeMenu === '/nft-wallet' ? 'active' : ''"><router-link to="/nft-wallet" class="sub-menu-item">Wallet</router-link></li>

                    <li class="has-submenu parent-parent-menu-item" :class="['/auth-login', '/index-page', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/auth-page', '/index-utility', '/page-terms', '/page-privacy', '/index-special', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou'].includes(activeMenu) ? 'active' : ''">
                        <router-link to="" @click="submenu(menuOpen === '/index-page' ? '' : '/index-page')">Pages <span class="menu-arrow"></span></router-link>
                        <ul class="submenu" :class="['/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/auth-page', '/index-page', '/index-utility', '/index-special'].includes(menuOpen) ? 'open' : ''">
                            <li class="has-submenu parent-menu-item" :class="['/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/auth-page'].includes(activeMenu) ? 'active' : ''">
                                <router-link to="" @click="submenu('/auth-page')"> Auth Pages <span class="submenu-arrow"></span> </router-link>
                                <ul class="submenu" :class="['/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/auth-page'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/auth-login' ? 'active' : ''"><router-link  to="/auth-login" class="sub-menu-item">Login</router-link></li>
                                    <li :class="activeMenu === '/auth-signup' ? 'active' : ''"><router-link to="/auth-signup" class="sub-menu-item">Signup</router-link></li>
                                    <li :class="activeMenu === '/auth-re-password' ? 'active' : ''"><router-link to="/auth-re-password" class="sub-menu-item">Reset Password</router-link></li>
                                    <li :class="activeMenu === '/auth-lock-screen' ? 'active' : ''"><router-link to="/auth-lock-screen" class="sub-menu-item">Lock Screen</router-link></li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/index-utility', '/page-terms', '/page-privacy'].includes(activeMenu) ? 'active' : ''">
                                <router-link to="" @click="submenu('/index-utility')"> Utility<span class="submenu-arrow"></span> </router-link>
                                <ul class="submenu" :class="['/index-utility', '/page-terms', '/page-privacy'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/page-terms' ? 'active' : ''"><router-link to="/page-terms" class="sub-menu-item">Terms of Services</router-link></li>
                                    <li :class="activeMenu === '/page-privacy' ? 'active' : ''"><router-link to="/page-privacy" class="sub-menu-item">Privacy Policy</router-link></li>
                                </ul>
                            </li>
                            <li class="has-submenu parent-menu-item" :class="['/index-special', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou'].includes(activeMenu) ? 'active' : ''">
                                <router-link to="" @click="submenu('/index-special')"> Special <span class="submenu-arrow"></span></router-link>
                                <ul class="submenu" :class="['/index-special', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou'].includes(menuOpen) ? 'open' : ''">
                                    <li :class="activeMenu === '/page-comingsoon' ? 'active' : ''"><router-link to="/page-comingsoon" class="sub-menu-item">Coming Soon</router-link></li>
                                    <li :class="activeMenu === '/page-maintenance' ? 'active' : ''"><router-link to="/page-maintenance" class="sub-menu-item">Maintenance</router-link></li>
                                    <li :class="activeMenu === '/page-error' ? 'active' : ''"><router-link to="/page-error" class="sub-menu-item">Error</router-link></li>
                                    <li :class="activeMenu === '/page-thankyou' ? 'active' : ''"><router-link to="/page-thankyou" class="sub-menu-item">Thank you</router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li :class="activeMenu === '/contact-one' ? 'active' : ''"><router-link to="/contact-one" class="sub-menu-item">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logoIcon from '@/assets/images/logo-icon-30.png'
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'
import user from '@/assets/images/client/05.jpg'

const toggle = ref(false);
const activeMenu = ref(window.location.pathname);
const menu = ref(true);
const menuOpen = ref('');
const cartmenu = ref(false);

const handleScroll = () => {
  const navbar = document.getElementById("topnav");
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar?.classList.add("nav-sticky");
  } else {
    navbar?.classList.remove("nav-sticky");
  }
};

const close = (event) => {
  if (!event.target.closest('.menu')) {
    menu.value = true;
    menuOpen.value = '';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', close);
  screenTop();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('click', close);
});

const submenu = (item) => {
  menu.value = !menu.value;
  menuOpen.value = item;
};

const handler = () => {
  toggle.value = !toggle.value;
};

const toggleParagraph = () => {
  cartmenu.value = !cartmenu.value;
};

const screenTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>