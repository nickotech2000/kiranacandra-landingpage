<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        <div v-for="item in datas" :key="item" class="group relative p-6 shadow-sm dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 duration-500 rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
            <div class="relative overflow-hidden text-transparent -m-3">
                <i :data-feather="item.icon" class="size-24 fill-indigo-600/5 group-hover:fill-white/10 mx-auto"></i>
                <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                    <i :class="item.icon2"></i>
                </div>
            </div>

            <div class="mt-6">
                <router-link to="#" class="text-lg font-medium group-hover:text-white duration-500">{{item.title}}</router-link>
                <p class="text-slate-400 group-hover:text-white/50 duration-500 mt-3">{{ item.desc }}</p>
            </div>
        </div>
    </div>
           
</template>

<script setup>
const datas = [
  {
    icon: 'hexagon',
    icon2: 'uil uil-chart-line',
    title: 'Hign Performance',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-crosshairs',
    title: 'Best Securities',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-airplay',
    title: 'Trusted Service',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-rocket',
    title: 'Info Technology',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-clock',
    title: '24/7 Support',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-users-alt',
    title: 'IT Management',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-file-alt',
    title: 'Certified Company',
    desc: 'It is a long established fact that a reader.'
  },
  {
    icon: 'hexagon',
    icon2: 'uil uil-search',
    title: 'Data Analytics',
    desc: 'It is a long established fact that a reader.'
  },
];
</script>