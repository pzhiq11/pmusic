<template>
  <div class="container">
    <div class="box">
      <div class="top box-page"></div>
      <div class="bottom box-page"></div>
      <div class="left box-page"></div>
      <div class="right box-page"></div>
      <div class="before box-page"></div>
      <div class="after box-page"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {
    var arr = document.querySelectorAll(".box>div");
    for (var n = 0; n < arr.length; n++) {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          var divs = document.createElement("div");
          divs.style.cssText =
            "width:100px;height:100px;border: 1px solid #fff;position:absolute;box-sizing:border-box;background-image:url(swiper" +
            2 +
            ".jpg);background-size: 300px 300px;";
          arr[n].appendChild(divs);
          // 改变每一个div的位置
          divs.style.left = 100 * j + "px";
          divs.style.top = 100 * i + "px";
          // 改变背景图相应的位置
          divs.style.backgroundPositionX = -j * 100 + "px";
          divs.style.backgroundPositionY = -i * 100 + "px";
        }
      }
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: fixed;
  /* top: 100px;
  left: 100px;
  width: 600px;
  height: 600px; */
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10011;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  background: radial-gradient(rgb(103, 89, 223), rgb(60, 153, 165));
  /* perspective:20000px; */
}
.box {
  margin: 150px auto;
  width: 300px;
  height: 300px;
  border: 1px solid transparent;
  box-sizing: border-box;
  position: relative;
  transform-style: preserve-3d;
  /*transform:rotateX(30deg) rotateY(30deg);*/
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  100% {
    transform: rotatex(360deg) rotatey(360deg) rotatez(360deg);
  }
}

.box-page {
  width: 300px;
  height: 300px;
  position: absolute;
  box-sizing: border-box;
  transform-style: preserve-3d;
}

.top {
  transform: translateZ(150px);
}
.bottom {
  transform: translateZ(-150px) rotateX(180deg);
}
.right {
  transform: translateX(150px) rotateY(90deg);
}
.left {
  transform: translateX(-150px) rotateY(-90deg);
}
.after {
  transform: translateY(-150px) rotateX(90deg);
}
.before {
  transform: translateY(150px) rotateX(-90deg);
}

.box-page div:first-child,
.box-page div:nth-child(3),
.box-page div:nth-child(5),
.box-page div:nth-child(7),
.box-page div:nth-child(9) {
  transform: rotateY(0deg);
  animation: rotatey 6s linear infinite;
}

@keyframes rotatey {
  20% {
    transform: rotateY(0deg);
    background-size: 300px 300px;
  }
  40% {
    /*background-image: url("img/img.jpg");*/
    transform: rotateY(540deg);
    background-size: 100px 100px;
  }
  60% {
    /*background-image: url("img/img.jpg");*/
    transform: rotateY(540deg);
    background-size: 100px 100px;
  }
  80% {
    transform: rotateY(0deg);
    background-size: 300px 300px;
  }
}

.box-page div:nth-child(2),
.box-page div:nth-child(4),
.box-page div:nth-child(6),
.box-page div:nth-child(8) {
  transform: rotateX(0deg);
  animation: rotatex 6s linear infinite;
}

@keyframes rotatex {
  20% {
    transform: rotateX(0deg);
    background-size: 300px 300px;
  }
  40% {
    /*background-image: url("img/img.jpg");*/
    transform: rotateX(540deg);
    background-size: 100px 100px;
  }
  60% {
    /*background-image: url("img/img.jpg");*/
    transform: rotateX(540deg);
    background-size: 100px 100px;
  }
  80% {
    transform: rotateX(0deg);
    background-size: 300px 300px;
  }
}
</style>