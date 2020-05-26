<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt >{{ nav.title }}</dt>
      <dd 
        v-for="(item, index) in nav.list"
        :key="index"
        :class="[{active: kind == item.tab},]"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in dataList[kind]"
          :key="index"
      >
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
              <div class="title" :title="item.title">{{ item.title }}</div>
              <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
              <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{ item.price_info.current_price }}</span>
                </span>
                <span class="old-price">{{ item.price_info.old_price}}</span>
                <span class="sold bottom-right-info">{{ item.address}}</span>
              </div>
              <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">抢光了</span>
                </span>
                <span class="sold bottom-right-info"></span>
              </div>
              <div class="price-info" v-else>
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{ item.price_info.avg_price }}</span>
                  <span class="units">/人均</span>
                </span>
              </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    props: ['nav', 'dataList'],
    data () {
        return {
            kind: 'all',
            data: ''
        }
    },
    methods: {
        over (e) {
            // console.log(e.target)
            this.kind = e.target.dataset.type ? e.target.dataset.type : 'all';
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>