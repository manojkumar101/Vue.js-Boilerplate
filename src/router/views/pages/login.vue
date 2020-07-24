<template>
    
     <div id="login" class="image">
        <h3 class="text-center text-white pt-5">Welcome Page !</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input id="username"  v-model="username"  type="text"  name="username" class="form-control" >
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input  id="password" v-model="password"   type="text" name="password"  class="form-control" >
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me (not working) </span><span><input id="remember-me" v-model="remember" name="remember-me"  type="checkbox" ></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" @click.prevent="login">
                                ``
                            </div>
                            <div id="register-link" class="text-right">
                                <router-link to="/registration"><a href="#" class="text-info">Register here</a></router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            remember:'',
            flag:0
        }
    },
    methods:{
        login(){
            var data={};
            data.username=this.username;
            data.password=this.password;

            console.log("Input Data :",data);
        }
    }
}
</script>
<style >
body {
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #17a2b8;
}

/* jsconfig.json add kr lenA */

 /* body {
    background-image: url("./../../../assets/donation.jpg");
    background-color:white;
   
    background-repeat: no-repeat;
    background-size: cover;
  } */
 .image {
    background-color: #17a2b8;
    background-image: url(/img/donation.6bd64de4.jpg);
    background-repeat: repeat;
    background-position: center;
    background-size: 100vh;
}
#login .container #login-row #login-column #login-box {
  max-width: 600px;
  height: 320px;
  margin-top: 120px;
  background-color: #EAEAEA;
  border: 1px solid #9C9C9C;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>