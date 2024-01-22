<script setup>
import { useI18n } from "vue-i18n"
import { watch } from "vue"

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <sidebar-menu v-model:collapsed="collapsed" :menu="menu" :show-child="true" :disable-hover="true" />
  <!-- :theme="'white-theme'" -->
  <!-- @update:collapsed="onToggleCollapse" -->
  <div v-if="!collapsed" class="sidebar-overlay" @click="collapsed = true"></div>

  <div id="demo" :class="[{ collapsed: collapsed }]" :style="`text-align: center;`">
    <router-view />
  </div>
</template>

<script>
// const { t, locale } = useI18n()
// let msg = t("navigation.heading")

// watch(locale, () => {
//   msg = t("navigation.heading")
// })

export default {
  data() {
    return {
      currentPath: window.location.hash,
      collapsed: false,
      menu: [
        {
          header: this.$t("navigation.heading"),
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: this.$t("navigation.home"),
          icon: 'fa fa-home'
        },
        {
          href: '/learn',
          title: this.$t("navigation.script"),
          icon: 'fa fa-book',
          child: [
            {
              href: '/learn/Varnamale',
              title: this.$t("navigation.alphabets"),
              icon: 'fa fa-sort-alpha-asc',
            },
            {
              href: '/learn/AksharaRupagalu',
              title: this.$t("navigation.forms"),
              icon: 'fa fa-university',
            },
            {
              href: '/learn/Gunitaksharagalu',
              title: this.$t("navigation.gunitakshara"),
              icon: 'fa fa-list-ul',
            },
            {
              href: '/learn/Samyuktaksharagalu',
              title: this.$t("navigation.samyuktakshara"),
              icon: 'fa fa-subscript',
            },
            {
              href: '/learn/Sankegalu',
              title: this.$t("navigation.numbers"),
              icon: 'fa fa-sliders',
            },
            {
              href: '/learn/Symbols',
              title: this.$t("navigation.symbols"),
              icon: 'fa fa-star',
            },
            {
              href: '/learn/Shasanagalu',
              title: this.$t("navigation.inscriptions"),
              icon: 'fa fa-tablet',
            }
          ]
        },
        {
          href: '/Learning',
          title: this.$t("navigation.practice"),
          icon: 'fa fa-pencil-square-o'
        },
        {
          href: '/map',
          title: this.$t("navigation.map"),
          icon: 'fa fa-map'
        },
        {
          href: '/about',
          title: this.$t("navigation.aboutUs"),
          icon: 'fa fa-inbox'
        },
      ],
      methods: {
        onToggleCollapse(collapsed) {
          // console.log('onToggleCollapse')
        },
      }
    }
  },
  computed: {
    // currentView() {
    //   return routes[this.currentPath.slice(1) || '/'] || TheWelcome
    // }
  },
  mounted() {
    // window.addEventListener('hashchange', () => {
    //   this.currentPath = window.location.hash
    // })
  }
}
</script>

<style>
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}

#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}

#demo.collapsed {
  padding-left: 65px;
}

.demo {
  /* padding: 20px; */
}

.container {
  /* max-width: 900px; */
}

/* Responsive layout - makes a two column-layout instead of four columns */
/* @media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
} */

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
} */
</style>
