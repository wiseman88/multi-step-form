<script setup lang="ts">
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';

const props = defineProps<{
    id: number
}>()

const step = useStepStore();
let { currentStep } = storeToRefs(step);
</script>

<template>
    <section v-if="currentStep === id">
        <h1>Thank you</h1>
        <p>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
        </p>
    </section>
</template>

<style scoped>

</style>