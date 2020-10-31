<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" v-model="first_name" class="form-control" name="first_name" placeholder="First Name">
          </div>

           <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" v-model="last_name" class="form-control" name="last_name" placeholder="Last Name">
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Email">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>

          <button class="btn btn-lg btn-primary btn-block">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import EventBus from './EventBus'

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      axios.post('/api/register', 
        {
          name: this.first_name + ' ' +this.last_name,
          email: this.email,
          password: this.password
        }
      ).then(res => {
        console.log(res)
        this.$router.push({name: 'Login'})
      }).catch(err => {
        console.log(err)
      })

    },
  }
  
}
</script>

