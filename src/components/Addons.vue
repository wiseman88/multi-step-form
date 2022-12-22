<script setup lang="ts">

const props = defineProps<{
    currentStep: number,
    id: number
}>()

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Pick add-ons</h1>
        <h4>Add-ons help enhance your gaming experience.</h4>
        <form action="#">
            <div>
                <label>
                    <h3>Online service</h3>
                    <p>Access to multiplayer games</p>
                    <span>
                        +$1/mo
                    </span>
                    <input type="checkbox">
                </label>
                <label>
                    <h3>Larger storage</h3>
                    <p>Extra 1TB of cloud save</p>
                    <span>
                        +$2/mo
                    </span>
                    <input type="checkbox">
                </label>
                <label>
                    <h3>Customizable profile</h3>
                    <p>Custom theme on your profile</p>
                    <span>
                        +$2/mo
                    </span>
                    <input type="checkbox">
                </label>
            </div>
        </form>
    </section>
</template>

<style scoped>
/* Radio buttons style */
/* https://www.youtube.com/watch?v=isTbIYwMKiY&ab_channel=ALBDev */

/* Switch slider  */
/* https://codepen.io/AllThingsSmitty/pen/MmxxOz/  */
</style>