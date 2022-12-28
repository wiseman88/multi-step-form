import { defineStore } from 'pinia'

export const useValidationStore = defineStore('validation', {
    state: () => {
        return {
            name: '',
            email: '',
            phone: '',
            error: true
        }
    },
    actions: {

    }
})