<template>
  <div>
    <div class="title-first light-blue"><span>昨日部门电耗</span><span style='color:#999;'>{{date}}</span></div>
    <div class="box">
      <div class="title-box">
        <div class="title">部门名称</div>
        <div class="title">建筑面积</div>
        <div class="title">耗电量</div>
      </div>
      <div class="detail-box">
        <div class="item" v-for="(item, index) in items" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.num}}</span>
          <span class="light-blue">{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      date: '',
      items: [
        {
          name: '骨科门诊',
          num: '13m³',
          price: '26 KWH',
        },
        {
          name: '内科门诊',
          num: '13m³',
          price: '26 KWH',
        },
        {
          name: '眼科门诊',
          num: '13m³',
          price: '26 KWH',
        },
        {
          name: '儿科门诊',
          num: '13m³',
          price: '26 KWH',
        },
        {
          name: '外科门诊',
          num: '13m³',
          price: '26 KWH',
        },
        {
          name: '外科门诊',
          num: '13m³',
          price: '26 KWH',
        },
      ]
    }
  },
  mounted() {
    this.date = dayjs().format('YYYY.MM.DD')
  }
}
</script>
<style lang="scss" scoped>
.title-first {
  display: flex;
  justify-content: space-between;
  background-color: #252868;
  padding: 8px 5px;
  padding-left: 30px;
  font-size: 12px;
  text-align: start;
  margin-bottom: 20px;
}
.title-box {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  .title {
    color: #165ca4;
    font-size: 12px;
    width: 120px;
    text-align: start;
    &:first-child {
      width: 130px;
    }
    &:last-child {
      width: 50px;
    }
  }
}
.detail-box {
  border: 4px solid #1e2159;
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 20px;
  font-size: 12px;
  .item {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 8px 10px;
    span {
      width: 120px;
      text-align: start;
      &:last-child {
        width: 50px;
      }
    }
    &:nth-child(2n) {
      background-color: #24277d;
    }
  }  
}
</style>
