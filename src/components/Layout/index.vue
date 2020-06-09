<!--
 * @Author: your name
 * @Date: 2020-06-09 16:28:09
 * @LastEditTime: 2020-06-09 16:36:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/Layout/index.vue
-->
<template>
  <div id="layout">
    <el-row class="header">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 70px;
    background: #fff;
    box-shadow: 0 0 6px #333333;
  }
}
</style>