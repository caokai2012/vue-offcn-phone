<template>
  <div class="info_guid">
    <div class="info_notice">
      <div class="notice_left">
        <img src="./../../assets/images/info_ding.png" alt="">
        <span>2017山东乡镇公务员考试指导</span>
      </div>
      <el-button plain size="small" class="notice_btn">考试指导</el-button>
    </div>
    <div class="info_list">
      <ul class="show-list">
        <li class="list-item"
            v-listIcon:iconBg="" v-for="(item ,index) of noticList" :key="index">
          <router-link to="/list">
            <span>{{ item }}乡镇公务员考试指导</span>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          noticList:[
            '湖南省' ,'广东省 ','海南省' ,'四川省' ,'贵州省' ,'云南省' ,'陕西省' ,'甘肃省' ,'青海省' ,'台湾省'
          ],
        }
      },
    }
</script>

<style scoped>
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
    background: url("./../../assets/images/index_list_icon.jpg") no-repeat;
    background-position: 0rem 0.23rem;
    line-height: 0.86rem;
    font-size: 0.28rem;
    font-weight: normal;
    border-bottom: 1px #cccccc solid;
  }
  .list-item a{
    text-decoration: none;
    color: black;
  }
  .list-item span{
    margin-left: 0.2rem;
  }
  .list-item .el-icon-arrow-right{
    float: right;
    margin-top: 0.3rem;
    color: #999999;
  }
</style>
