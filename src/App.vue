<template>
  <v-app>
    <NavBar v-if="nowViewport === 0" />
    <NavBarMobile v-if="nowViewport === 1" />
    <v-main>
      <v-container>
        <SearchBar />
        <MainInfo v-if="nowViewport === 0" />
        <MainInfoMobile v-if="nowViewport === 1" />
      </v-container>
    </v-main>
    <Footer v-if="nowViewport === 0" />
    <FooterMobile v-if="nowViewport === 1" />
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
      nowViewport:0,
    }
  },
  methods: {
    winWidth() {
      setInterval(() => {
            let nowWidth = window.innerWidth;
            if (nowWidth <= 568) {
                this.nowViewport = 1
            }else{
              this.nowViewport = 0
            }
        }, 100);
    }
  },
  mounted() {
    this.winWidth()
  }
};
</script>