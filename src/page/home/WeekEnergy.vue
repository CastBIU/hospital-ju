<template>
  <div>
    <div id="force">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name:'week-energy',
  data() {
    return {

    }
  },
  mounted() {
    let strArr = ["apple","orange","banana"]
    d3.select("body")
      .selectAll("p")
      .data(strArr)
      .text(function (item,index) { 
          return index + "." + item
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
