<script setup>
import BasicLetter from '../components/LetterForms/BasicLetter.vue'
import { groupBy } from '../models/utils';

import axios from 'axios';
import InnerImageZoom from 'vue-inner-image-zoom';
import { ModelListSelect } from "vue-search-select"
import Modal from './SubComponents/Modal.vue'

</script>

<script>

export default {
    props: { id: String },
    components: {
        Modal,
        'inner-image-zoom': InnerImageZoom
    },
    data() {
        return {
            selectedShasana: null,
            shasanas: [],
            publicPath: import.meta.env.BASE_URL,
            groupedShasanaDetails: [],
            totalLines: 0,
            totalCharacters: 0,
            selectedShasanaDetails: null,
            searchText: "",
            isModalOpen: false
        }
    },
    watch: {
        selectedShasana(newValue, oldValue) {
            this.selectedShasanaDetails = this.shasanas.find(s => s.key === newValue);
            axios.get(`${this.publicPath}./assets/json/shasanas/${newValue}.json`)
                .then(response => {
                    //group letters by lineNumber
                    let groupedShasana = groupBy(response.data, s => s.lineNumber);

                    //sorting groups in increasing order of map id
                    let sortedMap = new Map([...groupedShasana.entries()].sort((a, b) => parseInt(a[0]) - parseInt(b[0])));

                    //sorting each group by posNumber
                    this.groupedShasanaDetails = new Map([...sortedMap.entries()].map(([k, v]) => [k, v.sort((a, b) => a.posNumber - b.posNumber)]));

                    this.totalLines = sortedMap.size;
                    this.totalCharacters = Array.from(sortedMap.values()).flat().length;

                }).catch(err => {
                    // console.log(err)
                });
        }
    },
    methods: {
        fetchShasanaData() {
            axios.get(`${this.publicPath}./assets/json/shasanas.json`)
                .then(response => {
                    this.shasanas = response.data.sort((a, b) => parseInt(a.year) - parseInt(b.year));

                    let shasanaId = this.$route.query.id;

                    if (shasanaId !== undefined) {
                        let selectedShasana = this.shasanas.find(s => s.id === parseInt(shasanaId));
                        if (selectedShasana == undefined) {
                            alert("No inscription found for ID " + shasanaId)
                        } else {
                            this.selectedShasanaDetails = selectedShasana;
                            this.selectedShasana = selectedShasana.key;
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        scrollToElement() {
            this.$refs.inscriptionImage.scrollIntoView();
        },
        reset() {
            this.selectedShasana = {}
        },
        selectOption() {
            // select option from parent component
            this.selectedShasana = this.shasanas[1]
        },
        printSearchText(searchText) {
            this.searchText = searchText
        }

    }, mounted() {
        this.fetchShasanaData();
    },
}

</script>

<template>
    <h2 class="page-header">ಶಾಸನಗಳು</h2>

    <div class="body-padding" style="margin: auto;">
        <div style="position: relative;">
            <!-- Comment  <p class="sub-heading">ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ {{ shasanas.length }} ಶಾಸನಗಳು ವೀಕ್ಷಣೆಗೆ ಲಭ್ಯವಿದೆ</p> replaced with a simpler message by Uday -->
            <p class="sub-heading">ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ {{ shasanas.length }} ಶಾಸನಗಳನ್ನು ನೋಡಬಹುದು</p>

            <button type="button" @click="isModalOpen = true"
                style="position: absolute; top: 0; right: 0; padding: 5px; display: flex; align-items: center; margin: 10px;">
                <i class="fa fa-asterisk" style="font-size: 24px;"></i> <!-- Font Awesome icon -->
                <span style="margin-left: 5px;">Feedback</span>
            </button>
        </div>

        <div style="padding: 10px;">

            <!-- <label for="shasana" style="color: black;">ಒಂದು ಶಾಸನ ಆಯ್ಕೆಮಾಡಿ:</label> -->

            <!-- <select id="shasana" v-model="selectedShasana" style="margin: 10px;">
                <option v-for="sha in shasanas" :key="sha.id" :value="sha.key">{{ sha.displayName }}</option>
            </select> -->

            <model-list-select :list="shasanas" v-model="selectedShasana" placeholder="ಒಂದು ಶಾಸನ ಆಯ್ಕೆಮಾಡಿ"
                option-value="key" option-text="displayName" style="margin: 15px;" @searchchange="printSearchText">
            </model-list-select>

            <div v-if="selectedShasana !== null">
               <!-- <button @click="scrollToElement">ಶಾಸನದ ಚಿತ್ರವನ್ನು ನೋಡಲು ಹೋಗಿ</button>  Changed by Uday for cleaner langauge -->
                <button @click="scrollToElement">ಶಾಸನದ ಚಿತ್ರವನ್ನು ನೋಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</button>

                <!-- <p>ಆಯ್ಕೆ ಮಾಡಿದ ಶಾಸನದಲ್ಲಿ (ID: {{ selectedShasanaDetails.id }}) {{ totalLines
                }}
                    ಸಾಲುಗಳು ಮತ್ತು ಒಟ್ಟು {{ totalCharacters
                    }} ಅಕ್ಷರಗಳಿವೆ</p> Changed by Uday for cleaner langauge -->
                    <p>ಈ  ಶಾಸನದಲ್ಲಿ (ID: {{ selectedShasanaDetails.id }}) {{ totalLines
                }}
                     ಸಾಲುಗಳು ಮತ್ತು {{ totalCharacters
                    }} ಅಕ್ಷರಗಳಿವೆ</p>
            </div>
        </div>

        <div v-for="(group, index) in groupedShasanaDetails" :class="flex-container-parent" style="border: 1px solid; margin-bottom: 10px;">
           <!--  <p style="background-color: rgba(188, 143, 143, 0.5);">ಕೆಳಗಿನ ಸಾಲಿನಲ್ಲಿ {{ group[1].length }} ಅಕ್ಷರಗಳಿವೆ - ಸಾಲು {{ index + 1 }}</p>  Changed by Uday for cleaner langauge -->
            <p style="background-color: rgba(188, 143, 143, 0.5);">ಸಾಲು {{ index + 1 }}</p>
            <div class="flex-container-no-gap">
                <BasicLetter v-for="letter in group[1]" :image_src="letter.filePath" :showLetterText="false"
                    :imageSizePx="50" :showLetterYear="false" :displayText="letter.kannadaWord" :showBackground="false" />
            </div>

        </div>

        <div v-if="selectedShasanaDetails != null" ref="inscriptionImage"
            style="display: inline-block; padding-top: 25px; width: 500px;">
            <!-- <img v-if="selectedShasanaDetails.imagePath !== ''"
                :src="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath}`" :alt="`Shasana image`"
                style="display: block; max-height: 500px;max-width: 500px;width: 100%;height: 500px;object-fit: fill;" /> -->


             <!--  <h2>ಶಾಸನದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ಚಿತ್ರ</h2> Modified by Uday for clearer language -->
             <h2>3ಡಿ ಸ್ಕ್ಯಾನಿಂಗ್ ಮೂಲಕ ಪಡೆದ ಶಾಸನದ ಡಿಜಿಟಲ್ ಚಿತ್ರ</h2>
            <!--<p>(ಜೂಮ್ ಮಾಡಲು ಚಿತ್ರದ ಮೇಲೆ ಹಾರಿ)</p> Modified by Uday for clearer language -->
            <p>(ಅಕ್ಷರಗಳನ್ನು ಜೂಮ್ ಮಾಡಿ ನೋಡಲು ಶಾಸನ ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ)</p>

            <inner-image-zoom v-if="selectedShasanaDetails.imagePath.length > 0"
                :src="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath[0]}`"
                :alt="`${selectedShasanaDetails.displayName}`"
                :zoomSrc="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath[0]}`" :width="500"
                :height="500" />

            <h2>{{ selectedShasanaDetails.displayName }}</h2>
        </div>
        <div v-if="selectedShasanaDetails != null">
            <p v-html="selectedShasanaDetails.description"></p>
            <ul>
                <li v-for="(link, index) in selectedShasanaDetails.links" :key="index">
                    [{{ index + 1 }}] <a :href="link.url" target="_blank">{{ link.title }}</a>
                </li>
            </ul>
        </div>

        <div style="margin-top: 20px;">
            <a target="_blank" href="https://t.co/cKTl0ZOn9P">Wikimedia Commons: Digital Images
                Prepared by Mythic Society Inscriptions
                Conservation Project Team</a>
        </div>

        <Modal :showModal="isModalOpen" @close="isModalOpen = false">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf-0wbjL_2vQzwfDbwxj5ZkqcqfI8RkBxiTobAC6etdAVq_Ew/viewform?embedded=true"
                width="640" height="605" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </Modal>

    </div>
</template>

<style>
ul {
    list-style-type: none;
}
</style>