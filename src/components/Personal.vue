<script setup lang="ts">
import { useValidationStore } from '@/stores/validation';
import { reactive, watch } from 'vue';


const props = defineProps<{
    currentStep: number,
    id: number
}>()

const store = useValidationStore();

const inputs = reactive({
    name: '',
    email: '',
    phone: ''
})

watch(inputs, (newValue) => {
    store.name = newValue.name
    store.email = newValue.email
    store.phone = newValue.phone
});

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form action="#">
            <label>
                <span>Name</span>
                <input type="text" placeholder="e.g. Stephen King" v-model="inputs.name">
            </label>
            <label>
                <span>Email address</span>
                <input type="text" placeholder="e.g. stephenking@lorem.com" v-model="inputs.email">
            </label>
            <label>
                <span>Phone number</span>
                <input type="text" placeholder="e.g. +1 234 567 890" v-model="inputs.phone">
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>