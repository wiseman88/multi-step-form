<script setup lang="ts">
import { computed } from 'vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';

const step = useStepStore()
let { currentStep, steps } = storeToRefs(step)

const showActionButtons = computed<boolean>(() => {
    return currentStep.value <= (steps.value - 2)
})
</script>

<template>
    <footer v-if="showActionButtons" class="action-buttons">
        <slot></slot>
    </footer>
</template>

<style scoped>
.action-buttons {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background-color: var(--color-white);
}
</style>