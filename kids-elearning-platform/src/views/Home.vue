<template>
<h1><HelloWorld/></h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
  },}
 
</script>

<style scoped>

#logoo{
  height:120px;
  width: 120px;
  margin-left: -1000px;
  margin-top: 00px;
}
#logo{
  margin-right: -500px;
}
</style>