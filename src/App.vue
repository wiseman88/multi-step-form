<script setup lang="ts">
import Personal from './components/Personal.vue';
import Plans from './components/Plans.vue';
import Addons from './components/Addons.vue';
import Summary from './components/Summary.vue';
import Confirmation from './components/Confirmation.vue';
import { computed, ref } from 'vue';
import Button from './components/Button.vue';

const components = [Personal, Plans, Addons, Summary, Confirmation]

let currentStep = ref(0)
let steps = components.length
const classes: Array<string> = []


const allowGoBack = computed<boolean>(() => {
  return currentStep.value !== 0
})

const showActionButtons = computed<boolean>(() => {
  return currentStep.value <= (steps - 2)
})

const allowNextStep = computed<boolean>(() => {
  return currentStep.value !== (steps - 2)
})

const allowConfirm = computed<boolean>(() => {
  return (currentStep.value + 1) === (steps - 1)
})

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
    <div v-if="showActionButtons">
      <Button v-if="allowGoBack" @click="prevStep" :classes="['btn-default']" :text="'go back'" />
      <Button v-if="allowNextStep" @click="nextStep" :classes="['btn-primary']" :text="'next page'" />
      <Button v-if="allowConfirm" @click="nextStep" :classes="['btn-secondary']" :text="'confirm'" />
    </div>
  </main>
</template>

<style scoped>

</style>
