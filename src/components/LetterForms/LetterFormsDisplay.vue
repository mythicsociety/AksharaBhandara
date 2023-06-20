<script setup>
import BasicLetter from '../../components/LetterForms/BasicLetter.vue'
import { groupBy, getYear, getRandomItemsFromArray } from '../../models/utils';
import { DefaultLetterCount } from '../../models/constants.js'

</script>

<template>
    <div class="container">
        <div v-if="showImage" class="left-column">
            <h2 style="color: red; background-color: yellow; font-size: 64px;">{{ selectedLetter.key }}</h2>
        </div>
        <div class="right-column">
            <div v-if="groupedLetters.size > 0">

                <div v-for="group in groupedLetters" class="flex-container-parent">

                    <h2 style="border-bottom: 2px solid red;">{{ getGroupName(group[0]) }}</h2>
                    <div class="flex-container">
                        <BasicLetter v-for="letter in sortedByYear(group[1])" :image_src="letter.path"
                            :showLetterText="false" :imageSizePx="125" :showLetterYear="true" />
                    </div>

                </div>
            </div>
            <div v-else>
                <h2>ಈ ಅವಧಿಯಲ್ಲಿ ಯಾವುದೇ ಅಕ್ಷರಗಳು ಲಭ್ಯವಿಲ್ಲ</h2>
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

        sortedByYear(groupedLetters) {
            let limitedArr = getRandomItemsFromArray(groupedLetters, this.NumberOfImagesToDisplay);
            // let limitedArr = shuffled.slice(0, NumberOfImagesToDisplay);
            return limitedArr.sort((a, b) => a.year - b.year);
        },
        getLetterForForm(formId) {
            return this.groupedLetters.get(formId)
        },

        getGroupName(formId) {
            return "ರೂಪ " + formId.substr(-1)
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
</style>