<template>

    <nav id="topnav" class="defaultscroll is-sticky">
        <div class="container relative">
            <router-link class="logo" to="/">
                <span class="inline-block dark:hidden">
                    <img :src="logoDark" class="l-dark" height="24" alt=""/>
                    <img :src="logoLight" class="l-light" height="24" alt=""/>
                </span>
                <img :src="logoLight" height="24" class="hidden dark:inline-block" alt=""/>
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

            <div id="navigation" :class="toggle === false ? 'hidden' : 'block'">
                <ul class="navigation-menu nav-light justify-end">
                    <li :class="activeMenu === '/index-photography' ? 'active' : ''"><router-link to="/index-photography" class="sub-menu-item">Home</router-link></li>
                    <li :class="activeMenu === '/photography-about' ? 'active' : ''"><router-link to="/photography-about" class="sub-menu-item">About Us</router-link></li>
                    <li :class="activeMenu === '/photography-portfolio' ? 'active' : ''"><router-link to="/photography-portfolio" class="sub-menu-item">Portfolio</router-link></li>
                    <li :class="activeMenu === '/contact-two' ? 'active' : ''"><router-link to="/contact-two" class="sub-menu-item">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import feather from 'feather-icons';
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

const toggle = ref(false);
const activeMenu = ref('');

const screenTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  const navbar = document.getElementById('topnav');
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    navbar.classList.add('nav-sticky');
  } else {
    navbar.classList.remove('nav-sticky');
  }
};


const handler = () => {
  toggle.value = !toggle.value;
};

onMounted(() => {
  screenTop();
  feather.replace();
  activeMenu.value = window.location.pathname;
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>