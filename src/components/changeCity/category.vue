<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      :id="'city-' + index"
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span
          v-for="prop in item"
          :key="prop.id"
          @click="changeCity(prop)"
        >
          {{ prop.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: null,
      cityGroup: {}
    };
  },
  created() {
    api.getCityList().then(res => {
      let obj = {};
      res.data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      return this.cityGroup = obj;
    });
  },
  methods: {
    changeCity (item) {
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/changecity/categroy.scss";
</style>