<!--
 * @Author: your name
 * @Date: 2020-06-08 09:25:41
 * @LastEditTime: 2020-06-12 15:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-vueapp/src/components/HelloWorld.vue
-->
<template>
  <div>
    <TopSearchBar addButton="新增图标" />
  </div>
</template>

<script>
import { GET_HOME_FUNDS } from "../../store/modules/home";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    TopSearchBar: () => import("@/components/TopSearchBar/index.vue")
  },
  mounted() {
    this.$store.dispatch(GET_HOME_FUNDS);
  },
  computed: {
    ...mapState({
      filteredTableData: "home/funds"
    })
  }
};
</script>

<style scoped></style>
