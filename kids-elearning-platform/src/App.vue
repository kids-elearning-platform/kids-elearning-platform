<template>
  <nav id="navv">
    <i class="fas fa-bars"></i>

    <label class="logo">Kids World</label>
    <ul id="stt">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/Contact">Contact</router-link></li>
      <li><router-link to="/Challenge">Challenge</router-link></li>
      <li><router-link to="/Statistic">statistic</router-link></li>
    </ul>
  </nav>

  <router-view />
</template>


<style>
body {
  font-family: monospace;
  background-image: url("https://wallpaperaccess.com/full/1704619.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
nav {
  background-color: #0e0d0d04;
  height: 80px;
  width: 100%;
  
}
label.logo {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
nav ul {
  float: right;
  margin-right: 100px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  padding: 5px 10px;
}
nav ul li a.active,
nav ul li a:hover {
  background: #1b9bff;
  transition: 0.5s;
  border-radius: 5px;
}
.checkbtn {
  float: right;
  color: white;
  margin-right: 40px;
  display: none;
  cursor: pointer;
}
.checkbtn i {
  line-height: 80px;
  font-size: 25px;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body {
  font-family: monospace;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}
#navv{
    background-color: rgba(255, 228, 196, 0.603);
  margin-left: 0px;
  margin-top: 4px;
  border-radius: 5px;
  background: rgba(189, 17, 17, 0.61);
  box-shadow: 0 8px 32px 0 rgba(14, 2, 37, 0.705);
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
  border-radius: 10px;
  border: 1px solid rgba(15, 4, 44, 0.18);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
