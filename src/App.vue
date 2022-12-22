<script setup lang="ts">
import Personal from './components/Personal.vue';
import Plans from './components/Plans.vue';
import Addons from './components/Addons.vue';
import Summary from './components/Summary.vue';
import Confirmation from './components/Confirmation.vue';
import { ref } from 'vue';

const components = [Personal, Plans, Addons, Summary, Confirmation]

let currentStep = ref(0)

</script>

<template>
  <main>
    <component v-for="(component, index) in components" :is="component" :key="index" :id="index"
      :currentStep="currentStep"></component>
    <div>
      <button>go back</button>
      <button>next step</button>
      <button>confirm</button>
    </div>
  </main>
</template>

<style scoped>

</style>
