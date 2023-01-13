<script setup lang="ts">
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import plans from '@/api/plan';

const props = defineProps<{
    id: number
}>()

const step = useStepStore();
let { currentStep } = storeToRefs(step);

let isChecked = ref<boolean>(false)

const selectPlan = () => {
    isChecked.value = !isChecked.value
}

const plansToChoose = plans
</script>

<template>
    <section v-if="currentStep === id">
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <form action="#">
            <div class="card-wrapper">
                <label v-for="(plan, index) in plansToChoose" :key="index">
                    <input type="radio" name="card" checked>
                    <span class="card-input">
                        <span class="card-image"><img :src="plan.icon" alt="arcade"></span>
                        <span>
                            <span class="plan-name">{{ plan.name }}</span>
                            <span v-if="isChecked">
                                <span class="plan-price">{{ plan.yearly }}</span>
                                <span class="plan-free">{{ plan.free }}</span>
                            </span>
                            <span v-else class="plan-price">{{ plan.monthly }}</span>
                        </span>
                    </span>
                </label>
            </div>
            <div class="switch-wrapper">
                <p :style="isChecked ? 'color: var(--color-cool-gray);' : ''">Monthly</p>
                <label class="switch" for="checkbox">
                    <input type="checkbox" id="checkbox" @click="selectPlan()">
                    <span class="slider round"></span>
                </label>
                <p :style="!isChecked ? 'color: var(--color-cool-gray);' : ''">Yearly</p>
            </div>
        </form>
    </section>
</template>

<style scoped>
/* Radio buttons style */
/* https://www.youtube.com/watch?v=isTbIYwMKiY&ab_channel=ALBDev */

.card-input {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--color-light-gray);
    border-radius: 5px;
    cursor: pointer;
}

.card-input:hover {
    border: 1px solid var(--color-border);
}

input:checked+.card-input {
    border: 1px solid var(--color-border);
    background-color: var(--color-light);
}

input {
    display: none;
}

.card-image {
    align-self: baseline;
}

.plan-name {
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
}

.plan-price {
    color: var(--color-cool-gray);
    font-size: 0.9rem;
    font-weight: 500;
}

.plan-free {
    margin-top: 0.5rem;
}

/* Switch slider  */
/* https://codepen.io/AllThingsSmitty/pen/MmxxOz/  */

.switch-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: 3em;
    background-color: var(--color-bg-switch);
    border-radius: 5px;
}

.switch-wrapper p {
    font-size: 0.9rem;
    font-weight: 500;
}

.switch-wrapper label {
    margin-bottom: 0;
}

.switch {
    display: inline-block;
    height: 20px;
    position: relative;
    width: 38px;
}

.switch input {
    display: none;
}

.slider {
    background-color: var(--color-primary);
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}

.slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    position: absolute;
    transition: .4s;
}

input:checked+.slider:before {
    transform: translateX(18px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>