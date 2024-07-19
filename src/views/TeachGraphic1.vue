<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="tuwen">
        <div style="font-size: 30px;font-weight: bolder">教学图文</div>
        <div class="alltu">
          <div class="wenzi">一、素编法
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240509214553.jpg">
            <img src="@/assets/img-1/微信图片_20240509214554.jpg">
            <img src="@/assets/img-1/微信图片_20240509214555.jpg">
          </div>
          <div class="wenzi">二、扭编法
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240625185906.jpg">
            <img src="@/assets/img-1/微信图片_20240625185903.jpg">
            <img src="@/assets/img-1/微信图片_20240625185901.jpg">
          </div>
          <div class="wenzi">三、棱纹编法
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240625185859.jpg">
            <img src="@/assets/img-1/微信图片_20240625185855.jpg">
            <img src="@/assets/img-1/微信图片_20240625185853.jpg">
          </div>
          <div class="wenzi">四、六边形网眼编织
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240625185844.jpg">
            <img src="@/assets/img-1/微信图片_20240625185841.jpg">
            <img src="@/assets/img-1/微信图片_20240625185839.jpg">
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240625185836.jpg">
            <img src="@/assets/img-1/微信图片_20240625185833.jpg">
            <img src="@/assets/img-1/微信图片_20240625185831.jpg">
          </div>
          <div class="wenzi">五、直编法
          </div>
          <div class="tupian">
            <img src="@/assets/img-1/微信图片_20240625185828.jpg">
            <img src="@/assets/img-1/微信图片_20240625185825.jpg">
            <img src="@/assets/img-1/微信图片_20240625185823.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachGraphic1"
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.zhu{
  width: 100%;
  height: 667px;
  background-image: url("../assets/img/bg.png");
  background-size: cover;
  margin-top: 10px;
  position: relative;
}
.flower{
  position: absolute;
  width: 681px;
  height: 687px;
  z-index: 999;
  top: 135px;
  left: -65px;
}
.ci{
  width: 90%;
  height: 2544px;
  background-image: url("../assets/img/23.PNG");
  background-size: cover;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: space-around; /* 垂直居中 */
}
.tuwen{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.tupian{
  position: relative;
  width: 90%;
}
.wenzi{
  font-size: 30px;
  align-self: flex-start;
}
.tupian img{
  width: 300px;
  height: 320px;
  margin: 0 10px;
}
.alltu{
  background-color: #99a9bf;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  padding: 20px;
}
</style>
