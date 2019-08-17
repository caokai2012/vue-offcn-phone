<template>
  <div class="index">
    <header>
      <div class="logo"></div>
      <div  class="more"></div>
    </header>
    <div class="banner">
      <el-carousel class="banner" :interval="5000" arrow="always" height="170px" direction="vertical">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="./../assets/images/index_banner1.png" alt="">
          <img src="./../assets/images/index_banner1.png" alt="">
          <img src="./../assets/images/index_banner1.png" alt="">
          <img src="./../assets/images/index_banner1.png" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <nav class="center">
      <div class="center_nav" v-for="(item,index) of list" :key="item.id">
        <router-link to="/info">
          <img :src="item.imgUrl" :alt="item.desc" :title="item.desc" >
          <p>{{ item.desc }}</p>
        </router-link>
      </div>
    </nav>
    <div class="adr">
      <img class="adr_left" src="./../assets/images/index_newWork.png" alt="">
      <div class="adr_content">
        <p>2017甘肃乡镇公务员考试笔试备考免费讲座</p>
        <p>陕西乡镇公务员考试模考活动</p>
      </div>
    </div>
    <div class="selected">
        <div class="selected_title">
          <img src="./../assets/images/index_top.png" alt="">
          <p>乡镇公务员</p>
          <el-select size="small" v-model="value" placeholder="选择报考省份" class="el-selectde">
            <el-option class="el-option"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              style="{height: 30px}"

               >
            </el-option>
          </el-select>
          <i class="el-icon-arrow-right"></i>
        </div>
    </div>
    <ul class="show-list">
        <li class="list-item" v-listIcon:iconBg="" v-for="item of showList">
          {{ item.title }}
        </li>
    </ul>
    <!-- 底部导航页面 -->
    <Foot/>
  </div>
</template>

<script>
import Foot from "./Foot";
export default {
  name: 'Index',
  components: {Foot},
  data() {
    return {
      options: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海',
      },
      ],
      value: '',
      showList:[
        {id:1,title:'2017年福建选调生考试公告，19日报名',
          msg:'2017年福建选调生考试公告，报名 31日考试 2017广发银行杭州分行校园招聘面试'},
        {
          id:2,title:'2017年福建选调生考试公告，19日报名',
          msg:'2017年福建选调生考试公告，报名 31日考试 2017广发银行杭州分行校园招聘面试'
        },
        {
          id:3,title:'2017广发银行杭州分行校园招聘面试通知',
          msg:'2017广发银行杭州分行校园招聘面试通知 2017广发银行杭州分行校园招聘面试'
        },
        {
          id:4,title:'2017年福建选调生考试公告，19日报名',
          msg:'2017年福建选调生考试公告，报名 31日考试 2017广发银行杭州分行校园招聘面试'
        }
      ],
      list:[
        {id:1,imgUrl:require('./../assets/images/index4.jpg'),desc:'面授课程'},
        {id:2,imgUrl:require('./../assets/images/index5.png'),desc:'网校课程'},
        {id:3,imgUrl:require('./../assets/images/index6.png'),desc:'图书材料'},
        {id:4,imgUrl:require('./../assets/images/index7.png'),desc:'在线讲座'},
        {id:5,imgUrl:require('./../assets/images/index8.png'),desc:'各地校区'},
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    height: 0.98rem;
    background: url("./../assets/images/index_logobg.jpg") no-repeat;
    background-size: contain;
  }
  .logo{
    float: left;
    width: 3.19rem;
    height: 0.47rem;
    margin: 0.1rem 0 0.2rem 0.2rem;
    background: url("./../assets/images/logo.png") no-repeat;
    background-size: contain;
  }
  .more{
    float: right;
    width: 0.8rem ;
    height: 0.47rem;
    margin: 0.1rem 0 0.2rem 0.2rem;
    background: url("./../assets/images/index_more.jpg") no-repeat 0.09rem 0.02rem;
    background-size: contain;
  }
  /* 轮播图 */
  .banner{
    height: 3.03rem ;
    margin-top: -0.14rem;
    overflow-x: hidden;
  }
  .el-carousel__item img{
    width: 100%;
    height: 3.03rem;
    opacity: 0.75;
    margin: 0;
    padding: 0;
    background: white;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* center  */
   .center{
     display: flex;
     justify-content:space-around;
   }
  .center_nav{
    width: 0.98rem;
    height: 2.0rem;
  }
  .center_nav img{
    margin: 0.3rem 0rem 0.2rem;
    width: 0.98rem;
    height: 0.98rem;
  }
  .center_nav a{
      text-align: center;
      font-size: 0.14rem;
      text-decoration: none;
      color: black;
  }
 /* 最新活动 */
  .adr{
    margin-top: 0.1rem;
    height: 1.5rem;
    background: url("./../assets/images/index_newbg.jpg") no-repeat;
    background-size: contain;
  }
  .adr .adr_left{
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.3rem 0.1rem;
  }
  .adr .adr_content{
    float: left;
    width: 4.8rem;
    margin-top: 0.3rem;
    padding-left: 0.15rem;
    font-size: 0.24rem;
    border-left: 1px #ccc solid;
    line-height: 0.4rem;
  }
  .adr .adr_content p:nth-child(1){
    color: #7f7f7f;
  }
  /* selected */
  .selected{
    height: 0.8rem;
    border-top: 10px #ccc solid;
  }
  .selected img{
    float: left;
    margin: 0.2rem 0.1rem 0;
    width: 0.58rem;
    height: 0.4rem;
  }
  .selected p{
    float: left;
    margin: 0.2rem 0.1rem 0;
    height: 0.4rem;
    width: 1.6rem;
    text-align: center;
    font-size: 0.3rem;
    font-weight: bolder;
    line-height: 0.4rem;
  }
  .el-input__inner {
    margin-top: 0.1rem;
    color: skyblue;
    height: 30px;
  }

  .el-selectde{
    float: left;
    width: 2.5rem;
    height: 0.1rem !important;
    margin: 0.15rem 0 0 0.1rem;
  }
  .el-icon-arrow-right{
    float: right;
    margin:0.3rem 0.2rem 0 0;
    font-size: 18px;
    font-weight: normal;
    color: #999999;
  }
  /* 列表展示 */
  .list-item{
    height: 0.86rem;
    margin:0.3rem 0rem 0rem 0rem;
    background: url("./../assets/images/index_list_icon.jpg") no-repeat;
    background-position: 0rem 0.23rem;
    line-height: 0.86rem;
    font-size: 0.28rem;
    font-weight: normal;
  }
</style>
