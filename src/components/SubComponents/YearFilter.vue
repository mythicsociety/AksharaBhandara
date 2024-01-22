<template>
    <div class="bottom-border">
        <p class="sub-heading">{{ $t("letter.selectYears") }}</p>
        <div>
            <label for="from-year" style="color: black;margin: 10px;">{{ $t("letter.fromYear") }}:</label>
            <input type="number" id="from-year" name="from-year" :min="minYear" :max="maxYear" :step="stepYear"
                v-model="fromYear">

            <label for="to-year" style="color: black;margin: 10px;">{{ $t("letter.toYear") }}:</label>
            <input type="number" id="to-year" name="to-year" :min="minYear + stepYear" :max="maxYear" :step="stepYear"
                v-model="toYear">
        </div>

        <div style="padding: 10px;">
            <button class="filter-button" @click="passData()" type="button" style="cursor: pointer;">
                {{ $t("symbols.filter") }}
            </button>
            <span style="margin: 0 10px;"></span>
            <button class="reset-button" @click="resetData()" type="button" style="cursor: pointer;">
                {{ $t("symbols.reset") }}
            </button>
        </div>

    </div>
</template>
  
<script>
import { MinYear, MaxYear, StepYear } from '../../models/constants.js'

export default {
    data() {
        return {
            minYear: MinYear,
            maxYear: MaxYear,
            stepYear: StepYear,
            fromYear: MinYear,
            toYear: MaxYear
        }
    },
    watch: {
        fromYear(newValue) {
            if (newValue >= this.toYear) {
                this.toYear = newValue + this.stepYear;
            }
        },
        toYear(newValue) {
            if (newValue <= this.fromYear) {
                this.fromYear = Math.max(newValue - this.stepYear, this.minYear);
            }

            // if (newValue <= this.fromYear || newValue === this.fromYear + 50) {
            //     this.fromYear = newValue - 50;
            // }
        }
    }, methods: {
        passData() {
            if (this.fromYear >= this.minYear & this.toYear <= this.maxYear) {
                this.$emit('yearData', { fromYear: this.fromYear, toYear: this.toYear });
            } else {
                alert(this.$t("letter.yearsRangeWarning"));
                this.fromYear = this.minYear;
                this.toYear = this.maxYear;
            }
        },
        resetData() {
            this.fromYear = this.minYear;
            this.toYear = this.maxYear;
            this.$emit('yearData', { fromYear: this.minYear, toYear: this.maxYear });
        }
    },
}

</script>
  
<style>
.filter-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.reset-button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>