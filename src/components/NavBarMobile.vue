<template>
    <div class="navBar">
        <div class="mainNav justify-center">
            <div class="navLogo">
                <img :src="logoUrl" alt="logo">
            </div>
            <h2 class="navTitle">海域遊憩活動一站式資訊平台</h2>
        </div>
        <v-expansion-panels v-if="warningNum > 1" 
                            v-show="alert"
                            class="navAlert">
                <v-expansion-panels class="warningInfo">
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <v-icon>mdi-alert</v-icon>
                            <h4>警報注意！</h4>
                            <template v-slot:actions>
                                <v-badge color="orange darken-3"
                                    offset-x="12"
                                    offset-y="8"
                                    light
                                    :content="warningNum">
                                    <v-icon color="#fff">
                                    $expand
                                    </v-icon>
                                </v-badge>
                            </template>
                        </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div v-for="(item,index) in alertInfo" class="d-flex align-center mt-5" :key="index">
                            <v-icon>mdi-alert</v-icon>
                            <h4>{{ item }}</h4>
                            <v-btn class="ml-auto"
                                color="orange darken-3"
                                elevation="2"
                                dark
                                small>
                                查看內容
                            </v-btn>
                        </div>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
        </v-expansion-panels>
        <v-btn v-if="warningNum === 1"
               v-show="alert" 
               block
               dark 
               color="rgba(192,34,86,0.8)"
               class="navAlert" >
            <div class="warningInfo">
                <div class="warningBtn d-flex">
                    <v-icon>mdi-alert</v-icon>
                    <h4>颱風警報！</h4>
                </div>
            </div>
        </v-btn>
    </div>
</template>
<script>
export default {
    name: 'NavBarMobile',
    data() {
        return {
            alert: true,
            warningNum:3,
            logoUrl:"images/logo-small.png",
            alertInfo: ['颱風警報！','地震警報！','海嘯警報！'],
        }
    }
}
</script>