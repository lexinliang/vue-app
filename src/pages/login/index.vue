<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-12 18:21:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/HelloWorld.vue
-->
<template>
  <div class="box">
    <el-form class="demo-ruleForm" label-width="100px">
      <el-form-item label="帐号">
        <el-input v-model.number="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { LOGIN_ACTION } from "../../store/modules/login"
import { mapState } from "vuex"

export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  computed: {
    ...mapState({
      session: (state) => state.login.session,
    }),
  },
  methods: {
    submitForm() {
      let params = {
        appPlatform: "Web",
        data: {
          code: "",
          name: this.username,
          password: this.password,
          smscode: "",
          system: 2,
        },
        deviceId: "",
      }
      this.$store.dispatch(LOGIN_ACTION, params)

      // if (this.session.sessionid) {
      //   this.$router.push("/")
      // }
    },
  },
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-ruleForm {
  width: 400px;
}
</style>
