<template>
    <div>
        <ul>
            <li v-for="(item, index) in menuList" :key="index">
                <span @click="gotoUrl">{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
// import { menuListArrType } from './types'

// defineProps({
//     menuList: {
//         type: Array as PropType<menuListArrType[]>,
//         default: []
//     }
// })
const menuList: Array<any> = [
    {
        name: '首页',
        url: ''
    },
    {
        name: '测试',
        url: ''
    }
]
function gotoUrl(item: any): void {
    if (!item.name) return
    // ...跳转逻辑
}
</script>

<style>
</style>