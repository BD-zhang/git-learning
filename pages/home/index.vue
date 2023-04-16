<template>
    <div class="home">
        <NuxtLayout/>
        <div style="color: yellow">welcome to git-learning</div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'home'
})
</script>

<style>
.home {
    background: black;
}
</style>