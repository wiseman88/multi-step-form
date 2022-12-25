<script setup lang="ts">

const props = defineProps<{
    currentStep: number,
    id: number
}>()

</script>

<template>
    <section v-if="currentStep === id">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form action="#">
            <label>
                <span>Name</span>
                <input type="text" placeholder="e.g. Stephen King">
            </label>
            <label>
                <span>Email address</span>
                <input type="text" placeholder="e.g. stephenking@lorem.com">
            </label>
            <label>
                <span>Phone number</span>
                <input type="text" placeholder="e.g. +1 234 567 890">
            </label>
        </form>
    </section>
</template>

<style scoped>

</style>