<script setup>
import LetterForms from './LetterForms/LetterForms.vue';

</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಚಿಹ್ನೆಗಳು</h2>

        <LetterForms :jsonPath="`./assets/json/symbols.json`" :showImage="false" />
    </div>
</template>

<style></style>