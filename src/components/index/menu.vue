<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd 
                v-for="(item, index) in menuList" 
                :key="index"
                @mouseenter="menuEnter(item)"
            >
                <i :class="item.icon"></i>
                <span v-for="(v, i) in item.title" :key="i + v">{{ v + (item.title.length - 1 > i ? " / " : "")}}</span>
                <span class="arrow"></span>
            </dd>
        </dl>
        <div 
            v-if="curDetail"
            class="detail"
            @mouseenter="detialEnter"
            @mouseleave="detialLeave"
        >
            <template v-for="(item, index) in curDetail.children">
                <h4 :key="index">{{ item.title}}</h4>
                <span v-for="(props, i) in item.children" :key="props+'_'+i">{{ props }}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            curDetail: null,
            menuList: []
        }
    },
    created () {
        api.getMenuList().then(res => {
            this.menuList = res.data;
        })
    },
    methods: {
        menuEnter (item) {
            // console.log(item)
            this.curDetail = item;
        },
        menuLeave () {
            let self = this;
            this.timer = setTimeout(() => {
                self.curDetail = null;
            }, 100)
        },
        detialEnter () {
            clearTimeout(this.timer);
        },
        detialLeave () {
            this.curDetail = null;
        }
    }
}
</script>

