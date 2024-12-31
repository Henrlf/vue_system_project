<script setup>
defineProps({
    id: String,
    label: String,
    type: String,
    value: String,
});
</script>

<template>
    <div class="container">
        <label :for="id" class="input-label">{{ label }}</label>
        <input :id="id" :name="id" :type="type" :value="value" class="input-container"/>
    </div>
</template>

<style scoped>
.input-container {
    width: 100%;
    line-height: 45px;
    margin-top: 5px;
}

.input-label {
    color: var(--text-color);
    margin-left: 3px;
}
</style>