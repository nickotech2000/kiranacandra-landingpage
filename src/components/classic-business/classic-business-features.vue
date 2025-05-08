<template>
    <div class="container relative md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Features</h3>
            <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            <div class="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                <div class="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                    <i data-feather="box" class="size-6 rotate-45"></i>
                </div>

                <div class="content mt-6 relative z-1">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">Web Design</router-link>
                    <p class="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                    <div class="mt-6">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>

                <div class="absolute bottom-0 -end-16">
                    <i data-feather="box" class="size-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></i>
                </div>
            </div>

            <div class="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                <div class="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                    <i data-feather="camera" class="size-6 rotate-45"></i>
                </div>

                <div class="content mt-6 relative z-1">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">Search Engine Optimization</router-link>
                    <p class="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                    <div class="mt-6">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"><span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>

                <div class="absolute bottom-0 -end-16">
                    <i data-feather="camera" class="size-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></i>
                </div>
            </div>

            <div class="group rounded shadow-lg relative p-6 overflow-hidden h-fit">
                <div class="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                    <i data-feather="bell" class="size-6 rotate-45"></i>
                </div>

                <div class="content mt-6 relative z-1">
                    <router-link to="page-services" class="title h5 text-lg font-medium hover:text-indigo-600">Social Media</router-link>
                    <p class="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                    <div class="mt-6">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out"> <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>Read More <i class="uil uil-arrow-right"></i></router-link>
                    </div>
                </div>

                <div class="absolute bottom-0 -end-16">
                    <i data-feather="bell" class="size-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></i>
                </div>
            </div>

            <div class="group rounded shadow-lg relative p-6 overflow-hidden h-fit lg:mt-16">
                <div class="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
                    <i data-feather="monitor" class="size-6 rotate-45"></i>
                </div>

                <div class="content mt-6 relative z-1">
                    <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">Design & Branding</router-link>
                    <p class="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>

                    <div class="mt-6">
                        <router-link to="#" class="relative group inline-block font-semibold tracking-wide align-middle text-base text-center border-none  text-indigo-600 hover:text-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right"></i></router-link>
                        <span class="absolute h-px w-0 group-hover:w-full end-0 group-hover:end-auto bottom-0 start-0 duration-500 bg-indigo-600"></span>
                    </div>
                </div>

                <div class="absolute bottom-0 -end-16">
                    <i data-feather="monitor" class="size-48 text-indigo-600 opacity-[0.03] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  
</script>