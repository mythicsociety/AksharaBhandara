<script setup>
import LetterForms from './LetterForms/LetterForms.vue';

</script>

<template>
    <h2 class="page-header">ಅಕ್ಷರ ರೂಪಗಳು</h2>
    <LetterForms :jsonPath="`./assets/json/letters.json`" :showImage="true" />
</template>

<style></style>