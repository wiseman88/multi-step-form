<script setup lang="ts">
import { reactive, computed } from 'vue';
import Error from './Error.vue';
import Button from './Button.vue';
import Footer from './Footer.vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';
import { errors, isEmail, isPhone, validateName, validateEmail, validatePhone } from '@/composables/validations';


const props = defineProps<{
    id: number,
}>()

const inputs = reactive({
    name: '',
    email: '',
    phone: ''
})

const step = useStepStore();
let { currentStep, steps } = storeToRefs(step);

const allowGoBack = computed<boolean>(() => {
    return currentStep.value !== 0
})

const allowNextStep = computed<boolean>(() => {
    return currentStep.value !== (steps.value - 2)
})

const allowConfirm = computed<boolean>(() => {
    return (currentStep.value + 1) === (steps.value - 1)
})

const nextStep = () => {
    validateName(inputs.name)
    validateEmail(inputs.email)
    validatePhone(inputs.phone)

    if (inputs.name.length < 3 || !isEmail.test(inputs.email) || !isPhone.test(inputs.phone.replace(/\s/g, ""))) {
        return
    }

    currentStep.value++
}

const prevStep = () => {
    currentStep.value--
}

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form action="#">
            <label>
                <span>Name</span>
                <Error :error="errors.name" />
                <input type="text" placeholder="e.g. Stephen King" v-model="inputs.name"
                    @input="validateName(inputs.name)">
            </label>
            <label>
                <span>Email address</span>
                <Error :error="errors.email" />
                <input type="text" placeholder="e.g. stephenking@lorem.com" v-model="inputs.email"
                    @input="validateEmail(inputs.email)">
            </label>
            <label>
                <span>Phone number</span>
                <Error :error="errors.phone" />
                <input type="text" placeholder="e.g. +1 234 567 890" v-model="inputs.phone"
                    @input="validatePhone(inputs.phone)">
            </label>
        </form>
        <Footer :steps="steps">
            <Button v-if="allowGoBack" @click="prevStep" class="btn-back" :classes="['btn-default']"
                :text="'go back'" />
            <Button v-if="allowNextStep" @click="nextStep" class="btn-next" :classes="['btn-primary']"
                :text="'next page'" />
            <Button v-if="allowConfirm" @click="nextStep" class="btn-confirm" :classes="['btn-secondary']"
                :text="'confirm'" />
        </Footer>
    </section>
</template>

<style scoped>
.action-buttons .btn-next {
    margin-left: auto;
}
</style>