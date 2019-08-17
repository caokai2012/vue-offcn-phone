<template>
    <div class="info">
        <header>
          <i class="el-icon-arrow-left el-icon head-left" @click="goBack"></i>
          <h3>考试资讯</h3>
          <el-dropdown :hide-on-click="false" class="head-right">
              <span class="el-dropdown-link">
                {{ city }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  class="city-item" v-for="(item,index) of cityList"
                    v-model="selected" :key="index">
                  {{ item }}
                </el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
        </header>
      <div class="alert_info">
          <a>当前是全国考试公告列表，点击全国查看具体省份</a>
      </div>
       <InfoTabs/>

      <div class="info_more">
        点击查看更多
      </div>
      <!-- 底部导航 -->
      <foot/>
    </div>
</template>

<script>
  import Foot from './../Foot';
  import InfoTabs from './InfoTabs'
    export default {
      components:{Foot,InfoTabs},
        data(){
          return {
            current:0,
            selected: '',
            city:'全国',
            cityList:["北京","白银","保定","宝鸡"],
            tabs:[
              '公告大纲',
              '考试新闻',
              '报考指导',
            ],
           noticList:[
             '湖南省' ,'广东省 ','海南省' ,'四川省' ,'贵州省' ,'云南省' ,'陕西省' ,'甘肃省' ,'青海省' ,'台湾省'
           ],
          }
        },
      methods:{
        goBack(){
          this.$router.history.go(-1);
        }
      }
    }
</script>


<style scoped>
  .info{}
  header{
    height: 0.98rem;
    background: url("../../assets/images/index_logobg.jpg") no-repeat;
    background-size: contain;
  }
  .el-icon{
    color: white;
    font-size: 0.26rem;
  }
  .head-left{
    float: left;
    margin: 0.3rem 0rem 0rem 0.2rem;
  }
  header h3{
    float: left;
    margin: 0.3rem 2.1rem 0rem;
    font-size: 0.3rem;
    color: white;
  }
  .head-right{
    float: right;
    margin: -0.26rem 0.3rem 0 0;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white;
    font-size: 0.26rem;
  }
  .city-item{
    font-size: 0.2rem;
  }
  .el-icon-arrow-down{
    font-size: 0.12rem;
  }
  /* 提示信息 */
  .alert_info{
    height: 0.4rem;
    margin-top: -0.13rem;
    background: #eeeeee;
    font-size: 0.22rem;
    text-align: center;
    line-height: 0.4rem;
  }
  .alert_info a{
    color: #ef9890;
  }

  /* 考试公告 */
  .info_notice{
    height: 1.12rem;
    font-size: 0.26rem;
    line-height: 1.12rem;
    border-bottom: 9px #eeeeee solid;
  }
  .notice_left{
    float: left;
    font-weight: bold;
  }
  .notice_left img{
    width: 0.48rem;
    height: 0.32rem;
    margin: 0.3rem 0.1rem 0 0.1rem;
  }

  .notice_btn{
    float: right;
    margin: 0.3rem 0.3rem 0 0;
    color:#16ccaf;
    border: 1px #16ccaf solid;
    font-size: 0.28rem;
  }

  /* 列表展示 */
  .show-list{
    width: 6rem;
    margin: 0 auto;
  }
  .list-item{
    height: 0.86rem;
    background: url("../../assets/images/index_list_icon.jpg") no-repeat;
    background-position: 0rem 0.23rem;
    line-height: 0.86rem;
    font-size: 0.28rem;
    font-weight: normal;
    border-bottom: 1px #cccccc solid;
  }
  .list-item span{
    margin-left: 0.2rem;
  }
  .list-item .el-icon-arrow-right{
    float: right;
    margin-top: 0.3rem;
    color: #999999;
  }
  /* 点击查看更多 */
  .info_more{
    height: 0.8rem;
    text-align: center;
    color: #b3b3b3;
    font-size: 0.28rem;
    line-height: 0.8rem;
  }
</style>
