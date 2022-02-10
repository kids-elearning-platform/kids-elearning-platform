<template>
  <div>
    
    <div id="rend">
      <div >
        <h1 id="start" onclick="clicked">Challenges</h1>
      </div>
      
        <img onclick="clicked" id="arrow" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt=""> <img id="arrowback" src="https://th.bing.com/th/id/R.33a1b7205342d728d9b5a70ed5e57308?rik=6R5w8cdKAe9dkQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fL%2fY%2fI%2fS%2fg%2fX%2fyellow-arrow-hi.png&ehk=HPyW0k%2bse2bHTrBdOcz3NrxElY%2f6xg65rCG%2baCtcwyY%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="">
      
      
         
      


    </div>
    
    
  </div>
  

  
</template>

<script>
export default {
  name: "Challenge",
}
</script>

<style>
#start{
  color: aliceblue;
   animation: shine 2s forwards, blink 3s 2s infinite;
   color: #93a8e2; font-family: 'Droid serif', serif; font-size: 36px; font-weight: 400; font-style: italic; line-height: 44px; margin: 0 0 12px; text-align: center;
  
}
#rend{
  height: 700px;
  width: 1500px;
  background-color: rgba(255, 228, 196, 0.603);
  margin-left: 200px;
  margin-top: 40px;
  border-radius: 5px;
  background: rgba(5, 5, 5, 0.61);
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




</style>