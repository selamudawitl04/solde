<template>
  <div id="app" class="home-container">
    <nav class="navbar">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/learn" class="nav-link">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/play" class="nav-link">Play</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/friends" class="nav-link">Friend</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/logout" class="nav-link">Log Out</router-link>
        </li>  -->
    </nav>
    <div class="container">
      <router-view /> 
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  return:{
    show:"false"
  }
};

</script>
<style>
  .container{
    margin: 0;
    text-align: center;
    /* background-color: red; */
  }
  .home-container{
    margin: 0;
  }
  .navbar{
    display: flex;
    list-style-type: none;
    background-color: #4fc08d;
    margin: 0;
    color: white;
  }
  .nav-item{
    padding: 1.75rem 5rem;
    margin: auto;
    /* background-color: blue; */
  }
  .nav-link{
    color: white;
    text-decoration: none;
    font-size: large;
    font-weight: bold;
  }


 

</style>