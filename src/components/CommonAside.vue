<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 10:53:50
 * @LastEditTime: 2022-08-15 14:49:29
-->
<template>
  <div class="asidecontainer">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#545c64"
    >
      <h3>{{ isCollapse ? "后台" : "聪聪后台管理系统" }}</h3>
      <el-menu-item
        v-for="item in noChildren"
        :key="item.path"
        :index="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="(item, index) in hasChildren" :key="index" index="1">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="item in item.children" :key="item.path">
          <el-menu-item :index="item.path">{{ item.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script >
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "HomePage",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "MallPage",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "UserPage",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "ElsePage1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "ElsePage2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },

  computed: {
    noChildren() {
      //过滤出没有子对象的
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      //过滤出有子对象的
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    clickMenu(item) {
      console.log(item.name);
      this.$router.push({
        name: item.name,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.asidecontainer {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border: none;
    height: 100%;
    h3 {
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
  }
}
</style>