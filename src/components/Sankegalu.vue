<script setup>
import LetterForms from './LetterForms/LetterForms.vue';
import Header from './SubComponents/Header.vue';

</script>

<template>
    <Header :headingText="$t('navigation.numbers')"></Header>

    <LetterForms :jsonPath="`./assets/json/numbers.json`" :showImage="true" />
</template>

<style></style>