import { reactive } from "vue";

const errors = reactive({
    name: '',
    email: '',
    phone: ''
})
const isEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const isPhone = /^[\d\+]{10,20}$/;

const validateName = (input: string) => {
    if (input.length < 3) {
        errors.name = 'This field is required'
        console.log(errors.name)
    } else {
        errors.name = ''
    }
}

const validateEmail = (input: string) => {
    if (!isEmail.test(input)) {
        errors.email = 'This field is required'
        console.log(errors.email)
    } else {
        errors.email = ''
    }
}

const validatePhone = (input: string) => {
    let inputCheck = input.replace(/\s/g, "");

    if (!isPhone.test(inputCheck)) {
        errors.phone = 'This field is required'
        console.log(errors.phone)
    } else {
        errors.phone = ''
    }
}

export { errors, isEmail, isPhone, validateName, validateEmail, validatePhone }