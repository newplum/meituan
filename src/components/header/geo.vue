<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{ $store.state.position.name }}
            <router-link class="changeCity" :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
                <a
                  href="#"
                  v-for="(item, index) in nearCity"
                  :key="index"
                >
                    {{ item.name }}
                </a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link class="login" :to="{name: 'login'}">
                立即登陆{{ $store.state.userName}}
            </router-link>
            <router-link class="register" :to="{name: 'register'}">
                注册
            </router-link>
        </div>
        <div class="m-user logined" v-else >
            {{ $store.state.userName }}
            <span @click="logout">退出</span>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data () {
        return {
            nearCity: []
        }
    },
    created () {
        api.getCurPosition().then(res => {
            this.$store.dispatch('setPosition', res.data);
            this.nearCity = res.data.nearCity;
        })

    },
    watch: {
        "$store.state.position" () {
            this.nearCity = this.$store.state.position.nearCity;
        }
    },
    methods: {
        logout () {
            this.$store.state.userName = '';
            this.$router.push({name: 'index'})
        }
    }
}
</script>