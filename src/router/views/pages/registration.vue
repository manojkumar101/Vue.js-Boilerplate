<template>
<div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="../../../assets/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from Registration!</p>
                        <router-link to="/login" class="btn btnLogin">Login</router-link>
                        <!-- <input type="submit" name="" value="Login"/><br/> -->
                    </div>
                    <div class="col-md-9 register-right">
                        <div id="myTabContent" class="tab-content">
                            <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Contributor</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input v-model="userdetails.firstName" type="text" class="form-control" placeholder="First Name *" required/>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="userdetails.userName" type="text" class="form-control" placeholder="User Name *" required/>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="password" type="password" class="form-control" placeholder="Password *" required/>
                                        </div>
                                        <div class="form-group">
                                            <input v-model="confirmPassword" type="password"  class="form-control"  placeholder="Confirm Password *" />
                                        </div>
                                        
                                        <!--  -->
                                        <div class="form-group"  >
                                            <select  v-model="userdetails.country" class="form-control" >
                                                <option selected disabled>Please select your Country</option>
                                                <option>India</option>
                                                <option>America</option>
                                                <option>Maldive</option>
                                            </select>
                                        </div>
                                        <!--  -->
                                        <div class="form-group"  >
                                            <select  v-model="userdetails.city" class="form-control" >
                                                <option selected disabled>Please select your City</option>
                                                <option>Ambala</option>
                                                <option>Nashik</option>
                                                <option>Amritsar</option>
                                            </select>
                                        </div>
                                        <!--  -->
                                         <div v-if="flag==1" class="alert alert-danger" role="alert">
                                                <strong>Password not matching</strong>
                                        </div>
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input v-model="userdetails.gender" type="radio" name="gender" value="Male" checked>
                                                    <span> Male </span> 
                                                </label>
                                                <br>
                                                <label class="radio inline"> 
                                                    <input v-model="userdetails.gender" type="radio" name="gender" value="Female">
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input v-model="userdetails.lastName" type="text" class="form-control" placeholder="Last Name*" />
                                        </div>
                                        <div class="form-group">
                                            <input v-model="userdetails.emailId" type="email" class="form-control" placeholder="Your Email *" />
                                        </div>
                                        <div class="form-group">
                                            <input v-model="userdetails.phone" type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" />
                                        </div>
                                        <div class="form-group">
                                            <input v-model="userdetails.address" type="text" class="form-control"  placeholder="Address *" required/>
                                        </div>
                                         <div class="form-group"  >
                                            <select  v-model="userdetails.state" class="form-control" >
                                                <option selected disabled>Please select your State</option>
                                                <option>Haryana</option>
                                                <option>Punjab</option>
                                                <option>Maharashtra</option>
                                            </select>
                                        </div>
                                        <div class="form-group"  >
                                            <select  v-model="userdetails.pin" class="form-control" >
                                                <option selected disabled>Please select your Pincode</option>
                                                <option>133001</option>
                                                <option>1001001</option>
                                                <option>422007</option>
                                            </select>
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register" @click="register"/>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import { authMethods } from '@state/helpers' 
export default {
    data(){
        return {
            userdetails:{
                firstName:"",
                lastName:"",
                userName:"",
                address:"",
                emailId:"",
                phone:"",
                password:"",
                country:"Please select your Country",
                state:"Please select your State",
                city:"Please select your City",
                pin:"Please select your Pincode",
                gender:"Male"
            },
            password:"",
            confirmPassword:"",
            flag:0
        }
    },
    methods:{
        ...authMethods,
        register(){
            var data={};
            data.user_name=this.userdetails.userName;
            data.user_first_name=this.userdetails.firstName;
            data.user_last_name=this.userdetails.lastName;
            data.user_email=this.userdetails.emailId;
            data.user_phone=this.userdetails.phone;
            data.user_address=this.userdetails.address;
            data.user_country=this.userdetails.country;
            data.user_state=this.userdetails.state;
            data.user_city=this.userdetails.city;
            data.user_zip_code=this.userdetails.pin;
            data.user_gender=this.userdetails.gender;
            if(this.password=== this.confirmPassword)
               {  data.password=this.password;}
            else
              {  this.flag=1;}
            
            this.saveuserdetails(data).then((response) => {
          console.log("Response : ",response)
        })

        }
    }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #17a2b8;
}
.register{
    padding: 3%;
    margin-top: 3%;
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.register-left{
    margin-top: 4%;
    color: #fff;
    text-align: center;
}
.register-left input{
    width: 60%;
    padding: 2%;
    margin-top: 30%;
    margin-bottom: 3%;
    font-weight: bold;
    color: #383d41;
    cursor: pointer;
    background: #f8f9fa;
    border: none;
    border-radius: 1.5rem;
}
.register-right{
    background: #f8f9fa;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}
.register-left img{
    width: 25%;
    margin-top: 15%;
    margin-bottom: 5%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}

@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    padding: 12%;
    margin-top: -9%;
    font-weight: lighter;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    width: 50%;
    padding: 2%;
    margin-top: 10%;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background: #0062cc;
    border: none;
    border-radius: 1.5rem;
}
.btnLogin{
    float: center;
    width: 50%;
    padding: 2%;
    margin-top: 10%;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background: #0062cc;
    border: none;
    border-radius: 1.5rem;
}
.register .nav-tabs{
    float: right;
    width: 28%;
    margin-top: 3%;
    background: #0062cc;
    border: none;
    border-radius: 1.5rem;
}
.register .nav-tabs .nav-link{
    height: 34px;
    padding: 2%;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
    text-align: center;
}
</style>