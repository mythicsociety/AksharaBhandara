<script setup>

import BasicLetter from '../components/LetterForms/BasicLetter.vue'
import axios from 'axios';

</script>

<template>
    <div class="body-padding">
        <h2>ವರ್ಣಮಾಲೆ</h2>

        <div class="card">
            <p>
                ವರ್ಷಗಳ ಶ್ರೇಣಿ: {{ startNumber }} ಇಂದ {{ endNumber }}
            </p>

            <div style="padding: 10px;">
                <button class="page-button" type="button" @click="previousPage" :disabled="currentPage === 1"
                    style="cursor: pointer;">
                    ಹಿಂದಿನ ಶತಮಾನ</button>
                <span style="margin: 0 10px;"></span>

                <button class="page-button" type="button" @click="nextPage" :disabled="isEndOfLimit"
                    style="cursor: pointer;">
                    ಮುಂದಿನ ಶತಮಾನ</button>
            </div>

            <div class="flex-container">
                <BasicLetter v-for="letter in displayedLetters" :key="letter.id" :title="letter.key"
                    :image_src="getImageSrc(letter)" :showLetterText="true" :imageSizePx="100" />

            </div>
        </div>
    </div>
</template>

<script>
import { MinYear, MaxYear, JumpByYear } from '../models/constants.js'

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            allLetters: [],
            displayedLetters: [],
            currentPage: 1,
        }
    },
    computed: {
        startNumber() {
            return (this.currentPage - 1) * JumpByYear + MinYear;
        },
        endNumber() {
            const lastNumber = this.currentPage * JumpByYear + (MinYear - 1);
            return Math.min(lastNumber, MaxYear);
        },
        isEndOfLimit() {
            return this.endNumber >= (MaxYear - 1);
        }
    },
    methods: {
        fetchData(jsonPath) {
            axios.get(`${this.publicPath}${jsonPath}`)
                .then(response => {
                    this.allLetters = response.data.filter(l => l.isAvailable == true);
                    this.updateLetters();
                })
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updateLetters();
            }
        },
        nextPage() {
            if (!this.isEndOfLimit) {
                this.currentPage++;
                this.updateLetters();
            }
        },
        updateLetters() {

            // this.displayedLetters = this.allLetters.filter((letters) => {
            //     const isExists = letters.letterForms.length > 0 && letters.letterForms.some((l) => {
            //         return l.year >= this.startNumber & l.year < this.endNumber;
            //     });
            //     return { ...letters, isExists };
            // });

            this.displayedLetters = this.allLetters.map((item) => {
                const letterForms = item.letterForms.map((innerItem) => {
                    return {
                        ...innerItem,
                        isExists: innerItem.year >= this.startNumber & innerItem.year < this.endNumber
                    };
                });
                return { ...item, letterForms };
            });

            console.log(this.displayedLetters)
        },
        getImageSrc(letter) {
            let filteredArr = letter.letterForms.filter(f => f.isExists == true);
            if (filteredArr.length > 0) {
                return filteredArr[0].path;
            } else {
                return "letter_missing.png";
            }
        }
    },
    mounted() {
        this.fetchData('./assets/json/letters.json')

    },
}
</script>

<style>
.page-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.page-button:disabled {
    background-color: gray;
    color: white;
}
</style>