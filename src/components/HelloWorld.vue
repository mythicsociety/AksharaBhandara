<script setup>

</script>

<script>

export default {
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    }
  }
}
</script>

<template>
  <h1 class="page-header" style="font-size: 60px;">ಅಕ್ಷರ ಭಂಡಾರ</h1>

  <div class="body-padding">

    <div class="topnav">
      <router-link :to="{ name: 'ವರ್ಣಮಾಲೆ' }">ವರ್ಣಮಾಲೆ</router-link>
      <router-link :to="{ name: 'ಶಾಸನಗಳು' }">ಶಾಸನಗಳು</router-link>
      <router-link :to="{ name: 'Map' }">ಶಾಸನಗಳ ನಕ್ಷೆ</router-link>
      <router-link :to="{ name: 'About' }" style="float:right">ನಮ್ಮ ಬಗ್ಗೆ</router-link>
    </div>

    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>ದಿ ಮಿಥಿಕ್ ಸೊಸೈಟಿ</h2>

          <!-- <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg" style="height:200px;">Image</div> -->
          <img :src="`${publicPath}./assets/mythic-society.png`" :alt="`mythic-society`">

          <p>ಭಾರತೀಯ ಸಾಂಸ್ಕೃತಿಕ ಅಧ್ಯಯನಕ್ಕೆ ಅರ್ಪಿಸಿಕೊೊಂಡ ಅಭಿಜಾತ ಸಂಸ್ಥೆಗಳ ಪೈಕಿ 'ದಿ ಮಿಥಿಕ್ ಸೊಸೈಟಿ'ಯು
            ಹೆಮ್ಮೆ ಪಡುವಂಥ ಸ್ಥಾನವನ್್ನ ನು ಪಡೆದುಕೊೊಂಡಿದೆ. 1909ರಲ್ಲಿ ಪ್ರಾರಂಭವಾದ ಸಂಸ್ಥೆಯು ಸತತ 114
            ವರ್್ಷಗಳಿಿಂದ ಭಾರತೀಯ ಅಧ್ಯಯನ ಶಾಸ್ತತ್ರಗಳಾದ ಇತಿಹಾಸ, ಪುರಾತತ್್ವ ಶಾಸ್ತತ್ರ, ಭಾಷಾಶಾಸ್ತತ್ರ, ನಾಣ್್ಯಶಾಸ್ತತ್ರ,
            ಶಾಸನಶಾಸ್ತತ್ರ, ಜಾನಪದ, ಪುರಾಣ, ಧರ್್ಮ, ಕಲೆ ಮತ್್ತತು ವಾಸ್್ತತು ಶಿಲ್್ಪದ ಕ್ಷೇತ್ ್ರಗಳಲ್ಲಿ ಸಂಶೋಧನೆ, ಪ್್ರಚಾರ,
            ಉಪನ್ಯಾಸ, ಸಂರಕ್ಷಣೆ ಹಾಗೂ ಅವುಗಳ ಮೇ ಲೆ ಬೆಳಕು ಚೆಲ್್ಲಲುವ ಕೆಲಸವನ್ನು ನಿರಂತರ ಮಾಡುತ್ತಾ ಬರುತ್ತಿದೆ.
            ಸುಮಾರು 40 ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಪುಸ್ತಕ ಸಂಗ್ರಹವಿರುವ ಗ್ರಂಥಾಲಯವು ಆಸಕ್ತರು ಮತ್್ತತು ಸಂಶೋಧಕ ರಿಗೆ
            ವರದಾನವಾಗಿದೆ. ಬಿ.ಎಲ್.ರೈಸ್, ಸರ್ ಸಿ.ವಿ.ರಾಮನ್, ಆರ್.ಶಾಮಶಾಸ್ತ್ರಿ, ಸರ್ ಮಿರ್ಜಾ ಇಸ್ಮಾಯಿಲ್, ಡಾ.
            ಎಸ್.ಆರ್.ರಾವ್ , ಎಸ್.ಶ್ರೀಕ ಂಠಯ್ಯ , ರಾವ್ ಬಹದ್ದೂರ್ ಆರ್.ನರಸಿಿಂಹಾಚಾರ್, ಸಿ.ಹಯವದನ ರಾವ್, ಸರ್.
            ಎಂ.ವಿಶ್ವೇಶ್ವರಯ್ಯ ಮತ್್ತತು ಇತರರು ಸಂಸ್ಥೆಯ ಸುದೀ ರ್್ಘ ಮತ್್ತತು ಶ್ರೀಮಂತ ಇತಿಹಾಸದೊೊಂದಿಗೆ ಸಂಬಂಧವನ್್ನ ನು
            ಹೊೊಂದಿದ್್ದ ರು.</p>

        </div>
        <div class="card">
          <h2>"ಬೆೆಂಗಳೂರು ಇತಿಹಾಸ ವೈಭವ" ಪುಸ್ತಕ ಮಾಲಿಕೆ</h2>
          <h3>ಪುಸ್ತಕಗಳು ಈ <a href="https://bit.ly/biv_books" target="_blank">ಲಿಂಕ್</a>ನಲ್ಲಿ ಲಭ್ಯವಿದೆ</h3>
          <!-- <div class="fakeimg" style="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.</p> -->
        </div>

        <div class="card">
          <h2>Digital recreations of inscription stones of Bengaluru</h2>
          <h3>A treasure trove for Epigraphy teachers, students, researchers, enthusiasts, hobbyists and anyone interested
            in inscriptions!
            Over 150 high-quality digital images of Kannada and Tamil inscriptions are shared on Wikimedia Commons</h3>
          <a target="_blank" href="https://t.co/cKTl0ZOn9P">Digital Images Prepared by Mythic Society Inscriptions
            Conservation Project Team</a>
        </div>

        <div class="card">
          <iframe width="720" height="480" src="https://www.youtube.com/embed/N0dQmaiBYSw"
            title="City's future inscribed on a stone | #OoruLabs Talking Heads #podcast Episode 21" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <div class="card">
          <h2>Press Coverage of The Project & Some Reference Material</h2>
          <table style="border-collapse: collapse;">
            <!-- <tr>
              <th>Project Title</th>
              <th>Link</th>
            </tr> -->
            <tr>
              <td>Deccan Herald: A unique project to trace Bengaluru's history before Kempe Gowda</td>
              <td><a target="_blank"
                  href="https://www.deccanherald.com/city/a-unique-project-to-trace-bengalurus-history-before-kempe-gowda-973007.html">Link</a>
              </td>
            </tr>
            <tr>
              <td>The Times of India: Mythic Society to preserve 175 city inscriptions in 3D</td>
              <td><a target="_blank"
                  href="https://timesofindia.indiatimes.com/city/bengaluru/mythic-society-to-preserve-175-city-inscriptions-in-3d/articleshow/87955873.cms">Link</a>
              </td>
            </tr>
            <tr>
              <td>The Frontline Magazine: Rerecording history: Bengaluru's Inscriptions 3D Digital Conservation Project
                helps preserve millennia-old stone inscriptions</td>
              <td><a target="_blank"
                  href="https://frontline.thehindu.com/the-nation/rerecording-history-bengaluru-based-inscriptions-3d-digital-conservation-project-helps-preserve-millenia-old-stone-inscriptions-article38445335.ece">Link</a>
              </td>
            </tr>
            <tr>
              <td>Bangalore Mirror: 500 years of history unearthed, demystified</td>
              <td><a target="_blank"
                  href="https://bangaloremirror.indiatimes.com/bangalore/others/500-years-of-history-unearthed-demystified/articleshow/88377865.cms">Link</a>
              </td>
            </tr>
            <tr>
              <td>Bangalore Mirror: History's codebreakers</td>
              <td><a target="_blank"
                  href="https://bangaloremirror.indiatimes.com/bangalore/others/historys-codebreakers/articleshow/88131445.cms">Link</a>
              </td>
            </tr>
            <tr>
              <td>ಹೊಸದಿಗಂತ: ಅಳಿಯುತ್ತಿರುವ ಶಾಸನಗಳಿಗೆ ಡಿಜಿಟಲ್ ರಕ್ಷೆ, ಇದು ಮಿಥಿಕ್ ಸೊಸೈಟಿ ಮಹಾಕಾರ್ಯ!</td>
              <td><a target="_blank"
                  href="https://hosadigantha.com/mythic-society-digitising-3dscanning-edicts-bengaluru-history">Link</a>
              </td>
            </tr>
            <tr>
              <td>ವಿಜಯವಾಣಿ: ಮಿಥಿಕ್ ಸೊಸೈಟಿಯಿಂದ ಡಿಜಿಟಲೀಕರಣ | ಸ್ಥಳೀಯ ಪ್ರದೇಶಗಳ ಇತಿಹಾಸದ ಬಗ್ಗೆ ಮಾಹಿತಿ ಶಾಸನಗಳ 3 ಡಿ ಸಂರಕ್ಷಣೆ
                ಆರಂಭ</td>
              <td><a target="_blank"
                  href="https://epapervijayavani.in/ArticlePage/APpage.php?edn=Bengaluru&articleid=VVAANINEW_BEN_20211127_12_6">Link</a>
              </td>
            </tr>
            <tr>
              <td>ಕನ್ನಡಪ್ರಭ: ನಗರದ 175 ಶಿಲಾಶಾಸನಕ್ಕೆ ಡಿಜಿಟಲ್ ರೂಪ ದೇಶದಲ್ಲೇ ಮೊದಲ ಬಾರಿ 3 ಡಿ ಸ್ಕ್ಯಾನ್ ಬಳಸಿ ಶಿಲಾಶಾಸನಗಳ ಸಂರಕ್ಷಣೆ
                : ನಾಗರಾಜ್</td>
              <td><a target="_blank"
                  href="https://kpepaper.asianetnews.com/3301343/Bengaluru/Bengaluru%23page/2/2%23page/2/1#page/2/1">Link</a>
              </td>
            </tr>
            <tr>
              <td>Mythic Society BBMP Endowment Lecture: Digital Conservation of Bengaluru Inscriptions</td>
              <td><a target="_blank" href="https://youtu.be/MEzgWe8-V1g">Link</a></td>
            </tr>
            <tr>
              <td>Mythic Society Lecture: A Novel Approach for Inscription Studies & Conservation - High Resolution 3D
                Digital Epigraphy</td>
              <td><a target="_blank" href="https://youtu.be/2EZEPp3dp9g">Link</a></td>
            </tr>
            <tr>
              <td>ಹೊಸದಿಗಂತ: ಇತಿಹಾಸವನ್ನು ಅಳಿಸದಂತಿಡುತ್ತೇವೆ ಅಂತ ಕೋಟಿ ರುಪಾಯಿ ಖರ್ಚು ಮಾಡಿ ಮಹಾಯತ್ನಕ್ಕೆ ಕೈಹಾಕಿದೆ ಮಿಥಿಕ್ ಸೊಸೈಟಿ.
              </td>
              <td><a target="_blank" href="https://youtu.be/PEwsy4UWIvU">Link</a></td>
            </tr>
          </table>

        </div>

      </div>
      <div class="rightcolumn">

        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Mythic.Society.1909&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

        <div class="card">
          <h2>Akshara Bhandara, Vol-1, Kannada Script 1300-1400CE</h2>
          <img :src="`${publicPath}./assets/Home-image.png`" :alt="`Book title cover`" width="200" height="300">
          <p>You can download the book from <a href="https://bit.ly/aksharabhandara1" target="_blank">here</a></p>

        </div>

        <div class="card">
          <h3>ಪುಸ್ತಕದ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನಮಗೆ <a href="https://bit.ly/ab1feedback" target="_blank">ತಿಳಿಸಿ</a>
          </h3>
        </div>
      </div>
    </div>

    <div class="footer">
      <h2>Contact us</h2>
      <div class="footer-icons">
        <a href="mailto:3dscanning.mythicsociety@gmail.com"><i class="fa fa-google red-color fa-2x"
            aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/groups/inscriptionstones" target="_blank"><i class="fa fa-facebook-square fa-2x"
            aria-hidden="true"></i></a>
        <a href="https://twitter.com/MythicSociety" target="_blank"><i class="fa fa-twitter-square teal-color fa-2x"
            aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/@mythicsocietymedia8880" target="_blank"><i
            class="fa fa-youtube-play red-color fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>

  </div>
</template>

<style scoped>
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

.home-flex-container {
  display: flex;
  flex-wrap: wrap;
  /* font-size: 30px; */
  /* text-align: center; */
  /* align-items: center; */
  justify-content: center;
  column-gap: 1rem;
  /* row-gap: 1rem; */
  padding: 10px;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  text-align: center;
  background: white;
}

.header h1 {
  font-size: 50px;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 60%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 30%;
  background-color: #f1f1f1;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
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

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {

  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
@media screen and (max-width: 400px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
</style>
