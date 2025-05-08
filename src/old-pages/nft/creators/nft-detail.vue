<template>
    <div>
        <Navbar />
        <section class="relative table w-full md:pb-24 pb-16 mt-28">
            <Detail />
            <Relateditem />
        </section>
        <Footer :email=true />
        <switcher />
    </div>
</template>

<script setup>
import Navbar from '@/components/navbar/navbar-nft.vue';
import Detail from '@/components/nft/nft-detail.vue';
import Relateditem from '@/components/nft/nft-related-auction.vue';
import Footer from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue'
</script>
