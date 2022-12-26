<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import Personal from './components/Personal.vue';
import Plans from './components/Plans.vue';
import Addons from './components/Addons.vue';
import Summary from './components/Summary.vue';
import Confirmation from './components/Confirmation.vue';
import { useStepStore } from './stores/step';
import { storeToRefs } from 'pinia';
import Footer from './components/Footer.vue';

const components = [Personal, Plans, Addons, Summary, Confirmation]

const step = useStepStore()
let { currentStep } = storeToRefs(step)
let steps = components.length

</script>

<template>
  <main>
    <Sidebar :currentStep="currentStep" />
    <div class="form-wrapper">
      <div class="component-wrapper">
        <component v-for="(component, index) in components" :is="component" :key="index" :id="index"
          :currentStep="currentStep" class="component"></component>
      </div>
    </div>
    <Footer :steps="steps" />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--color-bg-main);
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 1rem;
}

.component-wrapper {
  flex-grow: 1;
}

.component {
  margin-top: -73px;
  padding: 2rem 1.5rem;
  border-radius: 9px;
  background-color: var(--color-white);
}

.component h1 {
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-primary);
}

.component h4 {
  margin-bottom: 1.2rem;
  line-height: 1.8em;
  color: var(--color-cool-gray);
}

.component label:not(:last-of-type) {
  display: block;
  margin-bottom: 1rem;
}

.component label span {
  display: block;
  margin-bottom: 0.2rem;
  font-size: .8rem;
  color: var(--color-primary);
}

.component label input {
  padding: 0.5em 1em;
  border-radius: 0.25rem;
  border: 1px solid var(--color-light-gray);
}

.component label input:focus {
  outline: none;
  border: 1px solid var(--color-border);
}

.component label input::placeholder {
  color: var(--color-cool-gray);
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: var(--color-white);
}

.action-buttons .btn-next {
  margin-left: auto;
}
</style>
