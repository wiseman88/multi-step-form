import { useStepStore } from '@/stores/step';
import { storeToRefs } from 'pinia';
import { personalInputs } from "./inputs"
import { isEmail, isPhone, validateEmail, validateName, validatePhone } from "./validations"
import { computed } from 'vue';

const nextStep = () => {
    const step = useStepStore();
    let { currentStep } = storeToRefs(step);

    validateName(personalInputs.name)
    validateEmail(personalInputs.email)
    validatePhone(personalInputs.phone)

    if (personalInputs.name.length < 3 || !isEmail.test(personalInputs.email) || !isPhone.test(personalInputs.phone.replace(/\s/g, ""))) {
        return
    }

    currentStep.value++
}

const prevStep = () => {
    const step = useStepStore();
    let { currentStep } = storeToRefs(step);

    currentStep.value--
}

const allowGoBack = computed<boolean>(() => {
    const step = useStepStore();
    let { currentStep, steps } = storeToRefs(step);

    return currentStep.value !== 0
})

const allowNextStep = computed<boolean>(() => {
    const step = useStepStore();
    let { currentStep, steps } = storeToRefs(step);

    return currentStep.value !== (steps.value - 2)
})

const allowConfirm = computed<boolean>(() => {
    const step = useStepStore();
    let { currentStep, steps } = storeToRefs(step);

    return (currentStep.value + 1) === (steps.value - 1)
})

export { nextStep, prevStep, allowConfirm, allowGoBack, allowNextStep }