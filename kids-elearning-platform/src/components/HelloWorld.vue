<template>
 
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
Button {
  text-align: center;
  height: 50px;
  width: 150px;
  color: rgb(255, 255, 255);
  background-color: #1b9bff;
  border-radius: 40%;
  background: #1b9bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: inherit;
}
#img-top {
  /* height: 400px;
  width: 400px;
  max-width: 200px;
  border-radius: 100%;
  margin-left: 20%;
  box-shadow: 0 8px 20px -4px #95abbb;
  width: 100px;
  height: 100px; */
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-top: -200px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.all {
  display: grid;
  align-content: center;
  float: left;
  /* grid-auto-columns: auto auto auto auto;
  grid-auto-rows: auto;
    <div id="wrapperDiv">
<div id="div1" style="padding:20px;background-color:#decddd;float:left">Div tag 1</div>
<div id="div2" style="padding:20px;background-color:#cedddd;float:left">Div tag 2</div>
</div>
    */
}
</style>
