<script setup lang="ts">
const props = defineProps<{
    currentStep: number,
    id: number
}>()
</script>

<template>
    <section v-if="currentStep === id">
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <form action="#">
            <div>
                <label>
                    <span>Arcade</span>
                    <input type="radio" name="card">
                </label>
                <label>
                    <span>Advanced</span>
                    <input type="radio" name="card">
                </label>
                <label>
                    <span>Pro</span>
                    <input type="radio" name="card">
                </label>
            </div>
            <label>
                <input type="checkbox">
                <span></span>
            </label>
        </form>
    </section>
</template>

<style scoped>
/* Radio buttons style */
/* https://www.youtube.com/watch?v=isTbIYwMKiY&ab_channel=ALBDev */

/* Switch slider  */
/* https://codepen.io/AllThingsSmitty/pen/MmxxOz/  */
</style>