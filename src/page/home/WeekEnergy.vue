<template>
  <div class="energy">
    <div class="title">
      <span><span class="first light-blue">近七日能耗量</span><span class="color elec">电</span><span class="color water">水</span><span class="color gas">天然气</span></span>
    </div>
    <div class="charts">
    <div id="column" style="height: 250px;"></div>
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
    this.chart = echarts.init(document.getElementById('column'));
    let colors = ['#28efff', '#913df4', '#3c36ff'];
    this.chart.setOption({
    color: colors,

    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '5%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
    },
    yAxis: {
        type: 'category',
        data: ['12.01','12.02','12.03','12.04','12.05','12.06','12.07'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
    },
    series: [
        {
            name: '电',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            barWidth: 16,
            data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
            name: '水',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            barWidth: 16,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '天然气',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            barWidth: 16,
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              normal: {
                barBorderRadius:[0, 10, 10, 0],
              }
            },
        },
    ]
  })
  }
  }
 }
</script>
<style lang="scss" scoped>
.energy {
  border: 1px solid #292b76;
  box-shadow: 0px 0px 120px rgba(42, 44, 119, 0.5) inset;
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
.color {
  position: relative;
  padding-left: 25px;
  padding-right: 10px;
  font-size: 12px;
  color: #e6e8f8;
  &::after {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 10px;
    border-radius: 10px;
    content: '';
  }
}
.elec {
  &::after {
    background-color: #28efff;
  }
}
.water {
  &::after {
    background-color: #913df4;
  }
}
.gas {
  &::after {
    background-color: #3c36ff;
  }
}
</style>
