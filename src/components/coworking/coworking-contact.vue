<template>
    <div>
        <div class="container-fluid relative">
            <div class="grid grid-cols-1">
                <div class="relative grayscale w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style="border:0" class="w-full h-[500px]" allowfullscreen></iframe>
                </div>
                <div class="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center">
                    <router-link to="#!" onclick="contactModal.showModal()" class="size-12 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-phone"></i></router-link>
                </div>
            </div>
        </div>

        <dialog id="contactModal" class="rounded-md shadow-sm dark:shadow-gray-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            <div class="relative h-auto md:w-[480px] w-300px">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 class="font-bold text-lg">Contact Form</h3>
                    <form method="dialog">
                        <button class="size-6 flex justify-center items-center shadow-sm dark:shadow-gray-800 rounded-md btn-ghost"><i data-feather="x" class="size-4"></i></button>
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
        </dialog>
    </div>
</template>

<script setup>
   
</script>