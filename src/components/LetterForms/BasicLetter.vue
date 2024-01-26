<script setup>
import { getFileNameFromPath, getYear } from '../../models/utils';
import { imagesFolder } from '../../models/paths';
import Modal from '../SubComponents/Modal.vue'
import LetterDetails from './LetterDetails.vue'

</script>

<script>

export default {
    props: {
        title: String, image_src: String, showLetterText: Boolean, imageSizePx: Number,
        showLetterYear: Boolean, displayText: String, showBackground: { type: Boolean, default: true },
    },
    components: {
        Modal
    },
    watch: {
        image_src(newValue, oldValue) {
            this.fileName = getFileNameFromPath(newValue)
            this.updateDisplayText(newValue)
        },
        displayText(newValue, oldValue){
            this.updateDisplayText(newValue)
        }
    },
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            fileName: '',
            isModalOpen: false,
            displayTextLetter: '',
            imgHeightInModal: '100px',
        }
    }, methods: {
        letterClicked() {
            this.isModalOpen = true 
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
    <Modal :showModal="isModalOpen" @close="isModalOpen = false">
        <!-- <h5>ಅಕ್ಷರದ ಬಗ್ಗೆ</h5> -->
        <div class="container">
            <img :src="`${publicPath}./assets/letter_background.png`" class="background-image"
                :style="`height: ${imgHeightInModal}px;`" alt="letter-background">

            <img :src="`${publicPath}./assets/${imagesFolder}/${image_src}`" :alt="`Image text`" class="foreground-image"
                :style="`max-width: ${imgHeightInModal}px; display: block; width: auto;
                height: ${imgHeightInModal}px;object-fit: fill;`"
                :title="`${fileName}`">

        </div>
        <LetterDetails :image_src="image_src"/>
    </Modal>

    <!-- v-if="showBackground == true" -->
    <div :style="`display: inline-block; margin: 2px; box-shadow: 5px 5px 5px gray;`">
        <p class="p-text" style="font-size: 24px;" v-if="showLetterText">{{ title }}</p>
        <div class="container" @click="letterClicked">
            <!-- border: 2px solid lightgray; -->
            <img :src="`${publicPath}./assets/letter_background.png`" class="background-image"
                :style="`height: ${imageSizePx}px;`" alt="letter-background">

            <img :src="`${publicPath}./assets/${imagesFolder}/${image_src}`" :alt="`Image text`" class="foreground-image"
                :style="`max-height: 250px; max-width: ${imageSizePx}px; display: block; width: auto;
                height: ${imageSizePx}px; object-fit: fill;`"
                :title="`${fileName}`">

        </div>
        <p class="p-text">{{ displayTextLetter }}</p>
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

.p-text{
    font-size: 12px;
    background: white;
}
</style>