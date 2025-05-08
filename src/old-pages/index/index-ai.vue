<template>
<div>
    <span class="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full top-[10%] md:start-[10%] -start-[20%] bg-indigo-600/20"></span>
    <span class="fixed blur-[200px] lg:size-[600px] size-[400px] rounded-full bottom-[10%] md:end-[10%] -end-[20%] bg-red-600/20"></span>

    <Navbar :lightlogo=true :loginButton=true />

    <section class="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-white dark:bg-slate-900">
        <div class="absolute inset-0 bg-[url('../../assets/images/overlay.png')] bg-repeat opacity-10 dark:opacity-60"></div>
        <div class="container relative z-1">
            <div class="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                <div class="lg:col-span-7">
                    <div class="lg:me-6 lg:text-start text-center">
                        <h1 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">Access powerful AI <br>For <vue-typewriter-effect class="typewrite bg-gradient-to-tl to-indigo-600 from-red-600 text-transparent bg-clip-text"  data-period="2000" :strings='["Ai Content", "Blog Writing", "Technical Writing"]' /><span class="wrap"></span></h1>
                        <p class="text-lg max-w-xl lg:ms-0 mx-auto">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                        <div class="subcribe-form mt-6 mb-3">
                            <form class="relative max-w-md mx-auto lg:ms-0">
                                <div class="relative">
                                    <i class="uil uil-envelope text-xl absolute top-3 left-5"></i>
                                    <input type="email" id="aiemail" name="email" class="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-black dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow-sm dark:shadow-gray-800" placeholder="support@techwind.com">
                                </div>
                                <button type="submit" class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-md">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-5">
                    <div class="relative">
                        <span class="absolute lg:-top-0 -top-10 -right-32 size-[36rem] border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-[spin_120s_linear_infinite] -z-1"></span>
                        <span class="absolute lg:-top-24 -top-36 -right-56 size-[48rem] border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-full animate-[spin_240s_linear_infinite] -z-1"></span>
                        <div class="relative">
                            <span class="absolute lg:-top-0 -top-10 -right-40 size-[36rem] bg-gradient-to-tl to-indigo-600/30  from-red-600/30 dark:to-indigo-600/50 dark:from-red-600/50  blur-[200px] rounded-full -z-1"></span>
                            <img :src="heroImg" class="lg:max-w-none lg:ms-14" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-6">
        <div class="container relative">
            <CompanyLogos />
        </div>
    </section>

    <Cookies />
    <Switcher />
    <Generate />
    <AiPower />
    <AiGenerate />
    <AiUsers />
    <AskedQuestions />
    <Pricing />
    <Mobileapp />
    <FooterTransparent/>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import Navbar from '@/components/navbar/navbar.vue';
import VueTypewriterEffect from "vue-typewriter-effect";
import Switcher from '@/components/switcher.vue';
import Cookies from '@/components/start-cookies.vue';
import CompanyLogos from '@/components/company-logos.vue';
import Generate from '@/components/generate-content.vue';
import AiPower from '@/components/ai/click-ai-power.vue';
import AiGenerate from '@/components/ai/ai-generate.vue';
import AiUsers from '@/components/ai/ai-users.vue';
import AskedQuestions from '@/components/ai/ai-questions.vue';
import Pricing from '@/components/ai/ai-pricing-plan.vue';
import Mobileapp from '@/components/mobile-app.vue';
import FooterTransparent from '@/components/footer/footer-transparent.vue';
import heroImg from '@/assets/images/saas/light-dash.png'

onMounted(() => {
  document.documentElement.classList.add('dark');
});
</script>