<!--
 * @Author: your name
 * @Date: 2020-06-12 14:58:54
 * @LastEditTime: 2020-06-12 15:41:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/TopSearchBar/index.vue
--> 
<template>
  <div>
    <div class="add">
      <el-button
        type="primary"
        size="small"
        class="addbtn"
        @click="$emit('makeDialogFormVisible', true)"
      >{{ addButton }}</el-button>
    </div>
    <div class="search">
      <el-select size="small" class="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <div class="searchInput">
        <el-input placeholder="关键词搜索" v-model="input" size="small"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topSearchBar",
  props: ["addButton"],
  data() {
    return {
      options: [
        {
          value: "all",
          label: "全部"
        },
        {
          value: "SHELVE",
          label: "上架中"
        },
        {
          value: "WAIT_SHELVE",
          label: "待上架"
        },
        {
          value: "UNSHELVE",
          label: "已下架"
        }
      ],
      input: "",
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.add {
  margin-bottom: 10px;
}
.search {
  display: flex;
  align-items: center;
  height: 44px;

  margin-bottom: 16px;
  .select {
    margin-right: 40px;
  }
  .searchInput {
    padding-right: 20px;
  }
  .searchbtn {
    height: 30px;
    display: block;
  }
}
</style>
