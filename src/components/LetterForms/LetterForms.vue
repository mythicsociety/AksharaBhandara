<script setup>
import axios from 'axios';
import LetterFormsDisplay from './LetterFormsDisplay.vue';
import LetterSelector from './LetterSelector.vue'
import YearFilterVue from '../SubComponents/YearFilter.vue';
import PageCounter from '../SubComponents/PageCounter.vue';
import IAST from '../SubComponents/IAST.vue';

import { DefaultLetterCount } from '../../models/constants.js'

</script>

<script>


export default {
    props: { jsonPath: String, showImage: Boolean },
    data() {
        return {
            jsonData: [],
            publicPath: import.meta.env.BASE_URL,
            selectedLetter: '',
            yearData: '',
            pageSize: DefaultLetterCount,
            showIAST: false
        }
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        filteredData() {
            return this.jsonData;//.filter(item => item.name.toLowerCase().includes(this.filterText.toLowerCase()));
        }
    },
    methods: {
        fetchData() {
            axios.get(`${this.publicPath}${this.jsonPath}`)
                .then(response => {
                    this.jsonData = response.data.filter(l => l.isAvailable == true)
                    this.selectedLetter = this.jsonData[0]

                })
                .catch(error => {
                    console.log(error);
                });
        },

        updateLetter(variable) {
            this.selectedLetter = variable
        },
        getData(data) {
            this.yearData = data;
        },
        gePageSize(data) {
            this.pageSize = data;
        },
        getShowIAST(data){
            this.showIAST = data;
        },
    }
}

</script>

<template>
    <div class="body-padding" style="margin: auto;">

        <YearFilterVue @yearData="getData" />

        <LetterSelector v-if="showImage" :jsonData="jsonData" :displayInIAST="showIAST" @eventname="updateLetter" />

        <PageCounter @pageSize="gePageSize" />

        <IAST @showIAST="getShowIAST"/>

        <LetterFormsDisplay :selectedLetter="selectedLetter" :showImage="showImage" :yearData="yearData"
            :NumberOfImagesToDisplay="pageSize" :showIAST="showIAST"/>
    </div>
</template>

<style></style>