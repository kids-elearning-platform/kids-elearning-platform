<template>
  <div class="home">
    <img id='logoo'
      alt="Vue logo"
      src="https://slack-imgs.com/?c=1&o1=ro.gu&url=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.68e1ad1a678ad930bf5fd86ae0b7136c%3Frik%3DW2Wapzga6Q34Yw%26pid%3DImgRaw%26r%3D0"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>

#logoo{
  height:300px;
  width: 300px;
}
</style>