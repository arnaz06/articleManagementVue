

<template>
  <div>
    <h1>{{ msg }}</h1>
    <button class="btn btn-warning">New Article</button>
    <app-search></app-search>
    <app-table></app-table>
  </div>
</template>

<script>
  import Table from './Table.vue'
  import Search from './Search.vue'
  export default {
    name: 'Dashboard',
    components:{
      'app-table': Table,
      'app-search': Search,
    },
    data () {
      return {
        msg: 'Article Management'
      }
    }
  }
</script>