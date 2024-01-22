<script setup>
import LocaleChanger from "../LocaleChanger.vue";

</script>
<script>

export default {
    props: { headingText: String }
}
</script>

<template>
    <h2 class="page-header">{{ this.headingText }}</h2>
    <LocaleChanger />
</template>
