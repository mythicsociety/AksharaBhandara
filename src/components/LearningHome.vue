<script setup>
import Footer from './SubComponents/Footer.vue';
import Header from './SubComponents/Header.vue';

</script>

<script>
import axios from 'axios';
import { getRandomItemFromArray } from '../models/utils';
import { imagesFolder } from '../models/paths';
import LetterDetails from './LetterForms/LetterDetails.vue';
import InnerImageZoom from 'vue-inner-image-zoom';

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            words: [],
            sentences: [],
            allInscriptions: [],
            insQuestions: [],
            displayedText: null,
            showAnswer: false,
            currentIndex: 0,
            randomCharacter: null,
            imagesFolder: imagesFolder,
            imageSizePx: 200,
            bckgImageSizePx: 400,
            inscriptionDisplay: '',
            inscriptionId: 0,
            selected: "one", // the initial value of the radio buttons
        };
    },
    methods: {
        fetchData() {
            axios.get('./assets/json/practice/words.json')
                .then(response => {
                    this.words = response.data.filter(f => f.key !== "");
                    this.words = this.shuffle(this.words);
                    // this.showRandomWord();
                });

            axios.get('./assets/json/practice/sentences.json')
                .then(response => {
                    this.sentences = response.data.filter(f => f.key !== "");
                    this.sentences = this.shuffle(this.sentences);
                    // this.showRandomSentence();
                });

            axios.get('./assets/json/practice/inscriptions.json')
                .then(response => {
                    this.insQuestions = response.data.filter(f => f.key !== "");
                    this.insQuestions = this.shuffle(this.insQuestions);
                });
        },
        fetchShasanaData() {
            axios.get(`${this.publicPath}./assets/json/shasanas.json`)
                .then(response => {
                    this.allInscriptions = response.data;
                    this.nextCharacter();
                });
        },
        // showRandomWord() {
        //     this.showAnswer = false;
        //     this.displayedText = getRandomItemFromArray(this.words);
        // },
        // showRandomSentence() {
        //     this.showAnswer = false;
        //     this.displayedText = getRandomItemFromArray(this.sentences);
        // },
        shuffle(array) {
            // Fisher-Yates shuffle algorithm
            let i = array.length, j = 0, temp;
            while (i--) {
                j = Math.floor(Math.random() * (i + 1));
                // swap randomly chosen element with current element
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },
        nextWord() {
            this.showAnswer = false;
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
        },
        nextSentence() {
            this.showAnswer = false;
            this.currentIndex = (this.currentIndex + 1) % this.sentences.length;
        },
        nextInscription() {
            this.showAnswer = false;
            this.currentIndex = (this.currentIndex + 1) % this.insQuestions.length;
        },
        nextCharacter() {
            this.showAnswer = false;
            let selectedShasana = getRandomItemFromArray(this.allInscriptions);
            let encodedPath = encodeURIComponent(selectedShasana.key);
            this.inscriptionDisplay = selectedShasana.displayName;
            this.inscriptionId = selectedShasana.id;
            axios.get(`${this.publicPath}./assets/json/shasanas/${encodedPath}.json`)
                .then(response => {
                    let selectedShasanaDetails = response.data;
                    this.randomCharacter = getRandomItemFromArray(selectedShasanaDetails);
                });
        },
        clickRoute(number) {

        },
        switchRadio(event) {
            // this.selected === radioName;
            // console.log(event.target.value);
            switch (event) {
                case "one":
                    this.nextCharacter();
                    break;
                case "two":
                    this.nextWord();
                    break;
                case "three":
                    this.nextSentence();
                    break;
                case "four":
                    this.nextInscription();
                    break;
            }
            this.showAnswer = false;
        }
    },
    mounted() {
        this.fetchData();
        this.fetchShasanaData();
    },
    components: { LetterDetails }
}
</script>

<template>
    <Header :headingText="$t('practice.title')"></Header>

    <div class="body-padding" style="margin: auto;">

        <div>
            <input type="radio" v-model="selected" value="one" @change="switchRadio($event.target.value)" /> {{ $t("practice.lettersRad") }}
            <input type="radio" v-model="selected" value="two" @change="switchRadio($event.target.value)" /> {{ $t("practice.wordsRad") }}
            <input type="radio" v-model="selected" value="three" @change="switchRadio($event.target.value)" /> {{ $t("practice.sentencesRad") }}
            <input type="radio" v-model="selected" value="four" @change="switchRadio($event.target.value)" /> {{ $t("practice.inscriptionRad") }}
            <div v-show="selected === 'one'">
                <h2>{{ $t("practice.hintCharacter") }}</h2>

                <div class="container">

                    <img :src="`${publicPath}./assets/letter_background.png`" class="background-image"
                        :style="`height: ${bckgImageSizePx}px; max-height: ${bckgImageSizePx}px; max-width: ${bckgImageSizePx}px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                height: ${imageSizePx}px;`"
                        alt="letter-background">

                    <img :src="`${publicPath}./assets/${imagesFolder}/${randomCharacter?.filePath}`"
                        class="foreground-image"
                        :style="`max-height: ${imageSizePx}px; max-width: ${imageSizePx}px; display: block; height: ${imageSizePx}px; object-fit: fill;`">
                </div>

                <div v-if="showAnswer">
                    <h3 style="color: green">{{ randomCharacter?.kannadaWord }}</h3>
                    <h4>{{ inscriptionDisplay }}</h4>
                    <LetterDetails :image_src="randomCharacter?.filePath" />
                    <a target="_blank"
                        :href="`https://mythicsociety.github.io/AksharaBhandara/#/learn/Shasanagalu?id=${inscriptionId}`">{{ $t("practice.linkInscription") }}</a>
                </div>

            </div>
            <div v-show="selected === 'two'">
                <h2>{{ $t("practice.hintWord") }}</h2>
                <img :src="`${publicPath}./assets/Learning/Words/${words[currentIndex]?.key}`">
                <h3 v-if="showAnswer" style="color: green">{{ words[currentIndex]?.answer }}</h3>

            </div>
            <div v-show="selected === 'three'">
                <h2>{{ $t("practice.hintSentence") }}</h2>
                <img :src="`${publicPath}./assets/Learning/Sentences/${sentences[currentIndex]?.key}`">
                <h3 v-if="showAnswer" style="color: green">{{ sentences[currentIndex]?.answer }}</h3>
            </div>
            <div v-show="selected === 'four'">
                <h2>{{ $t("practice.hintInscription") }}</h2>
                <img :src="`${publicPath}./assets/Shasanas/${insQuestions[currentIndex]?.key}`">

                <!-- <inner-image-zoom :src="`${publicPath}./assets/Shasanas/${insQuestions[currentIndex]?.key}`"
                    :zoomSrc="`${publicPath}./assets/Shasanas/${insQuestions[currentIndex]?.key}`" :width="500"
                    :height="500" /> -->

                <h3 v-if="showAnswer" style="color: green">{{ insQuestions[currentIndex]?.answer }}</h3>
            </div>
        </div>

        <div style="padding: 10px;">
            <button type="button" class="filter-button" style="cursor: pointer;" @click="showAnswer = !showAnswer">{{ $t("practice.btnShowAnswer") }}</button>
            <span style="margin: 0 10px;"></span>
            <button type="button" class="filter-button" style="cursor: pointer;" @click="switchRadio(selected)">{{ $t("practice.btnShowAnother") }}</button>
        </div>


    </div>
    <Footer></Footer>

</template>

<style scoped>
.container {
    position: relative;
    width: 100%;
    display: inline-block;
}

.background-image {
    width: 100%;
    opacity: 0.9;
}

.foreground-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
</style>