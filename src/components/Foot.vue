<template>
  <div>
    <footer class="foot">
      <nav class="footer-nav" v-for="item of footList">
        <a href="#">
          <img :src="item.imgUrl" :alt="item.title">
          <p> {{ item.title }}</p>
        </a>
      </nav>
    </footer>
  </div>
</template>

<script>
  import foot1 from './../assets/images/index_foot1.png';
  import foot2 from './../assets/images/index_foot2.png';
  import foot3 from './../assets/images/index_foot3.png';
  import foot4 from './../assets/images/index_foot4.png';
    export default {
        data(){
          return {
            footList:[
              {imgUrl: foot1,title:'在线咨询'},
              {imgUrl: foot2,title:'官方微信'},
              {imgUrl: foot3,title:'课程辅导'},
              {imgUrl: foot4,title:'交流群'},
            ],
          }
        }
    }
</script>

<style scoped>
  .foot{
    display: flex;
    justify-content:space-around;
    border-top: 2px #ccc solid;
  }
  .footer-nav{
    padding: 0.12rem 0rem 0.16rem;
    width: 0.85rem;
    height: 0.75rem;
    font-size: 0.18rem;
    text-align: center;
  }
  .footer-nav a{
    text-decoration: none;
    color: #6e6e6e;
  }

  .footer-nav img{
    height: 0.36rem;
    margin-bottom: 0.1rem;
  }

</style>
