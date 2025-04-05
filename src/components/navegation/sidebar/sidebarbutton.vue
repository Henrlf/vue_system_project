<script setup>
defineProps({
    id: String,
    icon: SVGElement,
    onClick: Function,
    customClass: String,
});

</script>

<template>
    <div class="sidebar-item">
        <div class="div-anim"/>

        <button :id="id" class="sidebar-btn" type="button" @click="onClick" :class="customClass">
            <img :src="icon" alt="Icon">
        </button>
    </div>

    <div class="div-separator"/>
</template>

<style scoped>
.sidebar-item {
    display: flex;
    width: var(--sidebar-button-width);
    height: var(--sidebar-button-height);
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

.sidebar-item:hover .div-anim {
    width: var(--sidebar-button-width);
    transition: width 0.5s ease;
}

.sidebar-item:not(:hover) .div-anim {
    transition: width var(--time-not-hover) ease;
}

.div-anim {
    position: absolute;
    width: 0;
    height: var(--sidebar-button-height);
    background-color: var(--primary-color);
    left: 0;
    z-index: 0;
    transition: width 0.4s ease;
}

.sidebar-btn {
    width: 100%;
    height: 100%;
    padding: 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;
}

.div-separator {
    width: 80%;
    border-bottom: 1px solid var(--sidebar-border-color);
}
</style>