<template>
  <div id="box">
    <div id="box-top">
      <div id="box-title-one">
        <router-link to="/">食尚生活</router-link>
      </div>
      <div id="box-title-two">
        <router-link to="/TwoGater">健康管家</router-link>
      </div>
      <div id="box-title-three">
        <router-link to="/ThreeGater">食尚掌柜</router-link>
      </div>
    </div>
    <div id="box-bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  
  mounted: function () {
    function setRem() {
      var ui_w = 1920;
      var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
      document.getElementsByTagName('html')[0].style.fontSize = (clientWidth / ui_w) * 10 + 'px';
    }
    window.onresize = setRem;
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 0.6vw;
  color: rgb(218,232,255);
}

#app {
  width: 100%;
  height: 100%;
}

#box {
  width: 100%;
  height: 100%;
  background-image: url('./components/img/1.jpg');
  background-size: 100% 100%;
}

#box-top {
  width: 100%;
  height: 12%;
}

#box-title-one {
  width: 15%;
  height: 12%;
  position: absolute;
  left: 42.5%;
  text-align: center;
  font-size: 4rem;
  font-family: '宋体';
  line-height: 10vh;
}
#box-title-one>a {
  color: rgb(112, 185, 230);
}
#box-title-two {
  width: 15%;
  height: 12%;
  position: absolute;
  left: 67%;
  text-align: center;
  font-size: 3rem;
  font-family: '宋体';
  line-height: 5vh;
}
#box-title-two>a {
  color: rgb(112, 185, 230);
}
#box-title-three {
  width: 15%;
  height: 12%;
  position: absolute;
  left: 18%;
  text-align: center;
  font-size: 3rem;
  font-family: '宋体';
  line-height: 5vh;
}
#box-title-three>a {
  color: rgb(112, 185, 230);
}
#box-bottom{
  width: 100%;
  height: 88%;
}
</style>
