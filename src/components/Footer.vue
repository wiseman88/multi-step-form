<script setup lang="ts">
import { computed } from 'vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';

const props = defineProps<{
    steps: number
}>()

const step = useStepStore()
let { currentStep } = storeToRefs(step)

const showActionButtons = computed<boolean>(() => {
    return currentStep.value <= (props.steps - 2)
})
</script>

<template>
    <footer v-if="showActionButtons" class="action-buttons">
        <slot></slot>
    </footer>
</template>

<style scoped>
.action-buttons {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background-color: var(--color-white);
}
</style>