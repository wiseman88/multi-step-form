<script setup lang="ts">
import Personal from './components/Personal.vue';
import Plans from './components/Plans.vue';
import Addons from './components/Addons.vue';
import Summary from './components/Summary.vue';
import Confirmation from './components/Confirmation.vue';

const components = [Personal, Plans, Addons, Summary, Confirmation]

</script>

<template>
  <main>
    <component v-for="(component, index) in components" :is="component" :key="index" :id="index"></component>
  </main>
</template>

<style scoped>

</style>
