import { defineStore } from 'pinia'

interface Error {
    error: string,
}

export const useValidationStore = defineStore('validation', {
    state: () => {
        return {
            name: '',
            email: '',
            phone: '',
            errors: [] as Error[],
        }
    },
    actions: {

    }
})