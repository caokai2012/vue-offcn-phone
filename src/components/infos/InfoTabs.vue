<template>
    <div class="info_tab">
      <div class="info_tabs">
        <div class="tabs_item" v-for="(item,index) of tabs" :key="index"
             :class="{active : current === index,two : 1 === index}"
             @click="changeTab(item.name,index)">
          <!-- 添加路由 -->
          <router-link :to="'/info/'+item.path">
            <div :class="{two : 1 === index,tabs_item_div:true}"> {{ item.name}}</div>
          </router-link>
        </div>
      </div>
      <router-view/>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            current:0,
            num:1,
            tabs:[
              {name:'公告大纲',path:'infoline'},
              {name:'考试新闻',path:'infonews'},
              {name:'报考指导',path:'infoguid'},
            ],
          }
        },
      methods:{
        changeTab(val,num){
          // this.content = val;
          this.current = num;
        }
      }
    }
</script>

<style scoped>
  /* info_tabls */
  .info_tabs{
    height: 0.9rem;
    font-size: 0.22rem;
    text-align: center;
    font-weight: bolder;
    overflow: hidden;
  }
  .tabs_item{
    float: left;
    height: 0.8rem;
  }
  .tabs_item_div{
    width: 2rem;
    height: 0.32rem;
    margin-top: 0.3rem;
    line-height: 0.32rem;
  }

  .info_tabs .active > div{
    color: #16ccaf;
  }

  .info_tabs a .active {
    border-bottom: 1px solid #16ccaf;
  }
  .tabs_item .two{
    border-left:1px #ccc solid !important;
    border-right:1px #ccc solid !important;
  }
  .tabs_item a{
    text-decoration: none;
    color: black;
  }
</style>
