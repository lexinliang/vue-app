<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-10 16:02:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/HelloWorld.vue
-->
<template>
  <div>
    {{ n }}
    <el-button @click="add">add </el-button>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "home",
  props: {
    msg: String,
  },
  computed: {
    ...mapState({
      n: (state) => state.home.n,
    }),
  },
  methods: {
    add() {
      console.log(1)
      this.$store.commit("add", n + 1)
    },
  },
}
</script>

<style scoped></style>
