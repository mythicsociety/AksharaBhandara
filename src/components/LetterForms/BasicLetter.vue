<script setup>
import { getFileNameFromPath, getYear } from '../../models/utils';
import { imagesFolder } from '../../models/paths';
import ImageModal from '../SubComponents/ImageModal.vue';
</script>

<script>

export default {
    props: {
        title: String, image_src: String, showLetterText: Boolean, imageSizePx: Number,
        showLetterYear: Boolean, displayText: String, showBackground: { type: Boolean, default: true }
    },
    watch: {
        image_src(newValue, oldValue) {
            this.fileName = getFileNameFromPath(newValue)
            this.updateDisplayText(newValue)
        }
    },
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            fileName: '',
            showModalDialog: false,
            displayTextLetter: ''
        }
    }, methods: {
        letterClicked(num) {
            //alert(num + " image clicked")
            //this.showModalDialog = true
        },
        updateDisplayText(imageSrc) {
            if (this.showLetterYear) {
                let letterYear = getYear(imageSrc)
                this.displayTextLetter = letterYear.toString()
            } else {
                this.displayTextLetter = this.displayText
            }
        }
    }, mounted() {
        this.fileName = getFileNameFromPath(this.image_src)
        this.updateDisplayText(this.image_src);
    }
}

</script>

<template>
    <!-- <ImageModal :showModalDialog="showModalDialog" :imagePath="image_src" /> -->

    <!-- v-if="showBackground == true" -->
    <div :style="`display: inline-block; margin: 2px; box-shadow: 5px 5px 5px gray;`">
        <p v-if="showLetterText">{{ title }}</p>
        <div class="container">
            <!-- border: 2px solid lightgray; -->
            <!-- <img :src="`${publicPath}./assets/letter_background.png`" class="background-image"
                :style="`height: ${imageSizePx}px;`" alt="letter-background"> -->

            <img :src="`${image_src}`" :alt="`Image text`" class="foreground-image"
                :style="`max-height: 250px;
    max-width: ${imageSizePx}px; display: block; width: auto;height: ${imageSizePx}px;object-fit: fill;`"
                @click="letterClicked(`${image_src}`)" :title="`${fileName}`">

        </div>
        <p style="font-size: 12px;">{{ displayTextLetter }}</p>
        <!-- v-if="showLetterYear" -->
    </div>

</template>

<style>
.container {
    position: relative;
    width: 100%;
    display: inline-block;
}

.background-image {
    width: 100%;
    opacity: 0.9;
}

.foreground-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
</style>