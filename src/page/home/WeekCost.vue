<template>
  <div class="energy">
    <div class="title">
      <span><span class="first light-blue">近七日能耗成本</span><span class="cost">能耗成本</span><span class="up">增长率</span></span>
    </div>
    <div class="charts">
    <div id="chart" style="min-height: 350px;margin-left:15px;"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: "name-cost",
  data(){
    return {
      chart: null,
    }
  },
  mounted(){
  this.drawBar();
  },
  methods:{
  drawBar(){
    this.chart = echarts.init(document.getElementById('chart'));
    let colors = ['#2effab', '#1cffff'];
    this.chart.setOption({
    color: colors,

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      left: '15%'
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        data: ['12.01','12.02','12.03','12.04','12.05','12.06','12.07']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '增长率',
        min: 0,
        max: 25,
        position: 'right',
        axisLine: {
          lineStyle: {
            color: '#999',
          }
        },
        axisLabel: {
          formatter: '{value} %'
        }
      },
      {
        type: 'value',
        name: '能耗成本',
        min: 0,
        max: 250,
        position: 'left',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          formatter: '{value} 元'
        }
      }
    ],
    series: [
      {
        name:'蒸发量',
        type:'bar',
        data:[1, 2, 3, 4, 9, 11, 13]
      },
      {
        name:'平均温度',
        type:'line',
        yAxisIndex: 1,
        data:[25, 30, 45, 60, 105, 120, 140]
      }
    ]
  })
  }
  }
 }
</script>
<style lang="scss" scoped>
.energy {
  border: 1px solid #292b76;
}
.title {
  background-color: #292b76;
  padding: 5px 0;
  width: 345px;
  margin: 0 auto;
  .first {
    margin-right: 25px;
  }
}
.cost {
  position: relative;
  padding-left: 25px;
  padding-right: 10px;
  &::after {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 10px;
    border-radius: 10px;
    background-color: #2effab;
    content: '';
  }
}
.up {
  position: relative;
  padding-left: 15px;
  &::after {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #1cffff;
    content: '';
  }
}
</style>
