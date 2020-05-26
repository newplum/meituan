<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <img style="width:230px;height:230px;margin-left:15px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567497189&di=65a0bef4b1f997d3194794e9204c728e&imgtype=jpg&er=1&src=http%3A%2F%2Fi3.sinaimg.cn%2Fgm%2F2014%2F0808%2FU10753P115DT20140808151448.jpeg" alt="百度地图">
                <guess />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumbs from '@/components/products/crumbs'
import Categroy from '@/components/products/categroy'
import List from '@/components/products/list'
import Guess from '@/components/products/guess'
export default {
    components: {
        Crumbs,
        Categroy,
        List,
        Guess
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss'
</style>
