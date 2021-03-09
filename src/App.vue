<template>
    <v-app>
        <NavBarMobile v-if="isMobile" />
        <NavBar v-else />
        <v-main>
            <v-container>
              <SearchBar />
              <MainInfoMobile v-if="isMobile" />
              <MainInfo v-else />
            </v-container>
        </v-main>
        <FooterMobile v-if="isMobile" />
        <Footer v-else />
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
            isMobile:false,
            interval: null
        }
    },
    methods: {
        winWidth() {
            this.interval = setInterval(() => {
                let nowWidth = window.innerWidth;
                if (nowWidth <= 568) this.isMobile = true
                else this.isMobile = false
            }, 100);
        }
    },
    mounted() {
        this.winWidth()
    },
    beforeDestroy() {
        // 網頁關閉就將interval效果clear
        clearInterval(this.interval)
    },
};
</script>