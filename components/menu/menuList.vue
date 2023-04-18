<template>
    <div>
        <ul class="menu_ul">
            <li v-for="(item, index) in menuList" :key="index" class="menu_li">
                <span @click="gotoUrl">{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { menuListArrType } from './types'

let props = defineProps({
    menuList: {
        type: Array as PropType<menuListArrType[]>,
        default: []
    }
})
const menuList = ref(props.menuList)
console.log('!!!', props.menuList)
function gotoUrl(item: any): void {
    if (!item.name) return
    // ...跳转逻辑
}
</script>

<style lang="less">
.menu_ul {
    display: flex;
    text-decoration: none;
    height: 50px;
    background: gray;
    justify-content: space-around;
    align-items: center;

    .menu_li {
        list-style: none;  
    }
}

</style>