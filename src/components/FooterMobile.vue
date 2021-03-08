<template>
    <div class="footer">
        <div class="mobileFooter">
            <h6 class="footerText">©2021 海洋委員會</h6>
            <h6 class="footerText">806614 高雄市前鎮區成功二路25號4樓</h6>
            <h6 class="footerText">(07)338-1810</h6>
            <div class="languageChoose d-flex align-center">
                <v-btn color="transparent"
                        dark
                        small
                        depressed>
                <v-icon>mdi-earth</v-icon>
                <p class="currentLag ma-0 pl-1 pr-1">中文</p>                    
                <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </div>
            <div class="webRules">
                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs"
                                v-on="on"
                                color="transparent"
                                dark
                                small
                                depressed>
                            <v-icon>mdi-note-text-outline</v-icon>
                            <p class="ma-0 pl-1">網站規範</p>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="headline darken-2">
                        網站規範
                        </v-card-title>
                        <v-card-text v-html="rules"></v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-3"
                                text
                                outlined
                                @click="dialog = false">
                            我同意
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: true,
        }
    },
    computed:{
         rules() {
            let rule = '本系統係為便利一般民眾單站視覺化查詢海域遊憩活動相關規定，所呈現之法規、公告資料為各主管機關、'
            rule += '各縣市政府所提供資料彙整而得，因各主管機關、各縣市資料建置時間之差異及建檔品質，'
            rule += '與實際公告或有不同，實際內容仍依各主管機關、各縣市政府公告為準。'
            rule += '<br><br>'
            rule += '使用者不得將本系統所提供之資料內容或查詢結果作為任何形式之依據或主張，本會對於所有資料內容之正確性及完整性，皆不負擔保之責。使用者如因使用本系統之資料而受損害或損失，或因此導致使用者或第三人遭受損害或損失而遭求償者，本系統管理機關及各資料提供機關不負任何賠償或補償之責。'
            rule += '<br><br>'
            rule += '若屬全面性禁止事項或禁止採捕海域動、植物，例如海洋保育署公告之保育物種、漁業署公告之禁用漁法或禁止採捕魚種，即使沒在個別海域之法令中敘述，仍屬應遵守之規定。'
            rule += '<br><br>'
            rule += '使用者進入本系統，視同同意上開使用規範。本系統所有資料僅限正常查詢、瀏覽使用，未經本會同意之大量抄錄或複製資料行為，將依違反著作權法及妨礙電腦使用罪辦理'
            rule += '<br><br><br>'
            rule += '本系統版權及管理機關為海洋委員會。'
            return rule
        }
    }
}
</script>