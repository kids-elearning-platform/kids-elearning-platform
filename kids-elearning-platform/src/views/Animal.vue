<template>
  <div>
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
</template>
<script>
import lion from "../../public/sounds/Lion.mp3";
import duck from "../../public/sounds/Duck.mp3";
import elephant from "../../public/sounds/elephant.mp3";
import butterfly from "../../public/sounds/butterfly.mp3";
import owl from "../../public/sounds/Owl.mp3";
export default {
  name: "Animal",
  data() {
    return {
      sounds: [lion, duck, butterfly, owl, elephant],
      score: 0,
      index: 0,
      questions: [
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/xsGM5GDhcA4hVpe2eAlk4lhveviNslVhAh4QuRjgaSU/https/cdn3d.iconscout.com/3d/premium/thumb/cat-4065933-3364159%400.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/jwYsaKzPHQoa2TgI2llGqJDe-qOg6rJyQ28IAy3JLcs/https/cdn3d.iconscout.com/3d/premium/thumb/lion-4824495-4025212.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/9uMN9AoAMc3X3cl_Y3NM87RtVBj5OBXKjxqnOkDgCEI/https/cdn3d.iconscout.com/3d/premium/thumb/dog-4609634-3811488.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/M4TUmIn0TxFxZ1FU1t5URCjxgi_RJSIxD8kulleiOxY/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-4609622-3811476.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/JUPOOJcH_Z-OzD2Vctve3EkqGo_zbB0FOgcGJolc2Qo/https/cdn3d.iconscout.com/3d/premium/thumb/duck-3339546-2797138.png?width=433&height=433",
              correct: true,
            },
            {
              suggestion:
                "https://images-ext-2.discordapp.net/external/-giFAaxUjtXrS--WpYDf_ljVUD5ZbWd6klLT1_Q1qD0/https/cdni.iconscout.com/illustration/premium/thumb/baby-elephant-playing-with-ball-4278543-3550500.png?width=387&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/vvFGxvf8Fg5ez7qAV0K2mldxP2mQhTk_PnDqRCmAG0Y/https/cdn3d.iconscout.com/3d/premium/thumb/bee-4551745-3774537.png?width=433&height=433",
            },
          ],
        },
        {
          suggestions: [
            { suggestion:"https://images-ext-2.discordapp.net/external/1FTvVvSqhQ02LGjku9nXfSTy1GgEOT8OoMnCcBf48bM/https/cdn3d.iconscout.com/3d/premium/thumb/butterfly-4609618-3811472.png?width=433&height=433", correct: true },
            {
              suggestion:"https://images-ext-2.discordapp.net/external/WFNNdtg65qqYVjUwZUuk0hWFklsnaXCApnqPkmv2mTQ/https/cdn3d.iconscout.com/3d/premium/thumb/rabbit-3690191-3081431.png?width=433&height=433",
            },
            {
              suggestion:
                "https://images-ext-1.discordapp.net/external/RvjzU7I2-zeCuI8stzAh12XpIjefwuyX7qeworY7krw/https/cdn3d.iconscout.com/3d/premium/thumb/fox-4609630-3811484.png?width=433&height=433",
            },
            { suggestion: "https://images-ext-1.discordapp.net/external/wGnUvMvoHh18TGnVtrJ5pIFOt2XHeWTSTZluBicm3fo/https/cdn3d.iconscout.com/3d/premium/thumb/bird-4769077-3972350.png?width=433&height=433" },
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
