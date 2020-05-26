<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" :dataList="iStyleList" />
        <container :nav="favorable" :dataList="favorableList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/menu";
import MyLife from "@/components/index/life";
import Container from "@/components/index/container";
import api from '@/api/index.js';
export default {
  data() {
    return {
      iStyle: {},
      favorable: {},
      iStyleList: {},
      favorableList: {}
    };
  },
  created () {
      api.getFavorable().then(res => {
        this.favorable = res.data;
      })
      api.getIStyle().then(res => {
        this.iStyle = res.data;
      }),
      api.getStyleList().then(res => {
        this.iStyleList = res.data;
      }),
      api.getFavorableList().then(res => {
        // console.log(res)
        this.favorableList = res.data;
      })
    },
  components: {
    MyMenu,
    MyLife,
    Container
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>