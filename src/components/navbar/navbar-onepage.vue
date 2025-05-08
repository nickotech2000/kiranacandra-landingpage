<template>
    <div>
        <nav id="topnav" class="defaultscroll is-sticky">
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

                <ul class="buy-button list-none mb-0">
                    <li class="inline mb-0">
                        <router-link to="#" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i data-feather="settings" class="size-4"></i></router-link>
                    </li>

                    <li class="inline ps-1 mb-0">
                        <a href="https://1.envato.market/techwind-vue" target="_blank" class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i data-feather="shopping-cart" class="size-4"></i></a>
                    </li>
                </ul>

                <div id="navigation" class="navigation" :class="toggle === false ? 'hidden' : 'block'">
                    <ul  class="navigation-menu justify-end" id="navmenu-nav">
                        <li  class="has-submenu active home">
                            <a v-smooth-scroll href="#home" class="sub-menu-item">Home</a>
                        </li>
                        <li  class="has-submenu features">
                            <a v-smooth-scroll href="#features" class="sub-menu-item">Feature</a>
                        </li>
                        <li  class="has-submenu pricing">
                            <a v-smooth-scroll href="#pricing" class="sub-menu-item">Price</a>
                        </li>
                        <li  class="has-submenu team">
                            <a v-smooth-scroll href="#team" class="sub-menu-item">Team</a>
                        </li>
                        <li  class="has-submenu review">
                            <a v-smooth-scroll href="#review" class="sub-menu-item">Review</a>
                        </li>
                        <li  class="has-submenu blog">
                            <a v-smooth-scroll href="#blog" class="sub-menu-item">Blog</a>
                        </li>
                        <li  class="has-submenu" @click="show = !show">
                            <router-link to="#" class="sub-menu-item">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="fixed inset-0 w-full h-screen bg-slate-900/75 flex justify-center items-center z-999" :class="show ? '' : 'hidden'">
            <div id="ContactUs" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                <div class="relative h-auto md:w-[480px] w-300px">
                    <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="font-bold text-lg">Contact Us</h3>
                        <form method="dialog">
                            <button @click="show = !show" class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
                        </form>
                    </div>
                    <div class="p-6 text-center">
                        <form>
                            <div class="grid lg:grid-cols-12 lg:gap-6">
                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="name" class="font-semibold">Your Name:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="user" class="size-4 absolute top-3 start-4"></i>
                                            <input name="name" id="name" type="text" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Name :">
                                        </div>
                                    </div>
                                </div>
    
                                <div class="lg:col-span-6 mb-5">
                                    <div class="text-start">
                                        <label for="email" class="font-semibold">Your Email:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="mail" class="size-4 absolute top-3 start-4"></i>
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
                                            <i data-feather="book" class="size-4 absolute top-3 start-4"></i>
                                            <input name="subject" id="subject" class="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Subject :">
                                        </div>
                                    </div>
                                </div>
    
                                <div class="mb-5">
                                    <div class="text-start">
                                        <label for="comments" class="font-semibold">Your Comment:</label>
                                        <div class="form-icon relative mt-2">
                                            <i data-feather="message-circle" class="size-4 absolute top-3 start-4"></i>
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
import { ref, onMounted, onUnmounted } from 'vue';
import feather from 'feather-icons';
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

const toggle = ref(false);
const show = ref(false);
const current = ref('');
const sectionTop = ref(null);

const handler = () => {
  toggle.value = !toggle.value;
};

const handleScroll = () => {
  const topnav = document.getElementById("topnav");
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    topnav.classList.add("nav-sticky");
  } else {
    topnav.classList.remove("nav-sticky");
  }
};

const onscroll = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav .container .navigation ul li");

  sections.forEach((section) => {
    sectionTop.value = section.offsetTop;
    if (window.pageYOffset >= sectionTop.value - 60) {
      current.value = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    if (li.classList.contains(current.value)) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  });
};

const screenTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  feather.replace();
  screenTop();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', onscroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', onscroll);
});
</script>