<template>
    <div>
        <section class="relative md:py-24 py-16 overflow-hidden">
            <div class="container relative">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6">
                        <div class="lg:me-8">
                            <div class="relative">
                                <img src="../../assets/images/feature.png" alt="">
                                <div class="overflow-hidden absolute size-[512px] bg-indigo-600/5 top-1/4 start-0 end-0 align-middle -z-1 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6">
                        <div class="lg:ms-5">
                            <div class="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                <h3 class="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>

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
            </div><!--end container-->

            <div class="container relative md:mt-24 mt-16">
                <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    <div v-for="item in datas" :key="item" class="text-center px-6">
                        <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                            <i :class="item.icon"></i>
                        </div>

                        <div class="content mt-7">
                            <h5 class="text-xl font-semibold">{{item.name}}</h5>
                            <p class="text-slate-400 mt-3">{{item.desc}} <br> {{item.desc2}} </p>
                            
                            <div class="mt-5">
                                <a href="tel:+152534-468-854" v-if="item.detail === '+152 534-468-854'"
                                    class="text-indigo-600 font-medium">{{ item.detail }}</a>
                                <a href="mailto:contact@example.com" v-if="item.detail === 'contact@example.com'"
                                    class="text-indigo-600 font-medium">{{ item.detail }}</a>
                                <router-link to="" @click="toggle" v-if="item.detail === 'View on Google map'"
                                    data-type="iframe"
                                    class="video-play-icon read-more lightbox text-indigo-600 font-medium">View on
                                    Google map</router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section >
        <div :class="isActive ? 'fixed' : 'hidden'" class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999">
            <div class="h-[100%] flex items-center justify-center">
                <iframe src="https://www.youtube.com/embed/S_CGed6E610?feature=oembed" width="700" height="500"
                    frameborder="0"></iframe>
            </div><button class="text-slate-400 absolute top-[20px] right-[20px]">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="size-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
                    @click="toggle">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                datas: [
                    {
                        icon: 'uil uil-question-circle',
                        name: 'Phone',
                        desc: 'Start working with Techwind that can provide everything',
                        detail: '+152 534-468-854'
                    },
                    {
                        icon: 'uil uil-file-bookmark-alt',
                        name: 'Email',
                        desc: 'Start working with Techwind that can provide everything',
                        detail: 'contact@example.com'
                    },
                    {
                        icon: 'uil uil-cog',
                        name: 'Location',
                        desc: 'C/54 Northwest Freeway, Suite 558,',
                        desc2: 'Houston, USA 485',
                        detail: 'View on Google map'
                    },
                ]
            }
        },
        methods: {
            toggle(){
                 if(!this.isActive){
                    this.isActive = true;
                 } else {
                    this.isActive = false
                 }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>