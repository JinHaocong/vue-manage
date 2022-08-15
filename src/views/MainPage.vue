<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 09:47:17
 * @LastEditTime: 2022-08-15 23:04:03
-->
<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <common-tag></common-tag>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag.vue";
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  name: "MainPage",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
  // text-align: center;
}
.el-aside {
  height: 100%;
}
</style>