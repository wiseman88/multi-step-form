<script setup lang="ts">
import { computed } from 'vue';
import Button from './Button.vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';
import { useValidationStore } from '@/stores/validation';

const props = defineProps<{
    steps: number
}>()

const step = useStepStore()
const validation = useValidationStore()
let { currentStep } = storeToRefs(step)
let { name, email, phone } = storeToRefs(validation)

const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const isPhone = /^[\d\+]{10,20}$/;

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
    if (name.value.length < 3 || !isEmail.test(email.value) || !isPhone.test(phone.value.replace(/\s/g, ""))) {
        return
    }

    currentStep.value++
}

const prevStep = () => {
    currentStep.value--
}
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