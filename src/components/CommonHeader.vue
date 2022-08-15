<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 13:58:41
 * @LastEditTime: 2022-08-15 22:50:20
-->
<template>
  <header>
    <div class="left-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleClick"
      ></el-button>
      <!-- <h3 style="color: #fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in this.$store.state.tab.tabsList"
          :key="item.path"
          :to="{ path: item.path }"
          class="myColor"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img class="userimg" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("collapseMenu");
    },
  },

  // computed: {
  //   ...mapState({
  //     tags: (state) => state.tab.tabsList,
  //   }),
  // },
};
</script>
<style lang="less" scoped>
.myColor /deep/ .el-breadcrumb__inner {
  color: rgb(207, 201, 201);
}
.myColor /deep/ .el-breadcrumb__inner:hover {
  color: white;
}
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .left-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .right-content {
    .userimg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>