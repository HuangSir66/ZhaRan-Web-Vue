<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="tuwen">
        <div style="font-size: 30px;font-weight: bolder">教学视频</div>
        <div class="idea">
          <div class="left">
            <div>六角孔编法</div>
            <video src="@/assets/video/6-1.mp4" controls></video>
            <video src="@/assets/video/7-1.mp4" controls></video>
          </div>
          <div class="right">
            <div>直编法</div>
            <video src="@/assets/video/6-2.mp4" controls></video>
            <video src="@/assets/video/7-2.mp4" controls></video>
          </div>
        </div>
        <div class="wenpin">
          <div class="wenpin-left">
            <div>本页内容为编织技法教学，编织与扎染都是我国优秀传统文化，我们由染而生在选择两种优秀文化的传承同时也进行了融合开发。扎染与编织都能支撑绿色发展道路的运行。于是我们将编织与扎染进行融合开发设计将扎染与编织能应用到更多的场景领域，旨在希望扎染与编织能够通过我们的设计被更多大众发现并了解，让更多人知道扎染与编织、了解扎染与编织、喜欢上扎染与编织</div>
          </div>
          <div class="wenpin-right">
            <div class="left-right">
              <div>
                <div>压一挑一编法</div>
                <video style="width: 420px;height: 235px;" src="@/assets/video/8.mp4" controls ></video>
              </div>
              <div>压一挑一是竹编编法中最基本的一种，其简易且易懂的编织方式让它成为许多编制爱好者的入门编制技法之一。其精在通过压一挑一的编制方法就能实现编制出规整且好看的图形而著名</div>
            </div>
            <div class="left-right">
              <div>
                <video style="width: 220px;height: 235px;" src="@/assets/video/9.mp4" controls ></video>
                <div>编织包包教学</div>
              </div>
              <div>视频内使用的是最基本的压一挑一编法，在前面的图片教学与视频教学中有具体的教学与示范，通过简单且规整的压挑编织就能制作出日常实用美观的包包。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachVideo2"
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
.idea{
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 30px;
}
.idea video{
  width: 420px;
  height: 235px;
  margin: 10px 30px;
}
.left{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.right{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.wenpin{
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 30px;
}
.wenpin video{
  margin: 0 30px;
}
.wenpin-left{
  background-color: #99a9bf;
  width: 30%;
  height: 570px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.wenpin-right{
  width: 50%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.left-right{
  background-color: #2c3e50;
  font-size: 20px;
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  color: black;
  padding: 5px;
  background-clip: content-box;
  border-radius: 3%;
}
</style>
