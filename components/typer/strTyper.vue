<template>
  <div class="typer">
    <span v-for="(letter, index) in strArr" :key="index" class="typer-letter">{{ letter }}</span>
    <span class="typer-cursor"></span>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, onMounted } from 'vue'
const props = defineProps({
  // 传入的字符串
  initStr: {
    type: String,
    default: ''
  }
})
const { initStr } = toRefs(props)
const defaultStrArr = ref<string[]>(initStr.value.split(''))
const strArr = ref<string[]>([])

const write = (index: number) => {
  return () => {
    strArr.value.push(defaultStrArr.value[index])
  }
}

const begin = () => {
  for (let i = 0 ;i < defaultStrArr.value.length; i++) {
    setTimeout(write(i), i * 100)
  }
}

onMounted (() => {
  begin()
})
</script>

<style lang="less">
.typer {
  max-width: 500px;
  // position: relative;

  .typer-letter {
    font-size: 18px;
  }

  .typer-cursor {
    display: inline-block;
    margin-left: 5px;
    width: 2px;
    height: 14px;
    background: white;
    animation: 0.5s flash infinite; 
  }
}

@keyframes flash {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>