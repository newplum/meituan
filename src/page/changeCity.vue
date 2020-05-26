<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市：" :list="hotList" />
        </el-row>
        <el-row>
            <hot title="最近访问：" :list="rencentList" />
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>

<script>
import Province from '@/components/changeCity/province'
import Hot from '@/components/changeCity/hot'
import Category from '@/components/changeCity/category'
import api from '@/api/index.js'
export default {
    data () {
        return {
            hotList:[],
            rencentList: ['杭州', '重庆', '上海']
        }
    },
    created () {
        api.getHotCityList().then(res => {
            this.hotList = res.data;
        })
    },
    components: {
        Province,
        Hot,
        Category
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/hot.scss';
</style>