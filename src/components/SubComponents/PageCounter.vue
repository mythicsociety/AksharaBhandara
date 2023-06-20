<template>
    <div>
        <label for="pageSize" style="color: black;margin: 10px;">ಅಕ್ಷರಗಳ ಸಂಖ್ಯೆ:</label>
        <select id="pageSize" v-model="pageSize" @change="reupdateDisplayedData">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageSize: 10, 
        }
    },
    methods: {
        reupdateDisplayedData() {
            this.$emit('pageSize', parseInt(pageSize.value));
        },

    }
}
</script>