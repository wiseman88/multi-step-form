<script setup lang="ts">
</script>

<template>
    <section>
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <form action="#">
            <div>
                <label>
                    Arcade
                    <input type="radio" name="card">
                </label>
                <label>
                    Advanced
                    <input type="radio" name="card">
                </label>
                <label>
                    Pro
                    <input type="radio" name="card">
                </label>
            </div>
            <label>
                <input type="checkbox">
                <span></span>
            </label>
            <div>
                <button>go back</button>
                <button>next step</button>
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