<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-12 16:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/App.vue
-->
<template>
  <div id="app">
    <Layout v-if="!$route.meta.login">
      <router-view />
    </Layout>
    <router-view v-else />
  </div>
</template>

<script>
import Layout from "./components/Layout";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
