<template>
    <div class="layout-home">
        <MenuList :menuList="menuList"/>
    </div>
</template>

<script lang="ts" setup>
import { menuListArrType } from '../components/menu/types'
const menuList: Array<menuListArrType> = [
    {
        name: '首页',
        path: '/home'
    },
    {
        name: '开始',
        path: '/learning'
    }]
</script>

<style lang="less">
.layout-home {
    margin-top: 50px;
}
</style>