<template>
    <div class="list">
      <header>
        <i class="el-icon-arrow-left el-icon head-left" @click="goBack"></i>
        <h3>2017福建乡镇公务员</h3>
      </header>
      <div class="title">
        <h3>乡镇公务员行测常识：灾害逃生常识</h3>
        <p>
          <span>中公教育公务员考试网  2017-02-13  11:18</span>
          <span>中公教育</span>
        </p>
      </div>
      <article>
        <p>【导语】乡镇公务员考试行测需要进行知识点完善，重点难点梳理。中公乡镇公务员网为帮助考生更好的备考行测考试，为大家整理了乡镇公务员知识的解题技巧，助力考生顺利通过乡镇公务员考试。
        </p>
        <h4>一.地震逃生</h4>
        <p>
          在震中地区，从地震发生到房屋倒塌，如果来不及跑出来可迅速躲到桌子或床铺的下面，也可以紧挨在墙根下或坚固的家具旁，趴在地上，闭目，用鼻子呼吸，可以用毛巾或衣物捂住口鼻，以隔挡呛人的灰尘。同时，需要注意的是要保护好要害部位，如头、胸等。如果发生地震时家中正在用火，应随手关掉煤气开关或电源开关，然后迅速躲避。另外，需要注意的是，躲避地震时一定要尽快远离外墙及门窗，可选择厨房、浴室、厕所、楼梯间等空间小而不易塌落的空间进行避震，不要盲目外逃或从楼上跳下，也不能使用电梯。
        </p>
        <p><a href="javascript:void (0)">5分钟快速了解乡镇公务员</a></p>
      </article>
      <div class="more">
        <p><a href="javascript:void (0)">点击查看更多</a></p>
      </div>
      <Foot/>
    </div>
</template>

<script>
  import Foot from './Foot'
    export default {
      components:{Foot},
      data(){
          return {

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
.list{

}
header{
  height: 0.98rem;
  background: url("./../assets/images/index_logobg.jpg") no-repeat;
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
  margin: 0.3rem 1.2rem 0rem;
  font-size: 0.3rem;
  font-weight: bolder;
  color: white;
}
  /*  */
  .title h3{
     font-size: 0.28rem;
    text-align: center;
    line-height: 1rem;
  }
.title p{
  font-size: 0.24rem;
  color: #999999;
}
.title p span:nth-child(1){
  margin-left: 0.2rem;
}
.title p span:nth-child(2){
  float: right;
  margin-right: 0.2rem;
  color: #f37676;
}
  /*  */
article{
  margin-top: 0.4rem;
  padding: 0rem 0.3rem;
  font-size: 0.28rem;
}
article p{
  text-indent: 2em;
  line-height: 0.6rem;
}
article h4{
  margin: 0.2rem 0;
  color:black ;
  font-weight: bolder;
}
  article a{
    text-align: center;
    color: #999999;
    text-decoration: none;
    cursor: pointer;
    line-height: 1rem;
  }
  .more{
    margin-bottom:0.3rem;
    text-align: center;
    font-size: 0.24rem;
  }
  .more a{
    color: #999999;
    text-decoration: none;
  }
</style>
