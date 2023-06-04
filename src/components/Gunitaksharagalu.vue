<script setup>
import LetterFormsDisplay from './LetterForms/LetterFormsDisplay.vue';
import LetterSelector from './LetterForms/LetterSelector.vue';
import YearFilterVue from './SubComponents/YearFilter.vue';
import {gunitaksharaLettersPath} from '../models/paths.js'

import axios from 'axios';

</script>

<script>
export default {
    props: {},
    data() {
        return {
            gunitaksharaLetters: [],
            publicPath: import.meta.env.BASE_URL,
            selectedLetter: Object,
            gunitaksharaChildren: [],
            yearData: ''
        }
    },
    mounted() {
        this.fetchData(gunitaksharaLettersPath);
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.gunitaksharaLetters = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.gunitaksharaLetters[0]
                    this.getGunitaksharas(this.selectedLetter)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getGunitaksharas(gnLetter) {
            var gnLetterPath = './assets/json/gunitakshara/' + gnLetter.key + '.json'
            axios.get(`${this.publicPath}${gnLetterPath}`)
                .then(response => {
                    this.gunitaksharaChildren = response.data.filter(l => l.isAvailable == true)
                })
        },
        getData(data) {
            this.yearData = data;
        },
    }
}
</script>

<template>
    <div class="body-padding" style="margin: auto;">
        <h2>ಗುಣಿತಾಕ್ಷರಗಳು</h2>

        <div class="body-padding" style="margin: auto;">
            <YearFilterVue @yearData="getData" />

            <!-- <LetterSelector :jsonData="gunitaksharaLetters" v-model:selectedLetter="selectedLetter" /> -->
            <LetterSelector :jsonData="gunitaksharaLetters" @eventname="getGunitaksharas" />

            <LetterFormsDisplay v-for="letter in gunitaksharaChildren" :selectedLetter="letter" :showImage="true"
                :yearData="yearData"/>
        </div>
    </div>
</template>

<style></style>