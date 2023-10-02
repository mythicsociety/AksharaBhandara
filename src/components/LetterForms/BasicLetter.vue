<script setup>
import { getFileNameFromPath, getYear } from '../../models/utils';
import { imagesFolder } from '../../models/paths';
import ImageModal from '../SubComponents/ImageModal.vue';
import Modal from '../SubComponents/Modal.vue'

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
        }
    },
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            fileName: '',
            isModalOpen: false,
            displayTextLetter: '',
            imgHeightInModal: '100px',
            letterDetails: ''
        }
    }, methods: {
        letterClicked() {
            this.isModalOpen = true

            let indx = this.image_src.lastIndexOf("/");
            let result = this.image_src.substring(indx + 1);
            let dotIdx = result.lastIndexOf(".");
            let fileName = result.substring(0, dotIdx);

            let indx2 = fileName.indexOf("_");
            let imageYear = fileName.substring(0, indx2);

            let indx3 = fileName.indexOf("_", indx2 + 1);
            let inscriptionId = fileName.substring(indx2 + 1, indx3);

            let indx4 = fileName.indexOf("_", indx3 + 1);
            let place = fileName.substring(indx3 + 1, indx4);

            let indx5 = fileName.indexOf("_", indx4 + 1);
            let lineNumber = fileName.substring(indx4 + 1, indx5);

            let indx6 = fileName.indexOf("_", indx5 + 1);
            let posNumber = fileName.substring(indx5 + 1, indx6);

            // let indx7 = fileName.indexOf("_", indx6 + 1);
            let characterIAST = fileName.substring(indx6 + 1);

            this.letterDetails = {
                fileName,
                imageYear,
                inscriptionId,
                place,
                lineNumber,
                posNumber,
                characterIAST
            }
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
        <div class="key-value-list">

            <h5>ಅಕ್ಷರದ ವಿವರ</h5>

            <div class="pair">
                <span class="key">ವರ್ಷ:</span>
                <span class="value">{{ letterDetails.imageYear }}</span>
            </div>
            <div class="pair">
                <span class="key">ಸ್ಥಳ:</span>
                <span class="value">{{ letterDetails.place }}</span>
            </div>
            <div class="pair">
                <span class="key">ಸಾಲಿನ ಸಂಖ್ಯೆ:</span>
                <span class="value">{{ letterDetails.lineNumber }}</span>
            </div>
            <div class="pair">
                <span class="key">ಅಕ್ಷರ ಸಂಖ್ಯೆ:</span>
                <span class="value">{{ letterDetails.posNumber }}</span>
            </div>
            <div class="pair">
                <span class="key">IAST:</span>
                <span class="value">{{ letterDetails.characterIAST }}</span>
            </div>
        </div>
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

.key-value-list {
    display: flex;
    flex-direction: column;
}

/* .pair {
    margin-bottom: 10px;
} */

.key {
    padding-right: 10px;
    font-size: 16px;
    font-style: italic;
    /* width: 400px;
    display: inline-block; */
}

.value {
    font-size: 16px;
}

/* Optional styling for better appearance */
.key-value-list {
    /* border: 1px solid #ccc; */
    padding: 10px;
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
}

.p-text{
    font-size: 12px;
    background: white;
}
</style>