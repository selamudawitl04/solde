<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
          <!-- Tabs Titles -->
          <h2 class="active"> Sign In </h2>
          <h2 class="inactive underlineHover">Sign Up </h2>
      
          <!-- Icon -->
          <div class="fadeIn first">
            <img src="" id="icon" alt="User Icon" class="fas fa-heart" />
          </div>
    
          <!-- Login Form -->
          <form class="login-form" @submit="$event.preventDefault()">
            <input type="text" id="login" class="fadeIn second" name="email" placeholder="email" v-model="email">
            <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" v-model="password">
            <MyButton buttonText="Log In" @click="submitForm"/>
    
          </form>
      
          <!-- Remind Passowrd -->
          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>
      
        </div>
      </div>

</template>
<script>
    import MyButton from './MyButton.vue';
    import userDataService from '../services/userDataService';
    export default {
        name: 'login',
        components:{
          MyButton
        },
        data() {
            return {
                email: '',
                password: "",
                submitted: true
            };
         },
         methods: {
             submitForm(){
                var data = {
                     email:this.email,
                     password: this.password,
                };
                userDataService.login(data).then(response =>{
                     console.log(response);
                     this.submitForm = false;
                 }).catch(err=>{
                     console.log("There is error" + err);
                 })
             }
         },
         beforeCreate(){
          console.log('Before create')
        }
    }
  
</script>
