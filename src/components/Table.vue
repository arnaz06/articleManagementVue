<template>
  <div class="container" style="margin:auto; width:750px; margin-top: 50px">
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
        <tr>
          <th scope="row">1</th>
          <th >lorem impsue</th>
          <th >lorem impsue</th>
          <th ><button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
          </th>
        </tr>
        <tr>
          <th scope="row">1</th>
          <th >lorem impsue</th>
          <th >lorem impsue</th>
          <th ><button type="button" class="btn btn-success btn-sm">View</button>
              <button type="button" class="btn btn-primary btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm">Delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data () {
      return {
        msg: 'Welcome to Crypto Info'
      }
    }
  }
</script>