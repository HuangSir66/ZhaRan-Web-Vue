<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="zuopin">
        <div style="font-size: 30px;font-weight: bolder">创意作品</div>
        <div class="tupian">
          <img src="@/assets/img-1/微信图片_20240625185704.jpg">
          <img src="@/assets/img-1/微信图片_20240625185721.jpg">
          <img src="@/assets/img-1/微信图片_20240625185708.jpg">
          <img src="@/assets/img-1/微信图片_20240625185715.jpg">
        </div>
        <div class="tuwen">
          <div class="tuwen-1">
            <img style="width: 350px;height: 461px" src="@/assets/img-1/微信图片_20240625185728.jpg">
            <div>我们将旧衣物与旧布料进行回收与再利用，发扬绿色发展的同时也旨在让陈旧的布料与衣服通过我们的扎染技艺焕发新的活力。</div>
          </div>
          <div class="tuwen-2">
            <div>
              <div class="about-1">
                <div style="width: 80%;text-align: left">如图这是我们的个性化定制产品，我们将扎染融合到更多使用场景，让更
                </div>
                <div class="carousel-container-1">
                  <img style="width: 50%;height: 100%" src="@/assets/img-1/微信图片_20240625185738.jpg">
                  <div style="width: 50%">多人能了解扎染这一非遗文化，让扎染更能被大众接受与挖掘理解、发展，从而获取更多市场份额。
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="about-2">
                <div class="carousel-container-2">
                  <img style="width: 50%;height: 100%" src="@/assets/img-1/微信图片_20240625185717.jpg">
                  <div style="width: 50%">我们将非遗编织与非遗扎染技艺相结合，让这两项非遗技艺得到更好的发展，为扎染编织行业注入新活力也让我们由染而生团队有更多的创新思路
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "production"
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
.zuopin{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: space-around; /* 垂直居中 */
}
.tupian{
  position: relative;
}
.tupian img{
  border-radius: 10%;
  width: 600px;
  height: 350px;
  margin: 10px;
}
.carousel-container-1 {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 80%;
  height: 250px;
  overflow: hidden;
}
.about-1{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  background-color: #2c3e50;
  font-size: 31px;
  border-radius: 2%;
  color: rgb(151, 148, 148);
  margin: 15px 20px 15px 20px;
  padding: 10px;
}
.carousel-container-2 {
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  width: 80%;
  height: 350px;
  overflow: hidden;
}
.about-2{
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  background-color: #2c3e50;
  font-size: 31px;
  border-radius: 2%;
  color: rgb(151, 148, 148);
  margin: 0 20px 20px 20px;
  padding: 10px;

}
.tuwen{
  width: 90%;
  display: flex;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.tuwen-1{
  background-color: #2c3e50;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 35px;
  border-radius: 2%;
  color: rgb(151, 148, 148);
  padding: 20px;
}
.tuwen-2{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  font-size: 35px;
  border-radius: 2%;
}
</style>

