<template>
    <div>
        <label>
            <input type="checkbox" v-model="showIAST" @change="updateValue" />
            {{ showIAST ? 'Show in Kannada' : 'Show IAST form' }}
        </label>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showIAST: false
        }
    },
    methods: {
        updateValue() {
            this.$emit('showIAST', this.showIAST)
        }
    }
}
</script>