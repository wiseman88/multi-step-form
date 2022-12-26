<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';

const props = defineProps<{
    steps: number
}>()

const step = useStepStore()
let { currentStep } = storeToRefs(step)

const allowGoBack = computed<boolean>(() => {
    return currentStep.value !== 0
})

const showActionButtons = computed<boolean>(() => {
    return currentStep.value <= (props.steps - 2)
})

const allowNextStep = computed<boolean>(() => {
    return currentStep.value !== (props.steps - 2)
})

const allowConfirm = computed<boolean>(() => {
    return (currentStep.value + 1) === (props.steps - 1)
})

const nextStep = () => {
    currentStep.value++
}

const prevStep = () => {
    currentStep.value--
}
</script>

<template>
    <footer v-if="showActionButtons" class="action-buttons">
        <Button v-if="allowGoBack" @click="prevStep" class="btn-back" :classes="['btn-default']" :text="'go back'" />
        <Button v-if="allowNextStep" @click="nextStep" class="btn-next" :classes="['btn-primary']"
            :text="'next page'" />
        <Button v-if="allowConfirm" @click="nextStep" class="btn-confirm" :classes="['btn-secondary']"
            :text="'confirm'" />
    </footer>
</template>

<style scoped>
.action-buttons {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background-color: var(--color-white);
}

.action-buttons .btn-next {
    margin-left: auto;
}
</style>