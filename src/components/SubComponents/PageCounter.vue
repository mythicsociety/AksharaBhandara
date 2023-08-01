<template>
    <div class="bottom-border">
        <label class="sub-heading" for="pageSize" style="color: black;margin: 10px;">ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ:</label>
        <select style="width: 50px;" id="pageSize" v-model="pageSize" @change="reupdateDisplayedData">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    </div>
</template>

<script>
import { DefaultLetterCount } from '../../models/constants.js'

export default {
    data() {
        return {
            pageSize: DefaultLetterCount, 
        }
    },
    methods: {
        reupdateDisplayedData() {
            this.$emit('pageSize', parseInt(pageSize.value));
        },

    }
}
</script>