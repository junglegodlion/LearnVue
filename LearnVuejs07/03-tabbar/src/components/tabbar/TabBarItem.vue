<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
<!--    这里用div标签将slot插槽包裹，是因为之后slot会被完全取代，样式会不起作用-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        // 当前激活的路径是不是this.path，-1代表不是
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        // 三目运算
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(err => {err})
        console.log(this.path);
      }
    }
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
