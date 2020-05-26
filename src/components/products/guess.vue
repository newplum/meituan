<template>
  <div class="guess">
    <dl>
      <dt class="you-like">猜你喜欢</dt>
      <dd v-for="(item, index) in guessList" :key="index">
        <a href="#" class="link">
            <img :src="item.image" alt="">
            <p class="title">
                <span>{{ item.title }}</span>
            </p>
            <div class="score-line">
                <div class="star">
                    <el-rate
                        v-model="item.score"
                        disabled
                        text-color="#ff9900"
                    ></el-rate>
                </div>
                <div class="comment">
                    <span>{{ item.commentNum }}个评价</span>
                </div>
            </div>    
            <p class="address">
                <span>{{ item.address }}</span>
            </p>
            <p class="lowest">
              <span class="unit">￥</span>
              <span class="price">{{item.lowest_price}}</span>
              <span class="text">起</span>
            </p>
        </a>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      guessList: []
    };
  },
  created () {
    api.getGuessList().then(res => {
      this.guessList = res.data;
    })
  }
};
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  .guess {
      font-size: 16px;
      color: #333333;
      line-height: 22px;
      font-weight: 500;
      margin: 15px;
      margin-top: 10px;
      background-color: #fff;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      padding: 16px 20px 0;
      width: 230px;
      box-sizing: border-box;
  }
  .guess .you-like {
        margin-bottom: 12px;
    }
  .guess .link {
      margin-bottom: 20px;
      display: inline-block;
      width: 190px;
  }
  .guess .link img {
      border-radius: 4px;
  }
  .guess .link .title {
      font-size: 14px;
      color: #222222;
      line-height: 20px;
      width: 100%;
      margin: 0;
      font-weight: 500;
  }
  .guess .link .score-line div{
      display: inline-block;
  }
  .guess .link .score-line .comment {
      font-size: 12px;
      color: #999;
      height: 24px;
      line-height: 24px;
  }
  .guess .link .address{
    font-size: 12px;
    color: #999999;
    width: 100%;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 4px 0;
  }
  .guess .link .lowest{
      color: #FF6600;
  }
  .guess .link .lowest .unit {
    font-size: 14px;
    font-weight: 700;
  }
  .guess .link .lowest .price {
    font-size: 22px;
  }
  .guess .link .lowest .text {
    font-size: 12px;
    font-weight: 700;
  }

</style>