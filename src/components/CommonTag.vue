<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 22:52:14
 * @LastEditTime: 2022-08-15 23:59:42
-->
<template>
  <div class="tabs">
    <el-tag
      size="small"
      v-for="(data, index) in tags"
      :key="data.name"
      :closable="data.name !== 'HomePage'"
      :effect="$route.name === data.name ? 'dark' : 'plain'"
      @click="changeMenu(data)"
      @close="handleClose(data, index)"
    >
      {{ data.label }}</el-tag
    >
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },

  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
    handleClose(data, index) {
      this.close(data);
      console.log(data, this.tags.length, index);
      if (data.name !== this.$route.name) {
        return;
      }

      //删的最后一个 往左跳
      if (index === this.tags.length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        //中间删 往右跳
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  padding-top: 15px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>