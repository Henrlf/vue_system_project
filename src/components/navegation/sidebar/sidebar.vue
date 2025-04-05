<script setup>
import {useRouter} from 'vue-router';
import SidebarButton from "@/components/navegation/sidebar/sidebarbutton.vue";
import logo from '@/assets/logo.svg';

const router = useRouter();

async function dashboardButton() {
    await router.push({name: 'dashboard'});
}

</script>

<template>
    <div class="sidebar">
        <SidebarButton :icon="logo" @click="dashboardButton"></SidebarButton>
        <SidebarButton :icon="logo" @click="teste"></SidebarButton>
        <SidebarButton :icon="logo" @click="teste"></SidebarButton>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    width: var(--sidebar-width);
    height: var(--sidebar-height);
    background-color: var(--sidebar-color);
    border-right: 1px solid var(--sidebar-border-color);
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
}

</style>