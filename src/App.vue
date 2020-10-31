<template>
  <div id="app">
    <navbar></navbar> 
    <router-view/>
  </div>
</template>
<script>
import NavBar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'NavBar': NavBar
  }

}
</script>