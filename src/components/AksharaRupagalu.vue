<script setup>
import LetterForms from './LetterForms/LetterForms.vue';
import Header from './SubComponents/Header.vue';

</script>

<template>
    <Header :headingText="$t('navigation.forms')"></Header>

    <LetterForms :jsonPath="`./assets/json/letters.json`" :showImage="true" />
</template>

<style></style>