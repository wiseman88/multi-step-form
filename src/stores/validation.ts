import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useValidationStore = defineStore('validation', {
    state: () => {
        return {
            name: ref(''),
            email: ref(''),
            phone: ref(''),
            error: true
        }
    },
    actions: {

    }
})