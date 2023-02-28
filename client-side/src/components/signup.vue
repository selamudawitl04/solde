<template>
    <div v-if="!submitted">
        <form action=""  id="sign-up-form" @submit.prevent="submitForm">
            <div class="input">
                 <label for="">Name</label>
                 <input type="text"  v-model="name" name="name">
            </div>

            <div  class="input">
                <label for="">Email</label>
                <input type="text" v-model="email" name="email">
            </div>

           <div  class="input">
               <label for="">Password</label>
                <input type="password"  v-model="password" name="password">
           </div>

           <div  class="input">
                <label for="">Confirm Password</label>
                <input type="password"  id="password"  v-model="passwordConfirm" name="confirm">
           </div>
           <div  class="input">
                <input type="submit" name="submit" id="confirm" @click="submitForm" >
           </div>
        </form>
    </div>
   
</template>
<script>
    import userDataService from '../services/userDataService';
    console.log("Why not work");
    export default {
        data() {
            return {
                name: "",
                email: '',
                password: "",
                passwordConfirm:"",
                submitted: false
            };
         },
         methods: {
             submitForm(){
                 var data = {
                     name:this.name,
                     email:this.email,
                     password: this.password,
                     passwordConfirm: this.passwordConfirm
                 };
                 userDataService.signUp(data).then(response =>{
                    // document.cookie = 'jwt=' + response.data.token;
                     //document.cookie = `name = selamu`
                     console.log(response);
                 }).catch(err=>{
                     console.log("There is error");
                 })
             }
         }
    }
</script>
<style>
    #sign-up-form{
        display: flex;
        flex-direction: column;
    }
    .input{
        color: red;
    }
    input{
    
        position: relative;
        left: 120px;
        margin-top: 5px;
    }
</style>
