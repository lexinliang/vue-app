<!--
 * @Author: your name
 * @Date: 2020-06-09 16:28:09
 * @LastEditTime: 2020-06-10 15:52:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/Layout/index.vue
-->
<template>
  <div id="layout">
    <el-container>
      <el-header style="height:70px">
        <div class="Adimin" :style="{ width: show ? '200px' : '60px' }" v-if="show">
          Adimin
        </div>
        <div class="Adimin" :style="{ width: show ? '200px' : '60px' }" v-else>
          <i class="el-icon-user-solid"></i>
        </div>
        <div>
          <i class="el-icon-s-fold" v-if="show" @click="hanleToggShow(false)"></i>
          <i class="el-icon-s-unfold" v-else @click="hanleToggShow(true)"></i>
        </div>
        <div style="flex:1"></div>
        <el-tooltip style="margin-right:15px" class="item" effect="dark" content="全屏" placement="top">
          <i class="el-icon-full-screen" @click="screenfull"></i>
        </el-tooltip>
        <div class="dropdown">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link"> 语言<i class="el-icon-caret-bottom el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix" @click.native="toggleLang('zh')" :disabled="$i18n.locale == 'zh'">
                中文
              </el-dropdown-item>
              <el-dropdown-item class="clearfix" @click.native="toggleLang('en')" :disabled="$i18n.locale == 'en'">
                英文
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-popover placement="top-start" trigger="hover">
            <div>
              <p>消息中心</p>
              <p>退出登录</p>
            </div>
            <el-avatar class="avatar" slot="reference" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </el-popover>
        </div>
      </el-header>
      <el-container>
        <Aside :show="show" />
        <el-container>
          <el-main><slot></slot></el-main>
          <el-footer style="height:70px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import screenfull from "screenfull"
export default {
  data() {
    return {
      show: true,
      //默认不全屏
      isFullscreen: false,
    }
  },
  components: {
    Aside: () => import("../Aside/index.vue"),
  },
  methods: {
    hanleToggShow(show) {
      this.show = show
    },
    /**
     * 全屏事件
     */
    screenfull() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "Your browser does not work",
          type: "warning",
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = true
    },
    toggleLang(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>
<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  .el-header,
  .el-footer {
    background-color: #fff;
    color: #333;
    line-height: 70px;
    box-shadow: 0 0 6px #333333;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .Adimin {
    height: 70px;
    line-height: 70px;
    margin-left: -20px;
    background: #144895;
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    margin: 15px 25px 25px 25px;
    background: #f4f6fa;
  }

  .el-icon-s-fold,
  .el-icon-s-unfold {
    font-size: 30px;
    color: #144895;
    margin-left: 25px;
  }
  .avatar {
    margin-left: 15px;
    margin-top: 15px;
    vertical-align: top;
  }
}
</style>
