<template>
  <div>
    
    <div id="rend">
      <div v-if="page===0">
      <div >
        <h1 id="start" onclick="clicked">Challenges</h1>
      </div>
      
        <img @click="changepage" id="arrow" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""> <img id="arrowback" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="">
     
      <div >
        <img id="game" src="https://i0.wp.com/4hdwall.com/wp-content/uploads/2017/12/Wallpapers-of-cartoons-kids.jpg" alt="">
      </div>
      
      <div>
        <img id="gamee" src="https://i0.wp.com/4hdwall.com/wp-content/uploads/2017/12/Wallpapers-of-cartoons-kids.jpg" alt="">
      
      </div>
      
      <div @click="changeview" v-if="ball===true">
        <img id="ball" @click="dec"  src="https://th.bing.com/th/id/R.a7dadf9e012cf71288a84896621e3695?rik=xOMLyuREEhiSNA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn1654666.png&ehk=8cRq%2bRf0m1W6zVX%2fEbZeWV3aBHIJMlZ24BVcMBJ2OmQ%3d&risl=&pid=ImgRaw&r=0" alt="">
      </div>
      <div @click="changeview" v-if="ball===false">
        <img id="ball"  src="https://images-ext-1.discordapp.net/external/Tz6xk-4mnyGV454sZjRtCnLosRWff43ODF2RFP8Wf90/https/cdn3d.iconscout.com/3d/premium/thumb/check-4112732-3408773%400.png" alt="">
      </div>
      
      <div @click="changeviewplane" v-if="plane===true">
        <img id="plane" @click="dec"  onclick="clicked" src="https://th.bing.com/th/id/R.8e179ce220fc7bc665ee5a52b805fff0?rik=m2rxjuKqYPlOEw&riu=http%3a%2f%2fclipartmag.com%2fimages%2fairplane-cartoon-png-31.png&ehk=UznDZgGbjn%2bowoNK4e09WJPEkCrdyNCVHqy90CU2log%3d&risl=&pid=ImgRaw&r=0" alt="">
      </div>
      <div @click="changeview" v-if="plane===false">
        <img id="plane"   onclick="clicked" src="https://images-ext-1.discordapp.net/external/Tz6xk-4mnyGV454sZjRtCnLosRWff43ODF2RFP8Wf90/https/cdn3d.iconscout.com/3d/premium/thumb/check-4112732-3408773%400.png" alt="">
      </div>
     
      <div  @click="changeviewfish" v-if="fish===true">
        <img id="fish" @click="dec"  onclick="clicked" src="https://th.bing.com/th/id/R.3512473630c9a3720fff5307436d8ab7?rik=WoyHRCXKBvhImA&riu=http%3a%2f%2fwww.freepngclipart.com%2fdownload%2ffish%2f83626-cute-fish-vector-marine-cartoon-png-download-free.png&ehk=5eFMnn%2f%2bueenj4AHTrW5UEMnZpWQjfpsaDgMffYyP%2fU%3d&risl=&pid=ImgRaw&r=0" alt="">
      </div>
      <div  @click="changeviewfish" v-if="fish===false">
        <img id="fish"   onclick="clicked" src="https://images-ext-1.discordapp.net/external/Tz6xk-4mnyGV454sZjRtCnLosRWff43ODF2RFP8Wf90/https/cdn3d.iconscout.com/3d/premium/thumb/check-4112732-3408773%400.png" alt="">
      </div>
      
     
      <div  @click="changeviewbee" v-if="bee===true">
        <img id="bee" @click="dec"  onclick="clicked" src="https://www.stickers-factory.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/2/1/21673_00.png" alt="">
      </div>
      <div  @click="changeviewbee" v-if="bee===false">
        <img id="bee"   onclick="clicked" src="https://images-ext-1.discordapp.net/external/Tz6xk-4mnyGV454sZjRtCnLosRWff43ODF2RFP8Wf90/https/cdn3d.iconscout.com/3d/premium/thumb/check-4112732-3408773%400.png" alt="">
      </div>
      
    
      <div  @click="changeviewtweet" v-if="tweet===true">
        <img id="tweet" @click="dec"  onclick="clicked" src="https://pngimg.com/uploads/twitter/twitter_PNG37.png" alt="">
      </div>
      <div  @click="changeviewtweet" v-if="tweet===false">
        <img id="tweet"   onclick="clicked" src="https://images-ext-1.discordapp.net/external/Tz6xk-4mnyGV454sZjRtCnLosRWff43ODF2RFP8Wf90/https/cdn3d.iconscout.com/3d/premium/thumb/check-4112732-3408773%400.png" alt="">
      </div>
      
      <div id="diff">
       <h1> MISSED: {{this.count}}</h1>

     </div>
     
     </div>
     <div v-if="page==1">
               <img @click="changepage" id="arrow" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""> <img id="arrowback" @click="previouspage" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="">

     <div  >
       <h1 id="blue">Blue</h1>
       <h1 id="yellow">Yellow</h1>
       <h1 id="red">red</h1>
       <h1 id="green">green</h1>

      </div>
     </div>
      

    </div>

     
    
    
  </div>
  
  

  
</template>

<script>
export default {
  name: "Challenge",
  data(){
    return{
      page:0,
      count:5,
      ball:true,
      plane:true,
      fish:true,
      tweet:true,
      bee:true
    }
  },
  methods: {
    dec(){
      if(this.count>0 ){
        this.count-=1
      }
    },
    changeview(){
      if(this.ball){
        this.ball=!this.ball
        console.log(this.ball)

      }
    },
    changeviewplane(){
      if(this.plane){
        this.plane=!this.plane
        console.log(this.plane)

      }
    
  },
  changeviewbee(){
      if(this.bee){
        this.bee=!this.bee
        console.log(this.bee)

      }
    
  },
  changeviewtweet(){
      if(this.tweet){
        this.tweet=!this.tweet
        console.log(this.tweet)

      }
    
  },
  changeviewfish(){
      if(this.fish){
        this.fish=!this.fish
        console.log(this.fish)

      }
    
  },
  changepage(){
    if(this.count==0)
    this.page++
  },
  previouspage(){
    this.page--
  }
  
}
}
</script>

<style>
#start{
  color: aliceblue;
   animation: shine 2s forwards, blink 3s 2s infinite;
   color: rgba(15, 17, 20, 0.75); font-family: 'Droid serif', serif; font-size: 36px; font-weight:bolder; font-style:normal; line-height: 44px; margin: 0 0 12px; text-align: center;
  
}
#rend{
  height: 700px;
  width: 1500px;
  background-color: rgba(0, 0, 0, 0.603);
  margin-left: 200px;
  margin-top: 40px;
  border-radius: 5px;
  background: rgba(241, 241, 239, 0.644);
  box-shadow: 0 8px 32px 0 rgba(14, 2, 37, 0.705);
  backdrop-filter: blur( 4.5px );
  -webkit-backdrop-filter: blur( 4.5px );
  border-radius: 10px;
  border: 1px solid rgba(15, 4, 44, 0.18);
}
#arrow{
  height: 100px;
  margin-right: -1100px;
  margin-top: 220px ;
  padding: 0px;
}
#arrowback{
  height: 100px;
  margin-left: -300px;
  margin-top: -420px ;
    -webkit-transform: scaleX(-1);
  transform: scaleX(-1);


}
#game{
  height: 450px;
  width: 450px;
  margin-top: -270px;
  margin-left: -500px;
}
#gamee{
   height: 450px;
  width: 450px;
  margin-top: -520px;
  margin-left: 500px;
  margin-bottom: 18px;

}
#ball{
  width: 50px;
  height: 50px;
  margin-top: -800px;
  margin-bottom: 250px;
  margin-left: 850px;
}
#plane{
  width: 40px;
  height: 20px;
  margin-top: -800px;
  margin-bottom: 470px;
  margin-left: 400px;
  

}
#fish{
width: 40px;
height: 40px;
margin-top: -1400px;
margin-bottom: 230px;
margin-left: 130px;
  
}
#bee{
  width: 60px;
height: 60px;
margin-top: -1800px;
margin-bottom: 300px ;
margin-left: 450px;
  
}
#tweet{
   width: 20px;
height: 20px;
margin-top: -1200px;
margin-bottom: 480px ;
margin-left: 150px;
}
#diff{
  margin-top: -40px;
  background: rgba(135, 243, 11, 0.863);
  padding: 20px;
  border-radius: 5px;
}

#blue{
  height: 300px;
  width: 300px;
  color: blueviolet;
  /* background-color: #e22525; */
  margin-left: 400px;
  border-radius: 5px;
  font-size: x-large;
}
#green{
  height: 300px;
  width: 300px;
  color: rgb(0, 2, 122);
  /* background-color: #e22525; */
  /* margin-left: 400px; */
  border-radius: 5px;
  font-size: x-large;
  margin-top: -500px;
  margin-left: 700px;
}

#yellow{
  height: 300px;
  width: 300px;
  color: rgb(11, 241, 11);
  /* background-color: #e22525; */
  margin-left: 400px;
  border-radius: 5px;
  font-size: x-large;
  margin-top: -500px;
}

#red{
  height: 300px;
  width: 300px;
  color: rgb(255, 0, 0);
  /* background-color: #e22525; */
  margin-left: 700px;
  border-radius: 5px;
  font-size: x-large;
  margin-top: -100px;
}







</style>