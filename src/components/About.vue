
<template>
    <h2 class="page-header">ದಿ ಮಿಥಿಕ್ ಸೊಸೈಟಿ ಶಾಸನಗಳ 3ಡಿ ಡಿಜಿಟಲ್ ಸಂರಕ್ಷಣಾ ಯೋಜನಾ ತಂಡ</h2>

    <div class="body-padding">

        <img :src="`${publicPath}./assets/Team.png`" :alt="`Team`" class="responsive-img">
        <p>ಉದಯ ಕುಮಾರ್ ಪಿ.ಎಲ್., ಶಶಿಕುಮಾರ ನಾಯ್ಕ ಕೆ.ಸಿ., ಮಧುಸೂದನ ಎಂ.ಎನ್., ಗೌತಮ್ ಜಂತಕಲ್</p>
        <p>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ: 3dscanning.mythicsociety@gmail.com</p>

        <h3 style="margin-top: 15px;">The Mythic Society Bengaluru Inscriptions 3D Digital Conservation Project Lab</h3>
        <img :src="`${publicPath}./assets/project-lab.png`" :alt="`Team`" class="responsive-img">

        <!-- <div style="display: block; width: 60%; margin-left: auto; margin-right: auto;" >
            <a class="twitter-timeline" href="https://twitter.com/MythicSociety?ref_src=twsrc%5Etfw">Tweets by
                MythicSociety</a>
        </div> -->

        <h3 style="margin-top: 15px;">The Mythic Society Bengaluru Inscriptions 3D Digital Conservation Project Team Engaged In Field Work and
            Scanning Inscriptions In-Situ</h3>
        <div class="row">
            <div class="column">
                <img :src="appendPath('field-work01.png')">
                <img :src="appendPath('field-work02.png')">
                <img :src="appendPath('field-work03.png')">
                <img :src="appendPath('field-work04.png')">
            </div>
            <div class="column">
                <img :src="appendPath('field-work05.png')">
                <img :src="appendPath('field-work06.png')">
                <img :src="appendPath('field-work07.png')">
                <img :src="appendPath('field-work08.png')">
                <img :src="appendPath('field-work13.png')">

            </div>
            <div class="column">
                <img :src="appendPath('field-work09.png')">
                <img :src="appendPath('field-work10.png')">
                <img :src="appendPath('field-work11.png')">
                <img :src="appendPath('field-work12.png')">
            </div>
        </div>

        <br>
        <p>Developed by: Karthik Aditya, karthikaditya147@gmail.com</p>
    </div>
</template>

<script>

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL
        }
    }, methods: {
        appendPath(fileName) {
            return this.publicPath + "./assets/" + fileName;
        }
    }
}
// export default {
//     mounted() {
//         let twitterScript = document.createElement('script')
//         twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
//         twitterScript.setAttribute('charset', 'utf-8')
//         twitterScript.async = true;

//         document.head.appendChild(twitterScript)
//     },
// }
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    justify-content: center;
}

.column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

.responsive-img {}

@media screen and (max-width: 800px) {
    .column {
        flex: 50%;
        max-width: 50%;
    }

    .responsive-img {
        flex: 50%;
        max-width: 50%;
    }
}

@media screen and (max-width: 600px) {
    .column {
        flex: 100%;
        max-width: 100%;
    }

    .responsive-img {
        flex: 100%;
        max-width: 100%;
    }
}</style>