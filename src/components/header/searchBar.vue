<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <router-link class="img" tag="img" to="/" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"></router-link>
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="input" placeholder="搜索商家或地点" @focus="focus" @blur="blur" @input="getHotSearchList"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList.slice(0, 3)" :key="index">
                            <router-link :to="{name: 'goods', params:{name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item,index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params:{name: item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link tag="a" :to="{name: 'goods', params:{name: item}}" v-for="(item, index) in hotPlaceList" :key="index">{{ item }}</router-link>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from '@/axios.js';
import api from '@/api/index.js';
export default {
    data () {
        return {
            input: '',
            isFocus: false,
            hotPlaceList: [],
            searchList: []
        }
    },
    created () {
        api.getHotPlace().then(res => {
            // console.log(res)
           this.hotPlaceList = res.data;
        })
    },
    methods: {
        focus () {
            this.isFocus = true;
        },
        blur () {
            let self = this;
            setTimeout(() => {
                self.isFocus = false;
            }, 200)
        },
        getHotSearchList () {
            let val = this.input;
            api.getHotSearch().then(res => {
                // console.log(res)
                this.searchList = res.data.filter((item, index) => {
                    return item.indexOf(val) > -1;
                });
            })
        }
    },
    computed: {
        isHotPlace () {
            return this.isFocus && !this.input
        },
        isSearchList () {
            return this.isFocus && this.input;
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/search.scss';
</style>