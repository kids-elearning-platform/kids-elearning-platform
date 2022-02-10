<template>
   <div class="container">
    <section>
      <form class="logg" @submit.prevent="handleSubmit">
       
        <label>
          <input type="email" name="email" id="email" required />
          <div class="label-text">Email</div>
        </label>
        <label>
          <input type="password" name="phone" id="phone" required />
          <div class="label-text">Password</div>
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    </section>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  name: "admin",
  data (){
      return {
          email:'',
          password: ''
      }
  },
  methods:{
     async handleSubmit(){
         const response = await  axios.post('/admin',{
             email:this.email,
             password:this.password
         })
         console.log(response)
         localStorage.setItem('token',response.data.token)

      }
  }
}
</script>

<style>
/* body{
  background-color: #1d2227;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
} */

div.container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.logg{
    /* background-image: url(""); */
    background: rgba(0, 0, 0, 0.733);
    margin-left: 1200px;
    margin-top: 150px;
}

/* form design */

form {
  text-align: center;
  border: 1px solid #4A4A4A;
  padding: 30px;
}

label {
  display: block;
  letter-spacing: 4px;
  padding-top: 30px;
  text-align: center;
}

/* animation for the text to float up */

label .label-text {
  color: #ffffff;
  cursor: text;
  font-size: 15px;
  line-height: 20px;
  text-transform: uppercase;
  -moz-transform: translateY(-34px);
  -ms-transform: translateY(-34px);
  -webkit-transform: translateY(-34px);
  transform: translateY(-34px);
  transition: all 0.3s;
}

/* remove the input box styling */
label input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #4A4A4A;
  color: rgb(0, 0, 0);
  font-size: 20px;
  letter-spacing: 1px;
  outline: 0;
  padding: 5px 20px;
  text-align: center;
  transition: all 0.3s;
  width: 200px;
}

/* once you click in the input the input width box animates */

label input:focus {
  max-width: 100%;
  width: 400px;
}

/* the text floats up and turns white */

label input:focus + .label-text {
  color: #F0F0F0;
  font-size: 13px;
  margin-top: 10px;
  -moz-transform: translateY(-74px);
  -ms-transform: translateY(-74px);
  -webkit-transform: translateY(-74px);
  transform: translateY(-74px);
}

/* the text floats up during form validation */

label input:valid + .label-text {
  font-size: 13px;
  -moz-transform: translateY(-74px);
  -ms-transform: translateY(-74px);
  -webkit-transform: translateY(-74px);
  transform: translateY(-74px);
}

/* button styling */

button {
  background: transparent;
  color: #F0F0F0;
  border: 2px solid #F0F0F0;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 20px 75px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  margin: 15px 30px;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

button:hover, button:focus {
  background-color: white;
  color: #333333;
}


</style>