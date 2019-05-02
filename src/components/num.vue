<template>
  <div>
    <span v-for="(item, index) in numStr" :key="index" class="num light-blue" :style="{fontSize: `${fontSize}px`}">{{item}}</span>
  </div>
</template>
<script>
export default {
  name: 'num-box',
  props: {
    num: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      numStr: []
    }
  },
  mounted() {
    this.numStr = this.num.split('')
  }
}
</script>
<style lang="scss" scoped>
.num {
  background-color: #373587;
  padding: 5px;
  margin-right: 3px;
  border-radius: 3px;
}
</style>
