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

<style lang="stylus">
  *
    padding:0;
    margin: 0;
    list-style: none;
  body
    background: #000 url(assets/bg.jpg) no-repeat top center;
    font-family: "Source Code Pro",Tahoma,"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei Light","Microsoft YaHei","Source Han Sans CN","WenQuanYi Micro Hei",Arial,sans-serif;
    font-size: 14px;
    color: #333;
    width: 100%;
    height: 100%;
  #app
   padding: 0 50px;
   max-width: 1200px;
   margin: 0 auto;
</style>
