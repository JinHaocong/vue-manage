<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-15 19:24:15
 * @LastEditTime: 2022-08-15 21:53:36
-->
<template>
  <div ref="echart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    isAxisChart: {
      type: Boolean,
      default: true,
    },
    charData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: [],
        };
      },
    },
  },
  //监听
  watch: {
    //固定写法 参数为 改变后的值
    charData: {
      handler: function (newcharData) {
        console.log(newcharData);
        this.initChart();
      },
      deep: true, //开启深度监听 监听到属性的每一个值
    },
  },
  methods: {
    //初始化 echart
    initChart() {
      this.initCharData(); //给模板进行挂载数据

      //判断 echart 是否已经进行初始化
      if (this.echart) {
        // 已经初始化  更新数据
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initCharData() {
      //判断属于哪种模板
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.charData.xData;
        this.axisOption.series = this.charData.series;
      } else {
        this.normalOption.series = this.charData.series;
      }
    },
  },
  data() {
    return {
      //折线图，柱状图模板
      axisOption: {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "10%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: [],
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
        ],
        series: [],
      },

      //饼状图模板
      normalOption: {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [],
      },
      echart: null,
    };
  },

  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
};
</script>