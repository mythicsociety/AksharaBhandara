<script setup>
import { VueFlip } from 'vue-flip';

</script>

<script>
export default {
    props: {},
    data() {
        return {
            publicPath: import.meta.env.BASE_URL
        }
    }
}

</script>
<template>
    <div class="content">
        <vue-flip active-click="true" width="200px" height="50px">
            <template v-slot:front class="front" #icon>
                <img :src="`${publicPath}./assets/image1.jpg`" :alt="`Image text`" width="125" height="125">
            </template>
            <template v-slot:back class="back" #icon>
                <img :src="`${publicPath}./assets/image2.jpg`" :alt="`Image text`" width="125" height="125">
            </template>
        </vue-flip>
    </div>
</template>

<style>
.content {
    /* width: 40px; */
    /* border: 4px solid red; */
    padding: 5px;
    overflow: hidden;
}
</style>