<template>
  <div class="temperature">
    <div class="left">
      <div class="date mb-20">{{`${temperature.week}，${temperature.day}，${temperature.lunar}`}}</div>
      <div class="temp mb-20"><span class="tem">{{temperature.tem}}</span><span class="wea">{{temperature.wea}}</span></div>
      <div class="temp-range mb-20">{{temperature.tempRange}}</div>
      <div class="wind">{{temperature.win}}</div>
    </div>
    <div class="inner">
      <div class="inner-title light-blue">室内环境</div>
      <div class="inner-box" v-for="(item, index) in temperature.inner" :key="index">
        <div class="inner-box-item">
          <div class="inner-box-title">{{item.title}}</div>
          <div class="inner-box-content">{{item.content}}</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as Temperature from '@/api/temperature'
export default {
  name: 'temperature',
  data() {
    return {
      temperature: {
        inner: []
      }
    }
  },
  async mounted () {
    this.temperature = await Temperature.getWeather('https://www.tianqiapi.com/api/?version=v1&cityid=101020100')
    console.log('temp', this.temperature)
  }
}
</script>

<style lang="scss" scoped>
//温度
.temperature {
  display: flex;
  flex-flow: row nowrap;
  padding: 0 30px;
  text-align: start;
  .left {
    margin-right: 10px;
  }
  .tem {
    font-size: 32px;
    margin-right: 10px;
  }
  .inner {
    text-align: center;
    padding: 10px;
    border: 1px solid #292b76;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .inner-title {
      font-size: 18px;
    }
    .inner-box-item {
      text-align: start;
      padding: 10px 10px 0;
      .inner-box-title {
        font-size: 12px;

      }
      .inner-box-content {
        font-size: 20px;
      }
    }
  }
}
</style>
