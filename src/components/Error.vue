<script setup lang="ts">
const props = defineProps<{
    error: string
}>()
</script>

<template>
    <span v-if="error" class="error">{{ error }}</span>
</template>

<style scoped>
.error {
    position: absolute;
    right: 0;
    top: -0em;
    color: var(--color-error);
    font-weight: 500;
}
</style>