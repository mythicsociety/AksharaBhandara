<script setup>
import LetterForms from './LetterForms/LetterForms.vue';

</script>

<template>
    <h2 class="page-header">ಚಿಹ್ನೆಗಳು</h2>

    <LetterForms :jsonPath="`./assets/json/symbols.json`" :showImage="false" />
</template>

<style></style>