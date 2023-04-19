<template>
    <div class="menu">
        <NuxtLink v-for="(item, index) in menuList" :key="index" :class="['menu_item', {'menu_item_active': currentTab.path === item.path}]" :to="item.path" @click="gotoUrl(item)">
            {{ item.name }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { menuListArrType } from './types'

const props = defineProps({
    menuList: {
        type: Array as PropType<menuListArrType[]>,
        default: []
    }
})
const { menuList } = toRefs(props)
const currentTab = ref(menuList.value[0])

function gotoUrl(item: menuListArrType): void {
    if (!item.name) return
    currentTab.value = item

}
</script>

<style lang="less">
.menu {
    display: flex;
    text-decoration: none;
    height: 60px;
    width: 100vw;
    padding: 0;
    background: #545c64;
    justify-content: flex-start;
    align-items: center;

    .menu_item {
        min-width: 150px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        transition: .2s linear;
        padding: 5px;
        box-sizing: border-box;
        cursor: pointer;
        text-decoration: none;
        color: white;

        &:hover {
            background: rgb(67 74 80);
        }

        &_active {
            color: #ffd04b;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background: #ffd04b;
                bottom: 0;
            }
        }
    }
}

</style>