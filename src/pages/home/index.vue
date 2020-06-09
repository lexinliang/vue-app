<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-09 16:25:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/HelloWorld.vue
-->
<template>
  <div>
    <el-button type="success">默认按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String,
  },
}
</script>

<style scoped></style>
