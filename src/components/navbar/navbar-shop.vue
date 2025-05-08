<template>

    <div>
        <nav id="topnav" class="defaultscroll is-sticky bg-white dark:bg-slate-900">
            <div class="container relative">
                <router-link class="logo" to="/">
                    <img :src="logoDark" class="inline-block dark:hidden" alt=""/>
                    <img :src="logoLight" class="hidden dark:inline-block" alt=""/>
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

                <ul class="buy-button list-none mb-0 space-x-1">
                    <li class="dropdown inline-block relative me-1">
                        <button ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen" data-dropdown-toggle="dropdown"
                            class="dropdown-toggle text-[20px]" type="button">
                            <i class="uil uil-search align-middle"></i>
                        </button>
                        <div class="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 " v-show="dropdownOpen">
                            <div class="relative">
                                <i data-feather="search" class="absolute size-4 top-[9px] end-3"></i>
                                <input type="text" class="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none dark:bg-slate-900" name="s" id="searchItem" placeholder="Search...">
                            </div>
                        </div>
                    </li>

                    <li class="dropdown inline-block relative">
                        <button ref="dropdownToggle2" @click="dropdownOpen2 = !dropdownOpen2" data-dropdown-toggle="dropdown" class="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" type="button">
                            <i data-feather="shopping-cart" class="h-4 w-4"></i>
                        </button>
                        <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800"  v-show="dropdownOpen2">
                            <ul class="py-3 text-start" aria-labelledby="dropdownDefault">
                                <li>
                                    <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                        <span class="flex items-center">
                                            <img :src="s1" class="rounded shadow-sm dark:shadow-gray-800 w-9" alt=""/>
                                            <span class="ms-3">
                                                <span class="block font-semibold">T-shirt (M)</span>
                                                <span class="block text-sm text-slate-400">$320 X 2</span>
                                            </span>
                                        </span>
                                        <span class="font-semibold">$640</span>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                        <span class="flex items-center">
                                            <img :src="s2" class="rounded shadow-sm dark:shadow-gray-800 w-9" alt=""/>
                                            <span class="ms-3">
                                                <span class="block font-semibold">Bag</span>
                                                <span class="block text-sm text-slate-400">$50 X 5</span>
                                            </span>
                                        </span>

                                        <span class="font-semibold">$250</span>
                                    </router-link>
                                </li>

                                <li>
                                    <router-link to="#" class="flex items-center justify-between py-1.5 px-4">
                                        <span class="flex items-center">
                                            <img :src="s3" class="rounded shadow-sm dark:shadow-gray-800 w-9" alt=""/>
                                            <span class="ms-3">
                                                <span class="block font-semibold">Watch (Men)</span>
                                                <span class="block text-sm text-slate-400">$800 X 1</span>
                                            </span>
                                        </span>

                                        <span class="font-semibold">$800</span>
                                    </router-link>
                                </li>

                                <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                <li class="flex items-center justify-between py-1.5 px-4">
                                    <h6 class="font-semibold mb-0">Total($):</h6>
                                    <h6 class="font-semibold mb-0">$1690</h6>
                                </li>

                                <li class="py-1.5 px-4 space-x-1">
                                    <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</router-link>
                                    <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</router-link>
                                    <p class="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                </li>

                            </ul>
                        </div>
                    </li>

                    <li class="inline-block">
                        <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white" @click="show = !show">
                            <i data-feather="heart" class="h-4 w-4"></i>
                        </router-link>
                    </li>

                    <li class="dropdown inline-block relative">
                        <button data-dropdown-toggle="dropdown" class="dropdown-toggle items-center" type="button" ref="dropdownToggle3" @click="dropdownOpen3 = !dropdownOpen3">
                            <span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 text-white"><img src="../../assets/images/client/06.jpg" class="rounded-full" alt=""/></span>
                        </button>

                        <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800" v-show="dropdownOpen3">
                            <ul class="py-2 text-start" aria-labelledby="dropdownDefault">
                                <li>
                                    <router-link to="/shop-account" class="block py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-user align-middle me-1"></i> Account</router-link>
                                </li>
                                <li>
                                    <router-link to="/shop-cart" class="block py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-clipboard-notes align-middle me-1"></i> Order History</router-link>
                                </li>
                                <li>
                                    <router-link to="/shop-checkout" class="block py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-arrow-circle-down align-middle me-1"></i> Download</router-link>
                                </li>
                                <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <router-link to="/auth-login" class="block py-1.5 px-4 hover:text-indigo-600"><i class="uil uil-sign-out-alt align-middle me-1"></i> Logout</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <div id="navigation" :class="toggle === false ? 'hidden' : 'block'">
                    <ul class="navigation-menu">
                        <li :class="activeMenu === '/index-shop' ? 'active' : ''"><router-link to="/index-shop" class="sub-menu-item">Home</router-link></li>

                        <li :class="activeMenu === '/shop-about' ? 'active' : ''"><router-link to="/shop-about" class="sub-menu-item">About Us</router-link></li>

                        <li class="has-submenu parent-menu-item" :class="['/shop-grid', '/shop-grid-two', '/shop-item-detail', '/shop-cart', '/shop-checkout', '/shop-account', '/index-shops'].includes(activeMenu) ? 'active' : ''">
                            <router-link to="" @click="submenu(menuOpen === '/index-shops' ? '' : '/index-shops')">Shop <span class="menu-arrow"></span></router-link>
                            <ul class="submenu" :class="['/shop-grid', '/shop-grid-two', '/shop-item-detail', '/shop-cart', '/shop-checkout', '/shop-account', '/index-shops'].includes(menuOpen) ? 'open' : ''">
                                <li :class="activeMenu === '/shop-grid' ? 'active' : ''"><router-link to="/shop-grid" class="sub-menu-item">Product Grid</router-link></li>
                                <li :class="activeMenu === '/shop-grid-two' ? 'active' : ''"><router-link to="/shop-grid-two" class="sub-menu-item">Product Grid Two</router-link></li>
                                <li :class="activeMenu === '/shop-item-detail' ? 'active' : ''"><router-link to="/shop-item-detail" class="sub-menu-item">Product Detail</router-link></li>
                                <li :class="activeMenu === '/shop-cart' ? 'active' : ''"><router-link to="/shop-cart" class="sub-menu-item">Shop Cart</router-link></li>
                                <li :class="activeMenu === '/shop-checkout' ? 'active' : ''"><router-link to="/shop-checkout" class="sub-menu-item">Checkout</router-link></li>
                                <li :class="activeMenu === '/shop-account' ? 'active' : ''"><router-link to="/shop-account" class="sub-menu-item">My Account</router-link></li>
                            </ul>
                        </li>

                        <li class="has-submenu parent-menu-item" :class="['/index-pages', '/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou'].includes(activeMenu) ? 'active' : ''">
                            <router-link to="" @click="submenu(menuOpen === '/index-pages' ? '' : '/index-pages')">Pages<span class="menu-arrow"></span></router-link>
                            <ul class="submenu" :class="['/index-pages', '/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou'].includes(menuOpen) ? 'open' : ''">
                                <li :class="activeMenu === '/auth-login' ? 'active' : ''"><router-link to="/auth-login" class="sub-menu-item">Login</router-link></li>
                                <li :class="activeMenu === '/auth-signup' ? 'active' : ''"><router-link to="/auth-signup" class="sub-menu-item">Signup</router-link></li>
                                <li :class="activeMenu === '/auth-re-password' ? 'active' : ''"><router-link to="/auth-re-password" class="sub-menu-item">Reset Password</router-link></li>
                                <li :class="activeMenu === '/auth-lock-screen' ? 'active' : ''"><router-link to="/auth-lock-screen" class="sub-menu-item">Lock Screen</router-link></li>
                                <li :class="activeMenu === '/page-comingsoon' ? 'active' : ''"><router-link to="/page-comingsoon" class="sub-menu-item">Coming Soon</router-link></li>
                                <li :class="activeMenu === '/page-maintenance' ? 'active' : ''"><router-link to="/page-maintenance" class="sub-menu-item">Maintenance</router-link></li>
                                <li :class="activeMenu === '/page-error' ? 'active' : ''"><router-link to="/page-error" class="sub-menu-item">Error</router-link></li>
                                <li :class="activeMenu === '/page-thankyou' ? 'active' : ''"><router-link to="/page-thankyou" class="sub-menu-item">Thank you</router-link></li>
                            </ul>
                        </li>

                        <li class="has-submenu parent-menu-item" :class="['/index-blog', '/blog', '/blog-sidebar', '/blog-detail'].includes(activeMenu) ? 'active' : ''">
                            <router-link to="" @click="submenu(menuOpen === '/index-blog' ? '' : '/index-blog')">Blog<span class="menu-arrow"></span></router-link>
                            <ul class="submenu" :class="['/index-blog', '/blog', '/blog-sidebar', '/blog-detail'].includes(menuOpen) ? 'open' : ''">
                                <li :class="activeMenu === '/blog' ? 'active' : ''"><router-link to="/blog" class="sub-menu-item">Blogs</router-link></li>
                                <li :class="activeMenu === '/blog-sidebar' ? 'active' : ''"><router-link to="/blog-sidebar" class="sub-menu-item">Blogs & Sidebar</router-link></li>
                                <li :class="activeMenu === '/blog-detail' ? 'active' : ''"><router-link to="/blog-detail" class="sub-menu-item">Blog Detail</router-link></li>
                            </ul>
                        </li>

                        <li :class="activeMenu === '/contact-two' ? 'active' : ''"><router-link to="/contact-two" class="sub-menu-item">Contact</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="fixed inset-0 flex items-center justify-center w-full h-screen z-999 bg-slate-900/70" :class="show ? '' : 'hidden'">
            <div id="WishList" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                <div class="relative h-auto md:w-[480px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Add Payment Method</h3>
                        <form >
                            <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-6 text-center">
                        <div class="relative overflow-hidden text-transparent -m-3">
                            <i data-feather="hexagon" class="size-32 fill-red-600/5 mx-auto"></i>
                            <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-red-600 rounded-xl duration-500 text-4xl flex align-middle justify-center items-center">
                                <i class="uil uil-heart-break"></i>
                            </div>
                        </div>
    
                        <h4 class="text-xl font-semibold mt-6">Your wishlist is empty.</h4>
                        <p class="text-slate-400 my-3">Create your first wishlist request...</p>
    
                        <router-link to="#" class="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center bg-transparent hover:bg-indigo-600 border border-indigo-600 text-indigo-600 hover:text-white rounded-md mt-2">Create a new wishlist</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import feather from 'feather-icons';
import s1 from '@/assets/images/shop/items/s1.jpg'
import s2 from '@/assets/images/shop/items/s2.jpg'
import s3 from '@/assets/images/shop/items/s3.jpg'
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

const toggle = ref(false);
const show = ref(false);
const activeMenu = ref('');
const menu = ref(true);
const menuOpen = ref('');
const dropdownOpen = ref(false);
const dropdownOpen2 = ref(false);
const dropdownOpen3 = ref(false);

const dropdownToggle = ref(null);
const dropdownToggle2 = ref(null);
const dropdownToggle3 = ref(null);

const handler = () => {
  toggle.value = !toggle.value;
};

const submenu = (item) => {
  menu.value = !menu.value;
  menuOpen.value = item;
};

const handleClickOutside = (event) => {
  if (dropdownToggle.value && !dropdownToggle.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
};

const handleClickOutside2 = (event) => {
  if (dropdownToggle2.value && !dropdownToggle2.value.contains(event.target)) {
    dropdownOpen2.value = false;
  }
};

const handleClickOutside3 = (event) => {
  if (dropdownToggle3.value && !dropdownToggle3.value.contains(event.target)) {
    dropdownOpen3.value = false;
  }
};

const handleScroll = () => {
  const navbar = document.getElementById('topnav');
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add('nav-sticky');
  } else {
    navbar.classList.remove('nav-sticky');
  }
};

const screenTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  feather.replace();
  screenTop();
  activeMenu.value = window.location.pathname;
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('click', handleClickOutside2);
  document.addEventListener('click', handleClickOutside3);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('click', handleClickOutside2);
  document.removeEventListener('click', handleClickOutside3);
});
</script>
