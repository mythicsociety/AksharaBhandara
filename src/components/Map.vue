<script setup>
import Footer from './SubComponents/Footer.vue';
import Header from './SubComponents/Header.vue';

</script>

<template>
    <Header :headingText="$t('map.heading')"></Header>


    <div class="body-padding" style="margin: auto;">
        <iframe src="https://www.google.com/maps/d/embed?mid=10MkVJhxpkbsDbhXxJpAS82KtKMI&ehbc=2E312F" width="1080"
            height="720"></iframe>
    </div>
</template>