<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 13:58:41
 * @LastEditTime: 2022-08-15 14:47:34
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
      <h3 style="color: #fff">首页</h3>
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
};
</script>
<style lang="scss" scoped>
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