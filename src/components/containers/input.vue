<script setup>
defineProps({
    id: String,
    label: String,
    value: String,
    type: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'email', 'password', 'number', 'tel'].includes(value),
    },
});
</script>

<template>
    <div class="container">
        <label :for="id" class="input-label">{{ label }}</label>
        <input :id="id" :name="id" :type="type" :value="value" class="input-container" :placeholder="label"/>
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
