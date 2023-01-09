<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import Error from './Error.vue';
import Button from './Button.vue';
import Footer from './Footer.vue';
import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';


const props = defineProps<{
    currentStep: number,
    id: number,
    steps: number
}>()

const name = ref('')
const email = ref('')
const phone = ref('')
const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const isPhone = /^[\d\+]{10,20}$/;
const errors = reactive({
    name: '',
    email: '',
    phone: ''
})

const validateName = (input: string) => {
    if (input.length < 3) {
        errors.name = 'This field is required'
    } else {
        errors.name = ''
    }
}

const validateEmail = (input: string) => {
    if (!isEmail.test(input)) {
        errors.email = 'This field is required'
    } else {
        errors.email = ''
    }
}

const validatePhone = (input: string) => {

    let inputCheck = input.replace(/\s/g, "");

    if (!isPhone.test(inputCheck)) {
        errors.phone = 'This field is required'
    } else {
        errors.phone = ''
    }
}

const step = useStepStore();
let { currentStep } = storeToRefs(step);

const allowGoBack = computed<boolean>(() => {
    return currentStep.value !== 0
})

const allowNextStep = computed<boolean>(() => {
    return currentStep.value !== (props.steps - 2)
})

const allowConfirm = computed<boolean>(() => {
    return (currentStep.value + 1) === (props.steps - 1)
})

const nextStep = () => {
    validateName(name.value)
    validateEmail(email.value)
    validatePhone(phone.value)

    if (name.value.length < 3 || !isEmail.test(email.value) || !isPhone.test(phone.value.replace(/\s/g, ""))) {
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
                <input type="text" placeholder="e.g. Stephen King" v-model="name" @input="validateName(name)">
            </label>
            <label>
                <span>Email address</span>
                <Error :error="errors.email" />
                <input type="text" placeholder="e.g. stephenking@lorem.com" v-model="email"
                    @input="validateEmail(email)">
            </label>
            <label>
                <span>Phone number</span>
                <Error :error="errors.phone" />
                <input type="text" placeholder="e.g. +1 234 567 890" v-model="phone" @input="validatePhone(phone)">
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