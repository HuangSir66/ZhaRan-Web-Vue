<template>
  <div class="home">
    <div class="zhu">
      <img src="@/assets/img/22.png" class="flower">
    </div>
    <div class="ci">
      <div class="tuwen">
        <div style="font-size: 30px;font-weight: bolder">教学图文</div>
        <div class="alltu">
          <div class="wenzi">一、大理石纹
          </div>
          <div class="tupian1">
            <img src="@/assets/teach2/1-1.png">
            <img src="@/assets/teach2/1-2.png">
            <img src="@/assets/teach2/1-3.png">
            <img src="@/assets/teach2/1-4.png">
            <img src="@/assets/teach2/1-5.png">
          </div>
          <div class="wenzi">技法解析：1.将布打湿并拧干 2.随意抓 3.用橡皮筋扎紧 4.放入染料中浸泡20分钟 5.捞出用清水洗净并晾干
          </div>
          <div class="wenzi">二、夹扎法
          </div>
          <div class="tupian2">
            <img src="@/assets/teach2/2-1.png">
            <img src="@/assets/teach2/2-2.png">
            <img src="@/assets/teach2/2-3.png">
            <img src="@/assets/teach2/2-4.png">
            <img src="@/assets/teach2/2-5.png">
            <img src="@/assets/teach2/2-6.png">
          </div>
          <div class="wenzi">技法解析：1.将布打湿并拧干 2.进行折叠 3.再次折叠 4.用筷子和夹子进行夹扎 5.放入染料中浸泡20分钟  6.捞出用清水洗净并晾干
          </div>
          <div class="wenzi">三、鱼鳞纹
          </div>
          <div class="tupian3">
            <img src="@/assets/teach2/3-1.png">
            <img src="@/assets/teach2/3-2.png">
            <img src="@/assets/teach2/3-3.png">
            <img src="@/assets/teach2/3-4.png">
            <img src="@/assets/teach2/3-5.png">
            <img src="@/assets/teach2/3-6.png">
          </div>
          <div class="wenzi">技法解析：1.用绳子将布的两端卷起来 2.从两端将卷好的布都撸在一起 3.将绳子打结系紧 4.放入染料中15分钟 5.捞出解开绳子用清水洗净 6.晾干
          </div>
          <div class="wenzi">四、唐松绞
          </div>
          <div class="tupian4">
            <img src="@/assets/teach2/4-1.png">
            <img src="@/assets/teach2/4-2.png">
            <img src="@/assets/teach2/4-3.png">
            <img src="@/assets/teach2/4-4.png">
            <img src="@/assets/teach2/4-5.png">
          </div>
          <div class="tupian4">
            <img src="@/assets/teach2/4-6.png">
            <img src="@/assets/teach2/4-7.png">
          </div>
          <div class="wenzi">技法解析：1.以布的中心用水消笔依次以1厘米的间隔画好 2.用水消笔借助圆规依次画圆 3.将画好的圆间隔1厘米与圆心连线 4.用平针法一圈一圈的缝线 5.将缝好的线抽紧打结 6.放入染料中浸泡15分钟 7.捞出洗净晾干
          </div>
          <div class="wenzi">五、六角星形
          </div>
          <div class="tupian5">
            <img src="@/assets/teach2/5-1.png">
            <img src="@/assets/teach2/5-2.png">
            <img src="@/assets/teach2/5-3.png">
            <img src="@/assets/teach2/5-4.png">
            <img src="@/assets/teach2/5-5.png">
          </div>
          <div class="wenzi">技法解析：1.用水消笔画出六角星形 2.用针缝法按照画的形状缝 3.缝完之后将线抽紧绕线扎紧 4.放入染料中浸泡15分钟后捞出 5.洗净晾干
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachGraphic2"
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
  width: 165px;
  height: 200px;
  margin: 0 5px;
}
.tupian3{
  position: relative;
}
.tupian3 img{
  width: 165px;
  height: 170px;
  margin: 0 5px;
}
.tupian4{
  position: relative;
}
.tupian4 img{
  width: 200px;
  height: 170px;
  margin: 0 5px;
}
.tupian5{
  position: relative;
}
.tupian5 img{
  width: 200px;
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
