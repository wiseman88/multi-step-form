import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useStepStore = defineStore('step', {
    state: () => {
        return {
            personalOptions: reactive({}),
            planOptions: reactive({ name: 'arcade', price: '$9/mo', plan: 'monthly' }),
            serviceOptions: reactive({})
        }
    }
})