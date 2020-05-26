<template>
    <div class="choose-wrap" @click="showWrapper" v-document_click="documentClick">
        <div :class="['choose', {'disabled': disabled}]">
            <span>{{ value }}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content': true, active: showWrapperActive}">
                <h2>{{ title }}</h2>
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData, i) in renderList" :key="i">
                        <span 
                            :class="{'mt-item': true, 'active': item.name == value}"
                            v-for="(item, index) in listData"
                            :key="index"
                            @click="changeValue(item, $event)"
                        >{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: [
        'list',
        'title',
        'value',
        'showWrapperActive',
        'disabled',
        'className'

    ],
    computed: {
        renderList () {
            var col = Math.ceil(this.list.length / 12);
            var resultList = [];
            for (var i = 0; i < col; i ++) {
                var data = this.list.slice(i * 12, i * 12 + 12);
                resultList.push(data);
            }
            return resultList;
        }
    },
    watch: {
        value (newVal) {
            this.$emit('change_active', false);
        }
    },
    methods: {
        showWrapper (e) {
            e.stopPropagation();
            if (!this.disabled) {
                this.$emit('change_active', true);
            }
        },
        documentClick () {
            this.$emit('change_active', false);
        },
        changeValue (item, e) {
            // console.log(item)
            e.stopPropagation();
            this.$emit('change', item);
            
        }
    },
    directives: {
        document_click (el, binding, vnode) {
            document.addEventListener('click', binding.value, false)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/changecity/select.scss';
</style>