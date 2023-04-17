<template>
    <div class="home">
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
.home {
    margin-top: 50px;
}
</style>