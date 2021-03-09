<template>
  <v-app>
    <NavBar v-if="!isMobile" />
    <NavBarMobile v-if="isMobile" />
    <v-main>
      <v-container>
        <SearchBar />
        <MainInfo v-if="!isMobile" />
        <MainInfoMobile v-if="isMobile" />
      </v-container>
    </v-main>
    <Footer v-if="!isMobile" />
    <FooterMobile v-if="isMobile" />
  </v-app>
</template>

<script>
import '@/assets/sass/main.scss'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import SearchBar from '@/components/SearchBar.vue'
import MainInfo from '@/components/MainInfo.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import FooterMobile from '@/components/FooterMobile.vue'
import MainInfoMobile from '@/components/MainInfoMobile.vue'
export default {
  name: 'App',
  components: {
    NavBar,Footer,SearchBar,MainInfo,NavBarMobile,FooterMobile,MainInfoMobile
  },
  data() {
    return {
      isMobile:false
    }
  },
  methods: {
    winWidth() {
      setInterval(() => {
            let nowWidth = window.innerWidth;
            if (nowWidth <= 568) {
                this.isMobile = true
            }else{
              this.isMobile = false
            }
        }, 100);
    }
  },
  mounted() {
    this.winWidth()
  }
};
</script>