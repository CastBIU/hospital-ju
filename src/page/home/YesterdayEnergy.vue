<template>
  <div class="energy-box">
    <div class="title">昨日能源消耗</div>
    <div class="date">{{date}}</div>
    <div class="detail">
      <div class="part top">
        <div class="item">
          <numBox num='34'/>
          <div class="right">
            <div class="title light-blue">总能耗</div>
            <div class="unit light-blue">J</div>
          </div>
        </div>
        <div class="item">
          <numBox num='39'/>
          <div class="right">
            <div class="title light-blue">总电耗</div>
            <div class="unit light-blue">KWH</div>
          </div>
        </div>
      </div>
      <div class="part">
        <div class="column item">
          <div class="item-title">全年累计能耗</div>
          <div class="row">
            <numBox num='128' :fontSize='20'/>
            <div class="right">
              <div class="unit light-blue">J</div>
            </div>
          </div>
        </div>
        <div class="column item">
          <div class="item-title">全年累计电耗</div>
          <div class="row">
            <numBox num='118' :fontSize='20'/>
            <div class="right">
              <div class="unit light-blue">KWH</div>
            </div>
          </div>
        </div>
        <div class="column item">
          <div class="item-title">全年累计节耗</div>
          <div class="row">
          <numBox num='1189' :fontSize='20'/>
          <div class="right">
            <div class="unit light-blue">KWH</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import numBox from '@/components/num'
export default {
  name: 'energy-box',
  components: { numBox },
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    this.date = dayjs().subtract('1', 'day').format('YYYY.MM.DD')
  }
}
</script>
<style lang="scss" scoped>
.energy-box {
  text-align: start;
  .title {
    font-size: 22px;
  }
  .date {
    background-color: #262a65;
    padding: 5px;
    border-radius: 3px;
    width: 130px;
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .detail {
    border: 1px solid #292b76;
    width: 500px;
    .part {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px;
      &.top {
        border-bottom: 1px solid #292b76;
        justify-content: space-around;
      }
      .item {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        &.column {
          flex-flow: column nowrap;
          align-items: flex-start;
        }
        .row {
          align-items: flex-end;
        }
        .title {
          font-size: 16px;
        }
        .unit {
          font-size: 16px;
          text-align: start;
        }
        .item-title {
          margin-bottom: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
