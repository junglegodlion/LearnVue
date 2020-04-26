<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/news'
      }
    },
    // 当这个组件被构造出来会回调这个函数
    // created() {
    //   console.log('home created');
    //   document.title = '首页'
    // },
    // 当组件被挂载到dom上回调这个函数
    // mounted() {
    // },
    // 当页面刷新的时候回调这个函数
    // updated() {
    // },
    destroyed() {
      console.log('home destroyed');
    },

    // 这两个函数, 只有该组件被保持了状态使用了keep-alive时, 才是有效的
    // 激活时被调用
    activated() {
      console.log(this.path);
      this.$router.push(this.path).catch(err => {err});
      console.log('activated');
    },
    // 没有被激活时被调用
    deactivated() {
      console.log('deactivated');
    },
    // 组件内的守卫
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
