<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="tuwen">
        <div style="font-size: 30px;font-weight: bolder">教学图文</div>
        <div class="alltu">
          <div class="wenzi">六、同心水波纹
          </div>
          <div class="tupian1">
            <img src="@/assets/teach3/1-1.png">
            <img src="@/assets/teach3/1-2.png">
            <img src="@/assets/teach3/1-3.png">
            <img src="@/assets/teach3/1-4.png">
            <img src="@/assets/teach3/1-5.png">
          </div>
          <div class="wenzi">技法解析：1.将布进行风琴折 2.将线均匀地绕在布上 3.放进染料中浸泡10分钟 4.捞出用清水洗净  5.晾干
          </div>
          <div class="wenzi">七、云纹
          </div>
          <div class="tupian2">
            <img src="@/assets/teach3/2-1.png">
            <img src="@/assets/teach3/2-2.png">
            <img src="@/assets/teach3/2-3.png">
            <img src="@/assets/teach3/2-4.png">
            <img src="@/assets/teach3/2-5.png">
          </div>
          <div class="wenzi">技法解析：1.将布随意地往中心聚拢 2.用橡皮筋扎紧 3.放入染料中浸泡10分钟 4.捞出拆开用清水洗净 5.晾干
          </div>
          <div class="wenzi">八、水波纹
          </div>
          <div class="tupian3">
            <img src="@/assets/teach3/3-1.png">
            <img src="@/assets/teach3/3-2.png">
            <img src="@/assets/teach3/3-3.png">
            <img src="@/assets/teach3/3-4.png">
            <img src="@/assets/teach3/3-5.png">
          </div>
          <div class="wenzi">技法解析：1.将衣服自然地包裹在pvc管子上 最先卷进去的部门是着色最浅的部分2.将衣服两端挤到中间 3.用皮筋固定 4.放入染料中戴上手套用手用力捏压衣物使染料浸透到最里面的部分5.捞出用清水洗净晾干
          </div>
          <div class="wenzi">九、旭日
          </div>
          <div class="tupian4">
            <img src="@/assets/teach3/4-1.png">
            <img src="@/assets/teach3/4-2.png">
            <img src="@/assets/teach3/4-3.png">
            <img src="@/assets/teach3/4-4.png">
          </div>
          <div class="tupian4">
            <img src="@/assets/teach3/4-5.png">
            <img src="@/assets/teach3/4-6.png">
          </div>
          <div class="wenzi">技法解析：1.对折衬衣抚平褶皱 2.用水消笔在领口、下摆和袖口处画圆弧 3.将下摆的地方打褶成靶心 4.用同样的方法打褶剩下两个圆 5.把染料滴在捆扎的三个地方（25分钟） 6.用清水洗净晾干
          </div>
          <div class="wenzi">十、旋涡
          </div>
          <div class="tupian5">
            <img src="@/assets/teach3/5-1.png">
            <img src="@/assets/teach3/5-2.png">
            <img src="@/assets/teach3/5-3.png">
            <img src="@/assets/teach3/5-4.png">
            <img src="@/assets/teach3/5-5.png">
            <img src="@/assets/teach3/5-6.png">
          </div>
          <div class="wenzi">技法解析：1.用夹子夹住布的中心点 2.拿着夹子把布往同一个方向旋转 3.用皮筋将其扎紧 4.放进染料中浸泡20分钟 5.捞出用清水洗净 6.晾干
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachGraphic3"
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
  height: 2044px;
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
.tupian1{
  position: relative;
}
.tupian1 img{
  width: 205px;
  height: 200px;
  margin: 0 5px;
}
.tupian2{
  position: relative;
}
.tupian2 img{
  width: 205px;
  height: 200px;
  margin: 0 5px;
}
.tupian3{
  position: relative;
}
.tupian3 img{
  width: 205px;
  height: 170px;
  margin: 0 5px;
}
.tupian4{
  position: relative;
}
.tupian4 img{
  width: 230px;
  height: 170px;
  margin: 0 5px;
}
.tupian5{
  position: relative;
}
.tupian5 img{
  width: 160px;
  height: 170px;
  margin: 0 5px;
}
.wenzi{
  font-size: 28px;
  text-align: left;
}
.alltu{
  background-color: #99a9bf;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: self-start; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  padding: 20px;
}
</style>
