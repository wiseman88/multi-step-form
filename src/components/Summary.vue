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
        <h1>Finishing up</h1>
        <h4>Double-check everything looks OK before confirming.</h4>
        <div>
            <div>
                <div>
                    <p>Arcade (Monthly)</p>
                    <a href="">Change</a>
                </div>
                <p>
                    $9/mo
                </p>
            </div>
            <div>
                <p>Online service</p>
                <p>+$1/mo</p>
            </div>
            <div>
                <p>Larger storage</p>
                <p>+$2/mo</p>
            </div>
        </div>
        <div>
            <p>Total (per month)</p>
            <p>+$12/mo</p>
        </div>
    </section>
</template>

<style scoped>

</style>