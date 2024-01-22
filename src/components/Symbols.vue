<script setup>
import LetterForms from './LetterForms/LetterForms.vue';
import Header from './SubComponents/Header.vue';

</script>

<template>
    <Header :headingText="$t('navigation.symbols')"></Header>

    <LetterForms :jsonPath="`./assets/json/symbols.json`" :showImage="false" />
</template>

<style></style>