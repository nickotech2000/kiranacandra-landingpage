<template>
        <nav id="topnav" class="defaultscroll is-sticky" :class="issticky">
                <div class="container relative">
                        <router-link v-if="lightlogo" to="/" class="logo">
                                <img :src="logoDark" class="inline-block dark:hidden" alt="" />
                                <img :src="logoLight" class="hidden dark:inline-block" alt="" />
                        </router-link>
                        <router-link v-else class="logo" to="/">
                                <span class="inline-block dark:hidden">
                                        <img :src="logoDark" class="l-dark" height="24" alt="" />
                                        <img :src="logoLight" class="l-light" height="24" alt="" />
                                </span>
                                <img :src="logoLight" height="24" class="hidden dark:inline-block" alt="" />
                        </router-link>

                        <div class="menu-extras" @click="handler">
                                <div class="menu-item">
                                        <router-link to="#" class="navbar-toggle" id="isToggle"
                                                :class="toggle === false ? '' : 'open'">
                                                <div class="lines">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                </div>
                                        </router-link>
                                </div>
                        </div>

                        <ul v-if="loginButton" class="buy-button list-none mb-0">
                                <li class="inline mb-0">
                                        <router-link to=""
                                                class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i
                                                        data-feather="settings" class="size-4"></i></router-link>
                                </li>

                                <li class="inline ps-1 mb-0">
                                        <a href="https://1.envato.market/techwind-vue" target="_blank"
                                                class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i
                                                        data-feather="shopping-cart" class="size-4"></i></a>
                                </li>
                        </ul>
                        <ul v-else class="buy-button list-none mb-0 ">
                                <li class="inline mb-0">
                                        <router-link to="#">
                                                <span class="login-btn-primary"><span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600/5 hover:bg-indigo-600 border border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"><i data-feather="settings" class="size-4"></i></span></span>
                                                <span class="login-btn-light"><span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i  data-feather="settings" class="size-4"></i></span></span>
                                        </router-link>
                                </li>

                                <li class="inline ps-1 mb-0">
                                        <a href="https://1.envato.market/techwind-vue" target="_blank">
                                                <div class="login-btn-primary"><span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white"><i  data-feather="shopping-cart" class="size-4"></i></span></div>
                                                <div class="login-btn-light"><span class="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 border hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i  data-feather="shopping-cart" class="size-4"></i></span></div>
                                        </a>
                                </li>
                        </ul>

                        <div id="navigation" :class="toggle === false ? 'hidden' : 'block'">
                                <ul class="navigation-menu " :class="navLight">
                                        <li :class="activeMenu === '/' ? 'active' : ''"><router-link to="/" class="sub-menu-item">Home</router-link></li>

                                        <li class="has-submenu parent-parent-menu-item" :class="['/index-saas', '/index-classic-saas', '/index-modern-saas', '/index-apps', '/index-classic-app', '/index-ai', '/index-smartwatch', '/index-marketing', '/index-seo', '/index-software', '/index-payment', '/index-charity', '/index-it-solution', '/index-it-solution-two', '/index-digital-agency', '/index-restaurent', '/index-hosting', '/index-nft', '/index-hotel', '/index-travel', '/index-cafe', '/index-gym', '/index-yoga', '/index-spa', '/index-job', '/index-business', '/index-startup', '/index-corporate', '/index-corporate-two', '/index-real-estate', '/index-consulting', '/index-solar', '/index-life-coach', '/index-insurance', '/index-construction', '/index-law', '/index-video', '/index-christmas', '/index-personal', '/index-portfolio', '/index-photography', '/index-studio', '/index-coworking', '/index-classic-business', '/index-course', '/index-event', '/index-podcast', '/index-hospital', '/index-phone-number', '/index-forums', '/index-shop', '/index-crypto', '/index-landing-one', '/index-landing-two', '/index-landing-three', '/index-landing-four', '/index-landing-six', '/index-service', '/index-food-blog', '/index-blog', '/index-furniture', '/index-landing-five', '/index-landings', '/index-web-programming', '/index-cleaner'].includes(activeMenu) ? 'active' : ''">
                                                <router-link to="" @click="submenu(menuOpen === '/index-landings' ? '' : '/index-landings')">Landings<span class="menu-arrow block md:hidden"></span></router-link>
                                                <span class="menu-arrow hidden md:block"></span>
                                                <ul class="submenu megamenu" :class="['/index-saas', '/index-classic-saas', '/index-modern-saas', '/index-apps', '/index-classic-app', '/index-ai', '/index-smartwatch', '/index-marketing', '/index-seo', '/index-software', '/index-payment', '/index-charity', '/index-it-solution', '/index-it-solution-two', '/index-digital-agency', '/index-restaurent', '/index-hosting', '/index-nft', '/index-hotel', '/index-travel', '/index-cafe', '/index-gym', '/index-yoga', '/index-spa', '/index-job', '/index-startup', '/index-business', '/index-corporate', '/index-corporate-two', '/index-real-estate', '/index-consulting', '/index-solar', '/index-life-coach', '/index-insurance', '/index-construction', '/index-law', '/index-video', '/index-christmas', '/index-personal', '/index-portfolio', '/index-photography', '/index-studio', '/index-coworking', '/index-classic-business', '/index-course', '/index-event', '/index-podcast', '/index-hospital', '/index-phone-number', '/index-forums', '/index-shop', '/index-crypto', '/index-landing-one', '/index-landing-two', '/index-landing-three', '/index-landing-four', '/index-landing-six', '/index-service', '/index-food-blog', '/index-blog', '/index-furniture', '/index-landing-five', '/index-landings', '/index-web-programming', '/index-cleaner'].includes(menuOpen) ? 'open' : ''">
                                                        <li>
                                                                <ul>
                                                                        <li :class="activeMenu === '/index-saas' ? 'active' : ''">
                                                                                <router-link to="/index-saas" class="sub-menu-item">Saas <span class="bg-emerald-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Animation</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-classic-saas' ? 'active' : ''">
                                                                                <router-link to="/index-classic-saas" class="sub-menu-item">Classic Saas </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-modern-saas' ? 'active' : ''">
                                                                                <router-link to="/index-modern-saas" class="sub-menu-item">Modern Saas </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-apps' ? 'active' : ''">
                                                                                <router-link to="/index-apps" class="sub-menu-item">Application</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-classic-app' ? 'active' : ''">
                                                                                <router-link to="/index-classic-app" class="sub-menu-item">Classic App </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-ai' ? 'active' : ''">
                                                                                <router-link to="/index-ai" class="sub-menu-item">AI Tools <span class="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-smartwatch' ? 'active' : ''">
                                                                                <router-link to="/index-smartwatch" class="sub-menu-item">Smartwatch</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-marketing' ? 'active' : ''">
                                                                                <router-link to="/index-marketing" class="sub-menu-item">Marketing</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-seo' ? 'active' : ''">
                                                                                <router-link to="/index-seo" class="sub-menu-item">SEO Agency</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-software' ? 'active' : ''">
                                                                                <router-link to="/index-software" class="sub-menu-item">Software</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-web-programming' ? 'active' : ''">
                                                                                <router-link to="/index-web-programming" class="sub-menu-item">Web Programming </router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeMenu === '/index-payment' ? 'active' : ''">
                                                                                <router-link to="/index-payment"
                                                                                        class="sub-menu-item">Payments</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-charity' ? 'active' : ''">
                                                                                <router-link to="/index-charity" class="sub-menu-item">Charity </router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li :class="activeMenu === '/index-it-solution' ? 'active' : ''">
                                                                                <router-link to="index-it-solution" class="sub-menu-item">IT Solution</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-it-solution-two' ? 'active' : ''">
                                                                                <router-link to="index-it-solution-two" class="sub-menu-item">It Solution Two </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-digital-agency' ? 'active' : ''">
                                                                                <router-link to="index-digital-agency" class="sub-menu-item">Digital Agency</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-restaurent' ? 'active' : ''">
                                                                                <router-link to="index-restaurent" class="sub-menu-item">Restaurent</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-hosting' ? 'active' : ''">
                                                                                <router-link to="index-hosting" class="sub-menu-item">Hosting</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-nft' ? 'active' : ''">
                                                                                <router-link to="index-nft" class="sub-menu-item">NFT Marketplace <span class="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-hotel' ? 'active' : ''">
                                                                                <router-link to="index-hotel" class="sub-menu-item">Hotel & Resort</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-travel' ? 'active' : ''">
                                                                                <router-link to="index-travel" class="sub-menu-item">Travels </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-cafe' ? 'active' : ''">
                                                                                <router-link to="index-cafe" class="sub-menu-item">Cafe <span class="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-gym' ? 'active' : ''">
                                                                                <router-link to="index-gym" class="sub-menu-item">Gym <span class="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-yoga' ? 'active' : ''">
                                                                                <router-link to="index-yoga" class="sub-menu-item">Yoga</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-spa' ? 'active' : ''">
                                                                                <router-link to="index-spa" class="sub-menu-item">Spa & Salon </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-cleaner' ? 'active' : ''">
                                                                                <router-link to="/index-cleaner" class="sub-menu-item">Cleaner Service </router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li :class="activeMenu === '/index-job' ? 'active' : ''">
                                                                                <router-link to="/index-job" class="sub-menu-item">Job <span class="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-startup' ? 'active' : ''">
                                                                                <router-link to="/index-startup" class="sub-menu-item">Startup</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-business' ? 'active' : ''">
                                                                                <router-link to="/index-business" class="sub-menu-item">Business</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-corporate' ? 'active' : ''">
                                                                                <router-link to="/index-corporate" class="sub-menu-item">Corporate</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-corporate-two' ? 'active' : ''">
                                                                                <router-link to="/index-corporate-two" class="sub-menu-item">Corporate Two </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-real-estate' ? 'active' : ''">
                                                                                <router-link to="/index-real-estate" class="sub-menu-item">Real Estate <span class="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-consulting' ? 'active' : ''">
                                                                                <router-link to="/index-consulting" class="sub-menu-item">Consulting </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-solar' ? 'active' : ''">
                                                                                <router-link to="/index-solar" class="sub-menu-item">Solar / Green Energy <span class="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-life-coach' ? 'active' : ''">
                                                                                <router-link to="/index-life-coach" class="sub-menu-item">Life Coach</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-insurance' ? 'active' : ''">
                                                                                <router-link to="/index-insurance" class="sub-menu-item">Insurance</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-construction' ? 'active' : ''">
                                                                                <router-link to="/index-construction" class="sub-menu-item">Construction</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-law' ? 'active' : ''">
                                                                                <router-link to="/index-law" class="sub-menu-item">Law Firm</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-video' ? 'active' : ''">
                                                                                <router-link to="/index-video" class="sub-menu-item">Video</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-christmas' ? 'active' : ''">
                                                                                <router-link to="/index-christmas" class="sub-menu-item">Christmas</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li :class="activeMenu === '/index-personal' ? 'active' : ''">
                                                                                <router-link to="/index-personal" class="sub-menu-item">Personal</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-portfolio' ? 'active' : ''">
                                                                                <router-link to="/index-portfolio" class="sub-menu-item">Portfolio <span class="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-photography' ? 'active' : ''">
                                                                                <router-link to="/index-photography" class="sub-menu-item">Photography<span class="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-studio' ? 'active' : ''">
                                                                                <router-link to="/index-studio" class="sub-menu-item">Studio</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-coworking' ? 'active' : ''">
                                                                                <router-link to="/index-coworking" class="sub-menu-item">Co-Woriking</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-classic-business' ? 'active' : ''">
                                                                                <router-link to="/index-classic-business" class="sub-menu-item">Classic Business</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-course' ? 'active' : ''">
                                                                                <router-link to="/index-course" class="sub-menu-item">Online Courses</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-event' ? 'active' : ''">
                                                                                <router-link to="/index-event" class="sub-menu-item">Event / Conference </router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-podcast' ? 'active' : ''">
                                                                                <router-link to="/index-podcast" class="sub-menu-item">Podcasts</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-hospital' ? 'active' : ''">
                                                                                <router-link to="/index-hospital" class="sub-menu-item">Hospital</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-phone-number' ? 'active' : ''">
                                                                                <router-link to="/index-phone-number" class="sub-menu-item">Phone Number</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-forums' ? 'active' : ''">
                                                                                <router-link to="/index-forums" class="sub-menu-item">Forums</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li :class="activeMenu === '/index-shop' ? 'active' : ''">
                                                                                <router-link to="/index-shop" class="sub-menu-item">Shop / eCommerce <span class="bg-red-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Full</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-crypto' ? 'active' : ''">
                                                                                <router-link to="/index-crypto" class="sub-menu-item">Cryptocurrency<span class="bg-black dark:bg-slate-50 inline-block text-white dark:text-slate-900 text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Dark</span></router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-one' ? 'active' : ''">
                                                                                <router-link to="/index-landing-one" class="sub-menu-item">Landing One</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-two' ? 'active' : ''">
                                                                                <router-link to="/index-landing-two" class="sub-menu-item">Landing Two</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-three' ? 'active' : ''">
                                                                                <router-link to="/index-landing-three" class="sub-menu-item">Landing Three</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-four' ? 'active' : ''">
                                                                                <router-link to="/index-landing-four" class="sub-menu-item">Landing Four</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-six' ? 'active' : ''">
                                                                                <router-link to="/index-landing-six" class="sub-menu-item">Landing Six</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-service' ? 'active' : ''">
                                                                                <router-link to="/index-service" class="sub-menu-item">Service Provider</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-food-blog' ? 'active' : ''">
                                                                                <router-link to="/index-food-blog" class="sub-menu-item">Food Blog</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-blog' ? 'active' : ''">
                                                                                <router-link to="/index-blog" class="sub-menu-item">Blog</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-furniture' ? 'active' : ''">
                                                                                <router-link to="/index-furniture" class="sub-menu-item">Furniture</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/index-landing-five' ? 'active' : ''">
                                                                                <router-link to="/index-landing-five"  class="sub-menu-item">Landing Five <span class="bg-green-600 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Onepage</span></router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                </ul>
                                        </li>

                                        <li class="has-submenu parent-parent-menu-item" :class="['/page-aboutus', '/page-services', '/page-team', '/page-pricing', '/page-testimonial', '/index-company', '/index-pages', '/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting', '/index-accounts', '/property-listing', '/property-detail', '/index-real', '/course-listing', '/course-detail', '/index-courses', '/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creator', '/nft-explore', '/nft-auction', '/nft-collection', '/nft-wallet', '/nft-create-item', '/nft-detail', '/index-nft-market', '/food-recipe', '/shop-grid', '/shop-grid-two', '/shop-item-detail', '/shop-cart', '/shop-checkout', '/shop-account', '/index-ecommerce', '/photography-about', '/photography-portfolio', '/index-photography', '/page-job-grid', '/page-job-detail', '/page-job-apply', '/page-job-post', '/page-job-career', '/page-job-candidates', '/page-job-candidate-detail', '/page-job-companies', '/page-job-company-detail', '/index-careers', '/forums-topic', '/forums-comments', '/index-forum', '/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support', '/index-helpcenter', '/blog', '/blog-sidebar', '/blog-detail', '/blog', '/blog-standard-post', '/blog-slider-post', '/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post', '/email-confirmation', '/email-password-reset', '/email-alert', '/email-invoice', '/index-email', '/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/index-auth-pages', '/page-terms', '/page-privacy', '/index-utility', '/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou', '/index-special', '/contact-detail', '/contact-two', '/index-contact', '/service-item', '/page-services', '/page-service-detail'].includes(activeMenu) ? 'active' : ''">
                                                <router-link to="" @click="submenu(menuOpen === '/index-pages' ? '' : '/index-pages')">Pages<span class="menu-arrow block md:hidden"></span></router-link>
                                                <span class="menu-arrow hidden md:block"></span>
                                                <ul class="submenu" :class="['/index-pages', '/index-company', '/index-accounts', '/index-real', '/index-courses', '/index-creator', '/index-nft-market', '/index-ecommerce', '/index-photography', '/index-careers', '/index-forum', '/index-helpcenter', '/blog', '/index-blog-posts', '/index-email', '/index-auth-pages', '/index-utility', '/index-special', '/index-contact', '/index-multi-level', '/index-multi-level2', '/service-item', '/page-services', '/page-service-detail'].includes(menuOpen) ? 'open' : ''">
                                                        <li class="has-submenu parent-menu-item" :class="['/page-aboutus', '/page-services', '/page-team', '/page-pricing', '/page-testimonial', '/index-company', '/service-item', '/page-services', '/page-service-detail'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-company')"> Company <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/page-aboutus', '/page-services', '/page-team', '/page-pricing', '/page-testimonial', '/index-company', '/service-item', '/page-services', '/page-service-detail'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/page-aboutus' ? 'active' : ''">
                                                                                <router-link to="page-aboutus" class="sub-menu-item"> About Us</router-link>
                                                                        </li>
                                                                        <li class="has-submenu child-menu-item" :class="['/service-item', '/page-services', '/page-service-detail'].includes(activeMenu) ? 'active' : ''">
                                                                                <router-link to="#" @click="submenu(menuOpen === '/service-item' ? '' : '/service-item')">Services </router-link>
                                                                                <span class="submenu-arrow"></span>
                                                                                <ul class="submenu" :class="['/service-item', '/page-services', '/page-service-detail'].includes(menuOpen) ? 'open' : ''">
                                                                                        <li><router-link to="/page-services" class="sub-menu-item">Services</router-link></li>
                                                                                        <li><router-link to="/page-service-detail" class="sub-menu-item">Service Detail</router-link></li>
                                                                                </ul>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-team' ? 'active' : ''">
                                                                                <router-link to="page-team" class="sub-menu-item">Team</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-pricing' ? 'active' : ''">
                                                                                <router-link to="page-pricing" class="sub-menu-item">Pricing</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-testimonial' ? 'active' : ''">
                                                                                <router-link to="page-testimonial" class="sub-menu-item">Testimonial</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting', '/index-accounts'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-accounts')">Accounts <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting', '/index-accounts'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/user-profile' ? 'active' : ''">
                                                                                <router-link to="/user-profile" class="sub-menu-item">User Profile</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-billing' ? 'active' : ''">
                                                                                <router-link to="/user-billing" class="sub-menu-item">Billing</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-payment' ? 'active' : ''">
                                                                                <router-link to="/user-payment" class="sub-menu-item">Payment</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-invoice' ? 'active' : ''">
                                                                                <router-link to="/user-invoice" class="sub-menu-item">Invoice</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-social' ? 'active' : ''">
                                                                                <router-link to="/user-social" class="sub-menu-item">Social</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-notification' ? 'active' : ''">
                                                                                <router-link to="/user-notification" class="sub-menu-item">Notification</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/user-setting' ? 'active' : ''">
                                                                                <router-link to="/user-setting" class="sub-menu-item">Setting</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/property-listing', '/property-detail', '/index-real'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-real')"> Real Estate <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/property-listing', '/property-detail', '/index-real'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/property-listing' ? 'active' : ''">
                                                                                <router-link to="/property-listing" class="sub-menu-item">Listing</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/property-detail' ? 'active' : ''">
                                                                                <router-link to="/property-detail" class="sub-menu-item">Property Detail</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/course-listing', '/course-detail', '/index-courses'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-courses')">Courses <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/course-listing', '/course-detail', '/index-courses'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/course-listing' ? 'active' : ''">
                                                                                <router-link to="/course-listing" class="sub-menu-item">Course Listing</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/course-detail' ? 'active' : ''">
                                                                                <router-link to="/course-detail" class="sub-menu-item">Course Detail</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/nft-explore', '/nft-auction', '/nft-collection', '/nft-wallet', '/nft-create-item', '/nft-detail', '/index-nft-market', '/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creator'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-nft-market')"> NFTMarket <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/nft-explore', '/nft-auction', '/nft-collection', '/nft-wallet', '/nft-create-item', '/nft-detail', '/index-nft-market', '/index-creator'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/nft-explore' ? 'active' : ''">
                                                                                <router-link to="/nft-explore" class="sub-menu-item">Explore</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/nft-auction' ? 'active' : ''">
                                                                                <router-link to="/nft-auction" class="sub-menu-item">Auction</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/nft-collection' ? 'active' : ''">
                                                                                <router-link to="/nft-collection" class="sub-menu-item">Collections</router-link>
                                                                        </li>
                                                                        <li class="has-submenu child-menu-item" :class="['/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creator'].includes(activeMenu) ? 'active' : ''">
                                                                                <router-link to="" @click="submenu('/index-creator')">Creator <span class="submenu-arrow"></span></router-link>
                                                                                <ul class="submenu" :class="['/nft-creators', '/nft-creator-profile', '/nft-creator-profile-edit', '/index-creator'].includes(menuOpen) ? 'open' : ''">
                                                                                        <li :class="activeMenu === '/nft-creators' ? 'active' : ''">
                                                                                                <router-link to="/nft-creators" class="sub-menu-item">Creators</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/nft-creator-profile' ? 'active' : ''">
                                                                                                <router-link to="/nft-creator-profile" class="sub-menu-item">Creator Profile</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/nft-creator-profile-edit' ? 'active' : ''">
                                                                                                <router-link to="/nft-creator-profile-edit" class="sub-menu-item">Profile Edit</router-link>
                                                                                        </li>
                                                                                </ul>
                                                                        </li>
                                                                        <li :class="activeMenu === '/nft-wallet' ? 'active' : ''">
                                                                                <router-link to="/nft-wallet" class="sub-menu-item">Wallet</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/nft-create-item' ? 'active' : ''">
                                                                                <router-link to="/nft-create-item" class="sub-menu-item">Create NFT</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/nft-detail' ? 'active' : ''">
                                                                                <router-link to="/nft-detail" class="sub-menu-item">Single NFT</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li :class="activeMenu === '/food-recipe' ? 'active' : ''">
                                                                <router-link to="/food-recipe" class="sub-menu-item">Food Recipe </router-link>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/shop-grid', '/shop-grid-two', '/shop-item-detail', '/shop-cart', '/shop-checkout', '/shop-account', '/index-ecommerce'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-ecommerce')">eCommerce <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/shop-grid', '/shop-grid-two', '/shop-item-detail', '/shop-cart', '/shop-checkout', '/shop-account', '/index-ecommerce'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/shop-grid' ? 'active' : ''">
                                                                                <router-link to="/shop-grid" class="sub-menu-item">Product Grid</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/shop-grid-two' ? 'active' : ''">
                                                                                <router-link to="/shop-grid-two" class="sub-menu-item">Product Grid Two</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/shop-item-detail' ? 'active' : ''">
                                                                                <router-link to="/shop-item-detail" class="sub-menu-item">Product Detail</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/shop-cart' ? 'active' : ''">
                                                                                <router-link to="/shop-cart" class="sub-menu-item">Shop Cart</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/shop-checkout' ? 'active' : ''">
                                                                                <router-link to="/shop-checkout" class="sub-menu-item">Checkout</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/shop-account' ? 'active' : ''">
                                                                                <router-link to="/shop-account" class="sub-menu-item">My Account</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/photography-about', '/photography-portfolio', '/index-photography'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-photography')"> Photography <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/photography-about', '/photography-portfolio', '/index-photography'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/photography-about' ? 'active' : ''">
                                                                                <router-link to="photography-about" class="sub-menu-item">About Us</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/photography-portfolio' ? 'active' : ''">
                                                                                <router-link to="photography-portfolio" class="sub-menu-item">Portfolio</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/page-job-grid', '/page-job-detail', '/page-job-apply', '/page-job-post', '/page-job-career', '/page-job-candidates', '/page-job-candidate-detail', '/page-job-companies', '/page-job-company-detail', '/index-careers'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-careers')">Job / Careers <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/page-job-grid', '/page-job-detail', '/page-job-apply', '/page-job-post', '/page-job-career', '/page-job-candidates', '/page-job-candidate-detail', '/page-job-companies', '/page-job-company-detail', '/index-careers'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/page-job-grid' ? 'active' : ''">
                                                                                <router-link to="/page-job-grid" class="sub-menu-item">All Jobs</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-detail' ? 'active' : ''">
                                                                                <router-link to="/page-job-detail" class="sub-menu-item">Job Detail</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-apply' ? 'active' : ''">
                                                                                <router-link to="/page-job-apply" class="sub-menu-item">Job Apply</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-post' ? 'active' : ''">
                                                                                <router-link to="/page-job-post" class="sub-menu-item">Job Post</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-career' ? 'active' : ''">
                                                                                <router-link to="/page-job-career" class="sub-menu-item">Job Career</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-candidates' ? 'active' : ''">
                                                                                <router-link to="/page-job-candidates" class="sub-menu-item">Job Candidates</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-candidate-detail' ? 'active' : ''">
                                                                                <router-link to="/page-job-candidate-detail" class="sub-menu-item">Candidate Detail</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-companies' ? 'active' : ''">
                                                                                <router-link to="/page-job-companies" class="sub-menu-item">All Companies</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/page-job-company-detail' ? 'active' : ''">
                                                                                <router-link to="/page-job-company-detail" class="sub-menu-item">Company Detail</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/forums-topic', '/forums-comments', '/index-forum'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-forum')">Forums <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/forums-topic', '/forums-comments', '/index-forum'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/forums-topic' ? 'active' : ''">
                                                                                <router-link to="/forums-topic" class="sub-menu-item">Forum Topic</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/forums-comments' ? 'active' : ''">
                                                                                <router-link to="/forums-comments" class="sub-menu-item">Forum Comments</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support', '/index-helpcenter'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-helpcenter')">Helpcenter<span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support', '/index-helpcenter'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/helpcenter' ? 'active' : ''">
                                                                                <router-link to="/helpcenter" class="sub-menu-item">Overview</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/helpcenter-faqs' ? 'active' : ''">
                                                                                <router-link to="/helpcenter-faqs" class="sub-menu-item">FAQs</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/helpcenter-guides' ? 'active' : ''">
                                                                                <router-link to="/helpcenter-guides" class="sub-menu-item">Guides</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/helpcenter-support' ? 'active' : ''">
                                                                                <router-link to="/helpcenter-support" class="sub-menu-item">Support</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/blog', '/blog-sidebar', '/blog-detail', '/blog', '/blog-standard-post', '/blog-slider-post', '/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post', '/index-blog-posts'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/blog')"> Blog <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/blog', '/blog-sidebar', '/blog-detail', '/blog', '/index-blog-posts'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/blog' ? 'active' : ''">
                                                                                <router-link to="/blog" class="sub-menu-item">Blogs</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/blog-sidebar' ? 'active' : ''">
                                                                                <router-link to="/blog-sidebar" class="sub-menu-item">Blogs & Sidebar</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/blog-detail' ? 'active' : ''">
                                                                                <router-link to="/blog-detail" class="sub-menu-item">Blog Detail</router-link>
                                                                        </li>
                                                                        <li class="has-submenu child-menu-item" :class="['/blog-slider-post', '/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post', '/index-blog-posts', '/blog-standard-post'].includes(activeMenu) ? 'active' : ''">
                                                                                <router-link to="" @click="submenu('/index-blog-posts')">Blog Posts<span class="submenu-arrow"></span></router-link>
                                                                                <ul class="submenu" :class="['/blog-standard-post', '/blog-slider-post', '/blog-gallery-post', '/blog-youtube-post', '/blog-vimeo-post', '/blog-audio-post', '/blog-blockquote-post', '/blog-left-sidebar-post', '/index-blog-posts'].includes(menuOpen) ? 'open' : ''">
                                                                                        <li :class="activeMenu === '/blog-standard-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-standard-post" class="sub-menu-item">Standard Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-slider-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-slider-post" class="sub-menu-item">Slider Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-gallery-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-gallery-post" class="sub-menu-item">Gallery Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-youtube-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-youtube-post" class="sub-menu-item">Youtube Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-vimeo-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-vimeo-post" class="sub-menu-item">Vimeo Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-audio-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-audio-post" class="sub-menu-item">Audio Post</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-blockquote-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-blockquote-post" class="sub-menu-item">Blockquote</router-link>
                                                                                        </li>
                                                                                        <li :class="activeMenu === '/blog-left-sidebar-post' ? 'active' : ''">
                                                                                                <router-link to="/blog-left-sidebar-post" class="sub-menu-item">Left Sidebar</router-link>
                                                                                        </li>
                                                                                </ul>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/email-confirmation', '/email-password-reset', '/email-alert', '/email-invoice', '/index-email'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-email')">Email Template <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/email-confirmation', '/email-password-reset', '/email-alert', '/email-invoice', '/index-email'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/email-confirmation' ? 'active' : ''">
                                                                                <router-link to="/email-confirmation" class="sub-menu-item">Confirmation</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/email-password-reset' ? 'active' : ''">
                                                                                <router-link to="/email-password-reset" class="sub-menu-item">Reset Password</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/email-alert' ? 'active' : ''">
                                                                                <router-link to="/email-alert" class="sub-menu-item">Alert</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/email-invoice' ? 'active' : ''">
                                                                                <router-link to="/email-invoice" class="sub-menu-item">Invoice</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/index-auth-pages'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-auth-pages')"> Auth Pages <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/auth-login', '/auth-signup', '/auth-re-password', '/auth-lock-screen', '/index-auth-pages'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/auth-login' ? 'active' : ''">
                                                                                <router-link to="/auth-login" class="sub-menu-item">Login</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/auth-signup' ? 'active' : ''">
                                                                                <router-link to="/auth-signup" class="sub-menu-item">Signup</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/auth-re-password' ? 'active' : ''">
                                                                                <router-link to="/auth-re-password" class="sub-menu-item">Reset Password</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/auth-lock-screen' ? 'active' : ''"><router-link to="/auth-lock-screen" class="sub-menu-item">Lock Screen</router-link></li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/page-terms', '/page-privacy', '/index-utility'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-utility')">Utility <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu"
                                                                        :class="['/page-terms', '/page-privacy', '/index-utility'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/page-terms' ? 'active' : ''">
                                                                                <router-link to="/page-terms" class="sub-menu-item">Terms of Services</router-link></li>
                                                                        <li :class="activeMenu === '/page-privacy' ? 'active' : ''"><router-link to="/page-privacy" class="sub-menu-item">Privacy Policy</router-link></li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou', '/index-special'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-special')">Special <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/page-comingsoon', '/page-maintenance', '/page-error', '/page-thankyou', '/index-special'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/page-comingsoon' ? 'active' : ''"><router-link to="/page-comingsoon" class="sub-menu-item">Coming Soon</router-link></li>
                                                                        <li :class="activeMenu === '/page-maintenance' ? 'active' : ''"><router-link to="/page-maintenance" class="sub-menu-item">Maintenance</router-link></li>
                                                                        <li :class="activeMenu === '/page-error' ? 'active' : ''"><router-link to="/page-error" class="sub-menu-item">Error</router-link></li>
                                                                        <li :class="activeMenu === '/page-thankyou' ? 'active' : ''"> <router-link to="/page-thankyou" class="sub-menu-item">Thank you</router-link></li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item" :class="['/contact-detail', '/contact-two', '/index-contact'].includes(activeMenu) ? 'active' : ''">
                                                                <router-link to="" @click="submenu('/index-contact')">Contact <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/contact-detail', '/contact-one', '/contact-two', '/index-contact'].includes(menuOpen) ? 'open' : ''">
                                                                        <li :class="activeMenu === '/contact-detail' ? 'active' : ''"><router-link to="/contact-detail" class="sub-menu-item">Contact Detail</router-link></li>
                                                                        <li><router-link to="/contact-one" class="sub-menu-item">Contact One</router-link></li>
                                                                        <li :class="activeMenu === '/contact-two' ? 'active' : ''"><router-link to="/contact-two" class="sub-menu-item">Contact Two</router-link></li>
                                                                </ul>
                                                        </li>
                                                        <li class="has-submenu parent-menu-item"><router-link to=""  @click="submenu('/index-multi-level')"> Multi Level Menu <span class="submenu-arrow"></span></router-link>
                                                                <ul class="submenu" :class="['/index-multi-level', '/index-multi-level2'].includes(menuOpen) ? 'open' : ''">
                                                                        <li><router-link to=""  class="sub-menu-item">Level 1.0</router-link></li>
                                                                        <li class="has-submenu child-menu-item">
                                                                                <router-link to="" @click="submenu('/index-multi-level2')">Level 2.0 <span class="submenu-arrow"></span></router-link>
                                                                                <ul class="submenu" :class="['/index-multi-level2'].includes(menuOpen) ? 'open' : ''">
                                                                                        <li><router-link to="#" class="sub-menu-item">Level 2.1</router-link></li>
                                                                                        <li><router-link to="#" class="sub-menu-item">Level 2.2</router-link> </li>
                                                                                </ul>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                </ul>
                                        </li>

                                        <li class="has-submenu parent-parent-menu-item" :class="['/portfolio-modern-two', '/portfolio-modern-three', '/portfolio-modern-four', '/portfolio-modern-five', '/portfolio-modern-six', '/index-portfolio-all', '/portfolio-classic-two', '/portfolio-classic-three', '/portfolio-classic-four', '/portfolio-classic-five', '/portfolio-classic-six', '/portfolio-creative-two', '/portfolio-creative-three', '/portfolio-creative-four', '/portfolio-creative-five', '/portfolio-creative-six', '/portfolio-masonry-two', '/portfolio-masonry-three', '/portfolio-masonry-four', '/portfolio-masonry-five', '/portfolio-masonry-six', '/portfolio-detail-one', '/portfolio-detail-two', '/portfolio-detail-three', '/portfolio-detail-four'].includes(activeMenu) ? 'active' : ''">
                                                <router-link to="" @click="submenu(menuOpen === '/index-portfolio-all' ? '' : '/index-portfolio-all')">Portfolio<span class="menu-arrow block md:hidden"></span></router-link>
                                                <span class="menu-arrow hidden md:block"></span>
                                                <ul class="submenu megamenu" :class="['/index-portfolio-all'].includes(menuOpen) ? 'open' : ''">
                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Modern Portfolio</li>
                                                                        <li :class="activeMenu === '/portfolio-modern-two' ? 'active' : ''">
                                                                                <router-link to="/portfolio-modern-two" class="sub-menu-item">Two Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-modern-three' ? 'active' : ''">
                                                                                <router-link to="/portfolio-modern-three" class="sub-menu-item">Three Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-modern-four' ? 'active' : ''">
                                                                                <router-link to="/portfolio-modern-four" class="sub-menu-item">Four  Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-modern-five' ? 'active' : ''">
                                                                                <router-link to="/portfolio-modern-five" class="sub-menu-item">Five Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-modern-six' ? 'active' : ''">
                                                                                <router-link to="/portfolio-modern-six" class="sub-menu-item">Six Column</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Classic Portfolio</li>
                                                                        <li :class="activeMenu === '/portfolio-classic-two' ? 'active' : ''">
                                                                                <router-link to="/portfolio-classic-two" class="sub-menu-item">Two Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-classic-three' ? 'active' : ''">
                                                                                <router-link to="/portfolio-classic-three" class="sub-menu-item">Three Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-classic-four' ? 'active' : ''">
                                                                                <router-link to="/portfolio-classic-four" class="sub-menu-item">Four Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-classic-five' ? 'active' : ''">
                                                                                <router-link to="/portfolio-classic-five" class="sub-menu-item">Five Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-classic-six' ? 'active' : ''">
                                                                                <router-link to="/portfolio-classic-six" class="sub-menu-item">Six Column</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Creative Portfolio</li>
                                                                        <li :class="activeMenu === '/portfolio-creative-two' ? 'active' : ''">
                                                                                <router-link to="/portfolio-creative-two" class="sub-menu-item">Two Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-creative-three' ? 'active' : ''">
                                                                                <router-link to="/portfolio-creative-three" class="sub-menu-item">Three Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-creative-four' ? 'active' : ''">
                                                                                <router-link to="/portfolio-creative-four" class="sub-menu-item">Four Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-creative-five' ? 'active' : ''">
                                                                                <router-link to="/portfolio-creative-five" class="sub-menu-item">Five Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-creative-six' ? 'active' : ''">
                                                                                <router-link to="/portfolio-creative-six" class="sub-menu-item">Six Column</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Masonry Portfolio</li>
                                                                        <li :class="activeMenu === '/portfolio-masonry-two' ? 'active' : ''">
                                                                                <router-link to="/portfolio-masonry-two" class="sub-menu-item">Two Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-masonry-three' ? 'active' : ''">
                                                                                <router-link to="/portfolio-masonry-three" class="sub-menu-item">Three Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-masonry-four' ? 'active' : ''">
                                                                                <router-link to="/portfolio-masonry-four" class="sub-menu-item">Four Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-masonry-five' ? 'active' : ''">
                                                                                <router-link  to="/portfolio-masonry-five" class="sub-menu-item">Five Column</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-masonry-six' ? 'active' : ''">
                                                                                <router-link to="/portfolio-masonry-six" class="sub-menu-item">Six Column</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Portfolio Detail</li>
                                                                        <li :class="activeMenu === '/portfolio-detail-one' ? 'active' : ''">
                                                                                <router-link to="/portfolio-detail-one" class="sub-menu-item">Portfolio One</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-detail-two' ? 'active' : ''">
                                                                                <router-link to="/portfolio-detail-two" class="sub-menu-item">Portfolio Two</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-detail-three' ? 'active' : ''">
                                                                                <router-link to="/portfolio-detail-three" class="sub-menu-item">Portfolio Three</router-link>
                                                                        </li>
                                                                        <li :class="activeMenu === '/portfolio-detail-four' ? 'active' : ''">
                                                                                <router-link to="/portfolio-detail-four" class="sub-menu-item">PortfolioFour</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>
                                                </ul>
                                        </li>

                                        <li class="has-submenu parent-menu-item" :class="['/index-docs', '/ui-components', '/documentation', '/changelog'].includes(activeMenu) ? 'active' : ''">
                                                <router-link to="" @click="submenu(menuOpen === '/index-docs' ? '' : '/index-docs')">Docs<span class="menu-arrow block md:hidden"></span></router-link><span class="menu-arrow hidden md:block"></span>
                                                <ul class="submenu" :class="['/index-docs', '/ui-components', '/documentation', '/changelog'].includes(menuOpen) ? 'open' : ''">
                                                        <li :class="activeMenu === '/ui-components' ? 'active' : ''"><router-link to="/ui-components" class="sub-menu-item">Components </router-link></li>
                                                        <li :class="activeMenu === '/documentation' ? 'active' : ''"><router-link to="/documentation"  class="sub-menu-item">Documentation</router-link></li>
                                                        <li :class="activeMenu === '/changelog' ? 'active' : ''"><router-link to="/changelog" class="sub-menu-item">Changelog</router-link></li>
                                                </ul>
                                        </li>

                                        <li :class="activeMenu === '/contact-one' ? 'active' : ''"><router-link to="/contact-one" class="sub-menu-item">Contact</router-link></li>
                                </ul>
                        </div>
                </div>
        </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import feather from 'feather-icons';
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

defineProps({
        issticky: {
                type: String,
                required: true
        },
        lightlogo: {
                type: Boolean,
                required: true
        },
        navLight: {
                type: String,
                required: true
        },
        loginButton: {
                type: Boolean,
                required: true
        }
});

const toggle = ref(false);
// const id = ref(1);
const activeMenu = ref('');
const menu = ref(true);
const menuOpen = ref('');

const handler = () => {
        toggle.value = !toggle.value;
};

const submenu = (item) => {
        menu.value = !menu.value;
        menuOpen.value = item;
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
        window.addEventListener('scroll', handleScroll);
        activeMenu.value = window.location.pathname;
});

onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
});
</script>
