<template>
    <div class="mainInfo d-flex flex-column align-center">
        <div class="btnOntop d-flex justify-space-between col-5 pa-0">
            <div class="customBtn">
                <v-icon>mdi-video</v-icon>
                <h4>海況即時影像</h4>
            </div>
            <div class="customBtn">
                <v-icon>mdi-map-search-outline</v-icon>
                <h4>進入圖台</h4>
            </div>
        </div>
        <div class="listToggle d-flex justify-center">
            <div class="btnHandler col-4 pa-0">
                <div
                    v-for="(item,index) in menu"
                    :key="index"
                    class="togleBtn d-flex"
                    :class="{
                        'mb-5' : index !== menu.length -1,
                        'togleBtn--active': item.isActive
                    }"
                    @click.stop="onTogleClick(index)">
                    <v-img
                        v-if="item.type === 'IMAGE'"
                        contain
                        max-width="20"
                        :alt="item.alt"
                        :src="item.src" />
                    <v-icon v-else-if="item.type === 'ICON'">
                        {{ item.icon }}
                    </v-icon>
                    <h4 class="ml-2">
                        {{ item.label }}
                    </h4>
                </div>
            </div>
            <div class="listText col-7">
                <div
                    v-for="(item,index) in nowList"
                    :key="index"
                    class="listItem">
                    <a
                        :href="nowList[index].url"
                        class="itemTitle d-flex align-center mb-2">
                        <v-icon>mdi-link-variant</v-icon>
                        <h5 class="ml-2">{{ nowList[index].name }}</h5>
                    </a>
                    <div class="itemInfo">
                        <p>{{ nowList[index].info }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainInfo',
    data () {
        return {
            menu: [
                {
                    type: 'IMAGE',
                    label: '活動申請',
                    src: 'images/apply.svg',
                    alt: 'apply',
                    icon: '',
                    isActive: true,
                    sub: [
                        {
                            name: '基隆市島礁磯釣活動',
                            url: 'https://www.icellars.tw/keelungreeffishing/auth/login.html',
                            info: '基隆市政府、基隆區漁會'
                        },
                        {
                            name: '遊艇申辦服務平台',
                            url: 'https://ftz.mtnet.gov.tw/YBerth/Portal/sys_a/a01/a0103',
                            info: '泊位資訊查詢、遊艇進出港申請、泊位申請'
                        },
                        {
                            name: '東北角龜山島登島',
                            url: 'https://www.necoast-nsa.gov.tw/coast/',
                            info: '龜山島各項申請查詢作業、船舶資訊、法規資訊、登島表單之線上申請系統'
                        },
                        {
                            name: '台江國家公園水域',
                            url: 'https://www.tjnp.gov.tw/PublicInformationDetail.aspx?Cond=83713bde-e4e4-4f5c-a8ad-ed4cc0d60c34',
                            info: '遊憩活動申請須知及相關附件'
                        }
                    ]
                },
                {
                    type: 'ICON',
                    label: '禁止水域  礙行/射擊通報',
                    src: 'images/apply.svg',
                    alt: 'ban',
                    icon: 'mdi-cancel',
                    isActive: false,
                    sub: [
                        {
                            name: '目前公告禁止或限制水域遊憩活動海域範圍',
                            url: 'https://ocean.taiwan.gov.tw/oacmap/1090210_%E5%85%AC%E5%91%8A%E7%A6%81%E6%AD%A2%E6%88%96%E9%99%90%E5%88%B6%E6%B0%B4%E5%9F%9F%E9%81%8A%E6%86%A9%E6%B4%BB%E5%8B%95%E6%B5%B7%E5%9F%9F%E7%AF%84%E5%9C%8D.pdf',
                            info: ''
                        },
                        {
                            name: '礙航及射擊通報',
                            url: 'https://www.motcmpb.gov.tw/Information/Notice?SiteId=1&NodeId=483',
                            info: ''
                        }
                    ]
                },
                {
                    type: 'IMAGE',
                    label: '海象海情',
                    src: 'images/sea.svg',
                    alt: 'Maritime weather',
                    icon: '',
                    isActive: false,
                    sub: [
                        {
                            name: 'Windy 地圖',
                            url: 'https://ocean.taiwan.gov.tw/?loc=23.202757154789474,121.89550794661046,7',
                            info: ''
                        },
                        {
                            name: '台灣海象災防平台',
                            url: 'https://safesee.cwb.gov.tw/V2/',
                            info: ''
                        }
                    ]
                },
                {
                    type: 'IMAGE',
                    label: '法令資訊',
                    src: 'images/law.svg',
                    alt: 'law',
                    icon: '',
                    isActive: false,
                    sub: [
                        {
                            name: '海洋委員會主管法規',
                            url: 'https://law.oac.gov.tw/',
                            info: ''
                        },
                        {
                            name: '海洋基本法',
                            url: 'https://www.oac.gov.tw/ch/home.jsp?id=147&parentpath=0,3',
                            info: ''
                        },
                        {
                            name: '法制作業範例',
                            url: 'https://www.oac.gov.tw/ch/home.jsp?id=151&parentpath=0,3',
                            info: ''
                        }
                    ]
                }
            ],
            nowList: []
        }
    },
    created () {
        this.nowList = this.menu[0].sub
    },
    methods: {
        onTogleClick (index) {
            this.nowList = this.menu[index].sub
            this.menu = this.menu.map((item, i) => {
                if (i === index) item.isActive = true
                else item.isActive = false
                return item
            })
        }
    }
}
</script>
