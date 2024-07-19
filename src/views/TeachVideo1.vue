<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="tuwen">
        <div style="font-size: 30px;font-weight: bolder">教学视频</div>
        <div class="alltu">
          <div class="wenzi">捆扎法
          </div>
          <div class="tupian">
            <video src="@/assets/video/1-1.mp4" controls></video>
            <video src="@/assets/video/1-2.mp4" controls></video>
            <video src="@/assets/video/1-3.mp4" controls></video>
            <video src="@/assets/video/1-4.mp4" controls></video>
          </div>
          <div class="wenzi">折叠法
          </div>
          <div class="tupian">
            <video src="@/assets/video/2-1.mp4" controls></video>
            <video src="@/assets/video/2-2.mp4" controls></video>
            <video src="@/assets/video/2-3.mp4" controls></video>
            <video src="@/assets/video/2-4.mp4" controls></video>
          </div>
          <div class="wenzi">夹板法
          </div>
          <div class="tupian">
            <video src="@/assets/video/3-1.mp4" controls></video>
            <video src="@/assets/video/3-2.mp4" controls></video>
            <video src="@/assets/video/3-3.mp4" controls></video>
            <video src="@/assets/video/3-4.mp4" controls></video>
          </div>
          <div class="wenzi">针缝法（平针法）
          </div>
          <div class="tupian">
            <video src="@/assets/video/4-1.mp4" controls></video>
            <video src="@/assets/video/4-2.mp4" controls></video>
            <video src="@/assets/video/4-3.mp4" controls></video>
            <video src="@/assets/video/4-4.mp4" controls></video>
          </div>
          <div class="shipin">
            <div style="width: 70%;text-align: left">通过上面的教学视频，相信你们能初步了解到非遗扎染的文化魅力，视频里通过不同的扎染技法能在普普通通的布料上进行精湛的“绘画”。相信你们在进行动手实践后也能做出如同视频一样的美丽效果，也希望你们会通过实践喜欢上扎染这一优秀的非遗技艺。</div>
            <video src="@/assets/video/5.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeachVideo1"
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
.tupian{
  position: relative;
  width: 90%;
}
.wenzi{
  font-size: 30px;
  align-self: flex-start;
}
.tupian video{
  width: 220px;
  height: 160px;
  margin: 0 10px;
}
.tupian img{
  width: 200px;
  height: 120px;
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
.shipin{
  background-color: #2c3e50;
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 90%;
  height: 400px;
  overflow: hidden;
  color: black;
  border-radius: 3%;
  font-size: 38px;
}
.shipin video{
  width: 250px;
  height: 390px;
}
</style>
