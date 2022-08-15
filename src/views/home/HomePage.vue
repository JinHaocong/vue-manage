<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 13:29:12
 * @LastEditTime: 2022-08-15 21:28:21
-->
<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shawod="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userinfo">
              <p class="username">Admin</p>
              <p class="userrole">超级管理员</p>
            </div>
          </div>
          <div class="logininfo">
            <p>上次登陆时间：<span>2022-7-19</span></p>
            <p>上次登陆地点：<span>南昌</span></p>
          </div>
        </el-card>

        <el-card style="margin-top: 20px; height: 800px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(value, key) in tableLable"
              :key="key"
              :prop="key"
              :label="value"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16" style="margin-top: 20px">
        <div class="num">
          <el-card
            v-for="data in countData"
            :key="data.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              :class="`el-icon-${data.icon}`"
              :style="{ background: data.color }"
            ></i>
            <div class="detail">
              <p class="num">￥{{ data.value }}</p>
              <p class="txt">{{ data.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 380px">
          <!-- 绘制图表必须设置宽高 -->
          <!-- <div style="height: 280px" ref="echarts"></div> -->
          <common-echarts
            :charData="echartsData.order"
            style="height: 380px"
          ></common-echarts>
        </el-card>
        <div class="graph">
          <el-card style="height: 500px">
            <!-- <div style="height: 240px" ref="userecharts"></div> -->
            <common-echarts
              :charData="echartsData.user"
              style="height: 480px"
            ></common-echarts>
          </el-card>
          <el-card style="height: 500px">
            <!-- <div style="height: 240px" ref="videoecharts"></div> -->
            <common-echarts
              :charData="echartsData.video"
              :isAxisChart="false"
              style="height: 480px"
            ></common-echarts>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getData } from "../../../api/data";
// import * as echarts from "echarts";
import CommonEcharts from "@/components/CommonEcharts.vue";

export default {
  name: "HomePage",
  components: {
    CommonEcharts,
  },
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      tableData: [],
      tableLable: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总计",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],

      echartsData: {
        order: {
          xData: [],
          series: [],
        },
        user: {
          xData: [],
          series: [],
        },
        video: {
          series: [],
        },
      },
    };
  },
  mounted() {
    getData().then((res) => {
      // console.log(res.data);
      const { code, data } = res;
      console.log(code, data);
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyArry = Object.keys(order.data[0]);
        // console.log(order.data[0], keyArry);
        const series = [];
        keyArry.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        this.echartsData.order.xData = xData;
        this.echartsData.order.series = series;
        this.echartsData.user.xData = data.userData.map((item) => item.date);
        this.echartsData.user.series = [
          {
            name: "新增用户",
            data: data.userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: data.userData.map((item) => item.active),
            type: "bar",
          },
        ];
        this.echartsData.video.series = [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [20, 150],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: data.videoData,
          },
        ];
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    &info {
      .username {
        font-size: 32px;
        margin-bottom: 10px;
      }
      .userrole {
        color: #999999;
      }
    }
  }
  .logininfo {
    p {
      line-height: 28px;
      font-size: 14px;
      color: #999999;
      span {
        color: #666666;
        margin-left: 60px;
      }
    }
  }
  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card {
      width: 32%;
      margin-bottom: 20px;
    }
    .icon {
      font-size: 30px;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt {
        font-size: 14px;
        text-align: center;
        color: #999999;
      }
    }
  }
  .graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .el-card {
      width: 48%;
    }
  }
}
</style>