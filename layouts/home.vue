<template>
    <div>
        <div style="color: white;">this is home layout111</div>
        <MenuList :menuList="menuList"/>
    </div>
</template>

<script lang="ts" setup>
import { menuListArrType } from '../components/menu/types'
import MenuList from '../components/menu/menuList.vue'
const menuList: Array<menuListArrType> = [
    {
        name: '首页',
        url: ''
    },
    {
        name: '测试',
        url: ''
    }
]
</script>

<style>
</style>