
<template>
    <h2 class="page-header">ದಿ ಮಿಥಿಕ್ ಸೊಸೈಟಿ ಶಾಸನಗಳ 3ಡಿ ಡಿಜಿಟಲ್ ಸಂರಕ್ಷಣಾ ಯೋಜನಾ ತಂಡ</h2>

    <div class="body-padding">

        <img :src="`${publicPath}./assets/Team.png`" :alt="`Team`">
        <p>ಉದಯ ಕುಮಾರ್ ಪಿ.ಎಲ್., ಶಶಿಕುಮಾರ ನಾಯ್ಕ ಕೆ.ಸಿ., ಮಧುಸೂದನ ಎಂ.ಎನ್., ಗೌತಮ್ ಜಂತಕಲ್</p>
        <p>ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ: 3dscanning.mythicsociety@gmail.com</p>
        <br>
        <p>Developed by: Karthik Aditya, karthikaditya147@gmail.com</p>

        <!-- <i class="fa fa-github" style="color: black;">
            <a href="https://github.com/mythicsociety/AksharaBhandara" target="_blank" style="color: black;
    font-style: italic;">Source code</a>
        </i> -->

        <!-- <div style="display: block; width: 60%; margin-left: auto; margin-right: auto;" >
            <a class="twitter-timeline" href="https://twitter.com/MythicSociety?ref_src=twsrc%5Etfw">Tweets by
                MythicSociety</a>
        </div> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL
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