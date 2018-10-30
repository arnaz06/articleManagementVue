<template>
  <div class="container" style="margin:auto; width:450px; margin-top:150;">
    <img v-bind:src="img" class="img-fluid" alt="">
    <form>
    <div class="form-group" >
      <label for="title">Title</label>
      <input type="text" v-model="title"  class="form-control" name="title">
    </div>
    
    <div class="form-group" >
      <label for="content">Content</label>
      <textarea class="form-control" v-model="content"  rows="5" id="content"></textarea>
    </div>
    <div class="form-group">
      <input type="file" ref="thumbnail" @change="handleFileUpload" class="form-control-file" id="thumbnail">
    </div>
    <button type="button" class="btn btn-primary" @click="editArticle()">Update</button>
    <router-link :to="`/`" ><button type="button" class="btn btn-secondary" >Dashboard</button></router-link>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  import swal from 'sweetalert2'
  import fs from 'fs'
  export default {
    name: 'Edit',
    data () {
      return {
        title:'',
        content:'',
        thumbnail:null,
        article:'',
        ifNotUpdateImage:'',
        img:''
      }
    },mounted(){
      this.getArticle()
    },methods:{
      editArticle(){
        let formData = new FormData()
        if (this.thumbnail == null){
          formData.append('imgNil','nil')
          formData.append('ifNotUpdateImage',this.ifNotUpdateImage)
        }else{
          formData.append('imgNil','notNil')
          formData.append('thumbnail',this.thumbnail)
        }
        formData.append('title',this.title)
        formData.append('content',this.content)
        axios({
          method: 'put',
          url: 'http://localhost:8081/v1/article/'+this.$route.params.id,
          headers:{
             'Content-Type': 'multipart/form-data'
          },
          data:formData
        })
        .then((response)=>{
          console.log('lalala: ', response)
          swal(
              'Updated',
              'You clicked the button!',
              'success'
            )
        }).catch(err=>{
          console.log('err: ', err)
          swal(
              'Something Went wrong',
              'You clicked the button!',
              'warning'
            )
        })
      },
      handleFileUpload(event){
        this.thumbnail= event.target.files[0]
        console.log(this.thumbnail)
      },
      getArticle(){
        axios({
          method: 'get',
          url: 'http://localhost:8081/v1/article/'+this.$route.params.id
        }).then((response)=>{
          this.title= response.data.Data.title
          this.content= response.data.Data.content
          this.img= response.data.Data.thumbnail
          let img= response.data.Data.thumbnail.split('/')
          this.ifNotUpdateImage= img[img.length-1]
          
          // this.downloadImage()
        }).catch(err=>{
          console.log('err: ', err)
        })
      },
      downloadImage(){
        // axios({
        //   method:'get',
        //   url:' http://localhost:8081/v1/download/image?image='+this.imageTemp
        // }).then(response=>{
        //     console.log('ulala', response)
        // }).catch(err=>{
        //   console.log('err: ', err)
        // })

      }
    }
  }
</script>
