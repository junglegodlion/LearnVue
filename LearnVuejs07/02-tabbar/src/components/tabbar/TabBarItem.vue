<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/home.svg" alt="">-->
<!--      <div>首页</div>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem"
  }
</script>

<style scoped>

  /*等距分布*/
  .tab-bar-item {
    flex: 1;
    /*居中*/
    text-align: center;
    height: 49px;
    /*改变字体大小*/
    font-size: 14px;
  }

  /*设置图标大小*/
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    /*上边距*/
    margin-top: 3px;
    /*取消图片下方的空隙（图片下方默认有3像素空袭）*/
    vertical-align: middle;
    /*设置元素的下外边距*/
    margin-bottom: 2px;
  }
</style>
