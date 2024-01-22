<script setup lang="ts"/>

<template>
  <div style="background: lightskyblue;" class="locale-changer">
    <select class="" style="width: 100px;" v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: [
        { code: "en", text: "English" },
        { code: "kn", text: "ಕನ್ನಡ" },
      ],
    };
  },
};
</script>

<style>
.parent {
  position: relative;
}

.child {
  position: absolute;
  right: 0;
}

</style>