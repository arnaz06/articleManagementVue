<template>
  <div class="container" style="margin:auto; width:750px; margin-top: 50px">
    <form>
        <div class="form-group">
          <label for="search">Search Based on Title</label><br>
          <input v-model="search" type="text">
        </div>
      </form>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Posted</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles.Data" :key="article.ID">
          <th scope="row">{{article.ID}}</th>
          <th >{{article.title}}</th>
          <th >{{article.CreatedAt}}</th>
          <th > <router-link :to="`/article/`+article.ID" > <button type="button" class="btn btn-success btn-sm">View  </button></router-link>
              <router-link :to="`/edit/`+article.ID" > <button type="button" class="btn btn-primary btn-sm">Edit</button> </router-link>
              <button v-on:click="deleteArticle(article.ID)" type="button" class="btn btn-danger btn-sm">Delete</button>
          </th>
        </tr>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Table',
    data () {
      return {
        articles:[],
        search:''
      }
    },
    watch:{
      search(){
        if(this.search==''){
          this.getAllArticle()
        }else{
          this.searchArticle()
        }
      }
    },
    mounted(){
      this.getAllArticle()
    },methods:{
      getAllArticle(){
        axios({
          method: 'get',
          url: 'http://localhost:8081/v1/articles'
        }).then((response)=>{
          console.log('lalala: ', response.data)
          this.articles= response.data
        }).catch(err=>{
          console.log('err: ', err)
        })
      },
      deleteArticle(id){
        axios({
          method:'delete',
          url: 'http://localhost:8081/v1/article/'+id
        }).then(response=>{
          console.log('article deleted', id)
          this.getAllArticle()
        }).catch(err=>{
          console.log('err: ', err)
        })
      },
      searchArticle(){
        let url='http://localhost:8081/v1/articles/search?title='+this.search
        axios({
          method:'get',
          url:url
        }).then(response=>{
          console.log('lalala: ', response.data)
          this.articles= response.data
        }).catch(err=>{
          console.log('err: ', err)
        })
      }
    }
  }
</script>