<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div>
        <router-link to="about">
          <div style="font-size: 30px;font-weight: bolder">关于扎染</div>
        </router-link>
        <div>
          <div style="width: 300px;font-size: 20px">扎染古称“扎纸”‘绞纸”，其历史最早可追溯到公元前二世纪的西汉时期，是我国历史悠久的纺织要色工艺之一。</div>
          <div class="carousel-container">
            <ul id="banner">
              <li v-for="(image, index) in images" :key="index"
                  @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide"
                  :style="{ height: image.height,left: image.left, opacity: image.opacity, zIndex: image.zIndex,position: 'absolute', top:0,bottom:0,margin:'auto',}">
                <img :src="image.src" alt="" :style="{  width: '25.32vw', height: image.height, borderRadius:'50%', boxShadow: '5px 15px 15px #888888'}">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div style="font-size: 30px;font-weight: bolder">扎染技法</div>
        <div class="zheng">
          <div>
            <img src="@/assets/img/5.png">
            <div style="font-size: 30px;font-weight: bolder">针缝法</div>
          </div>
          <div style="margin-top: 150px">
            <img src="@/assets/img/4.png">
            <div style="font-size: 30px;font-weight: bolder">捆扎法</div>
          </div>
          <div>
            <img src="@/assets/img/3.png">
            <div style="font-size: 30px;font-weight: bolder">夹染法</div>
          </div>
        </div>
      </div>
      <div>
        <router-link to="history">
          <div style="font-size: 30px;font-weight: bolder">历史来源</div>
        </router-link>
        <div class="history">
          <div style="display:flex;position: relative">
            <div style="width: 300px;font-size: 20px">扎染起源于黄河流域。据记载，早在东晋，扎结防染的绞缬绸已经有大批生产。公元408年东晋时期的作品，扎染这种工艺早在东晋时期就已经成熟了。
扎染起源于黄河流域.据记载，早在东晋，扎结防染的绞缬绸已经有大批生产.公元408年东晋时期的作品，扎染这种工艺早在东晋时期就已经成熟了。

</div>
            <img class="history-1" src="@/assets/img/1.png">
            <img class="history-2" src="@/assets/img/2.png">
          </div>
        </div>
      </div>
      <div>
        <router-link to="production">
          <div style="font-size: 30px;font-weight: bolder">创意作品</div>
        </router-link>
        <div>
          <div style="width: 1000px;">
            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <img :src="item.idView" class="image">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div style="width: 1000px;font-size: 20px">工业时代的来临，机器逐渐代替了手工，高效的数字化和智能化，使染缅艺术中的人文精神逐渐消失。机器产生的美感虽然可以在瞬息间给人以规整惊艳和速度的震撼，但是却远不如手工艺品经得起推敲与品味，缺乏了一些人文的内涵。纸”
‘绞纸”，其历
史最早可追溯到公元前二世纪的西汉时期，是我国历史悠久的纺织要色工艺之一。</div>
        </div>
      </div>
      <div>
        <div style="font-size: 30px;font-weight: bolder">传承意义</div>
        <div>
          <img src="@/assets/img/6.png" style="width: 1000px">
          <div style="width: 1000px;font-size: 20px">手工扎染历史悠久，不仅代表着一种传统，而且已成为一种时尚。扎染具有独特的艺术个性，是其它染织物所不能替代的。它朴素自然，毫不张扬，符合人的情致，贴近人的生活，充满人性色彩，是人民勤劳、质朴、纯洁、诚实、善良和乐观、开朗、热情好客等美好品格和情趣的生动体现。如今扎染在人们心目中已成为特殊的文化象征和民族传统艺术的标志。
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      imgList: [
        {id:0,idView:require('../assets/img/7.png')},
        {id:1,idView:require('../assets/img/8.png')},
        {id:2,idView:require('../assets/img/9.png')},
        {id:3,idView:require('../assets/img/10.png')},
        {id:4,idView:require('../assets/img/11.png')}
      ],
      images: [
        { src: require('../assets/img/12.png'),  left: "0vw", opacity: 1, zIndex:4, height: '40vh' },
        { src: require('../assets/img/14.png'),  left: "6.72vw", opacity: 1, zIndex:3, height: '33.33vh' },
        { src: require('../assets/img/16.png'),  left: "13.44vw", opacity: 1, zIndex:2, height: '26.67vh' },
        { src: require('../assets/img/18.png'),  left: "20.16vw", opacity: 1, zIndex:1, height: '22.67vh' },
      ],
      timer: null,
      currentIndex: 0,
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.timer = setInterval(this.getNext, 2000);
    },
    stopAutoSlide() {
      clearInterval(this.timer);
    },
    getNext() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.adjustImagesForDisplay();
    },
    getPre() {
      this.currentIndex = this.currentIndex - 1 < 0 ? this.images.length - 1 : this.currentIndex - 1;
      this.adjustImagesForDisplay();
    },
    adjustImagesForDisplay() {
      for (let i = 0; i < this.images.length; i++) {
        if (i === this.currentIndex) {
          this.images[i].left = "0vw";
          this.images[i].opacity = 1;
          this.images[i].zIndex = 4;
          this.images[i].height = '40vh'
        } else if (i === (this.currentIndex + 1) % this.images.length || (this.currentIndex === this.images.length - 1 && i === 0)) {
          this.images[i].left = "6.72vw";
          this.images[i].opacity = 1;
          this.images[i].zIndex = 3;
          this.images[i].height = '33.33vh'
        } else if (i === (this.currentIndex + 2) % this.images.length || (this.currentIndex === this.images.length - 2 && i === 0) || (this.currentIndex === this.images.length - 1 && i === 1)) {
          this.images[i].left = "13.44vw";
          this.images[i].opacity = 1;
          this.images[i].zIndex = 2;
          this.images[i].height = '26.67vh'
        } else {
          this.images[i].left = "20.16vw";
          this.images[i].opacity = 1;
          this.images[i].zIndex = 1;
          this.images[i].height = '21.33vh'
        }
      }
    },
  }
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
  height: 2844px;
  background-image: url("../assets/img/23.PNG");
  background-size: cover;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.zheng{
  display: flex;
  align-items: flex-start; /* 水平居中 */
  justify-content: space-between; /* 垂直居中 */
  width: 1000px;
}
.zheng img{
  width: 300px;
  height: 370px;
  border-radius: 4%;
}
.history{
  display: flex;
  align-items: flex-start; /* 水平居中 */
  justify-content: space-between; /* 垂直居中 */
  width: 1000px;
}
.history-1{
  width: 300px;
  height: 300px;
  border-radius: 50%;
  z-index: 3;
  top: 100px;
  left: 450px;
  position: absolute;
}
.history-2{
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-left: 300px;
}
.carousel-container {
  position: relative;
  width: 700px;
  height: 300px;
  overflow: hidden;
  margin-left: 500px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  position: absolute;
  transition-duration: 0.4s;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item img{
  width: 100%;
  height: 100%;
}
.el-carousel--horizontal{
  overflow: hidden;
}
</style>
