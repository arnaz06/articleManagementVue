

<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link :to="`/new-article`" ><button class="btn btn-warning">New Article</button></router-link>
    <app-table></app-table>
  </div>
</template>

<script>
  import Table from './Table.vue'
  export default {
    name: 'Dashboard',
    components:{
      'app-table': Table,
    },
    data () {
      return {
        msg: 'Article Management'
      }
    }
  }
</script>