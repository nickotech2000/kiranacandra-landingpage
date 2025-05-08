<template>
        <div class="container relative md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Medical Services</h3>
                <p class="text-slate-400 max-w-xl mx-auto">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
                <div v-for="item in datas" :key="item" class="text-center md:px-6">
                    <div class="size-20 bg-indigo-600/5 text-indigo-600 rounded-3xl text-3xl flex align-middle justify-center items-center shadow-xs dark:shadow-gray-800 mx-auto">
                        <i :class="item.icon"></i>
                    </div>

                    <div class="content mt-7">
                        <router-link to="/page-services" class="title h5 text-lg font-medium hover:text-indigo-600">{{item.name}}</router-link>
                        <p class="text-slate-400 mt-3">{{item.desc}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    const datas = [
        {
            icon: 'uil uil-eye',
            name: 'Eye Care',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-syringe',
            name: 'Psychotherapy',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-thermometer',
            name: 'Primary Care',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-tablets',
            name: 'Dental Care',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-microscope',
            name: 'Orthopedic',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-heart-rate',
            name: 'Cardiology',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-hospital',
            name: 'Gynecology',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
        {
            icon: 'uil uil-band-aid',
            name: 'Neurology',
            desc: 'The phrasal sequence of the Lorem Ipsum text is now so that many'
        },
    ]
</script>