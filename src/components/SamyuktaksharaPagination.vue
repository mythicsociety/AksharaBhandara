<script setup>
import LetterFormsDisplay from './LetterForms/LetterFormsDisplay.vue';
import LetterSelector from './LetterForms/LetterSelector.vue'
import YearFilterVue from './SubComponents/YearFilter.vue';
import { samyuktaksharaLettersPath } from '../models/paths.js'
import PageCounter from './SubComponents/PageCounter.vue';
import { DefaultLetterCount } from '../models/constants.js'


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
            yearData: '',
            pageSize: DefaultLetterCount,
            numLettersInPage: 5,

            currentPage: 1, // Current page number
            totalPages: 0, // Total number of pages
            displayedData: [], // Data to display on the current page

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
                    this.reupdateDisplayedData();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getData(data) {
            this.yearData = data;
        },
        gePageSize(data) {
            this.pageSize = data;
        },

        calulatetotalPages() {
            this.totalPages = Math.ceil(this.samyuktaksharaLetters.length / this.numLettersInPage);
        },
        reupdateDisplayedData() {
            this.calulatetotalPages();
            this.currentPage = 1;
            this.updateDisplayedData();
        },
        updateDisplayedData() {
            const startIndex = (this.currentPage - 1) * parseInt(this.numLettersInPage);
            const endIndex = startIndex + parseInt(this.numLettersInPage);
            this.displayedData = this.samyuktaksharaLetters.slice(startIndex, endIndex);
            this.$refs.lettersDisplay.scrollIntoView();

        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updateDisplayedData();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.updateDisplayedData();
            }
        },

    }
}
</script>

<template>
    <div ref="lettersDisplay" class="body-padding" style="margin: auto;">
        <h2>ಸಂಯುಕ್ತಾಕ್ಷರಗಳು</h2>

        <div class="body-padding" style="margin: auto;">
            <YearFilterVue @yearData="getData" />

            <PageCounter @pageSize="gePageSize" />

            <LetterFormsDisplay v-for="letter in displayedData" :selectedLetter="letter" :showImage="true"
                :yearData="yearData" :NumberOfImagesToDisplay="pageSize" />

            <div style="padding: 10px;">
                <button class="page-button" @click="previousPage" :disabled="currentPage === 1"
                    style="cursor: pointer;">ಹಿಂದೆ</button>
                <span style="margin: 0 10px;"></span>

                <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages"
                    style="cursor: pointer;">ಮುಂದೆ</button>
            </div>

        </div>
    </div>
</template>

<style></style>