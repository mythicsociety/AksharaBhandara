<script setup>
import axios from 'axios';
import LetterFormsDisplay from './LetterFormsDisplay.vue';
import LetterSelector from './LetterSelector.vue'
import YearFilterVue from '../SubComponents/YearFilter.vue';
import PageCounter from '../SubComponents/PageCounter.vue';
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
            pageSize: 10,
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
    }
}

</script>

<template>
    <div class="body-padding" style="margin: auto;">

        <YearFilterVue @yearData="getData" />

        <LetterSelector v-if="showImage" :jsonData="jsonData" @eventname="updateLetter" />

        <PageCounter @pageSize="gePageSize" />

        <LetterFormsDisplay :selectedLetter="selectedLetter" :showImage="showImage" :yearData="yearData"
            :NumberOfImagesToDisplay="pageSize" />
    </div>
</template>

<style></style>