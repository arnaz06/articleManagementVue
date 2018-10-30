<template>
  <div class="container" style="margin:auto; width:450px; margin-top:150;">
    <form>
    <div class="form-group" >
      <label for="title">Title</label>
      <input type="text" v-model="title" class="form-control" name="title">
    </div>
    
    <div class="form-group" >
      <label for="content">Content</label>
      <textarea class="form-control" v-model="content" rows="5" id="content"></textarea>
    </div>
    <div class="form-group">
      <input type="file" ref="thumbnail" @change="handleFileUpload" class="form-control-file" id="thumbnail">
    </div>
    <button type="button" class="btn btn-primary" @click="createArticle()">Submit</button>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  import fetch from 'node-fetch'
  export default {
    name: 'Table',
    data () {
      return {
        title:'',
        content:'',
        thumbnail:null

      }
    },methods:{
      createArticle(){
        let formData = new FormData()
        formData.append('thumbnail',this.thumbnail)
        formData.append('title',this.title)
        formData.append('content',this.content)
        axios({
          method: 'post',
          url: 'http://localhost:8081/v1/article',
          headers:{
             'Content-Type': 'multipart/form-data'
          },
          data:formData
        })
        // fetch('http://localhost:8081/v1/article',{
        //   method: 'post',
        //   body:{
        //     title: this.title,
        //     content: this.content,
        //     thumbnail: formData
        //   }
        // })
        .then((response)=>{
          console.log('lalala: ', response)
        }).catch(err=>{
          console.log('err: ', err)
        })
      },
      handleFileUpload(event){
        this.thumbnail= event.target.files[0]
        console.log(this.thumbnail)
      }
    }
  }
</script>
