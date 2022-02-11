<template>
  <div>
    <div id="box">
      <div  @click="playSound(sounds[index])" class="titleContainer title">
        <img id="question" src="https://images-ext-2.discordapp.net/external/PoZU3jOHMn73f-gr_mB5-zefsxjS5DTS7JyKqRw0zQI/https/cdn3d.iconscout.com/3d/premium/thumb/microphone-3711800-3105274.png?width=433&height=433" />
      </div>
<div>
    <div class="answer" v-for="(question,index) in questions[index].suggestions" v-bind="key" :key="index" @click="next(index)">
     
     <img :src="question.suggestion" alt=""/> 
    </div>
  </div> 
    </div>
  </div>
</template>
<script>
import lion from "../../public/sounds/Lion.mp3";
import duck from "../../public/sounds/Duck.mp3";
import elephant from "../../public/sounds/elephant.mp3";
import butterfly from "../../public/sounds/butterfly.mp3";
import owl from "../../public/sounds/Owl.mp3";
export default {
  name: "Color",
  data() {
    
    return {
      sounds: [lion, duck, butterfly, owl, elephant],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            { suggestion: 'https://images-ext-2.discordapp.net/external/Lwv9yAZJObAzdxaXB1_fDeZ2ZK-gvSwqTvilK5IViV8/https/cdn3d.iconscout.com/3d/premium/thumb/color-bucket-3981966-3297109%400.png?width=433&height=433' },
            { suggestion: "🦁", correct: true },
            { suggestion: "🐜" },
            { suggestion: "🐞" },
          ],
        },
        {
          suggestions: [
            { suggestion: "🐭" },
            { suggestion: "🦆", correct: true },
            { suggestion: "🐴" },
            { suggestion: "🐳" },
          ],
        },
        {
          suggestions: [
            { suggestion: "🦋", correct: true },
            { suggestion: "🐒" },
            { suggestion: "🐪" },
            { suggestion: "🐷" },
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
        this.index++
        
        }
 
  }, scores: function() {
         var score = 0;
         for (let i = 0; i < this.userResponses.length; i++) {
            if (
               typeof this.questions[i].responses[
                  this.userResponses[i]
               ] !== "undefined" &&
               this.quiz.questions[i].responses[this.userResponses[i]].correct
            ) {
               score = score + 1;
            }
         }
         return score;

         //return this.userResponses.filter(function(val) { return val }).length;
      }
   }
}
</script>
<style scoped>
#question{
  height: 150px;
  width: 150px;
font-size: 3cm;
cursor: pointer;
}
.answer{
  display: inline;
;
font-size: 5cm;
padding-left: 0cm;
padding-right: 5cm;
margin-left: 4cm;
cursor: pointer;


}
#box{
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
</style>











