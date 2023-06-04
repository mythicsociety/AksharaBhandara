<script setup>

</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <sidebar-menu v-model:collapsed="collapsed" :menu="menu" :show-child="true" :disable-hover="true"/>
  <!-- :theme="'white-theme'" -->
  <!-- @update:collapsed="onToggleCollapse" -->
  <div v-if="!collapsed" class="sidebar-overlay" @click="collapsed = true"></div>

  <div id="demo" :class="[{ collapsed: collapsed }]" :style="`text-align: center;`">
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentPath: window.location.hash,
      collapsed: false,
      menu: [
        {
          header: 'ನ್ಯಾವಿಗೇಷನ್',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'ಮುಖಪುಟ',
          icon: 'fa fa-home'
        },
        {
          href: '/learn',
          title: 'ವರ್ಣಮಾಲೆ',
          icon: 'fa fa-book',
          child: [
            {
              href: '/learn/AksharaRupagalu',
              title: 'ಅಕ್ಷರ ರೂಪಗಳು',
              icon: 'fa fa-university',
            },
            {
              href: '/learn/Gunitaksharagalu',
              title: 'ಗುಣಿತಾಕ್ಷರಗಳು',
              icon: 'fa fa-list-ul',
            },
            {
              href: '/learn/Samyuktaksharagalu',
              title: 'ಸಂಯುಕ್ತಾಕ್ಷರಗಳು',
              icon: 'fa fa-subscript',
            },
            {
              href: '/learn/Sankegalu',
              title: 'ಸಂಖ್ಯೆಗಳು',
              icon: 'fa fa-sliders',
            },
            {
              href: '/learn/Symbols',
              title: 'ಚಿಹ್ನೆಗಳು',
              icon: 'fa fa-star',
            },
            {
              href: '/learn/Shasanagalu',
              title: 'ಶಾಸನಗಳು',
              icon: 'fa fa-tablet',
            },
          ]
        },
        {
          href: '/about',
          title: 'ನಮ್ಮ ಬಗ್ಗೆ',
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
