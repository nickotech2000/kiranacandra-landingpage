<template>
    <div class="tagline bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800">
            <div class="container">                
                <div class="grid grid-cols-1">
                    <div class="flex items-center justify-between">
                        <ul class="list-none mb-0">
                            <li class="inline mb-0"><a href="mailto:contact@example.com" class="text-slate-400 hover:text-indigo-600 inline-flex items-center"><i data-feather="mail" class="size-4 me-1 text-indigo-600"></i> contact@example.com</a></li>
                            <li class="inline mb-0 ms-3"><a href="tel:+152534-468-854" class="text-slate-400 hover:text-indigo-600 inline-flex items-center"><i data-feather="phone" class="size-4 me-1 text-indigo-600"></i> +152 534-468-854</a></li>
                        </ul>

                        <ul class="list-none mb-0 space-x-1">
                            <li v-for="item in datas" :key="item" class="inline"><a :href="item.link" target="_blank" class="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center text-gray-400 hover:text-white border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"><i :class="item.icon" title="dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    const datas = [
        {
            link: 'https://dribbble.com/shreethemes',
            icon: 'uil uil-dribbble align-middle'
        },
        {
            link: 'https://www.behance.net/shreethemes',
            icon: 'uil uil-behance'
        },
        {
            link: 'http://linkedin.com/company/shreethemes',
            icon: 'uil uil-linkedin'
        },
        {
            link: 'https://www.facebook.com/shreethemes',
            icon: 'uil uil-facebook-f align-middle'
        },
        {
            link: 'https://www.instagram.com/shreethemes/',
            icon: 'uil uil-instagram align-middle'
        },
    ]
</script>