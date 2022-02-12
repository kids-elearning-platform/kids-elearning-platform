<template>
  <div v-if="changeview === false ">
    <div id="box" >
      <div 
        id="question"
        @click="playSound(sounds[index])"
        class="titleContainer title"
      >
        🔊
      </div>
      <div>
        <div
          class="answer"
          v-for="(question, index) in questions[index].suggestions"
          v-bind="key"
          :key="index"
          @click="next(index)"
        >
          <img id="img" :src="question.suggestion" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="changeview === true">
    <div>
      <div id="box">
        {{this.test()}}
       
        <div class="parent">
         
       
          <div>
          <img id="img2" :src="this.photo"/>
          </div>
       
          <div>
          <h1 id='p'></h1>
          </div>
       
          <div>
          <img id="img1" src="https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433"/></div></div>
          </div>
      </div>
      <div>
        <button>Click here !</button>
      </div>
  </div> 
  
</template>
<script>
import number3 from "../../public/sounds/number3.mp3";
import number2 from "../../public/sounds/number2.mp3";
import number6 from "../../public/sounds/number6.mp3";
import number5 from "../../public/sounds/number5.mp3";

export default {
  name: "Number",
  data() {
    return {
      changeview: false,
      

      sounds: [number3, number2, number6, number5],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/eX-qTZT6N-secy7zNxRddwidFPnRhvCTlnBcBUlYCH0/https/cdn3d.iconscout.com/3d/premium/thumb/comma-sign-4863650-4056296.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/GqMHGoFPwPHrmi28WDpz54lrzjSe6Scsi8Toj-G3nz4/https/cdn3d.iconscout.com/3d/premium/thumb/seven-number-4863644-4056290.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/bqlYwU1oGL3swILLp2qBksk2Bj7Te2UmswRzMh_4Iog/https/cdn3d.iconscout.com/3d/premium/thumb/three-number-4863643-4056289.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/nAAd4aTBeDrdQk0ABw7HexXky5zyjmqDBl9Zl4TAZPA/https/cdn3d.iconscout.com/3d/premium/thumb/four-number-4863648-4056294.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/wIUkqZFwM5NPkjMsXiUnhIxMB6XYymLDIEtrzsOnSMM/https/cdn3d.iconscout.com/3d/premium/thumb/eight-number-4863641-4056287.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/clEANbX-G9V5Cuf4gzflcsUap43l7evK6Sae0t-xt50/https/cdn3d.iconscout.com/3d/premium/thumb/six-number-4863652-4056298.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/UOfr3p17NbEZh6u3KdxEh4MQtlstOcdHP8lO30cfPOE/https/cdn3d.iconscout.com/3d/premium/thumb/five-number-4863647-4056293.png?width=433&height=433",
            },
          ],
        },
        //🦍🐘🐊🦈🐓🦉🐧
      ],
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    sound() {
      var audio = new Audio(require("../../public/sounds/Lion.mp3"));
      audio.play();
    },
    notify() {
      alert("navigation was prevented."); // to test if functions are passed
    },
    next() {
      if (this.index < 2) {
        this.index++;
      }
    },
     test(){
      if(this.score===0){
        this.photo="https://images-ext-2.discordapp.net/external/KKhnER3qr6BJASM64Q5R1mWDuDA3dhL2Keo8cCiaxJY/https/cdn3d.iconscout.com/3d/premium/thumb/zero-number-4863645-4056291.png?width=432&height=432"
      }
     if(this.score===1){

       console.log('aaaaaaaaaaaaaaa');
       this.photo="https://images-ext-2.discordapp.net/external/6gjcxtvNyvEzUE_q3GkZL6JJG2uvcID3O5HYR0HNeTI/https/cdn3d.iconscout.com/3d/premium/thumb/1-number-4863653-4056299.png?width=432&height=432"
     }if(this.score===2){

       console.log('aaaaaaaaaaaaaaa');
       this.photo="https://images-ext-2.discordapp.net/external/ARbyf1ozzv81gNLPyZpjCif2h9CEQKW5IFItT4jxywI/https/cdn3d.iconscout.com/3d/premium/thumb/two-number-4863651-4056297.png?width=433&height=433"
     }
    },
    userresponse(e) {
      console.log(this.index, "length");
      console.log(this.response, "response");
      if (e) {
        this.score = this.score + 1;
        console.log(this.score, "hani lena");
      }
    },
    scores: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.questions[i].responses[this.userResponses[i]] !==
            "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
};
</script>
<style scoped>
#img1{
  margin-left:-600px;
  margin-top: 90px;
  width: 250px;
  height: 250px;
}
#img2{
  width: 200px;
  height: 200px;
  margin-right: -600px ;
  margin-top: -130px;
  
}

#img {
  width: 250px;
  height: 250px;
}
#question {
  font-size: 3cm;
  cursor: pointer;
}
.answer {
  display: inline;
  font-size: 5cm;
  padding-left: 0cm;
  padding-right: 5cm;
  margin-left: 4cm;
  cursor: pointer;
}
#box {
  height: 700px;
  width: 1500px;
  background-color: rgba(255, 228, 196, 0.603);
  margin-left: 200px;
  margin-top: 40px;
  border-radius: 5px;
  background: rgba(5, 5, 5, 0.61);
  box-shadow: 0 8px 32px 0 rgba(14, 2, 37, 0.705);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(15, 4, 44, 0.18);
}
.score {
  
  color: white;
  font-size: 40px;
}
#p{
  width:10px; 
  height:200px;
  background-color: white;
  transform: rotate(18deg);
  margin-left: 240px;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 3fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
margin-top: 300px;
}
</style>
