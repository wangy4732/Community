<template>
  <div class="panel">
    <div class="layui-container">
        <ul class="">
          <li class="item"><a href="">首页</a></li>
          <li class="item"><a href="">提问</a></li>
          <li class="item"><a href="">分享</a></li>
          <li class="item"><a href="">讨论</a></li>
          <li class="item"><a href="">建议</a></li>
          <li class="item"><a href="">动态</a></li>
          <li class="item layui-hide-xs"><span class="line"></span></li>
          <li class="item layui-hide-xs"><a href="">我发表的贴</a></li>
          <li class="item layui-hide-xs"><a href="">我收藏的贴</a></li>
        </ul>
        <div class="right layui-hide-xs">
          <span class="search layui-icon layui-icon-search"></span>
          <a href="" class="layui-btn">发表新贴</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .panel {
    height: auto !important;
  }
  ul {
    li {
      width: 33.33333333333333%;
    }
  }
}
.panel{
  position: relative;
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
}
ul {
  li {
    display: inline-block;
    a {
      padding: 0 20px;
    }
  }
  .line {
    display: inline-block;
    height: 10px;
    width: 1px;
    background-color: #e2e2e2;
    vertical-align: center;
    margin: 0 20px;
  }
}
.right {
  position: absolute;
  top: 0;
  right: 0;
  .search {
    margin: 0 20px;
  }
}
</style>
