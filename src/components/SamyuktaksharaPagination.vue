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
            visiblePages: 10, // Number of visible page numbers
        }
    },
    mounted() {
        this.fetchData(samyuktaksharaLettersPath);
    },
    computed: {
        totalPageNumbers() {
            return Array.from({ length: this.totalPages }, (_, index) => index + 1);
        },
        visiblePageNumbers() {
            const currentPageIndex = this.currentPage - 1;
            const totalPages = this.totalPages;
            const halfVisiblePages = Math.floor(this.visiblePages / 2);

            let startPageIndex = currentPageIndex - halfVisiblePages;
            let endPageIndex = currentPageIndex + halfVisiblePages;

            if (startPageIndex < 0) {
                startPageIndex = 0;
                endPageIndex = Math.min(this.visiblePages - 1, totalPages - 1);
            }

            if (endPageIndex >= totalPages) {
                endPageIndex = totalPages - 1;
                startPageIndex = Math.max(totalPages - this.visiblePages, 0);
            }

            return this.totalPageNumbers.slice(startPageIndex, endPageIndex + 1);
        },
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

        goToPage(page) {
            this.currentPage = page;
            this.updateDisplayedData();
        },
        goToFirstPage() {
            this.currentPage = 1;
            this.updateDisplayedData();
        },
        goToLastPage() {
            this.currentPage = this.totalPages;
            this.updateDisplayedData();
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
                <!-- <button class="page-button" @click="previousPage" :disabled="currentPage === 1"
                    style="cursor: pointer;">ಹಿಂದೆ</button>
                <span style="margin: 0 10px;"></span>

                <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages"
                    style="cursor: pointer;">ಮುಂದೆ</button> -->

                <button class="page-button" @click="goToFirstPage" :disabled="currentPage === 1">ಒಂದನೆಯ</button>
                <button class="page-button" @click="previousPage" :disabled="currentPage === 1">ಹಿಂದೆ</button>
                <button v-for="page in visiblePageNumbers" class="page-button" :key="page" @click="goToPage(page)"
                    :disabled="currentPage === page">
                    {{ page }}
                </button>
                <button class="page-button" @click="nextPage" :disabled="currentPage === totalPages">ಮುಂದೆ</button>
                <button class="page-button" @click="goToLastPage" :disabled="currentPage === totalPages">ಕೊನೆಯ</button>

            </div>

        </div>
    </div>
</template>

<style></style>