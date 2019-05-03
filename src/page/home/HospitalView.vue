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
    border: 1px solid rgba(255, 255, 255, 0.15);
    z-index: 1;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.15) inset;
    .title {
      border-bottom: 1px solid #292b76;
      margin-bottom: 20px;
      padding-bottom: 10px;
      font-size: 14px;
    }
    .item {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      div {
        margin-bottom: 8px;
        text-align: start;
        .where {
          color: #165ca4;
        }
      }
    }
  }
  .hospital {
    position: relative;
    padding-left: 80px;
    img {
      width: 500px;
    }
    .live-box {
      position: absolute;
      background-color: rgba(42, 44, 119, 0.8);
      text-align: start;
      padding: 3px 0 0;
      &.menzhen {
        left: 220px;
        top: 50px;
      }
      &.zhuyuan {
        left: 350px;
        top: 10px;
      }
      &.xingzheng {
        left: 400px;
        top: 70px;
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
        position: relative;
        background-color: #fff;
        border-radius: 20px;
        color: #333;
        padding: 3px;
        text-align: center;
        font-size: 12px;
        box-shadow: 0px 10px 10px rgba(40, 239, 255, 0.5);
        &::after {
          position: absolute;
          left: 50%;
          bottom: -5px;
          transform: translateX(-50%);
          content: '';
          width: 0;
          height: 0;
          border-width:5px 5px 0;
          border-style:solid;
          border-color:#fff transparent transparent;
        }
      }
    }
  }
}
</style>
