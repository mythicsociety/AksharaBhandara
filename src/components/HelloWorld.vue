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
    <h2>The Mythic Society</h2>
    <p>The Mythic Society is a pioneering institution of Indic studies in South India, founded in 1909</p>

    <div class="home-flex-container">
      <img :src="`${publicPath}./assets/Home-image.png`" :alt="`Image text`">

      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Mythic.Society.1909&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    </div>
    <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
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
</style>
