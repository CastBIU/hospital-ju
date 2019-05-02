<template>
  <div>
    <div class="title-first light-blue"><span>2017年11月能耗</span><span style='color:#999;'>{{date}}</span></div>
    <div class="box">
      <div class="title-box">
        <div class="title">能耗种类</div>
        <div class="title">消耗量</div>
        <div class="title">费用</div>
      </div>
      <div class="detail-box">
        <div class="item" v-for="(item, index) in items" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.num}}</span>
          <span>{{item.price}}</span>
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
          name: '电',
          num: '231KWH',
          price: '264元',
        },
        {
          name: '水',
          num: '131吨',
          price: '264元',
        },
        {
          name: '天然气',
          num: '234m³',
          price: '264元',
        },
        {
          name: '汽油',
          num: '256升',
          price: '264元',
        },
        {
          name: '柴油',
          num: '356升',
          price: '264元',
        },
        {
          name: '液化石油气',
          num: '113m³',
          price: '264元',
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
  padding: 5px;
  padding-left: 30px;
  font-size: 12px;
  text-align: start;
  margin-bottom: 20px;
}
.title-box {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px;
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
  border: 1px solid #1e2159;
  padding: 5px;
  .item {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 5px 10px;
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
