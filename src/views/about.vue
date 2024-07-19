<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div>
        <div style="font-size: 30px;font-weight: bolder">关于扎染</div>
        <div class="about">
          <div class="carousel-container">
            <img style="width: 50%;height: 100%" src="@/assets/img-1/微信图片_20240625185649.jpg">
            <div style="width: 50%">扎染在中国具有悠久的历史，是我国一种古老的纺织品染色技术。扎染在中国古代被称为“捆染”，主要通过将布料或织物用线捆绑、扎紧，再进行染色。捆绑的部分无法被染料渗透，从而形成各种独特的花纹和图案。这种技术在染色过程中使用了自然染料，如植物提取物和矿石颜料。因此中国的扎染技术发展了多种不同的形式和风格，其</div>
          </div>
          <div style="width: 80%;text-align: left">中包括“扎花印”、“麻花印”、“勾花印”等。这些技术在不同的地区和民族中传承并发展，形成各具特色的扎染文化。如苗族的“苗花”扎染、壮族的“麻花印”等。这些传统技法和图案扎染在服饰、家居装饰和工艺品制作中得到广泛应用，并成为了民族文化的重要组成部分。总的来说，扎染在中国起源已久，经过了漫长的发展和演变，成为了中国独特的染色技术之一，并且在传统文化和现代时尚中都有着重要的地位
          </div>
        </div>
      </div>
      <div class="tupian">
        <img class="tu1" src="@/assets/img-1/微信图片_20240625185653.jpg">
        <img class="tu2" src="@/assets/img-1/微信图片_20240625185655.jpg">
        <img class="tu3" src="@/assets/img-1/微信图片_20240625185713.jpg">
        <img class="tu4" src="@/assets/img-1/图片1.png">
        <img class="tu5" src="@/assets/img-1/图片2.png">
        <img class="tu6" src="@/assets/img-1/图片3.png">
        <img class="tu7" src="@/assets/img-1/图片4.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
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
.carousel-container {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 80%;
  height: 450px;
  overflow: hidden;
}
.about{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 35px;
}
.tupian{
  position: relative;
  width: 90%;
  height: 800px;
}
.tupian img{
  border-radius: 50%;
}
.tupian .tu1{
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 230px;
  height: 230px;
}
.tupian .tu2{
  position: absolute;
  bottom: 30px;
  left: 150px;
  width: 300px;
  height: 300px;
}
.tupian .tu3{
  position: absolute;
  top: 30px;
  right: 300px;
  width: 300px;
  height: 300px;
}
.tupian .tu4{
  position: absolute;
  top: 30px;
  left: 80px;
  width: 280px;
  height: 280px;
}
.tupian .tu5{
  position: absolute;
  top: 240px;
  left: 320px;
  width: 250px;
  height: 250px;
}
.tupian .tu6{
  position: absolute;
  bottom: 80px;
  right: 400px;
  width: 300px;
  height: 300px;
}
.tupian .tu7{
  position: absolute;
  top: 260px;
  right: 100px;
  width: 250px;
  height: 250px;
}
</style>
