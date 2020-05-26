<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, index) in classicList" :key="index">
        <my-select :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item, index) in areaList" :key="index">
        <my-select :name="item.title" :list="item.sub_list" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MySelect from "./select";
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          sub_list: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "饮品店",
              id: "drink"
            },
            {
              name: "面包甜点",
              id: "cate"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotel",
          sub_list: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "high"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          sub_list: [
            {
              name: "解放碑",
              id: "120000"
            },
            {
              name: "观音桥",
              id: "12222"
            }
          ]
        },
        {
          title: "渝中区",
          sub_list: [
            {
              name: "解放碑",
              id: "120001"
            },
            {
              name: "朝天门",
              id: "122221"
            },
            {
              name: "长滨路",
              id: "12"
            },
            {
              name: "洪崖洞",
              id: "122222"
            }
          ]
        },
        {
          title: "南岸区",
          sub_list: [
            {
              name: "黄桷垭/南山",
              id: "1201"
            },
            {
              name: "南坪",
              id: "12229"
            },
            {
              name: "南滨路",
              id: "1224"
            },
            {
              name: "弹子石",
              id: "12226"
            }
          ]
        }
      ]
    };
  },
  components: {
    MySelect
  }
};
</script>