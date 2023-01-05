<script setup lang="ts">
import { useValidationStore } from '@/stores/validation';
import { ref, reactive, watch } from 'vue';
import Error from './Error.vue';


const props = defineProps<{
    currentStep: number,
    id: number
}>()

const store = useValidationStore();

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

watch(name, (newName) => {
    validateName(newName)
    store.name = newName
});

watch(email, (newEmail) => {
    validateEmail(newEmail)
    store.email = newEmail
});

watch(phone, (newPhone) => {
    validatePhone(newPhone)
    store.phone = newPhone
});

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form action="#">
            <label>
                <span>Name</span>
                <Error :error="errors.name" />
                <input type="text" placeholder="e.g. Stephen King" v-model="name">
            </label>
            <label>
                <span>Email address</span>
                <Error :error="errors.email" />
                <input type="text" placeholder="e.g. stephenking@lorem.com" v-model="email">
            </label>
            <label>
                <span>Phone number</span>
                <Error :error="errors.phone" />
                <input type="text" placeholder="e.g. +1 234 567 890" v-model="phone">
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>