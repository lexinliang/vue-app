<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-11 17:17:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/HelloWorld.vue
-->
<template>
  <div>
    <el-input :value="input" @input="inputOn" placeholder="请输入内容"></el-input>
    {{ n }}
    <el-button @click="add(n + 1)">add</el-button>
    <el-button @click="addTolist(input)">addTolist</el-button>
    <ul>
      <li v-for="(item, index) in todolist" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { fetchServerData } from "../../utils/request"
export default {
  name: "home",
  props: {
    msg: String,
  },
  data() {
    return {
      input: "",
    }
  },
  computed: {
    ...mapState({
      n: (state) => state.home.n,
      todolist: (state) => state.home.todolist,
    }),
  },
  methods: {
    inputOn(e) {
      this.input = e
    },
    // ...mapMutations({
    //   //add: "home/add",
    //   addTolist: "home/addTolist",
    // }),
    // add() {
    //   // this.$store.commit("home/add", this.n + 1)
    //   this.$store.dispatch("home/actionadd", this.n + 1)
    // },
    homelist() {
      // this.$store.dispatch("home/gethomelist", {
      //   data: {
      //     code: "12321",
      //   },
      // })
      fetchServerData({
        url: "/fund/fund-biz-operation/op/entry",
        method: "get",
      })
    },
    ...mapActions({
      add: "home/actionadd",
    }),
    addTolist(input) {
      console.log(input)
      this.$store.commit("home/addTolist", this.input)
    },
  },
  mounted() {
    this.homelist()
  },
}
</script>

<style scoped></style>
