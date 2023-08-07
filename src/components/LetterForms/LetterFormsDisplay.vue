<script setup>
import BasicLetter from '../../components/LetterForms/BasicLetter.vue'
import { groupBy, getYear, getRandomItemsFromArray, groupByCentury } from '../../models/utils';
import { DefaultLetterCount } from '../../models/constants.js'

</script>

<template>
    <div class="container">
        <div v-if="showImage" class="left-column">
            <h2 style="color: red; background-color: yellow; font-size: 64px; box-shadow: 5px 5px 5px gray;">{{ selectedLetter.key }}</h2>
        </div>
        <div class="right-column" v-bind:style="{ 'flex-basis': showImage ? '80%' : '100%' }">
            <div v-if="groupedLetters.size > 0">

                <div v-for="group in groupedLetters" class="flex-container-parent">

                    <h2 style="border-bottom: 2px solid red; margin-bottom: 20px;background-color: rgba(188, 143, 143, 0.5);">{{ getGroupName(group[0], group[1].length) }}</h2>

                    <div class="flex-container-century" v-for="(subGroup, century) in groupFormsByCentury(group[1])">
                        <p class="p-heading">{{ century }}ನೆ ಶತಮಾನ</p>
                        <div class="flex-container" style="background: honeydew;">
                            <BasicLetter v-for="letter in sortedByYear(subGroup)" :image_src="letter.path"
                                :showLetterText="false" :imageSizePx="125" :showLetterYear="true" />
                        </div>
                    </div>

                </div>
            </div>
            <div v-else>
                <h2 style="background: lightgrey;">ಈ ಅವಧಿಯಲ್ಲಿ ಯಾವುದೇ ಅಕ್ಷರಗಳು ಲಭ್ಯವಿಲ್ಲ</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    props: {
        selectedLetter: Object,
        showImage: Boolean,
        yearData: String,
        NumberOfImagesToDisplay: { type: Number, default: DefaultLetterCount }
    },
    watch: {
        selectedLetter(newValue, oldValue) {
            // console.log('newValue:', newValue, 'previousValue:', oldValue);
            //const uniqueItems = [...new Set(newValue.letterForms.map((item) => item.form))];

            this.applyYearFilter(newValue.letterForms, this.yearData);
        },
        yearData(newValue, oldValue) {
            this.applyYearFilter(this.selectedLetter.letterForms, newValue);
        },
        NumberOfImagesToDisplay(newValue, oldValue) {
            this.applyYearFilter(this.selectedLetter.letterForms, this.yearData);
        }
    },
    data() {
        return {
            groupedLetters: []
        }
    },
    computed: {

    },
    methods: {
        groupFormsByCentury(group) {
            let groupedForm = groupByCentury(group, 'year');
            return groupedForm;
        },
        sortedByYear(groupedLetters) {
            let limitedArr = getRandomItemsFromArray(groupedLetters, this.NumberOfImagesToDisplay);
            // let limitedArr = shuffled.slice(0, NumberOfImagesToDisplay);
            return limitedArr.sort((a, b) => a.year - b.year);
        },
        getLetterForForm(formId) {
            return this.groupedLetters.get(formId)
        },

        getGroupName(formId, groupCount) {
            return "ರೂಪ " + formId.substr(-1) + "" + groupCount
        },

        getGroupedForms(letterForms) {
            this.groupedLetters = groupBy(letterForms, letter => letter.form);
        },
        applyYearFilter(letterForms, yearData) {

            if (yearData == "") {
                this.getGroupedForms(letterForms);
            } else {
                let filteredData = letterForms.map(l => {
                    return {
                        ...l,
                        year: getYear(l.path)
                    };
                }).filter(l => l.year >= yearData.fromYear & l.year <= yearData.toYear);

                // let filteredData = letterForms.filter(l => l.year >= yearData.fromYear & l.year <= yearData.toYear);

                this.getGroupedForms(filteredData);
            }
        }


    }, mounted() {

        if (this.selectedLetter !== "") {
            this.applyYearFilter(this.selectedLetter.letterForms, this.yearData);
        }
        // let allForms = this.selectedLetter.letterForms.map(letterForm => ({ letterForm: letterForm.form })).flat()
        // let uniqueItems = [...new Set(allForms)]

        // const grouped = groupBy(selectedLetter.letterForms, letter => letter.form);

    }
}
</script>

<style >
.container {
    display: flex;
}

.left-column {
    flex-basis: 20%;
    padding: 20px;
}

.right-column {
    flex-basis: 80%;
    padding: 20px;
}

.flex-container-century {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid;
}

.p-heading {
    background: lightskyblue;
    margin-bottom: 5px;
}
</style>