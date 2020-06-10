<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-10 09:37:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/App.vue
-->
<template>
  <div id="app">
    <Layout><router-view /></Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout"
export default {
  name: "App",
  components: {
    Layout,
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
