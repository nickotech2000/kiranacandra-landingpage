<template>
    <div>
        <Navbar :lightlogo=true :loginButton=true />

        <section class="relative pb-16 pt-24">
            <div class="container relative">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="md:text-4xl text-3xl md:leading-normal leading-normal font-semibold">Business Consultation</h3>
                    <ul class="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/">Techwind</router-link></li>
                        <li class="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><router-link to="/page-services">Services</router-link></li>
                        <li class="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                        <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600" aria-current="page">Business Consultation</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="relative table w-full py-44 bg-[url('../../assets/images/services.jpg')] bg-no-repeat bg-center bg-cover bg-fixed"></section>

         <section class="relative md:pb-24 pb-16">
            <div class="container relative -mt-10">
                <div class="grid grid-cols-1">
                    <div class="rounded-md shadow-sm dark:shadow-slate-800 bg-white dark:bg-slate-900 p-6">
                        <p class="text-slate-400 text-lg">Suspendisse tellus dolor, lacinia vitae sapien porttitor, pos uere euismod justo. Curabitur enim neque, auctor ac iaculis vitae, efficitur quis lectus. Class aptent taciti sociosqu ad litora torquent per conubiays nostra, per inceptos himenaeos. Sed eleifend risus faucibus tortor accumsan erat volutpat.</p>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <img :src="classic1" class="rounded-lg shadow-md dark:shadow-gray-800" alt="">

                    <div class="lg:ms-8">
                        <h4 class="mb-4 text-2xl leading-normal font-medium">Great Product Analytics <br> With Real Problem</h4>
                        <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                        <ul class="list-none text-slate-400 mt-4">
                            <li class="mb-1 flex ms-0"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                            <li class="mb-1 flex ms-0"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                            <li class="mb-1 flex ms-0"><i class="uil uil-check-circle text-indigo-600 text-xl me-2"></i> Create your own skin to match your brand</li>
                        </ul>

                        <div class="mt-4">
                            <router-link to="/page-aboutus" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Find Out More <i class="uil uil-angle-right-b align-middle"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div v-for="(item, index) in services" :key="index" :class="item.style">
                        <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.title}}</router-link>
                            <p class="text-slate-400 mt-3">{{item.desc}}</p>
                            
                            <div class="mt-5">
                                <router-link to="/page-services" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container relative md:mt-24 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-7 md:col-span-6">
                        <img :src="contact" alt="">
                    </div>

                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="lg:ms-5">
                            <div class="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                <h3 class="mb-6 text-2xl leading-normal font-medium">Need Consultation? Let's Talk.</h3>
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
        </section>

        <Footer :email='true'/>

        <Switcher/>
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import Navbar from '@/components/navbar/navbar.vue'
    import Footer from '@/components/footer/footer.vue'
    import Switcher from '@/components/switcher.vue';
    import classic1 from '@/assets/images/saas/classic02.png'
    import contact from '@/assets/images/contact.svg'

    let services = ref([
        {
            icon:'uil uil-shield',
            title:'Secured Payment',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            style:'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center'
        },
        {
            icon:'uil uil-calendar-alt',
            title:'Easy to use',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            style:'p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center'
        },
        {
            icon:'uil uil-fast-mail',
            title:'Support',
            desc:'The phrasal sequence of the is now so that many campaign and benefit',
            style:'p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center'
        },
    ])

</script>