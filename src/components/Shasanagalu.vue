<script setup>
import BasicLetter from '../components/LetterForms/BasicLetter.vue'
import { groupBy } from '../models/utils';

import axios from 'axios';
import InnerImageZoom from 'vue-inner-image-zoom';

</script>

<script>

export default {
    props: { id: String },
    components: {
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
            selectedShasanaDetails: null
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

    }, mounted() {
        this.fetchShasanaData();
    },
}

</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಶಾಸನಗಳು</h2>

        <div style="padding: 10px;">
            <label for="shasana" style="color: black;">ಒಂದು ಆಯ್ಕೆಮಾಡಿ:</label>

            <select id="shasana" v-model="selectedShasana" style="margin: 10px;">
                <option v-for="sha in shasanas" :key="sha.id" :value="sha.key">{{ sha.displayName }}</option>
            </select>

            <p v-if="selectedShasana !== null">ಆಯ್ಕೆ ಮಾಡಿದ ಶಾಸನದಲ್ಲಿ (ID: {{ selectedShasanaDetails.id }}) {{ totalLines }}
                ಸಾಲುಗಳು ಮತ್ತು ಒಟ್ಟು {{ totalCharacters
                }} ಅಕ್ಷರಗಳಿವೆ</p>
        </div>

        <div v-for="(group, index) in groupedShasanaDetails" :class="flex - container - parent">
            <p>ಕೆಳಗಿನ ಸಾಲಿನಲ್ಲಿ {{ group[1].length }} ಅಕ್ಷರಗಳಿವೆ - ಸಾಲು {{ index + 1 }}</p>
            <div class="flex-container-no-gap">
                <BasicLetter v-for="letter in group[1]" :image_src="letter.filePath" :showLetterText="false"
                    :imageSizePx="50" :showLetterYear="false" :displayText="letter.kannadaWord" :showBackground="false" />
            </div>

        </div>

        <div v-if="selectedShasanaDetails != null" style="display: inline-block; padding-top: 25px; width: 500px;">
            <!-- <img v-if="selectedShasanaDetails.imagePath !== ''"
                :src="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath}`" :alt="`Shasana image`"
                style="display: block; max-height: 500px;max-width: 500px;width: 100%;height: 500px;object-fit: fill;" /> -->


            <h2>ಶಾಸನದ ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ಚಿತ್ರ</h2>
            <p>(ಜೂಮ್ ಮಾಡಲು ಚಿತ್ರದ ಮೇಲೆ ಹಾರಿ)</p>

            <inner-image-zoom v-if="selectedShasanaDetails.imagePath.length > 0"
                :src="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath[0]}`" :alt="`Shasana image`"
                :zoomSrc="`${publicPath}./assets/Shasanas/${selectedShasanaDetails.imagePath[0]}`" :width="500"
                :height="500" />

            <h2>{{ selectedShasanaDetails.displayName }}</h2>
            <!-- <h2>{{ selectedShasanaDetails.displayName }} ({{ selectedShasanaDetails.year }} CE)</h2> -->
        </div>

    </div>
</template>

<style></style>