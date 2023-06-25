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
  <div class="body-padding">

    <div class="header">
      <h1>ಅಕ್ಷರ ಭಂಡಾರ</h1>
    </div>

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
          <h5>ಪುಸ್ತಕಗಳು ಈ <a href="https://bit.ly/biv_books" target="_blank">ಲಿಂಕ್</a>ನಲ್ಲಿ ಲಭ್ಯವಿದೆ</h5>
          <!-- <div class="fakeimg" style="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.</p> -->
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
          <!-- <div class="fakeimg" style="height:100px;">Image</div> -->
          <img :src="`${publicPath}./assets/Home-image.png`" :alt="`Book title cover`" width="200" height="300">
          <p>You can download the book from <a href="https://bit.ly/aksharabhandara1" target="_blank">here</a></p>

        </div>
        <!-- <div class="card">
          <h3>Popular Post</h3>
          <div class="fakeimg">
            <p>Image</p>
          </div>
          <div class="fakeimg">
            <p>Image</p>
          </div>
          <div class="fakeimg">
            <p>Image</p>
          </div>
        </div> -->
        <div class="card">
          <h3>ಪುಸ್ತಕದ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನಮಗೆ <a href="https://bit.ly/ab1feedback" target="_blank">ತಿಳಿಸಿ</a></h3>
        </div>
      </div>
    </div>

    <!-- <div class="footer">
      <h2>Footer</h2>
    </div> -->

    <!-- <h2>The Mythic Society</h2>

    <img :src="`${publicPath}./assets/Mythic-society.png`" :alt="`Mythic society`">

    <div class="home-flex-container">
      <img :src="`${publicPath}./assets/Home-image.png`" :alt="`Book title cover`" width="500" height="500">

      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Mythic.Society.1909&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    </div> -->

  </div>
</template>

<style scoped>
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
