<!--
 * @Author: your name
 * @Date: 2020-06-10 09:27:10
 * @LastEditTime: 2020-06-10 15:18:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/Aside/index.vue
-->
<template>
  <el-menu :collapse="!show" :style="{ width: show ? '200px' : '60px' }" default-active="0" class="el-menu" background-color="#002966" text-color="#A6B4C9" active-text-color="#FFFFFF" router="router" @select="handleSelect">
    <el-menu-item index="/" @click="menuclick('/','home')">
      <i class="el-icon-location"></i>
      <span slot="title">{{ $t("home") }}</span>
    </el-menu-item>
    <el-menu-item index="/mainproducts"  @click="menuclick('/mainproducts','mainproducts')">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ $t("mainproducts") }}</span>
    </el-menu-item>
    <el-menu-item index="/roadshow">
      <i class="el-icon-document"></i>
      <span slot="title">{{ $t("roadshow") }}</span>
    </el-menu-item>
    <el-menu-item index="/changchengselect">
      <i class="el-icon-setting"></i>
      <span slot="title">{{ $t("changchengselect") }}</span>
    </el-menu-item>
    <el-submenu index="/news">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>{{ $t("news") }}</span>
      </template>
      <el-menu-item index="/news/initialfunds">{{ $t("initialfunds") }}</el-menu-item>
      <el-menu-item index="/news/campfunds">{{ $t("campfunds") }}</el-menu-item>
      <el-menu-item index="/news/myfunds">{{ $t("myfunds") }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      router: true,
    }
  },
  mounted() {
    console.log(this, this.$t)
  },
  beforeUpdate() {},
  methods: {
    handleSelect() {
      this.$emit("toggleMenu", false)
    },
    menuclick(url,name){
       this.$emit("menuclick", {url,name})
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100% ;
  border: none;
}
.el-menu-item.is-active{
  color: #409EFF !important;
}
</style>
