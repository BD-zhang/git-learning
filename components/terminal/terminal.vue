<template>
  <div>this is terminal</div>
  <div class="terminal">
    <div class="terminal_header">
      <div class="header_right">
        <span class="right_box">
          <i class="iconfont icon-24gl-minimization"></i>
        </span>
        <span class="right_box">
          <i class="iconfont icon-zuidahua"></i>
        </span>
        <span class="right_box">
          <i class="iconfont icon-guanbi"></i>
        </span>
      </div>
    </div>
    <div class="terminal_body"></div>
    <div class="terminal_input">
      <div>
        <input type="text" class="input">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.terminal {
  height: calc(100% - 50px);
  box-sizing: border-box;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #222222;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 0 0 5px 5px;

  .terminal_header {
    position: relative;
    color: black;
    widows: 100%;
    height: 25px;
    background: white;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
    .header_right {
      position: absolute;
      display: flex;
      height: 100%;
      width: 100px;
      justify-content: space-around;
      align-items: center;
      top: 0;
      right: 10px;
      transition: all ease .2s;

      .right_box {
        height: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        transition: all ease .2s;

        &:nth-child(1):hover {
          background: rgb(228, 228, 228);
        }

        &:nth-child(2):hover {
          background: rgb(228, 228, 228);
        }

        &:nth-child(3):hover {
          background: rgb(232, 19, 12);
          color: white;
        }
      }
    }
  }

  .terminal_input {

    .input {
      background: gray;
      border: none;
      outline: none;
      padding: 5px;
      font-size: 20px;
      box-sizing: border-box;
      border-radius: 0 0 5px 5px;
      width: 100%;
      height: 50px;
      caret-color: greenyellow;
    }
  }
}
</style>