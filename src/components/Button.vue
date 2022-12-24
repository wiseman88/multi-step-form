<script setup lang="ts">
const props = defineProps<{
    classes: Array<string>,
    text: string
}>()
</script>

<template>
    <button :class="classes" class="btn">
        {{ text }}
    </button>
</template>

<style scoped>
.btn {
    width: 111px;
    height: 43px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-transform: capitalize;
    font-weight: 500;
    background-color: transparent;
}

.btn-default {
    background-color: none;
    color: var(--color-cool-gray);
}

.btn-default:hover {
    color: var(--color-primary);
}

.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.btn-primary:hover {
    background-color: var(--color-primary-hover);
}

.btn-secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
}

.btn-secondary:hover {
    background-color: var(--color-secondary-hover);
}
</style>