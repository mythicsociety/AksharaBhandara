<script setup>
import LetterFormsDisplay from './LetterForms/LetterFormsDisplay.vue';
import LetterSelector from './LetterForms/LetterSelector.vue'
import YearFilterVue from './SubComponents/YearFilter.vue';
import {samyuktaksharaLettersPath} from '../models/paths.js'

import axios from 'axios';

</script>

<script>
export default {
    props: {},
    data() {
        return {
            samyuktaksharaLetters: [],
            publicPath: import.meta.env.BASE_URL,
            selectedLetter: Object,
            samyuktaksharaChildren: [],
            yearData: ''
        }
    },
    mounted() {
        this.fetchData(samyuktaksharaLettersPath);
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.samyuktaksharaLetters = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.samyuktaksharaLetters[0]
                    this.getSamyuktakshara(this.selectedLetter)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        getSamyuktakshara(gnLetter) {
            var gnLetterPath = './assets/json/samyuktakshara/' + gnLetter.key + '.json'
            axios.get(`${this.publicPath}${gnLetterPath}`)
                .then(response => {
                    this.samyuktaksharaChildren = response.data.filter(l => l.isAvailable == true)
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
        <h2>ಸಂಯುಕ್ತಾಕ್ಷರಗಳು</h2>

        <div class="body-padding" style="margin: auto;">
            <YearFilterVue @yearData="getData" />

            <LetterSelector :jsonData="samyuktaksharaLetters" @eventname="getSamyuktakshara" />

            <LetterFormsDisplay v-for="letter in samyuktaksharaChildren" :selectedLetter="letter" :showImage="true" :yearData="yearData"/>
        </div>
    </div>
</template>

<style></style>