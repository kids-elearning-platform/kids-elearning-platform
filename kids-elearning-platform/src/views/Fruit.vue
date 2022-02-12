<template>
  <div v-if="changeview === false">
    <div id="box">
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
import strawberry from "../../public/sounds/strawberry.mp3";
import oranges from "../../public/sounds/oranges.mp3";
import carrots from "../../public/sounds/carrots.mp3";

export default {
  name: "Fruit",
  data() {
    return {
      changeview: false,
      sounds: [strawberry, oranges, carrots],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/4Vtrb00emv36Lqn9xYhCIygWKVgRCtd9mBd8E0uh3_w/https/cdn3d.iconscout.com/3d/premium/thumb/strawberry-fruit-4907445-4086697.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/qnadkzzRVIKzlB-KV2YN_qaTmFzwMknDVopgQx6sufw/https/cdn3d.iconscout.com/3d/premium/thumb/red-apple-fruit-4907442-4086694.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/Y6rvyq2LVqmSyvs5TtppIQ8isnypLqtdtvqGcG-dLHo/https/cdn3d.iconscout.com/3d/premium/thumb/orange-fruit-4907443-4086695.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/775u_odNPy94pouAsTzio9pj6CnuMJEXTSDoYP4ydOQ/https/cdn3d.iconscout.com/3d/premium/thumb/pineapple-fruit-4907440-4086699.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/sfZdn-krNN8F381L3PD-OjwiqH-6PKls2llYdcalqjg/https/cdn3d.iconscout.com/3d/premium/thumb/kiwi-fruit-4907444-4086696.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/Y6rvyq2LVqmSyvs5TtppIQ8isnypLqtdtvqGcG-dLHo/https/cdn3d.iconscout.com/3d/premium/thumb/orange-fruit-4907443-4086695.png?width=432&height=432",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/IOUwtq--9RbGdzDp5vb1I4nos0ZL-r0OIQ_zHuSeZNw/https/cdn3d.iconscout.com/3d/premium/thumb/avocado-fruit-4907439-4086698.png?width=432&height=432",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/Jf3rLP8go52vLi04P-krAQojIDqv4WZ8hVShg9NZafs/https/cdn3d.iconscout.com/3d/premium/thumb/avocado-4452964-3688405.png?width=432&height=432",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/MG7QFP--sHmxL59KJ6TlkFVIYBoofOXPUxMqiBy08hw/https/cdn3d.iconscout.com/3d/premium/thumb/cherry-4382461-3640386.png?width=432&height=432",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/9TCQSFtT6Vc78t9PYrByCyGDvEgFtidKDf7hiBBzf4c/https/cdn3d.iconscout.com/3d/premium/thumb/green-grape-4452958-3688399.png?width=432&height=432",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/5PbqW4HEfOlIhW1Xe-c5SqbcBaGOCJuWSea7q0lJed4/https/cdn3d.iconscout.com/3d/premium/thumb/lemon-4452962-3688403.png?width=432&height=432",
            },
            { suggestion: "https://images-ext-1.discordapp.net/external/pGG-y71ADZTcFHCd-C9m7tY5-VaKC5XyYJ84TjxqKx0/https/cdn3d.iconscout.com/3d/premium/thumb/carrot-4452973-3688414.png?width=432&height=432"},
          ],
        },
        //🦍🐘🐊🦈🐓🦉🐧
      ],
    };
  },
  methods: {
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
</style>
