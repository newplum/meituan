<template>
    <div>
        <span class="name">按省份选择：</span>
        <my-select 
            :showWrapperActive="provinceActive" 
            :list="placeInfo" 
            :value="province" 
            title="省份" 
            @change_active="changeProvinceActive"
            @change="changeProvince"
            className="province"
        />     
        <my-select 
            :showWrapperActive="cityActive" 
            :list="cityList" 
            :value="city" 
            title="城市" 
            @change_active="changeCityActive"
            @change="changeCity"
            :disabled="cityState"
            className="city"
        />     
        <span>直接搜索:</span>
        <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市中文或拼音"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
                v-for="item in searchList"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import MySelect from './select';
import api from '@/api/index.js'
export default {
    data () {
        return {
            province: '省份',
            cityList: [],
            city: '城市',
            provinceActive: false,
            cityActive: false,
            searchWord: '',
            loading: false,
            cityState: true,
            placeInfo: [],
            searchList: ['杭州', '重庆', '上海', '长沙', '北京', '天津']
        }
    },
    created () {
        api.getPlaceInfo().then(res => {
            this.placeInfo = res.data.map(item => {
                item.name = item.p;
                return item;
            });
        })
    },
    components: {
        MySelect
    },
    methods: {
        changeProvinceActive (flag) {
            // console.log(flag)
            this.provinceActive = flag;
            if (flag) {
                this.cityActive = false;
            }
        },
        changeCityActive (flag) {
            this.cityActive = flag;
            if (flag) {
                this.provinceActive = false;
            }
        },
        changeProvince (item) {
            this.cityState = false;
            this.province = item.name;
            let obj = [];
            item.c.forEach((item) => {
                let temp = {};
                temp.name = item;
                obj.push(temp);
            })
            this.cityList = obj;
        },
        changeCity (item) {
            this.city = item.name;
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'defaultPage'})
        },
        remoteMethod (val) {
            // 请求后端接口
        }   
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss'
</style>