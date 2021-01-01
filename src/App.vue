<template>
  <div id="app">
    <img src="./assets/bg.jpg">
    <div id="sidebar">
      <li><router-link to='/root'>首页</router-link></li>
      <li><router-link to='/page4'>校园简介</router-link></li>
      <li><router-link to='/page1'>校区展示</router-link></li>
      <li><router-link to='/page2'>发展历史</router-link></li>
      <li><router-link to='/page3'>照片展示</router-link></li>
      <li><router-link to='/page5'>校园文化</router-link></li>
    </div>
    <div id="display">
    <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  [id="sidebar"]
  {
    
    background: rgba(255, 255, 255, 0.5);
    height:90%;
    width:15%;
    left:3%;
    top:5%;
    position: fixed;
  }
  [id="display"]
  {
    background: rgba(255, 255, 255, 0.55);
    width:76%;
    top:5%;
    right:3%;
    position:absolute;
  }
  a 
  {
    color:black;
    text-decoration:none;
    font-size:30px;
  }
  a:hover
  {
    color: red;
  }
  li 
  {
    list-style:none;
    font-size:100%;
    padding-top:20px;
    padding-bottom:20px;
    text-align:center;
  }
  li:hover
  {
    background: rgba(42, 151, 165, 0.308);
  }
  img
  {
    position:fixed;
    width:100%;
    opacity:0.7;
  }
</style>
