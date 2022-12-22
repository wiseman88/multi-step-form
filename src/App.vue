<script setup lang="ts">
import Personal from './components/Personal.vue';
import Plans from './components/Plans.vue';
import Addons from './components/Addons.vue';
import Summary from './components/Summary.vue';
import Confirmation from './components/Confirmation.vue';
import { ref } from 'vue';

const components = [Personal, Plans, Addons, Summary, Confirmation]

let currentStep = ref(0)
let steps = components.length

const nextStep = () => {
  currentStep.value++
}

const prevStep = () => {
  currentStep.value--
}

</script>

<template>
  <main>
    <component v-for="(component, index) in components" :is="component" :key="index" :id="index"
      :currentStep="currentStep"></component>
    <div v-if="currentStep <= (steps - 2)">
      <button v-if="currentStep !== 0" @click="prevStep">go back</button>
      <button v-if="currentStep !== (steps - 2)" @click="nextStep">next step</button>
      <button v-if="(currentStep + 1) === (steps - 1)" @click="nextStep">confirm</button>
    </div>
  </main>
</template>

<style scoped>

</style>
