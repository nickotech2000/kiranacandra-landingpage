<template>
        <section class="relative md:py-24 py-16 bg-[url('../../assets/images/crypto/cta.jpg')] bg-center bg-cover">
            <div class="container relative">
                <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    <div class="text-center">
                        <h6 class="text-white mb-0">Founded in</h6>
                        <h2 class="mb-0 text-4xl mt-3 font-bold text-indigo-600 "><count-up class="counter-value" :start-val="1990" :end-val="2021"></count-up></h2>
                    </div>
                    <div class="text-center">
                        <h6 class="text-white mb-0">Team Member</h6>
                        <h2 class="mb-0 text-4xl mt-3 font-bold text-indigo-600 flex justify-center"><count-up class="counter-value" :start-val="551" :end-val="1000"></count-up>+</h2>
                    </div>
                    <div class="text-center">
                        <h6 class="text-white mb-0">Users</h6>
                        <h2 class="mb-0 text-4xl mt-3 font-bold text-indigo-600 flex justify-center"><count-up class="counter-value" :start-val="1" :end-val="10"></count-up>M</h2>
                    </div>
                    <div class="text-center">
                        <h6 class="text-white mb-0">Insurance Cover</h6>
                        <h2 class="mb-0 text-4xl mt-3 font-bold text-indigo-600 flex justify-center">$<count-up class="counter-value" :start-val="210" :end-val="410"></count-up>M</h2>
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import CountUp from 'vue-countup-v3';

</script>