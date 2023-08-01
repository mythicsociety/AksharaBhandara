<script setup>
import LetterForms from './LetterForms/LetterForms.vue';

</script>

<template>
    <h2 class="page-header">ಸಂಖ್ಯೆಗಳು</h2>
    <LetterForms :jsonPath="`./assets/json/numbers.json`" :showImage="true" />
</template>

<style></style>