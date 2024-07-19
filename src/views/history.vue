<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="wenzi">
        <div style="font-size: 30px;font-weight: bolder">历史来源</div>
        <div class="history-img">
          <img  src="@/assets/img-1/微信图片_20240625185624.jpg">
          <img  src="@/assets/img-1/微信图片_20240625185646.jpg">
          <img  src="@/assets/img-1/微信图片_20240625185609.jpg">
        </div>
        <div class="about-wen">
          <img style="width: 300px;height: 395px" src="@/assets/img-1/微信图片_20240625185618.jpg">
          <div class="about">
            <div style="width: 100%;text-align: left">扎染可以追溯到古代文明时期，如埃及、印度、中国和日本等地。在这些地区，古代人们使用植物、土壤和动物提取物来染色织物，并通过纽扣、绳索或线来束缚织物，形成独特的图案。而之后追溯到公元前2世纪，由中国西安为起点的丝绸之路更是让扎染这一传统技艺文化得到了更好的发展，扎染技术的
            </div>
            <div class="carousel-container">
              <img style="width: 50%;height: 100%" src="@/assets/img-1/微信图片_20240625185649.jpg">
              <div style="width: 50%;text-align: left">传播与古代的丝绸之路密切相关。作为一个重要的贸易路线，丝绸之路促进了扎染文化的传播与发展，这也是为什么扎染文化在全球各地都能发现的重要原因之一。总体来说扎染的历史源远流长，在未来扎染还拥有更多的发展机会。
              </div>
            </div>
          </div>
        </div>
        <div class="about-tu">
          <div class="about-container">
            <div style="text-align: left">如图所示，我们将扎染的来源于扎染的步骤、扎染技术的发展地区等等整理为一张图，云南大理白族地区的扎染原料为纯白布或棉麻混纺白布，染料为苍山上生长的廖蓝、板蓝根、艾蒿等天然植物的蓝靛溶液。扎染的主要步骤有绘图、绞扎、浸泡、染布、蒸煮、晒干、拆线、漂洗、碾布等，其中主要有扎花、浸染两道工序，技术关键是绞扎手法和染色技艺。</div>
            <img style="width: 300px;height: 305px" src="@/assets/img-1/微信图片_20240625185638.jpg">
          </div>
        </div>
      </div>
      <div class="tupian">
        <img  src="@/assets/img-1/微信图片_20240625185621.jpg">
        <img  src="@/assets/img-1/微信图片_20240625185635.jpg">
        <img  src="@/assets/img-1/微信图片_20240625185633.jpg">
        <img  src="@/assets/img-1/微信图片_20240625185629.jpg">
        <img  src="@/assets/img-1/微信图片_20240625185626.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "history"
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
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.about-container {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 95%;
  overflow: hidden;
}
.about{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 28px;
}
.about-wen{
  width: 80%;
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.about-tu{
  background-color: #2c3e50;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 35px;
  border-radius: 2%;
  color: black;
}
.tupian{
  position: relative;
  width: 90%;
}
.tupian img{
  border-radius: 50%;
  width: 200px;
  height: 200px;
}
.history-img img{
  width: 300px;
  height: 395px;
}
.wenzi {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
</style>

