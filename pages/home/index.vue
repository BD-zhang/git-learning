<template>
    <div class="home">
        <NuxtLayout/>
        <div class="home-typer">
            <TyperStrTyper initStr="asfasdfasfasdfasdfasdfasdf asfasdfasfasdfasdfasdfasdf asfasdfasfasdfasdfasdfasdf"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'home'
})
</script>

<style lang="less">
.home {
    background: black;
    width: 100%;
    height: 100%;

    .home-typer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>