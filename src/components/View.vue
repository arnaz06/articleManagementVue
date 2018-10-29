<template>
  <div class="container" style="margin:auto; width:550px;">
    <img v-bind:src="article.thumbnail" class="img-fluid" alt="">
    <h2>{{article.title}}</h2>
    <p>{{article.CreatedAt}}</p><br>
    <p>{{article.content}}
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Table',
    data () {
      return {
        article:{},

      }
    },
    mounted(){
      this.getArticle()
    },methods:{
      getArticle(){
        axios({
          method: 'get',
          url: 'http://localhost:8081/v1/article/'+this.$route.params.id
        }).then((response)=>{
          console.log('lalala: ', response.data)
          this.article= response.data.Data
        }).catch(err=>{
          console.log('err: ', err)
        })
      },
    }
  }
</script>