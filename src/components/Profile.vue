<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center">Profile</h1>
      </div>

      <table class="table col-md-6 mx-auto">
        <t-body>
          <tr>
            <td>Name</td>
            <td>{{whole_name}}</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>{{email}}</td>
          </tr>
        </t-body>
      </table>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    this.getUser().then(res => {
      this.whole_name = res.user.name
      this.email = res.user.email
      return res
    })
     return {
       whole_name: '',
       email: ''
     }
  },
  methods: {
    getUser () {
      return axios.get('/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.usertoken}`
        }
      }).then(res => {
        return res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
