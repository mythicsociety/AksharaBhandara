<script setup>
import BasicLetter from '../components/LetterForms/BasicLetter.vue'
import { groupBy } from '../models/utils';

import axios from 'axios';

</script>

<script>

export default {
    props: {},
    data() {
        return {
            selectedShasana: null,
            shasanas: [],
            publicPath: import.meta.env.BASE_URL,
            groupedShasanaDetails: [],
            totalLines: 0,
            totalCharacters: 0
        }
    },
    watch: {
        selectedShasana(newValue, oldValue) {

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
            <label for="cars" style="color: black;">ಒಂದು ಆಯ್ಕೆಮಾಡಿ:</label>

            <select id="cars" v-model="selectedShasana" style="margin: 10px;">
                <option v-for="sha in shasanas" :key="sha.id" :value="sha.key">{{ sha.displayName }}</option>
            </select>

            <p v-if="selectedShasana !== null">ಆಯ್ಕೆ ಮಾಡಿದ ಶಾಸನದಲ್ಲಿ {{ totalLines }} ಸಾಲುಗಳು ಮತ್ತು ಒಟ್ಟು {{ totalCharacters }} ಅಕ್ಷರಗಳಿವೆ</p>
        </div>

        <div v-for="(group, index) in groupedShasanaDetails" :class="flex-container-parent">
            <p>ಕೆಳಗಿನ ಸಾಲಿನಲ್ಲಿ {{ group[1].length }} ಅಕ್ಷರಗಳಿವೆ - ಸಾಲು {{ index+1 }}</p>
            <div class="flex-container-no-gap">
                <BasicLetter v-for="letter in group[1]" :image_src="letter.filePath" :showLetterText="false"
                    :imageSizePx="50" :showLetterYear="false" :displayText="letter.kannadaWord"/>
            </div>

        </div>

    </div>
</template>

<style></style>