<template>
  <div class="hospital-box">
    <div class="intro">
      <div class="title">海宁市中心医院</div>
      <div class="item">
        <div>
          <span class="where">占地面积：</span><span>23.1亩</span>
        </div>
        <div>
          <span class="where">建筑面积：</span><span>231m³</span>
        </div>
        <div>
          <span class="where">空调面积：</span><span>231m³</span>
        </div>
        <div>
          <span class="where">建筑数量：</span><span>4栋</span>
        </div>
        <div>
          <span class="where">编制人数：</span><span>223人</span>
        </div>
        <div>
          <span class="where">病床：</span><span>223张</span>
        </div>
      </div>
    </div>
    <div class="hospital">
      <img :src="Img.imgHospital" alt="">
      <div class="live-box menzhen">
        <div class="title">实时</div>
        <div class="num"><span class="number">34</span><span>KW</span></div>
        <div class="building">门诊楼</div>
      </div>
      <div class="live-box zhuyuan">
        <div class="title">实时</div>
        <div class="num"><span class="number">34</span><span>KW</span></div>
        <div class="building">住院楼</div>
      </div>
      <div class="live-box xingzheng">
        <div class="title">实时</div>
        <div class="num"><span class="number">34</span><span>KW</span></div>
        <div class="building">行政楼</div>
      </div>
    </div>
  </div>
</template>
<script>
import Img from '@/assets/index'
export default {
  name: 'hospital-view',
  data() {
    return {
      Img
    }
  }  
}
</script>
<style lang="scss" scoped>
.hospital-box {
  position: relative;
  .intro {
    position: absolute;
    left: 0;
    top: 50px;
    padding: 10px;
    border: 1px solid #292b76;
    z-index: 1;
    .title {
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 10px;
    }
    .item {
      display: flex;
      flex-direction: column;
      div {
        text-align: start;
        .where {
          color: #165ca4;
        }
      }
    }
  }
  .hospital {
    position: relative;
    padding-left: 100px;
    img {
      width: 400px;
    }
    .live-box {
      position: absolute;
      background-color: #3b42a0;
      text-align: start;
      padding: 3px 0;
      &.menzhen {
        left: 150px;
        top: 50px;
      }
      &.zhuyuan {
        left: 250px;
        top: 10px;
      }
      &.xingzheng {
        left: 350px;
        top: 30px;
      }
      .title {
        font-size: 12px;
        padding: 0 3px;
      }
      .num {
        font-size: 12px;
        padding: 0 3px;
        .number {
          font-size: 20px;
        }
      }
      .building {
        background-color: #fff;
        border-radius: 20px;
        color: #333;
        padding: 3px;
        font-size: 14px;
      }
    }
  }
}
</style>
