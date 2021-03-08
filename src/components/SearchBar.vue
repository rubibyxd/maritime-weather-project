<template>
    <div class="searchBar">
        <div class="searchTitle">
            <h3>遊憩查詢</h3>
        </div>
        <div class="selectOption col-lg-5 col-xs-10 col-sm-5 pa-0">
            <v-combobox :items="selectItems"
                        label="選擇遊憩活動"
                        dense
                        dark
                        background-color="#0F1B33"
                        outlined
                        prepend-inner-icon="mdi-magnify"
                        type="text"
                        hide-details="true">
            </v-combobox>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectItems: ['獨木舟', '風帆', '船釣', '遊艇','快艇','帆船','水上摩托車','水面飛行傘','香蕉船','水面飛行艇拖曳浮胎'],
        }
    },
}
</script>