<script setup lang="ts">
const props = defineProps<{
    currentStep: number,
}>()

const steps = [
    {
        id: 1,
        text: 'your info'
    },
    {
        id: 2,
        text: 'select plan'
    },
    {
        id: 3,
        text: 'add-ons'
    },
    {
        id: 4,
        text: 'summary'
    },
]

const applyActiveClass = (stepId: number) => {
    return stepId === (props.currentStep + 1) ? 'active'
        : stepId === (props.currentStep) && props.currentStep === steps.length ? 'active' : ''
}
</script>

<template>
    <aside>
        <ul class="steps">
            <li v-for="(step, index) in steps" :key="index" :class="applyActiveClass(step.id)">
                <span>{{ step.id }}</span>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
aside {
    height: 172px;
    background-image: url('/public/assets/images/bg-sidebar-mobile.svg');
    background-position: center;
    background-size: cover;
}

.steps {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 2rem;
}

.steps li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
    border: 1px solid var(--color-white);
    color: var(--color-white);
    border-radius: 50%;
    font-weight: 500;
}

.steps .active {
    background-color: var(--color-white);
    color: var(--color-primary);
}
</style>