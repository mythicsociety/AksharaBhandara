<template>
    <div class="footer">
        <h2>{{ $t("about.contactUs") }}</h2>
        <div class="footer-icons">
            <a href="mailto:3dscanning.mythicsociety@gmail.com"><i class="fa fa-google red-color fa-2x"
                    aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/groups/inscriptionstones" target="_blank"><i
                    class="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
            <a href="https://twitter.com/MythicSociety" target="_blank"><i class="fa fa-twitter-square teal-color fa-2x"
                    aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/@mythicsocietymedia8880" target="_blank"><i
                    class="fa fa-youtube-play red-color fa-2x" aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<style>
.fa-facebook-square {
    color: #3b5998;
    background-image: linear-gradient(to bottom, transparent 20%, white 20%, white 93%, transparent 93%);
    background-size: 55%;
    background-position: 70% 0;
    background-repeat: no-repeat;
}

.teal-color {
    color: teal;
}

.red-color {
    color: red;
}

/* Footer */
.footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
    margin-top: 20px;
}

.footer-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.footer-icons a {
    margin: 0 10px;
    /* Adjust the value to control the spacing between icons */
}
</style>