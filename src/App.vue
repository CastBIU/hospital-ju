<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'normalize.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
div {
  box-sizing: border-box;
}
.mb-20 {
  margin-bottom: 10px;
}
.light-blue {
  color: #44feff;
}
.row {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
</style>