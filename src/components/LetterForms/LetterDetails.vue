<script>

export default {
    props: { image_src: String },
    data() {
        return {
            letterDetails: {}
        }
    }, mounted() {
        let indx = this.image_src.lastIndexOf("/");
        let result = this.image_src.substring(indx + 1);
        let dotIdx = result.lastIndexOf(".");
        let fileName = result.substring(0, dotIdx);

        let indx2 = fileName.indexOf("_");
        let imageYear = fileName.substring(0, indx2);

        let indx3 = fileName.indexOf("_", indx2 + 1);
        let inscriptionId = fileName.substring(indx2 + 1, indx3);

        let indx4 = fileName.indexOf("_", indx3 + 1);
        let place = fileName.substring(indx3 + 1, indx4);

        let indx5 = fileName.indexOf("_", indx4 + 1);
        let lineNumber = fileName.substring(indx4 + 1, indx5);

        let indx6 = fileName.indexOf("_", indx5 + 1);
        let posNumber = fileName.substring(indx5 + 1, indx6);

        // let indx7 = fileName.indexOf("_", indx6 + 1);
        let characterIAST = fileName.substring(indx6 + 1);

        this.letterDetails = {
            fileName,
            imageYear,
            inscriptionId,
            place,
            lineNumber,
            posNumber,
            characterIAST
        }
    }
}
</script>

<template>
    <div class="key-value-list">

        <h2>{{ $t("letterDetails.heading") }}</h2>

        <!-- <div class="pair">
    <span class="key">ವರ್ಷ:</span>
    <span class="value">{{ letterDetails.imageYear }}</span>
</div>
<div class="pair">
    <span class="key">ಸ್ಥಳ:</span>
    <span class="value">{{ letterDetails.place }}</span>
</div>
<div class="pair">
    <span class="key">ಸಾಲಿನ ಸಂಖ್ಯೆ:</span>
    <span class="value">{{ letterDetails.lineNumber }}</span>
</div>
<div class="pair">
    <span class="key">ಅಕ್ಷರ ಸಂಖ್ಯೆ:</span>
    <span class="value">{{ letterDetails.posNumber }}</span>
</div>
<div class="pair">
    <span class="key">IAST:</span>
    <span class="value">{{ letterDetails.characterIAST }}</span>
</div> Changed by Uday for improved language  -->
        <div class="pair">
            <span class="key">{{ $t("letterDetails.year") }}:</span>
            <span class="value">{{ letterDetails.imageYear }}</span>
        </div>
        <div class="pair">
            <span class="key">{{ $t("letterDetails.place") }}:</span>
            <span class="value">{{ letterDetails.place }}</span>
        </div>
        <div class="pair">
            <span class="key">{{ $t("letterDetails.lineNumber") }}:</span>
            <span class="value">{{ letterDetails.lineNumber }}</span>
        </div>
        <div class="pair">
            <span class="key">{{ $t("letterDetails.positionNumber") }}:</span>
            <span class="value">{{ letterDetails.posNumber }}</span>
        </div>
        <div class="pair">
            <span class="key">{{ $t("letterDetails.iast") }}:</span>
            <span class="value">{{ letterDetails.characterIAST }}</span>
        </div>
    </div>
</template>

<style scoped>
.key-value-list {
    display: flex;
    flex-direction: column;
}

/* .pair {
    margin-bottom: 10px;
} */

.key {
    padding-right: 10px;
    font-size: 16px;
    font-style: italic;
    /* width: 400px;
    display: inline-block; */
}

.value {
    font-size: 16px;
}

/* Optional styling for better appearance */
.key-value-list {
    /* border: 1px solid #ccc; */
    padding: 10px;
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
}
</style>