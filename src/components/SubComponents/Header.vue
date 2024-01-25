<script setup>
import LocaleChanger from "../LocaleChanger.vue";

</script>
<script>

export default {
    props: { headingText: String },
    data() {
        return {}
    }
}
</script>

<template>
    <h2 class="page-header">{{ headingText }}</h2>
    <LocaleChanger />
</template>
