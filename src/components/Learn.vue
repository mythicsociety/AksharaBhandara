<script setup>

import BasicLetter from '../components/LetterForms/BasicLetter.vue'
import axios from 'axios';

</script>

<template>
    <div class="body-padding">
        <h2>ವರ್ಣಮಾಲೆ</h2>

        <div class="card">
            <div class="flex-container">
                <BasicLetter v-for="letter in allLetters" :key="letter.id" :title="letter.key" :image_src="letter.letterForms[0].path"
                    :showLetterText="true" :imageSizePx="125"/>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            allLetters: [],
        }
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.allLetters = response.data.filter(l => l.isAvailable == true)
                })
        },
    },
    mounted() {
        this.fetchData('./assets/json/letters.json')

    },
}
</script>

<style>
* {
    box-sizing: border-box;
}

.letter-row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

.column {
    flex: 25%;
    max-width: 15%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
    float: left;
    /* width: 75%; */
}

/* Right column */
.rightcolumn {
    float: left;
    width: 25%;
    background-color: #f1f1f1;
    padding-left: 20px;
}

/* Fake image */
.fakeimg {
    background-color: #aaa;
    width: 100%;
    padding: 20px;
}

/* Clear floats after the columns */
.row::after {
    content: "";
    display: table;
    clear: both;
}
</style>