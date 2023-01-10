<script setup lang="ts">
import Error from './Error.vue';
import Button from './Button.vue';
import Footer from './Footer.vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';
import { errors, validateName, validateEmail, validatePhone } from '@/composables/validations';
import { personalInputs } from '@/composables/inputs';



const props = defineProps<{
    id: number,
}>()

const step = useStepStore();
let { currentStep } = storeToRefs(step);

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form action="#">
            <label>
                <span>Name</span>
                <Error :error="errors.name" />
                <input type="text" placeholder="e.g. Stephen King" v-model="personalInputs.name"
                    @input="validateName(personalInputs.name)">
            </label>
            <label>
                <span>Email address</span>
                <Error :error="errors.email" />
                <input type="text" placeholder="e.g. stephenking@lorem.com" v-model="personalInputs.email"
                    @input="validateEmail(personalInputs.email)">
            </label>
            <label>
                <span>Phone number</span>
                <Error :error="errors.phone" />
                <input type="text" placeholder="e.g. +1 234 567 890" v-model="personalInputs.phone"
                    @input="validatePhone(personalInputs.phone)">
            </label>
        </form>
    </section>
</template>

<style scoped>
.action-buttons .btn-next {
    margin-left: auto;
}
</style>