<script setup>
// import HeaderBar from '@/components/navegation/header.vue';
import SidebarBar from '@/components/navegation/sidebar/sidebar.vue';

</script>

<template>
<!--    <HeaderBar/>-->
    <SidebarBar/>

    <main class="content">
        <router-view/>
    </main>

</template>

<style scoped>

</style>