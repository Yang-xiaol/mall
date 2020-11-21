<template>
  <div id="home">
    <!--导航条-->
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <!--轮播图-->
   <home-swiper :banners="banners"/>
    <!--推荐选项卡-->
    <recommend-view :recommends="recommends"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
    return{
      //储存访问到的数据
      //请求到的数据
      // result:null
      //拿出其中的数据 轮播图所拿的数据轮播取自banners
      banners:[],
      recommends:[]
    }
  },
    //生命周期 创建完就开始执行
    created() {
      getHomeMultidata().then(res =>{
        console.log(res);
        //拿到请求结果
        this.result = res;
        //拿出结果里的具体数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-high-text);
    color: var(--color-background);
  }
</style>
