import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStepStore = defineStore('step', {
    state: () => {
        return {
            currentStep: ref(0),
            steps: ref(0)
        }
    }
})