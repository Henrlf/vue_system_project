<script setup>
defineProps({
    id: String,
    label: String,
    type: {
        type: String,
        default: 'submmit',
    },
    customClass: {
        type: String,
        default: 'light',
    },
});
</script>

<template>
    <div class="container">
        <button :id="id" class="btn" :type="type" :class="customClass">{{ label }}</button>
    </div>
</template>

<style scoped>

</style>