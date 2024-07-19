<template>
  <div>
  <el-container>
    <el-header class="header">
      <div class="nav-container">
        <div
          class="nav-zha"
          style="color: inherit; text-decoration: none;"
        >
          扎染
        </div>
        <div class="an">
          <div
              class="nav-item"
              style="color: inherit; text-decoration: none;"
          >
            <el-dropdown>
              <span class="el-dropdown-link">
                首页
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-dropdown-item">关于扎染</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">视频介绍</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">历史来源</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">更多消息</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div
              class="nav-item"
              style="color: inherit; text-decoration: none;"
          >
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                咨询
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-dropdown-item">黄金糕</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">狮子头</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">螺蛳粉</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">双皮奶</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div
              class="nav-item"
              style="color: inherit; text-decoration: none;"
          >
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                展览
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-dropdown-item">黄金糕</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">狮子头</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">螺蛳粉</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">双皮奶</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div
              class="nav-item"
              style="color: inherit; text-decoration: none;"
          >
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                历史
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-dropdown-item">黄金糕</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">狮子头</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">螺蛳粉</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">双皮奶</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div
              class="nav-item"
              style="color: inherit; text-decoration: none;"
          >
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                服务
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="el-dropdown-item">黄金糕</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">狮子头</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">螺蛳粉</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">双皮奶</el-dropdown-item>
                <el-dropdown-item class="el-dropdown-item">蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="header-underline">
      </div>
    </el-header>
    <el-main
      :style="{ background: 'url(' + backgroundSrc + ')' ,width: '100%',backgroundSize: '100% 100%',padding:0}"
    >
      <transition name="scale" mode="out-in">
        <router-view />
      </transition>
    </el-main>
    <el-footer class="footer">
    </el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundSrc: ''
    }
  },
}
</script>

<style>
.header {
  height: 12vh!important;
  background-color: rgb(41,70,113);
  color: white;
}
.header-underline{
  margin-top: 5px;
  border-bottom: 2px rgb(0, 59, 62) solid;
}
.el-dropdown-link {
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 20px;
}
.an{
  display: flex;
  margin-right: 30px
}
.el-dropdown-item{
  color: rgb(255, 255, 255)!important;
  background-color: rgb(41,70,113);
}
.nav-container {
  display: flex; /* 设置为flex布局 */
  justify-content: space-between; /* 均匀分布子元素 */
  align-items: center; /* 垂直居中 */
  height: 100%;
}
.nav-item {
  padding: 10px; /* 调整导航键之间的间距 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  color: inherit; /* 继承父元素的字体颜色 */
  text-decoration: none; /* 取消下划线 */
  font-size: 20px;
  margin-right: 40px;
}
.nav-item:hover {
  transform: scale(1.1); /* 放大效果 */
}
.nav-zha {
  padding: 10px; /* 调整导航键之间的间距 */
  transition: all 0.3s ease; /* 添加过渡效果 */
  color: inherit; /* 继承父元素的字体颜色 */
  text-decoration: none; /* 取消下划线 */
  font-size: 50px;
  margin-left: 150px;
}
.footer{
  width: 100%;
  height: 252px!important;
  background-image: url("../assets/img/21.PNG");
}
.footer img{
  width: 100%;
  height: 100%;
}
</style>
