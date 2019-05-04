<template>
  <div class="wrapper">
    <div class="column">
      <div class="box">
        <TemperatureBox />
      </div>
      <div class="box">
        <WeekEnergy />
      </div>
      <div class="box">
        <WeekCost />
      </div>
    </div>
    <div class="column">
      <div class="box" style="margin: 30px 0;">
        <YesterdayEnergy />
      </div>
      <div class="box" style="margin: 30px 0;">
        <HospitalView />
      </div>
    </div>
    <div class="column">
      <div class="box" style="margin: 50px 0;">
        <MonthEnergy />
      </div>
      <div class="box" style="margin: 50px 0;">
        <MonthEnergyList />
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureBox from './temperature'
import MonthEnergy from './MonthEnergy'
import MonthEnergyList from './MonthEnergyList'
import YesterdayEnergy from './YesterdayEnergy'
import WeekEnergy from './WeekEnergy'
import WeekCost from './WeekCost'
import HospitalView from './HospitalView'
export default {
  name: 'home',
  components: { TemperatureBox, YesterdayEnergy, MonthEnergy, MonthEnergyList, WeekEnergy, WeekCost, HospitalView },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  background-color: #10102f;
  color: #fff;
  padding: 60px 30px;
  .column {
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    &:first-of-type {
      justify-content: space-between;
    }
    .box {
      flex-shrink: 0;
      margin-bottom: 30px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

//温度
.temperature {
  display: flex;
  flex-flow: row nowrap;
  padding: 30px;
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
      color: #44feff;
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
