<script>

export default {
    props: { jsonData: [] },
    data() {
        return {
            selectedLetter: '',
            underlineFirstLetter: true,
        }
    },
    mounted() {
        if (this.jsonData.length > 0) {
            this.selectedLetter = this.jsonData[0]
        }
    },
    methods: {
        selectLetter(num) {
            this.underlineFirstLetter = false;
            this.selectedLetter = this.jsonData.find(a => a.id == num)
            // this.$emit('update:selectedLetter', this.selectedLetter)
            this.$emit('eventname', this.selectedLetter)
        },
    }
}

</script>

<template>
    <div class="flex-container-parent bottom-border" style="justify-content: center;">
        <p class="sub-heading">ಒಂದು ಅಕ್ಷರವನ್ನು ಆಯ್ಕೆಮಾಡಿ</p>
        <div class="flex-item-left">
            <div v-for="(item, index) in jsonData" :key="item.id" @click="selectLetter(item.id)"
                class="letter-parent">

                <p ref="firstP" v-if="index == 0 & selectedLetter == ''" :style="`border: 3px solid red`"
                    class="letter-background">{{ item.key }}</p>

                <p :style="[selectedLetter.id === item.id ? { 'border': '3px solid red' } : {}]"
                    class="letter-background" v-else>{{ item.key }}</p>
            </div>

        </div>

    </div>
</template>

<style>
.flex-item-left {
  /* background-color: #f1f1f1; */
  /* padding: 20px; */
  margin: 5px;
}

.flex-item-right {
  background-color: dodgerblue;
  padding: 20px;
  margin: 5px;
}

.letter-parent{
    display: inline-block;
    border: 2px solid white;
    margin: 5px;
    padding: 5px;
    background: white;
    box-shadow: 4px 4px 4px gray;
}

.letter-background{
    font-size: 32px;
    padding: 5px;
    cursor: pointer;
    background: white;
}

</style>